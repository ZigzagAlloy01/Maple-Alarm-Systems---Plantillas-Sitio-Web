const FEATURED_CODES = [
                    "IPC-T240HA-LUC",
                    "DS-2CD1343G2-LIUF/BLACK",
                    "DS-2CD1343G2-LIUF",
                    "IPC-T260HAD-LUF/SL",
                    "DS-2CD1363G2-LIU(F)",
                    "DS-2CD1383G2-LIU(F)",
                    "IPC-T280HAD-LUF/SL",
                    "IPC-T220HA-LUC",
                    "DS-2DE2C400MWG-E",
                    "DS-2DE2C400MWG-4G"
                ];

                class MapleFeaturedProducts {
                    /**
                     * @param {HTMLElement} container - The root element for the carousel.
                     */
                    constructor(container) {
                        if (!container) throw new Error("Container is required for MapleFeaturedProducts");
                        
                        // DOM Elements
                        this.dom = {
                            root: container,
                            track: null,
                            prevBtn: null,
                            nextBtn: null,
                            slides: []
                        };

                        // State variables
                        this.state = {
                            products: [],
                            currentIndex: 0,
                            visibleCards: 1,
                            cardWidth: 0,
                            gap: 16, // Default gap
                            isDragging: false,
                            startX: 0,
                            currentX: 0,
                            dragOffset: 0,
                            isTransitioning: false,
                            autoplayTimer: null,
                            isPaused: false,
                            reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
                        };

                        // Observers and Controllers
                        this.abortController = null;
                        this.resizeObserver = null;
                        this.intersectionObserver = null;
                        this.mutationObserver = null;

                        // Configuration
                        this.config = {
                            autoplayInterval: 5000,
                            transitionDuration: 300,
                            snapThreshold: 50, // Minimum drag distance to trigger slide change
                            dragFriction: 0.85
                        };

                        // Bindings for event listeners
                        this._handleDragStart = this._handleDragStart.bind(this);
                        this._handleDragMove = this._handleDragMove.bind(this);
                        this._handleDragEnd = this._handleDragEnd.bind(this);
                        this._handleTransitionEnd = this._handleTransitionEnd.bind(this);
                    }

                    /**
                     * Initializes the carousel instance.
                     */
                    async init() {
                        this.cacheDOM();
                        this.setupObservers();
                        
                        const success = await this.loadProducts();
                        if (success) {
                            this.bindEvents();
                            this.update();
                            this.startAutoplay();
                        }
                    }

                    /**
                     * Caches required DOM elements to minimize DOM queries.
                     */
                    cacheDOM() {
                        // Ensure inner wrappers exist, create if not present via predefined HTML structure expectation
                        this.dom.track = this.dom.root.querySelector('.maple-carousel-track');
                        if (!this.dom.track) {
                            this.dom.track = document.createElement('div');
                            this.dom.track.classList.add('maple-carousel-track');
                            this.dom.root.append(this.dom.track);
                        }

                        this.dom.prevBtn = this.dom.root.querySelector('.maple-carousel-prev') || this.createNavigationButton('prev');
                        this.dom.nextBtn = this.dom.root.querySelector('.maple-carousel-next') || this.createNavigationButton('next');
                    }

                    /**
                     * Helper to create navigation buttons if not in DOM.
                     * @param {string} direction - 'prev' or 'next'
                     * @returns {HTMLButtonElement}
                     */
                    createNavigationButton(direction) {
                        const btn = document.createElement('button');
                        btn.classList.add(`maple-carousel-${direction}`, 'maple-carousel-nav');
                        btn.setAttribute('aria-label', direction === 'prev' ? 'Previous products' : 'Next products');
                        btn.type = 'button';
                        this.dom.root.append(btn);
                        return btn;
                    }

                    /**
                     * Binds all necessary event listeners.
                     */
                    bindEvents() {
                        if (this.dom.prevBtn) {
                            this.dom.prevBtn.addEventListener('click', () =&gt; this.prev());
                        }
                        if (this.dom.nextBtn) {
                            this.dom.nextBtn.addEventListener('click', () =&gt; this.next());
                        }

                        this.dom.track.addEventListener('transitionend', this._handleTransitionEnd);

                        this.setupMouseDrag();
                        this.setupTouch();
                        this.setupKeyboard();
                        this.setupWheel();

                        // Hover pause
                        this.dom.root.addEventListener('mouseenter', () =&gt; this.pause(), { passive: true });
                        this.dom.root.addEventListener('mouseleave', () =&gt; this.resume(), { passive: true });
                        
                        // Visibility API
                        document.addEventListener('visibilitychange', () =&gt; {
                            if (document.hidden) this.pause();
                            else this.resume();
                        });
                    }
                    
                    async loadProducts() {
                        try {
                            const rawProducts = await this.fetchProducts();
                            if (!rawProducts || rawProducts.length === 0) return false;

                            this.state.products = rawProducts
                                .map(p =&gt; this.normalizeProduct(p))
                                // Order according to the FEATURED_CODES array
                                .sort((a, b) =&gt; FEATURED_CODES.indexOf(a.default_code) - FEATURED_CODES.indexOf(b.default_code));

                            this.renderProducts();
                            return true;
                        } catch (error) {
                            console.error('[MapleFeaturedProducts] Error loading products:', error);
                            return false;
                        }
                    }

                    async fetchProducts() {
                        if (this.abortController) {
                            this.abortController.abort();
                        }
                        this.abortController = new AbortController();

                        const payload = {
                            jsonrpc: "2.0",
                            method: "call",
                            params: {
                                model: "product.template",
                                method: "search_read",
                                args: [[
                                    ["default_code", "in", FEATURED_CODES],
                                    ["website_published", "=", true]
                                ]],
                                kwargs: {
                                    fields: [
                                        "id", "name", "default_code", "website_url", 
                                        "description_sale", "list_price", "currency_id", 
                                        "image_512", "brand"
                                    ],
                                    context: { bin_size: true }
                                }
                            }
                        };

                        const response = await fetch('/web/dataset/call_kw/product.template/search_read', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            },
                            body: JSON.stringify(payload),
                            signal: this.abortController.signal
                        });

                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }

                        const data = await response.json();
                        
                        if (data.error) {
                            throw new Error(`Odoo RPC Error: ${data.error.message}`);
                        }

                        return data.result || [];
                    }

                    /**
                     * Normalizes the Odoo product object into a standardized format.
                     * @param {Object} rawData 
                     * @returns {Object}
                     */
                    normalizeProduct(rawData) {
                        return {
                            id: rawData.id,
                            name: rawData.name || 'Product',
                            code: rawData.default_code || '',
                            url: rawData.website_url || `/shop/product/${rawData.id}`,
                            description: rawData.description_sale || '',
                            price: rawData.list_price || 0,
                            currency: Array.isArray(rawData.currency_id) ? rawData.currency_id[1] : (rawData.currency_id || '$'),
                            currencyId: Array.isArray(rawData.currency_id) ? rawData.currency_id[0] : null,
                            image: rawData.image_512 ? true : false, 
                            brand: Array.isArray(rawData.brand) ? rawData.brand[1] : rawData.brand
                        };
                    }

                    /**
                     * Orchestrates DOM construction for all product cards.
                     */
                    renderProducts() {
                        const fragment = document.createDocumentFragment();
                        
                        this.state.products.forEach(product =&gt; {
                            const card = this.createCard(product);
                            fragment.append(card);
                        });

                        this.dom.track.replaceChildren(fragment);
                        this.cloneSlides();
                        this.dom.slides = Array.from(this.dom.track.children);
                        
                        // Initial setup for sizing
                        this.handleResize();
                        this.state.currentIndex = this.state.visibleCards; // Start at the first real slide
                        this.scrollTo(this.state.currentIndex, false);
                    }

                    /**
                     * Creates the main DOM element for a product card.
                     * @param {Object} product 
                     * @returns {HTMLElement}
                     */
                    createCard(product) {
                        const article = document.createElement('article');
                        article.classList.add('maple-product-card');
                        article.dataset.productId = product.id;
                        article.tabIndex = 0;
                        article.setAttribute('aria-label', product.name);

                        const link = document.createElement('a');
                        link.classList.add('maple-product-link');
                        link.href = product.url;

                        link.append(
                            this.createImage(product),
                            this.createTitle(product),
                            this.createDescription(product),
                            this.createPrice(product)
                        );

                        article.append(link, this.createButtons(product));
                        return article;
                    }

                    /**
                     * Creates the image element.
                     * @param {Object} product 
                     * @returns {HTMLElement}
                     */
                    createImage(product) {
                        const wrapper = document.createElement('div');
                        wrapper.classList.add('maple-product-image-wrapper');

                        const img = document.createElement('img');
                        img.classList.add('maple-product-image');
                        img.src = this.getImageUrl(product);
                        img.alt = product.name;
                        img.loading = 'lazy';
                        img.decoding = 'async';
                        
                        // Fallback for broken images
                        img.addEventListener('error', () =&gt; {
                            img.src = '/web/static/img/placeholder.png';
                        });

                        wrapper.append(img);
                        return wrapper;
                    }

                    /**
                     * Creates the title element.
                     * @param {Object} product 
                     * @returns {HTMLElement}
                     */
                    createTitle(product) {
                        const title = document.createElement('h3');
                        title.classList.add('maple-product-title');
                        title.textContent = product.name;
                        return title;
                    }

                    /**
                     * Creates the description element.
                     * @param {Object} product 
                     * @returns {HTMLElement}
                     */
                    createDescription(product) {
                        const desc = document.createElement('p');
                        desc.classList.add('maple-product-description');
                        desc.textContent = product.description.substring(0, 80) + (product.description.length &gt; 80 ? '...' : '');
                        return desc;
                    }

                    /**
                     * Creates the price element.
                     * @param {Object} product 
                     * @returns {HTMLElement}
                     */
                    createPrice(product) {
                        const priceWrapper = document.createElement('div');
                        priceWrapper.classList.add('maple-product-price');
                        priceWrapper.textContent = this.formatPrice(product.price, product.currencyId || product.currency);
                        return priceWrapper;
                    }

                    /**
                     * Creates interaction buttons (e.g., Add to Cart).
                     * @param {Object} product 
                     * @returns {HTMLElement}
                     */
                    createButtons(product) {
                        const wrapper = document.createElement('div');
                        wrapper.classList.add('maple-product-actions');

                        const addBtn = document.createElement('button');
                        addBtn.type = 'button';
                        addBtn.classList.add('maple-btn-add');
                        addBtn.setAttribute('aria-label', `Add ${product.name} to cart`);
                        addBtn.textContent = 'Add to Cart';
                        
                        // Odoo standard add to cart form implementation can be attached here
                        addBtn.addEventListener('click', (e) =&gt; {
                            e.preventDefault();
                            e.stopPropagation();
                            // Fire custom event for Odoo's website_sale module to hook into
                            const event = new CustomEvent('maple:add_to_cart', { detail: { productId: product.id }});
                            document.dispatchEvent(event);
                        });

                        wrapper.append(addBtn);
                        return wrapper;
                    }

                    /**
                     * Formats raw price into localized string.
                     * @param {number} price 
                     * @param {string|number} currency 
                     * @returns {string}
                     */
                    formatPrice(price, currency) {
                        // Fallback simple formatter if Odoo's session context isn't readily available
                        const formatter = new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: typeof currency === 'string' &amp;&amp; currency.length === 3 ? currency : 'USD'
                        });
                        return formatter.format(price);
                    }

                    /**
                     * Generates Odoo image route.
                     * @param {Object} product 
                     * @returns {string}
                     */
                    getImageUrl(product) {
                        if (product.image) {
                            return `/web/image/product.template/${product.id}/image_512`;
                        }
                        return '/web/static/img/placeholder.png';
                    }

                    /**
                     * Navigates to the next slide.
                     */
                    next() {
                        if (this.state.isTransitioning) return;
                        this.goTo(this.state.currentIndex + 1);
                    }

                    /**
                     * Navigates to the previous slide.
                     */
                    prev() {
                        if (this.state.isTransitioning) return;
                        this.goTo(this.state.currentIndex - 1);
                    }

                    /**
                     * Jumps to a specific index.
                     * @param {number} index 
                     */
                    goTo(index) {
                        this.state.currentIndex = index;
                        this.scrollTo(this.state.currentIndex, !this.state.reducedMotion);
                    }

                    /**
                     * Translates the track to show the correct slide.
                     * @param {number} index 
                     * @param {boolean} smooth - Whether to animate the transition.
                     */
                    scrollTo(index, smooth = true) {
                        const offset = -(index * (this.state.cardWidth + this.state.gap));
                        
                        if (smooth) {
                            this.state.isTransitioning = true;
                            this.dom.track.style.transition = `transform ${this.config.transitionDuration}ms ease-out`;
                        } else {
                            this.dom.track.style.transition = 'none';
                        }

                        requestAnimationFrame(() =&gt; {
                            this.dom.track.style.transform = `translate3d(${offset}px, 0, 0)`;
                        });
                    }

                    /**
                     * Updates internal calculations for dimensions.
                     */
                    update() {
                        this.calculateVisibleCards();
                        this.calculateGap();
                        this.calculateCardWidth();
                        this.dom.slides.forEach(slide =&gt; {
                            slide.style.width = `${this.state.cardWidth}px`;
                            slide.style.marginRight = `${this.state.gap}px`;
                        });
                    }

                    /**
                    * Calculates how many cards should be visible based on container width.
                    */
                    calculateVisibleCards() {
                        const width = this.dom.root.clientWidth;
                        if (width &gt;= 1200) this.state.visibleCards = 4;
                        else if (width &gt;= 992) this.state.visibleCards = 3;
                        else if (width &gt;= 576) this.state.visibleCards = 2;
                        else this.state.visibleCards = 1;
                    }

                    /**
                    * Extracts gap from computed CSS or uses default.
                    */
                    calculateGap() {
                        const style = window.getComputedStyle(this.dom.track);
                        this.state.gap = parseFloat(style.columnGap) || 16;
                    }

                    /**
                    * Calculates precise card width based on available space and gap.
                    */
                    calculateCardWidth() {
                        const totalGapSpace = this.state.gap * (this.state.visibleCards - 1);
                        const availableWidth = this.dom.root.clientWidth - totalGapSpace;
                        this.state.cardWidth = availableWidth / this.state.visibleCards;
                    }

                    /**
                    * Calculates total logical pages.
                    * @returns {number}
                    */
                    calculatePages() {
                        return Math.ceil(this.state.products.length / this.state.visibleCards);
                    }

                    /**
                    * Handles window/container resizing efficiently.
                    */
                    handleResize() {
                        const prevVisible = this.state.visibleCards;
                        this.update();
                        
                        // Adjust index if visible cards changed to avoid jumping into clone dead-zones
                        if (prevVisible !== this.state.visibleCards) {
                            this.scrollTo(this.state.currentIndex, false);
                        } else {
                            // Force layout recalculation without transition
                            this.scrollTo(this.state.currentIndex, false);
                        }
                    }

                    /**
                    * Handles the end of a CSS transition for infinite looping.
                    */
                    _handleTransitionEnd() {
                        this.state.isTransitioning = false;
                        
                        const totalReal = this.state.products.length;
                        const totalClonedFront = this.state.visibleCards;
                        
                        // If moved into cloned elements at the end
                        if (this.state.currentIndex &gt;= totalReal + totalClonedFront) {
                            this.state.currentIndex = this.state.currentIndex - totalReal;
                            this.scrollTo(this.state.currentIndex, false);
                        }
                        // If moved into cloned elements at the beginning
                        else if (this.state.currentIndex &lt; totalClonedFront) {
                            this.state.currentIndex = this.state.currentIndex + totalReal;
                            this.scrollTo(this.state.currentIndex, false);
                        }
                    }

                    /**
                    * Starts the autoplay interval.
                    */
                    startAutoplay() {
                        if (this.state.reducedMotion) return;
                        this.stopAutoplay();
                        this.state.autoplayTimer = setInterval(() =&gt; {
                            if (!this.state.isPaused &amp;&amp; !this.state.isDragging) {
                                this.next();
                            }
                        }, this.config.autoplayInterval);
                    }

                    /**
                    * Clears the autoplay interval.
                    */
                    stopAutoplay() {
                        if (this.state.autoplayTimer) {
                            clearInterval(this.state.autoplayTimer);
                            this.state.autoplayTimer = null;
                        }
                    }

                    /**
                    * Pauses autoplay (e.g., on hover or hidden visibility).
                    */
                    pause() {
                        this.state.isPaused = true;
                    }

                    /**
                    * Resumes autoplay.
                    */
                    resume() {
                        this.state.isPaused = false;
                    }

                    /**
                    * Centralized setup for observers.
                    */
                    setupObservers() {
                        this.setupResizeObserver();
                        this.setupIntersectionObserver();
                        this.setupMutationObserver();
                    }

                    /**
                    * Observes container resize events to calculate responsiveness.
                    */
                    setupResizeObserver() {
                        this.resizeObserver = new ResizeObserver((entries) =&gt; {
                            requestAnimationFrame(() =&gt; {
                                if (entries.length &gt; 0) this.handleResize();
                            });
                        });
                        this.resizeObserver.observe(this.dom.root);
                    }

                    /**
                    * Observes visibility to pause/resume rendering/autoplay.
                    */
                    setupIntersectionObserver() {
                        this.intersectionObserver = new IntersectionObserver((entries) =&gt; {
                            entries.forEach(entry =&gt; {
                                if (entry.isIntersecting) {
                                    this.resume();
                                } else {
                                    this.pause();
                                }
                            });
                        }, { threshold: 0.1 });
                        this.intersectionObserver.observe(this.dom.root);
                    }

                    /**
                    * Observes removal from DOM to clean up memory.
                    */
                    setupMutationObserver() {
                        this.mutationObserver = new MutationObserver((mutations) =&gt; {
                            mutations.forEach(mutation =&gt; {
                                mutation.removedNodes.forEach(node =&gt; {
                                    if (node === this.dom.root) {
                                        this.destroy();
                                    }
                                });
                            });
                        });
                        this.mutationObserver.observe(document.body, { childList: true, subtree: true });
                    }

                    /**
                    * Configures keyboard navigation (Arrows).
                    */
                    setupKeyboard() {
                        this.dom.root.addEventListener('keydown', (e) =&gt; {
                            switch(e.key) {
                                case 'ArrowLeft':
                                    this.prev();
                                    break;
                                case 'ArrowRight':
                                    this.next();
                                    break;
                            }
                        }, { passive: true });
                    }

                    /**
                    * Configures horizontal scroll wheel navigation.
                    */
                    setupWheel() {
                        let wheelTimeout;
                        this.dom.track.addEventListener('wheel', (e) =&gt; {
                            // Only react to significant horizontal scrolling
                            if (Math.abs(e.deltaX) &gt; Math.abs(e.deltaY) &amp;&amp; Math.abs(e.deltaX) &gt; 20) {
                                e.preventDefault();
                                clearTimeout(wheelTimeout);
                                wheelTimeout = setTimeout(() =&gt; {
                                    if (e.deltaX &gt; 0) this.next();
                                    else this.prev();
                                }, 50);
                            }
                        }, { passive: false });
                    }

                    /**
                    * Configures mouse drag interactions.
                    */
                    setupMouseDrag() {
                        this.dom.track.addEventListener('pointerdown', this._handleDragStart, { passive: true });
                        document.addEventListener('pointermove', this._handleDragMove, { passive: false });
                        document.addEventListener('pointerup', this._handleDragEnd, { passive: true });
                    }

                    /**
                    * Configures touch interactions.
                    */
                    setupTouch() {
                        this.dom.track.addEventListener('touchstart', this._handleDragStart, { passive: true });
                        document.addEventListener('touchmove', this._handleDragMove, { passive: false });
                        document.addEventListener('touchend', this._handleDragEnd, { passive: true });
                    }

                    /**
                    * Internal drag start handler.
                    * @param {Event} e 
                    */
                    _handleDragStart(e) {
                        if (e.type === 'pointerdown' &amp;&amp; e.pointerType === 'mouse' &amp;&amp; e.button !== 0) return; // Only left click
                        
                        this.state.isDragging = true;
                        this.state.isTransitioning = false;
                        this.pause();

                        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
                        this.state.startX = clientX;
                        this.dom.track.style.transition = 'none';
                    }

                    /**
                    * Internal drag move handler.
                    * @param {Event} e 
                    */
                    _handleDragMove(e) {
                        if (!this.state.isDragging) return;
                        
                        // Prevent default scrolling when dragging horizontally
                        if (e.cancelable) e.preventDefault();

                        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
                        this.state.currentX = clientX;
                        
                        const diff = this.state.currentX - this.state.startX;
                        this.state.dragOffset = diff * this.config.dragFriction;
                        
                        const baseOffset = -(this.state.currentIndex * (this.state.cardWidth + this.state.gap));
                        const currentTransform = baseOffset + this.state.dragOffset;

                        requestAnimationFrame(() =&gt; {
                            this.dom.track.style.transform = `translate3d(${currentTransform}px, 0, 0)`;
                        });
                    }

                    /**
                    * Internal drag end handler.
                    */
                    _handleDragEnd() {
                        if (!this.state.isDragging) return;
                        this.state.isDragging = false;
                        this.resume();

                        const distance = this.state.dragOffset;
                        this.state.dragOffset = 0;

                        // Determine if we dragged enough to trigger a slide change
                        if (Math.abs(distance) &gt; this.config.snapThreshold) {
                            if (distance &gt; 0) {
                                this.prev();
                            } else {
                                this.next();
                            }
                        } else {
                            // Snap back to current
                            this.scrollTo(this.state.currentIndex, true);
                        }
                    }

                    /**
                    * Clones DOM slides to enable seamless infinite looping.
                    */
                    cloneSlides() {
                        const children = Array.from(this.dom.track.children);
                        if (children.length === 0) return;

                        // Number of clones needed on each side equals the maximum possible visible cards
                        const clonesNeeded = 4; // Max visible on largest screens

                        const fragmentBefore = document.createDocumentFragment();
                        const fragmentAfter = document.createDocumentFragment();

                        // Clone for end (append)
                        for (let i = 0; i &lt; clonesNeeded; i++) {
                            const index = i % children.length;
                            const clone = children[index].cloneNode(true);
                            clone.classList.add('maple-clone');
                            clone.setAttribute('aria-hidden', 'true');
                            clone.tabIndex = -1; // Remove from focus order
                            fragmentAfter.append(clone);
                        }

                        // Clone for beginning (prepend)
                        for (let i = 0; i &lt; clonesNeeded; i++) {
                            const index = children.length - 1 - (i % children.length);
                            const clone = children[index].cloneNode(true);
                            clone.classList.add('maple-clone');
                            clone.setAttribute('aria-hidden', 'true');
                            clone.tabIndex = -1;
                            fragmentBefore.prepend(clone);
                        }

                        this.dom.track.prepend(fragmentBefore);
                        this.dom.track.append(fragmentAfter);
                    }

                    /**
                    * Cleans up all event listeners, timers, and observers to prevent memory leaks.
                    */
                    destroy() {
                        this.stopAutoplay();
                        
                        if (this.abortController) {
                            this.abortController.abort();
                        }
                        
                        if (this.resizeObserver) this.resizeObserver.disconnect();
                        if (this.intersectionObserver) this.intersectionObserver.disconnect();
                        if (this.mutationObserver) this.mutationObserver.disconnect();

                        document.removeEventListener('pointermove', this._handleDragMove);
                        document.removeEventListener('pointerup', this._handleDragEnd);
                        document.removeEventListener('touchmove', this._handleDragMove);
                        document.removeEventListener('touchend', this._handleDragEnd);

                        // Remove track content
                        if (this.dom.track) {
                            this.dom.track.innerHTML = '';
                        }
                    }
                }

                // Global initialization
                document.addEventListener('DOMContentLoaded', () =&gt; {
                    const containers = document.querySelectorAll('.s_maple_featured_products');
                    containers.forEach(container =&gt; {
                        const carousel = new MapleFeaturedProducts(container);
                        carousel.init();
                    });
                });