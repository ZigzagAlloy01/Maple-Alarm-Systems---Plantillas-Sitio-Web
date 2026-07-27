class MapleFeaturedProducts {

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
                            cloneCount: 0,
                            reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
                        };

                        // Observers and Controllers
                        this.abortController = null;
                        this.resizeObserver = null;
                        this.intersectionObserver = null;
                        this.mutationObserver = null;

                        // Configuration
                        this.config = {
                            autoplayInterval: 6000,
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
                        if (!success) return;

                        this.bindEvents();
                        this.update();
                        this.startAutoplay();
                    }

                    /**
                     * Caches required DOM elements to minimize DOM queries.
                     */
                    cacheDOM() {
                        this.dom.track = this.dom.root.querySelector('.maple-carousel__track');
                        if (!this.dom.track) {
                            const viewport = document.createElement('div');
                            viewport.classList.add('maple-carousel__viewport');

                            this.dom.track = document.createElement('div');
                            this.dom.track.classList.add('maple-carousel__track');
                            viewport.append(this.dom.track);
                            this.dom.root.append(viewport);
                        }

                        this.dom.prevBtn = this.dom.root.querySelector('.maple-carousel__button--prev') || this.createNavigationButton('prev');
                        this.dom.nextBtn = this.dom.root.querySelector('.maple-carousel__button--next') || this.createNavigationButton('next');
                    }

                    createNavigationButton(direction) {
                        const btn = document.createElement('button');
                        btn.classList.add('maple-carousel__button', `maple-carousel__button--${direction}`);
                        btn.setAttribute('aria-label', direction === 'prev' ? 'Productos anteriores' : 'Productos siguientes');
                        btn.type = 'button';
                        btn.innerHTML = direction === 'prev' ? '&lt;i class="fa fa-angle-left"&gt;&lt;/i&gt;' : '&lt;i class="fa fa-angle-right"&gt;&lt;/i&gt;';
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
                            if (!rawProducts || rawProducts.length === 0) {
                                this.renderEmptyState('No hay productos destacados disponibles.');
                                return false;
                            }

                            this.state.products = rawProducts
                                .map(p =&gt; this.normalizeProduct(p));

                            this.renderProducts();
                            return true;
                        } catch (error) {
                            console.error('[MapleFeaturedProducts] Error loading products:', error);
                            this.renderEmptyState('No fue posible cargar los productos destacados.');
                            return false;
                        }
                    }

                    async fetchProducts() {
                        if (this.abortController) {
                            this.abortController.abort();
                        }
                        this.abortController = new AbortController();

                        const response = await fetch('https://maple-carousel-api.vercel.app/api/productos', {
                            method: 'GET',
                            headers: {
                                'Accept': 'application/json'
                            },
                            signal: this.abortController.signal
                        });

                        if (!response.ok) {
                            throw new Error(`Error HTTP: ${response.status}`);
                        }

                        const data = await response.json();

                        return data || [];
                    }

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
                            image: rawData.image_url || null,
                            brand: rawData.default_code || ''
                        };
                    }

                    renderEmptyState(message) {
                        const empty = document.createElement('p');
                        empty.classList.add('maple-featured-products__subtitle');
                        empty.textContent = message;
                        this.dom.track.replaceChildren(empty);
                    }

                    /**
                     * Orchestrates DOM construction for all product cards.
                     */
                    renderProducts() {
                        const fragment = document.createDocumentFragment();

                        this.calculateVisibleCards();
                        this.calculateGap();

                        const repeatCount = Math.max(this.state.visibleCards * 12, 36);
                        this.state.loopStartIndex = Math.floor(repeatCount / 2);

                        for (let index = 0; index &lt; repeatCount; index++) {
                            const product = this.state.products[index % this.state.products.length];
                            const card = this.createCard(product);
                            card.dataset.loopIndex = index;
                            fragment.append(card);
                        }

                        this.dom.track.replaceChildren(fragment);
                        this.dom.slides = Array.from(this.dom.track.children);
                        
                        // Initial setup for sizing
                        this.handleResize();
                        this.state.currentIndex = this.state.loopStartIndex;
                        this.scrollTo(this.state.currentIndex, false);
                    }

                    createCard(product) {
                        const article = document.createElement('article');
                        article.classList.add('maple-product-card');
                        article.dataset.productId = product.id;
                        article.tabIndex = 0;
                        article.setAttribute('aria-label', product.name);

                        const imageLink = document.createElement('a');
                        imageLink.classList.add('maple-product-card__image-link');
                        imageLink.href = product.url;
                        imageLink.append(this.createImage(product));

                        const content = document.createElement('div');
                        content.classList.add('maple-product-card__content');

                        const brand = document.createElement('div');
                        brand.classList.add('maple-product-card__brand');
                        brand.textContent = product.brand;

                        const name = document.createElement('a');
                        name.classList.add('maple-product-card__name');
                        name.href = product.url;
                        name.textContent = product.name;

                        const footer = document.createElement('div');
                        footer.classList.add('maple-product-card__footer');
                        footer.append(this.createPrice(product), this.createButtons(product));

                        content.append(brand, name, this.createDescription(product), footer);
                        article.append(imageLink, content);
                        return article;
                    }

                    createImage(product) {
                        const wrapper = document.createElement('div');
                        wrapper.classList.add('maple-product-card__image-wrapper');

                        const img = document.createElement('img');
                        img.classList.add('maple-product-card__image');
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

                    createDescription(product) {
                        const desc = document.createElement('p');
                        desc.classList.add('maple-product-card__description');
                        desc.textContent = product.description.substring(0, 80) + (product.description.length &gt; 80 ? '...' : '');
                        return desc;
                    }

                    createPrice(product) {
                        const priceWrapper = document.createElement('div');
                        priceWrapper.classList.add('maple-product-card__price');

                        const currentPrice = document.createElement('span');
                        currentPrice.classList.add('maple-product-card__price-current');
                        currentPrice.textContent = this.formatPrice(product.price, product.currency);

                        priceWrapper.append(currentPrice);
                        return priceWrapper;
                    }

                    createButtons(product) {
                        const wrapper = document.createElement('div');
                        wrapper.classList.add('maple-product-card__actions');

                        const addBtn = document.createElement('button');
                        addBtn.type = 'button';
                        addBtn.classList.add('maple-product-card__cart');
                        addBtn.setAttribute('aria-label', `Ver ${product.name}`);
                        addBtn.textContent = 'Ver producto';
                        
                        addBtn.addEventListener('click', (e) =&gt; {
                            e.preventDefault();
                            e.stopPropagation();
                            window.location.href = product.url;
                        });

                        const wishlistBtn = document.createElement('a');
                        wishlistBtn.classList.add('maple-product-card__wishlist');
                        wishlistBtn.href = product.url;
                        wishlistBtn.setAttribute('aria-label', `Ver detalles de ${product.name}`);
                        wishlistBtn.innerHTML = '&lt;i class="fa fa-search"&gt;&lt;/i&gt;';

                        wrapper.append(addBtn, wishlistBtn);
                        return wrapper;
                    }

                    formatPrice(price, currency) {
                        // Fallback simple formatter if Odoo's session context isn't readily available
                        const formatter = new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: typeof currency === 'string' &amp;&amp; currency.length === 3 ? currency : 'USD'
                        });
                        return formatter.format(price);
                    }

                    getImageUrl(product) {
                        if (product.image) {
                            return product.image;
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

                    goTo(index) {
                        const totalSlides = this.dom.slides.length;
                        const edgeBuffer = Math.max(this.state.visibleCards * 2, 6);

                        if (totalSlides &gt; edgeBuffer * 2) {
                            if (index &gt;= totalSlides - edgeBuffer) {
                                index = this.state.loopStartIndex + (index % this.state.products.length);
                            } else if (index &lt; edgeBuffer) {
                                index = this.state.loopStartIndex - (this.state.products.length - (index % this.state.products.length));
                            }
                        }

                        

                        this.state.currentIndex = index;
                        this.scrollTo(this.state.currentIndex, !this.state.reducedMotion);
                    }

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
                        const totalClonedFront = this.state.cloneCount;
                        
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

                    _handleDragStart(e) {
                        if (e.type === 'pointerdown' &amp;&amp; e.pointerType === 'mouse' &amp;&amp; e.button !== 0) return; // Only left click
                        
                        this.state.isDragging = true;
                        this.state.isTransitioning = false;
                        this.pause();

                        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
                        this.state.startX = clientX;
                        this.dom.track.style.transition = 'none';
                    }

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

                        // Clone enough cards to keep the viewport filled even when Odoo returns very few products.
                        const clonesNeeded = Math.max(this.state.visibleCards * 2, 8);
                        this.state.cloneCount = clonesNeeded;

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