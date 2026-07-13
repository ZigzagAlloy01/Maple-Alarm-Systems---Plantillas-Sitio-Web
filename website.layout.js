(function () {
            var MENU_SELECTOR = "#top_menu &gt; li.nav-item.position-static.dropdown &gt; div.o_mega_menu, #top_menu &gt; li.nav-item.position-static.dropdown &gt; div";
            var MENU_ROOT_CLASS = "fetchEcomCategories";
            var SECTION_SELECTOR = ".s_mega_menu_multi_menus, .s_mega_menu_odoo_menu";
            var PROCESSED_ATTR = "data-syscomified";
            var MOBILE_BREAKPOINT = 991;
            var CATEGORY_REFERENCE_TREE = [
              {
                "categoryId": "374",
                "title": "Sistemas de Alarma",
                "url": "/shop/category/sistemas-de-alarma-374",
                "children": [
                  {
                    "categoryId": "425",
                    "title": "Kits listos para Instalar",
                    "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-kits-listos-para-instalar-425",
                    "children": [
                      {
                        "categoryId": "879",
                        "title": "Alarmas Inalámbricas",
                        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-kits-listos-para-instalar-sistemas-de-alarma-kits-listos-para-instalar-alarmas-inalambricas-879",
                        "children": []
                      },
                      {
                        "categoryId": "498",
                        "title": "Alarmas cableadas",
                        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-kits-listos-para-instalar-sistemas-de-alarma-kits-listos-para-instalar-alarmas-cableadas-498",
                        "children": []
                      }
                    ]
                  },
                  {
                    "categoryId": "805",
                    "title": "Comprar por Familia de Productos",
                    "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-comprar-por-familia-de-productos-805",
                    "children": [
                      {
                        "categoryId": "806",
                        "title": "Hikvision AX PRO",
                        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-comprar-por-familia-de-productos-sistemas-de-alarma-comprar-por-familia-de-productos-hikvision-ax-pro-806",
                        "children": []
                      },
                      {
                        "categoryId": "880",
                        "title": "Hikvision AX HYBRID PRO",
                        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-comprar-por-familia-de-productos-sistemas-de-alarma-comprar-por-familia-de-productos-hikvision-ax-hybrid-pro-880",
                        "children": []
                      },
                      {
                        "categoryId": "881",
                        "title": "Qolsys IQ",
                        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-comprar-por-familia-de-productos-sistemas-de-alarma-comprar-por-familia-de-productos-qolsys-iq-881",
                        "children": []
                      },
                      {
                        "categoryId": "884",
                        "title": "DSC NEO",
                        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-comprar-por-familia-de-productos-sistemas-de-alarma-comprar-por-familia-de-productos-dsc-neo-884",
                        "children": []
                      }
                    ]
                  },
                  {
                    "categoryId": "383",
                    "title": "Sensores y Detectores",
                    "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-sensores-y-detectores-383",
                    "children": [
                      {
                        "categoryId": "418",
                        "title": "Botones de Pánico",
                        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-sensores-y-detectores-sistemas-de-alarma-sensores-y-detectores-botones-de-panico-418",
                        "children": []
                      },
                      {
                        "categoryId": "422",
                        "title": "Contactos magnéticos",
                        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-sensores-y-detectores-sistemas-de-alarma-sensores-y-detectores-contactos-magneticos-422",
                        "children": []
                      },
                      {
                        "categoryId": "384",
                        "title": "Sensores de movimiento",
                        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-sensores-y-detectores-sistemas-de-alarma-sensores-y-detectores-sensores-de-movimiento-384",
                        "children": []
                      },
                      {
                        "categoryId": "433",
                        "title": "Sensores de rotura de cristales",
                        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-sensores-y-detectores-sistemas-de-alarma-sensores-y-detectores-sensores-de-rotura-de-cristales-433",
                        "children": []
                      },
                      {
                        "categoryId": "419",
                        "title": "Sensores de humo y temperatura",
                        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-sensores-y-detectores-sistemas-de-alarma-sensores-y-detectores-sensores-de-humo-y-temperatura-419",
                        "children": []
                      },
                      {
                        "categoryId": "494",
                        "title": "Fotoceldas",
                        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-sensores-y-detectores-sistemas-de-alarma-sensores-y-detectores-fotoceldas-494",
                        "children": []
                      },
                      {
                        "categoryId": "495",
                        "title": "Sensores varios",
                        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-sensores-y-detectores-sistemas-de-alarma-sensores-y-detectores-sensores-varios-495",
                        "children": []
                      },
                      {
                        "categoryId": "517",
                        "title": "Estaciones de jalón",
                        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-sensores-y-detectores-sistemas-de-alarma-sensores-y-detectores-estaciones-de-jalon-517",
                        "children": []
                      }
                    ]
                  },
                  {
                    "categoryId": "792",
                    "title": "Accesorios para Sistemas de Alarma",
                    "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-792",
                    "children": [
                      {
                        "categoryId": "793",
                        "title": "Teclados",
                        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-teclados-793",
                        "children": []
                      },
                      {
                        "categoryId": "798",
                        "title": "Sirenas y Estrobos",
                        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-sirenas-y-estrobos-798",
                        "children": []
                      },
                      {
                        "categoryId": "794",
                        "title": "Controles y llaveros",
                        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-controles-y-llaveros-794",
                        "children": []
                      },
                      {
                        "categoryId": "807",
                        "title": "Módulos para Hikvision AX PRO",
                        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-modulos-para-hikvision-ax-pro-807",
                        "children": []
                      },
                      {
                        "categoryId": "797",
                        "title": "Módulos para DSC Neo",
                        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-modulos-para-dsc-neo-797",
                        "children": []
                      },
                      {
                        "categoryId": "796",
                        "title": "Paneles o Tablillas de Alarma",
                        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-paneles-o-tablillas-de-alarma-796",
                        "children": []
                      },
                      {
                        "categoryId": "799",
                        "title": "Fuentes de Poder y Transformadores",
                        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-fuentes-de-poder-y-transformadores-799",
                        "children": []
                      },
                      {
                        "categoryId": "795",
                        "title": "Gabinetes para Sistemas de Alarma",
                        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-gabinetes-para-sistemas-de-alarma-795",
                        "children": []
                      }
                    ]
                  },
                  {
                    "categoryId": "375",
                    "title": "Comunicadores para Alarmas",
                    "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-comunicadores-para-alarmas-375",
                    "children": [
                      {
                        "categoryId": "449",
                        "title": "Comunicadores para Monitoreo y App",
                        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-comunicadores-para-alarmas-sistemas-de-alarma-comunicadores-para-alarmas-comunicadores-para-monitoreo-y-app-449",
                        "children": []
                      },
                      {
                        "categoryId": "376",
                        "title": "Servicios de paga para comunicadores",
                        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-comunicadores-para-alarmas-sistemas-de-alarma-comunicadores-para-alarmas-servicios-de-paga-para-comunicadores-376",
                        "children": []
                      }
                    ]
                  },
                  {
                    "categoryId": "580",
                    "title": "Complementos de Alarma",
                    "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-complementos-de-alarma-580",
                    "children": [
                      {
                        "categoryId": "581",
                        "title": "Accesorios para Sistemas de Alarma",
                        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-complementos-de-alarma-sistemas-de-alarma-complementos-de-alarma-accesorios-para-sistemas-de-alarma-581",
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "categoryId": "501",
                "title": "Hogar Inteligente",
                "url": "/shop/category/hogar-inteligente-501",
                "children": [
                  {
                    "categoryId": "504",
                    "title": "Dispositivos Z-WAVE",
                    "url": "/shop/category/hogar-inteligente-hogar-inteligente-dispositivos-z-wave-504",
                    "children": [
                      {
                        "categoryId": "507",
                        "title": "Apagadores y Control de Iluminación",
                        "url": "/shop/category/hogar-inteligente-hogar-inteligente-dispositivos-z-wave-hogar-inteligente-dispositivos-z-wave-apagadores-y-control-de-iluminacion-507",
                        "children": []
                      },
                      {
                        "categoryId": "506",
                        "title": "Enchufes y Sockets Inteligentes",
                        "url": "/shop/category/hogar-inteligente-hogar-inteligente-dispositivos-z-wave-hogar-inteligente-dispositivos-z-wave-enchufes-y-sockets-inteligentes-506",
                        "children": []
                      }
                    ]
                  },
                  {
                    "categoryId": "584",
                    "title": "Domótica",
                    "url": "/shop/category/hogar-inteligente-hogar-inteligente-domotica-584",
                    "children": [
                      {
                        "categoryId": "585",
                        "title": "Accesorios para Automatizacion del Hogar",
                        "url": "/shop/category/hogar-inteligente-hogar-inteligente-domotica-hogar-inteligente-domotica-accesorios-para-automatizacion-del-hogar-585",
                        "children": []
                      }
                    ]
                  },
                  {
                    "categoryId": "882",
                    "title": "Alarmas para Automatizar Hogares",
                    "url": "/shop/category/hogar-inteligente-hogar-inteligente-alarmas-para-automatizar-hogares-882",
                    "children": [
                      {
                        "categoryId": "883",
                        "title": "Qolsys IQ",
                        "url": "/shop/category/hogar-inteligente-hogar-inteligente-alarmas-para-automatizar-hogares-hogar-inteligente-alarmas-para-automatizar-hogares-qolsys-iq-883",
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "categoryId": "520",
                "title": "Cámaras de Seguridad",
                "url": "/shop/category/camaras-de-seguridad-520",
                "children": [
                  {
                    "categoryId": "839",
                    "title": "Paquetes",
                    "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-paquetes-839",
                    "children": [
                      {
                        "categoryId": "840",
                        "title": "Kits listos para instalar",
                        "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-paquetes-camaras-de-seguridad-paquetes-kits-listos-para-instalar-840",
                        "children": []
                      }
                    ]
                  },
                  {
                    "categoryId": "533",
                    "title": "Cámaras IP",
                    "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-ip-533",
                    "children": [
                      {
                        "categoryId": "812",
                        "title": "Cámaras tipo Bala",
                        "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-ip-camaras-de-seguridad-camaras-ip-camaras-tipo-bala-812",
                        "children": []
                      },
                      {
                        "categoryId": "543",
                        "title": "Cámaras tipo Domo",
                        "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-ip-camaras-de-seguridad-camaras-ip-camaras-tipo-domo-543",
                        "children": []
                      },
                      {
                        "categoryId": "556",
                        "title": "Cámaras con vision 180° y 360°",
                        "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-ip-camaras-de-seguridad-camaras-ip-camaras-con-vision-180-y-360-556",
                        "children": []
                      },
                      {
                        "categoryId": "557",
                        "title": "Cámaras especiales",
                        "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-ip-camaras-de-seguridad-camaras-ip-camaras-especiales-557",
                        "children": []
                      },
                      {
                        "categoryId": "547",
                        "title": "Cámaras con movimiento (PTZ)",
                        "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-ip-camaras-de-seguridad-camaras-ip-camaras-con-movimiento-ptz-547",
                        "children": []
                      },
                      {
                        "categoryId": "831",
                        "title": "Grabadores para Cámaras IP (NVR)",
                        "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-ip-camaras-de-seguridad-camaras-ip-grabadores-para-camaras-ip-nvr-831",
                        "children": []
                      }
                    ]
                  },
                  {
                    "categoryId": "813",
                    "title": "Cámaras Analógicas HD",
                    "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-analogicas-hd-813",
                    "children": [
                      {
                        "categoryId": "814",
                        "title": "Cámaras tipo Bala",
                        "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-analogicas-hd-camaras-de-seguridad-camaras-analogicas-hd-camaras-tipo-bala-814",
                        "children": []
                      },
                      {
                        "categoryId": "834",
                        "title": "Cámaras tipo Domo",
                        "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-analogicas-hd-camaras-de-seguridad-camaras-analogicas-hd-camaras-tipo-domo-834",
                        "children": []
                      },
                      {
                        "categoryId": "852",
                        "title": "Cámaras especiales",
                        "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-analogicas-hd-camaras-de-seguridad-camaras-analogicas-hd-camaras-especiales-852",
                        "children": []
                      },
                      {
                        "categoryId": "874",
                        "title": "Cámaras con movimiento PTZ",
                        "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-analogicas-hd-camaras-de-seguridad-camaras-analogicas-hd-camaras-con-movimiento-ptz-874",
                        "children": []
                      },
                      {
                        "categoryId": "826",
                        "title": "Grabadores para Cámaras Analógicas HD",
                        "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-analogicas-hd-camaras-de-seguridad-camaras-analogicas-hd-grabadores-para-camaras-analogicas-hd-826",
                        "children": []
                      }
                    ]
                  },
                  {
                    "categoryId": "800",
                    "title": "Cámaras Especiales",
                    "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-especiales-800",
                    "children": [
                      {
                        "categoryId": "846",
                        "title": "Bodycam",
                        "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-especiales-camaras-de-seguridad-camaras-especiales-bodycam-846",
                        "children": []
                      },
                      {
                        "categoryId": "801",
                        "title": "Dashcam",
                        "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-especiales-camaras-de-seguridad-camaras-especiales-dashcam-801",
                        "children": []
                      },
                      {
                        "categoryId": "873",
                        "title": "Cámaras Autónomas",
                        "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-especiales-camaras-de-seguridad-camaras-especiales-camaras-autonomas-873",
                        "children": []
                      },
                      {
                        "categoryId": "853",
                        "title": "Cámaras Web",
                        "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-especiales-camaras-de-seguridad-camaras-especiales-camaras-web-853",
                        "children": []
                      }
                    ]
                  },
                  {
                    "categoryId": "803",
                    "title": "Accesorios para Cámaras de Seguridad",
                    "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-accesorios-para-camaras-de-seguridad-803",
                    "children": [
                      {
                        "categoryId": "804",
                        "title": "Discos Duros y Almacenamiento",
                        "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-accesorios-para-camaras-de-seguridad-camaras-de-seguridad-accesorios-para-camaras-de-seguridad-discos-duros-y-almacenamiento-804",
                        "children": []
                      },
                      {
                        "categoryId": "821",
                        "title": "Extensión de Video y Multipantalla",
                        "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-accesorios-para-camaras-de-seguridad-camaras-de-seguridad-accesorios-para-camaras-de-seguridad-extension-de-video-y-multipantalla-821",
                        "children": []
                      },
                      {
                        "categoryId": "858",
                        "title": "Joysticks para Cámaras PTZ",
                        "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-accesorios-para-camaras-de-seguridad-camaras-de-seguridad-accesorios-para-camaras-de-seguridad-joysticks-para-camaras-ptz-858",
                        "children": []
                      },
                      {
                        "categoryId": "811",
                        "title": "Montajes para Cámaras de Seguridad",
                        "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-accesorios-para-camaras-de-seguridad-camaras-de-seguridad-accesorios-para-camaras-de-seguridad-montajes-para-camaras-de-seguridad-811",
                        "children": []
                      },
                      {
                        "categoryId": "866",
                        "title": "Gabinetes para grabadores",
                        "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-accesorios-para-camaras-de-seguridad-camaras-de-seguridad-accesorios-para-camaras-de-seguridad-gabinetes-para-grabadores-866",
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "categoryId": "335",
                "title": "Controles de Acceso",
                "url": "/shop/category/controles-de-acceso-335",
                "children": [
                  {
                    "categoryId": "824",
                    "title": "Cerraduras para Control de Acceso",
                    "url": "/shop/category/controles-de-acceso-controles-de-acceso-cerraduras-para-control-de-acceso-824",
                    "children": [
                      {
                        "categoryId": "869",
                        "title": "Cerraduras Autónomas",
                        "url": "/shop/category/controles-de-acceso-controles-de-acceso-cerraduras-para-control-de-acceso-controles-de-acceso-cerraduras-para-control-de-acceso-cerraduras-autonomas-869",
                        "children": []
                      },
                      {
                        "categoryId": "825",
                        "title": "Chapas Magnéticas y Eléctricas",
                        "url": "/shop/category/controles-de-acceso-controles-de-acceso-cerraduras-para-control-de-acceso-controles-de-acceso-cerraduras-para-control-de-acceso-chapas-magneticas-y-electricas-825",
                        "children": []
                      },
                      {
                        "categoryId": "870",
                        "title": "Cerraduras de Perno y Contrachapas Eléctricas",
                        "url": "/shop/category/controles-de-acceso-controles-de-acceso-cerraduras-para-control-de-acceso-controles-de-acceso-cerraduras-para-control-de-acceso-cerraduras-de-perno-y-contrachapas-electricas-870",
                        "children": []
                      }
                    ]
                  },
                  {
                    "categoryId": "827",
                    "title": "Intercomunicación",
                    "url": "/shop/category/controles-de-acceso-controles-de-acceso-intercomunicacion-827",
                    "children": [
                      {
                        "categoryId": "828",
                        "title": "Video Porteros",
                        "url": "/shop/category/controles-de-acceso-controles-de-acceso-intercomunicacion-controles-de-acceso-intercomunicacion-video-porteros-828",
                        "children": []
                      },
                      {
                        "categoryId": "830",
                        "title": "Interfones y Porteros",
                        "url": "/shop/category/controles-de-acceso-controles-de-acceso-intercomunicacion-controles-de-acceso-intercomunicacion-interfones-y-porteros-830",
                        "children": []
                      }
                    ]
                  },
                  {
                    "categoryId": "832",
                    "title": "Sistemas de Acceso",
                    "url": "/shop/category/controles-de-acceso-controles-de-acceso-sistemas-de-acceso-832",
                    "children": [
                      {
                        "categoryId": "851",
                        "title": "Controladores de Acceso",
                        "url": "/shop/category/controles-de-acceso-controles-de-acceso-sistemas-de-acceso-controles-de-acceso-sistemas-de-acceso-controladores-de-acceso-851",
                        "children": []
                      },
                      {
                        "categoryId": "872",
                        "title": "Terminales de Tiempo y Asistencia",
                        "url": "/shop/category/controles-de-acceso-controles-de-acceso-sistemas-de-acceso-controles-de-acceso-sistemas-de-acceso-terminales-de-tiempo-y-asistencia-872",
                        "children": []
                      },
                      {
                        "categoryId": "833",
                        "title": "Lectores de Proximidad",
                        "url": "/shop/category/controles-de-acceso-controles-de-acceso-sistemas-de-acceso-controles-de-acceso-sistemas-de-acceso-lectores-de-proximidad-833",
                        "children": []
                      },
                      {
                        "categoryId": "871",
                        "title": "Lectores de QR",
                        "url": "/shop/category/controles-de-acceso-controles-de-acceso-sistemas-de-acceso-controles-de-acceso-sistemas-de-acceso-lectores-de-qr-871",
                        "children": []
                      },
                      {
                        "categoryId": "860",
                        "title": "Tarjetas de Proximidad",
                        "url": "/shop/category/controles-de-acceso-controles-de-acceso-sistemas-de-acceso-controles-de-acceso-sistemas-de-acceso-tarjetas-de-proximidad-860",
                        "children": []
                      },
                      {
                        "categoryId": "854",
                        "title": "Enroladores de Tarjetas",
                        "url": "/shop/category/controles-de-acceso-controles-de-acceso-sistemas-de-acceso-controles-de-acceso-sistemas-de-acceso-enroladores-de-tarjetas-854",
                        "children": []
                      },
                      {
                        "categoryId": "847",
                        "title": "Botones de petición de salida",
                        "url": "/shop/category/controles-de-acceso-controles-de-acceso-sistemas-de-acceso-controles-de-acceso-sistemas-de-acceso-botones-de-peticion-de-salida-847",
                        "children": []
                      },
                      {
                        "categoryId": "867",
                        "title": "Botones de paro de emergencia",
                        "url": "/shop/category/controles-de-acceso-controles-de-acceso-sistemas-de-acceso-controles-de-acceso-sistemas-de-acceso-botones-de-paro-de-emergencia-867",
                        "children": []
                      }
                    ]
                  },
                  {
                    "categoryId": "841",
                    "title": "Lectores Biométricos",
                    "url": "/shop/category/controles-de-acceso-controles-de-acceso-lectores-biometricos-841",
                    "children": [
                      {
                        "categoryId": "842",
                        "title": "Biométricos para controladores",
                        "url": "/shop/category/controles-de-acceso-controles-de-acceso-lectores-biometricos-controles-de-acceso-lectores-biometricos-biometricos-para-controladores-842",
                        "children": []
                      },
                      {
                        "categoryId": "843",
                        "title": "Biométricos Autónomos",
                        "url": "/shop/category/controles-de-acceso-controles-de-acceso-lectores-biometricos-controles-de-acceso-lectores-biometricos-biometricos-autonomos-843",
                        "children": []
                      }
                    ]
                  },
                  {
                    "categoryId": "819",
                    "title": "Accesorios para Control de Acceso",
                    "url": "/shop/category/controles-de-acceso-controles-de-acceso-accesorios-para-control-de-acceso-819",
                    "children": [
                      {
                        "categoryId": "820",
                        "title": "Controles Remotos",
                        "url": "/shop/category/controles-de-acceso-controles-de-acceso-accesorios-para-control-de-acceso-controles-de-acceso-accesorios-para-control-de-acceso-controles-remotos-820",
                        "children": []
                      },
                      {
                        "categoryId": "868",
                        "title": "Cierra Puertas",
                        "url": "/shop/category/controles-de-acceso-controles-de-acceso-accesorios-para-control-de-acceso-controles-de-acceso-accesorios-para-control-de-acceso-cierra-puertas-868",
                        "children": []
                      }
                    ]
                  },
                  {
                    "categoryId": "618",
                    "title": "Complementos",
                    "url": "/shop/category/controles-de-acceso-controles-de-acceso-complementos-618",
                    "children": [
                      {
                        "categoryId": "619",
                        "title": "Accesorios para Controles de Acceso",
                        "url": "/shop/category/controles-de-acceso-controles-de-acceso-complementos-controles-de-acceso-complementos-accesorios-para-controles-de-acceso-619",
                        "children": []
                      }
                    ]
                  },
                  {
                    "categoryId": "658",
                    "title": "Dispositivos de Control",
                    "url": "/shop/category/controles-de-acceso-controles-de-acceso-dispositivos-de-control-658",
                    "children": [
                      {
                        "categoryId": "861",
                        "title": "Teclados Autónomos",
                        "url": "/shop/category/controles-de-acceso-controles-de-acceso-dispositivos-de-control-controles-de-acceso-dispositivos-de-control-teclados-autonomos-861",
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "categoryId": "351",
                "title": "Cercas Eléctricas",
                "url": "/shop/category/cercas-electricas-351",
                "children": [
                  {
                    "categoryId": "643",
                    "title": "Equipos Principales",
                    "url": "/shop/category/cercas-electricas-cercas-electricas-equipos-principales-643",
                    "children": [
                      {
                        "categoryId": "644",
                        "title": "Energizadores y Kits",
                        "url": "/shop/category/cercas-electricas-cercas-electricas-equipos-principales-cercas-electricas-equipos-principales-energizadores-y-kits-644",
                        "children": []
                      }
                    ]
                  },
                  {
                    "categoryId": "837",
                    "title": "Accesorios para Cercas Eléctricas",
                    "url": "/shop/category/cercas-electricas-cercas-electricas-accesorios-para-cercas-electricas-837",
                    "children": [
                      {
                        "categoryId": "838",
                        "title": "Postes y Aisladores",
                        "url": "/shop/category/cercas-electricas-cercas-electricas-accesorios-para-cercas-electricas-cercas-electricas-accesorios-para-cercas-electricas-postes-y-aisladores-838",
                        "children": []
                      },
                      {
                        "categoryId": "849",
                        "title": "Alambre y cable bujía",
                        "url": "/shop/category/cercas-electricas-cercas-electricas-accesorios-para-cercas-electricas-cercas-electricas-accesorios-para-cercas-electricas-alambre-y-cable-bujia-849",
                        "children": []
                      }
                    ]
                  },
                  {
                    "categoryId": "654",
                    "title": "Complementos",
                    "url": "/shop/category/cercas-electricas-cercas-electricas-complementos-654",
                    "children": [
                      {
                        "categoryId": "655",
                        "title": "Accesorios para Cercas Eléctricas",
                        "url": "/shop/category/cercas-electricas-cercas-electricas-complementos-cercas-electricas-complementos-accesorios-para-cercas-electricas-655",
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "categoryId": "365",
                "title": "Redes",
                "url": "/shop/category/redes-365",
                "children": [
                  {
                    "categoryId": "835",
                    "title": "Antenas",
                    "url": "/shop/category/redes-redes-antenas-835",
                    "children": [
                      {
                        "categoryId": "859",
                        "title": "Antenas PtP y PtMP",
                        "url": "/shop/category/redes-redes-antenas-redes-antenas-antenas-ptp-y-ptmp-859",
                        "children": []
                      },
                      {
                        "categoryId": "836",
                        "title": "Access Point",
                        "url": "/shop/category/redes-redes-antenas-redes-antenas-access-point-836",
                        "children": []
                      }
                    ]
                  },
                  {
                    "categoryId": "822",
                    "title": "Accesorios para Redes",
                    "url": "/shop/category/redes-redes-accesorios-para-redes-822",
                    "children": [
                      {
                        "categoryId": "857",
                        "title": "Gabinetes para Redes",
                        "url": "/shop/category/redes-redes-accesorios-para-redes-redes-accesorios-para-redes-gabinetes-para-redes-857",
                        "children": []
                      },
                      {
                        "categoryId": "850",
                        "title": "Accesorios para Rack",
                        "url": "/shop/category/redes-redes-accesorios-para-redes-redes-accesorios-para-redes-accesorios-para-rack-850",
                        "children": []
                      },
                      {
                        "categoryId": "848",
                        "title": "Inyectores y Switches",
                        "url": "/shop/category/redes-redes-accesorios-para-redes-redes-accesorios-para-redes-inyectores-y-switches-848",
                        "children": []
                      },
                      {
                        "categoryId": "823",
                        "title": "Cajas y accesorios para cableado estructurado",
                        "url": "/shop/category/redes-redes-accesorios-para-redes-redes-accesorios-para-redes-cajas-y-accesorios-para-cableado-estructurado-823",
                        "children": []
                      },
                      {
                        "categoryId": "863",
                        "title": "Tomacorrientes para Rack (PDU)",
                        "url": "/shop/category/redes-redes-accesorios-para-redes-redes-accesorios-para-redes-tomacorrientes-para-rack-pdu-863",
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "categoryId": "358",
                "title": "Cables",
                "url": "/shop/category/cables-358",
                "children": [
                  {
                    "categoryId": "817",
                    "title": "Cables para Equipos de Seguridad",
                    "url": "/shop/category/cables-cables-cables-para-equipos-de-seguridad-817",
                    "children": [
                      {
                        "categoryId": "818",
                        "title": "Cables para Sistemas de Alarma y Automatización",
                        "url": "/shop/category/cables-cables-cables-para-equipos-de-seguridad-cables-cables-para-equipos-de-seguridad-cables-para-sistemas-de-alarma-y-automatizacion-818",
                        "children": []
                      },
                      {
                        "categoryId": "845",
                        "title": "Cables para Sistemas de Detección de Incendio",
                        "url": "/shop/category/cables-cables-cables-para-equipos-de-seguridad-cables-cables-para-equipos-de-seguridad-cables-para-sistemas-de-deteccion-de-incendio-845",
                        "children": []
                      },
                      {
                        "categoryId": "844",
                        "title": "Cables para Controles de Acceso",
                        "url": "/shop/category/cables-cables-cables-para-equipos-de-seguridad-cables-cables-para-equipos-de-seguridad-cables-para-controles-de-acceso-844",
                        "children": []
                      }
                    ]
                  },
                  {
                    "categoryId": "598",
                    "title": "Cables para Redes",
                    "url": "/shop/category/cables-cables-cables-para-redes-598",
                    "children": [
                      {
                        "categoryId": "599",
                        "title": "Cable UTP",
                        "url": "/shop/category/cables-cables-cables-para-redes-cables-cables-para-redes-cable-utp-599",
                        "children": []
                      },
                      {
                        "categoryId": "632",
                        "title": "Patch Cords",
                        "url": "/shop/category/cables-cables-cables-para-redes-cables-cables-para-redes-patch-cords-632",
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "categoryId": "808",
                "title": "Fuentes de Poder y Respaldo",
                "url": "/shop/category/fuentes-de-poder-y-respaldo-808",
                "children": [
                  {
                    "categoryId": "815",
                    "title": "Baterías",
                    "url": "/shop/category/fuentes-de-poder-y-respaldo-fuentes-de-poder-y-respaldo-baterias-815",
                    "children": [
                      {
                        "categoryId": "816",
                        "title": "Baterías para Sistemas de Seguridad",
                        "url": "/shop/category/fuentes-de-poder-y-respaldo-fuentes-de-poder-y-respaldo-baterias-fuentes-de-poder-y-respaldo-baterias-baterias-para-sistemas-de-seguridad-816",
                        "children": []
                      },
                      {
                        "categoryId": "862",
                        "title": "Equipos para Respaldo UPS No Break",
                        "url": "/shop/category/fuentes-de-poder-y-respaldo-fuentes-de-poder-y-respaldo-baterias-fuentes-de-poder-y-respaldo-baterias-equipos-para-respaldo-ups-no-break-862",
                        "children": []
                      }
                    ]
                  },
                  {
                    "categoryId": "809",
                    "title": "Fuentes de Alimentación",
                    "url": "/shop/category/fuentes-de-poder-y-respaldo-fuentes-de-poder-y-respaldo-fuentes-de-alimentacion-809",
                    "children": [
                      {
                        "categoryId": "829",
                        "title": "Fuentes para Control de Acceso",
                        "url": "/shop/category/fuentes-de-poder-y-respaldo-fuentes-de-poder-y-respaldo-fuentes-de-alimentacion-fuentes-de-poder-y-respaldo-fuentes-de-alimentacion-fuentes-para-control-de-acceso-829",
                        "children": []
                      },
                      {
                        "categoryId": "810",
                        "title": "Fuentes para Cámaras de Seguridad",
                        "url": "/shop/category/fuentes-de-poder-y-respaldo-fuentes-de-poder-y-respaldo-fuentes-de-alimentacion-fuentes-de-poder-y-respaldo-fuentes-de-alimentacion-fuentes-para-camaras-de-seguridad-810",
                        "children": []
                      },
                      {
                        "categoryId": "875",
                        "title": "Eliminadores de Corriente",
                        "url": "/shop/category/fuentes-de-poder-y-respaldo-fuentes-de-poder-y-respaldo-fuentes-de-alimentacion-fuentes-de-poder-y-respaldo-fuentes-de-alimentacion-eliminadores-de-corriente-875",
                        "children": []
                      }
                    ]
                  },
                  {
                    "categoryId": "864",
                    "title": "Tierras Físicas",
                    "url": "/shop/category/fuentes-de-poder-y-respaldo-fuentes-de-poder-y-respaldo-tierras-fisicas-864",
                    "children": [
                      {
                        "categoryId": "865",
                        "title": "Equipo para Tierras Físicas",
                        "url": "/shop/category/fuentes-de-poder-y-respaldo-fuentes-de-poder-y-respaldo-tierras-fisicas-fuentes-de-poder-y-respaldo-tierras-fisicas-equipo-para-tierras-fisicas-865",
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "categoryId": "482",
                "title": "Instalaciones",
                "url": "/shop/category/instalaciones-482",
                "children": [
                  {
                    "categoryId": "855",
                    "title": "Gabinetes",
                    "url": "/shop/category/instalaciones-instalaciones-gabinetes-855",
                    "children": [
                      {
                        "categoryId": "856",
                        "title": "Gabinetes para Todo Tipo de Instalaciones",
                        "url": "/shop/category/instalaciones-instalaciones-gabinetes-instalaciones-gabinetes-gabinetes-para-todo-tipo-de-instalaciones-856",
                        "children": []
                      }
                    ]
                  }
                ]
              }
            ];
            
            CATEGORY_REFERENCE_TREE = CATEGORY_REFERENCE_TREE.filter(function (node) {
                return !node || node.categoryId !== "38";
            });
            CATEGORY_REFERENCE_TREE.splice(1, 0);

            function findReferenceNodeById(nodes, categoryId) {
                var found = null;
                (nodes || []).some(function (node) {
                if (!node) return false;
                if (node.categoryId === categoryId) {
                    found = node;
                    return true;
                }
                found = findReferenceNodeById(node.children || [], categoryId);
                return !!found;
                });
                return found;
            }

            function upsertReferenceChild(parentId, childNode) {
                var parentNode = findReferenceNodeById(CATEGORY_REFERENCE_TREE, parentId);
                if (!parentNode || !childNode || !childNode.categoryId) return;

                parentNode.children = parentNode.children || [];
                var existingNode = findReferenceNodeById(parentNode.children, childNode.categoryId);
                if (!existingNode) {
                parentNode.children.push(childNode);
                return;
                }

                existingNode.title = childNode.title || existingNode.title;
                existingNode.url = childNode.url || existingNode.url;
                (childNode.children || []).forEach(function (grandchildNode) {
                upsertReferenceChild(existingNode.categoryId, grandchildNode);
                });
            }

            upsertReferenceChild("60", {
                categoryId: "298",
                title: "Dispositivos Convencionales",
                url: "/shop/category/deteccion-de-fuego-dispositivos-convencionales-298",
                children: [{
                categoryId: "299",
                title: "Detectores de Humo",
                url: "/shop/category/deteccion-de-fuego-dispositivos-convencionales-detectores-de-humo-299",
                children: []
                }]
            });

            function cleanText(value) {
                return (value || "")
                    .replace(/\s+/g, " ")
                    .replace(/Ã¡/g, "á")
                    .replace(/Ã©/g, "é")
                    .replace(/Ã­/g, "í")
                    .replace(/Ã³/g, "ó")
                    .replace(/Ãº/g, "ú")
                    .replace(/Ã/g, "Á")
                    .replace(/Ã‰/g, "É")
                    .replace(/Ã/g, "Í")
                    .replace(/Ã“/g, "Ó")
                    .replace(/Ãš/g, "Ú")
                    .replace(/Ã±/g, "ñ")
                    .replace(/Ã‘/g, "Ñ")
                    .replace(/Â®/g, "®")
                    .replace(/Â/g, "")
                    .trim();
            }

            function isTargetMegaMenu(menu) {
                if (!menu || !menu.classList) return false;
                if (menu.classList.contains(MENU_ROOT_CLASS)) return true;
                return !!menu.matches("#top_menu &gt; li.nav-item.position-static.dropdown &gt; div") &amp;&amp; !!menu.querySelector(SECTION_SELECTOR);
            }

            function makeEl(tag, className, text) {
                var el = document.createElement(tag);
                if (className) el.className = className;
                if (typeof text === "string") el.textContent = cleanText(text);
                return el;
            }

            function getCategoryId(url) {
                var match = (url || "").match(/-(\d+)(?:[/?#]|$)/);
                return match ? match[1] : "";
            }

            function findDirectChild(node, tagNames) {
                var names = Array.isArray(tagNames) ? tagNames : [tagNames];
                names = names.map(function (tagName) {
                return tagName.toUpperCase();
                });

                return Array.from(node.children).find(function (child) {
                return names.indexOf(child.tagName) !== -1;
                }) || null;
            }

            function findDirectLink(node) {
                return Array.from(node.children).find(function (child) {
                return child.tagName === "A" &amp;&amp; child.hasAttribute("href");
                }) || null;
            }

            function getNodeChildren(node) {
                if (!node) return [];
                if (node.children &amp;&amp; node.children.length) {
                return node.children;
                }

                var refNode = node.categoryId ? CATEGORY_REFERENCE_BY_ID[node.categoryId] : null;
                return (refNode &amp;&amp; refNode.children || []).map(function (child, idx) {
                return cloneReferenceNode(child, (node.id || "node") + "-child-" + idx);
                });
            }

            function getSectionLinks(section) {
                if (!section) return [];
                var refNode = section.categoryId ? CATEGORY_REFERENCE_BY_ID[section.categoryId] : null;
                if (refNode &amp;&amp; refNode.children &amp;&amp; refNode.children.length) {
                if (section.links &amp;&amp; section.links.length) {
                    return normalizeSectionLinks(
                    section,
                    mergeNodes(
                        section.links,
                        refNode.children,
                        (section.id || "section") + "-runtime"
                    )
                    );
                }

                return refNode.children.map(function (child, idx) {
                    return cloneReferenceNode(child, (section.id || "section") + "-link-" + idx);
                });
                }

                return (section.links || []).map(function (child, idx) {
                return cloneReferenceNode(child, (section.id || "section") + "-link-" + idx);
                });
            }

            function flattenLinkTitles(link) {
                var titles = [link.title];
                getNodeChildren(link).forEach(function (child) {
                titles.push(flattenLinkTitles(child));
                });
                return titles.join(" ");
            }

            function linkMatchesTerm(link, term) {
                if (!term) return true;
                return flattenLinkTitles(link).toLowerCase().indexOf(term) !== -1;
            }

            function matchesTerm(section, term) {
                if (!term) return true;
                var haystack = (
                section.title + " " + getSectionLinks(section).map(function (link) {
                    return flattenLinkTitles(link);
                }).join(" ")
                ).toLowerCase();
                return haystack.indexOf(term) !== -1;
            }

            function filteredLinks(section, term) {
                var links = getSectionLinks(section);
                if (!term) return links.slice();
                return links.filter(function (link) {
                return linkMatchesTerm(link, term);
                });
            }

            function buildTreeFromList(listEl, sectionIndex, trail) {
                return Array.from(listEl.children)
                .map(function (itemEl, itemIndex) {
                    if (itemEl.tagName !== "LI") return null;
                    return buildTreeNode(itemEl, sectionIndex, trail + "-" + itemIndex);
                })
                .filter(Boolean);
            }

            function buildTreeNode(itemEl, sectionIndex, trail) {
                var linkEl = findDirectLink(itemEl) || itemEl.querySelector("a[href]");
                if (!linkEl) return null;

                var title = cleanText(linkEl.textContent);
                if (!title) return null;

                var href = linkEl.getAttribute("href") || linkEl.href || "";
                var categoryId = getCategoryId(href);
                var nestedList = findDirectChild(itemEl, ["UL", "OL"]);

                return {
                id: categoryId ? "cat-" + categoryId : "sec-" + sectionIndex + trail,
                categoryId: categoryId || null,
                title: title,
                url: linkEl.href,
                children: nestedList ? buildTreeFromList(nestedList, sectionIndex, trail) : []
                };
            }

            function buildLinkTreeFromIndent(col, sectionIndex) {
                var anchors = Array.from(col.querySelectorAll("nav a[href]"))
                .map(function (anchor, linkIndex) {
                    var title = cleanText(anchor.textContent);
                    if (!title) return null;
                    var href = anchor.getAttribute("href") || anchor.href || "";
                    var categoryId = getCategoryId(href);

                    return {
                    id: categoryId ? "cat-" + categoryId : "sec-" + sectionIndex + "-link-" + linkIndex,
                    categoryId: categoryId || null,
                    title: title,
                    url: anchor.href,
                    anchor: anchor
                    };
                })
                .filter(Boolean);

                if (!anchors.length) return [];

                var colLeft = col.getBoundingClientRect().left;
                var indents = anchors.map(function (item) {
                    var rect = item.anchor.getBoundingClientRect();
                    return Math.max(0, Math.round(rect.left - colLeft));
                });

                var buckets = [];
                indents.forEach(function (indent) {
                    var hasBucket = buckets.some(function (value) {
                    return Math.abs(value - indent) &lt; 14;
                    });

                    if (!hasBucket) {
                    buckets.push(indent);
                    }
                });

                buckets.sort(function (a, b) {
                    return a - b;
                });

                var root = [];
                var stack = [];

                anchors.forEach(function (item, index) {
                    var level = buckets.findIndex(function (value) {
                    return Math.abs(value - indents[index]) &lt; 14;
                    });

                    var node = {
                    id: item.id,
                    title: item.title,
                    url: item.url,
                    children: []
                    };

                    while (stack.length &amp;&amp; stack[stack.length - 1].level &gt;= level) {
                    stack.pop();
                    }

                    if (level &lt;= 0 || !stack.length) {
                    root.push(node);
                    } else {
                    stack[stack.length - 1].node.children.push(node);
                    }

                    stack.push({
                    level: level,
                    node: node
                    });
                });

                return root;
            }

            function buildLinkTree(col, sectionIndex) {
                var nav = col.querySelector("nav");
                var nestedList = nav &amp;&amp; findDirectChild(nav, ["UL", "OL"]);
                var semanticTree = nestedList ? buildTreeFromList(nestedList, sectionIndex, "") : [];

                if (semanticTree.length) {
                return semanticTree;
                }

                return buildLinkTreeFromIndent(col, sectionIndex);
            }

            function parseSections(row) {
                return Array.from(row.children)
                .map(function (col, sectionIndex) {
                    var titleLink = col.querySelector("h4 a[href]");
                    if (!titleLink) return null;

                    return {
                    id: "sec-" + sectionIndex,
                    categoryId: getCategoryId(titleLink.getAttribute("href") || titleLink.href) || null,
                    title: cleanText(titleLink.textContent),
                    url: titleLink.href,
                    links: buildLinkTree(col, sectionIndex)
                    };
                })
                .filter(function (section) {
                    return section &amp;&amp; section.title;
                });
            }

            function indexReferenceNodes(nodes, registry) {
                (nodes || []).forEach(function (node) {
                if (node &amp;&amp; node.categoryId) {
                    registry[node.categoryId] = node;
                }
                indexReferenceNodes(node &amp;&amp; node.children, registry);
                });
                return registry;
            }

            var CATEGORY_REFERENCE_BY_ID = indexReferenceNodes(CATEGORY_REFERENCE_TREE, Object.create(null));

            function cloneReferenceNode(node, fallbackId) {
                return {
                id: node.categoryId ? "cat-" + node.categoryId : fallbackId,
                categoryId: node.categoryId || null,
                title: cleanText(node.title),
                url: node.url,
                children: (node.children || []).map(function (child, idx) {
                    return cloneReferenceNode(child, fallbackId + "-" + idx);
                })
                };
            }

            function getNodeKey(node) {
                return (node &amp;&amp; (node.categoryId || getCategoryId(node.url) || cleanText(node.title).toLowerCase())) || "";
            }

            function normalizePath(url) {
                if (!url) return "";
                try {
                return new URL(url, window.location.origin).pathname.replace(/\/+$/, "");
                } catch (err) {
                return String(url)
                    .replace(/^https?:\/\/[^/]+/i, "")
                    .replace(/[?#].*$/, "")
                    .replace(/\/+$/, "");
                }
            }

            function isSameCategory(leftNode, rightNode) {
                if (!leftNode || !rightNode) return false;
                if (leftNode.categoryId &amp;&amp; rightNode.categoryId) {
                return leftNode.categoryId === rightNode.categoryId;
                }

                var leftPath = normalizePath(leftNode.url);
                var rightPath = normalizePath(rightNode.url);
                if (leftPath &amp;&amp; rightPath) {
                return leftPath === rightPath;
                }

                return cleanText(leftNode.title).toLowerCase() === cleanText(rightNode.title).toLowerCase();
            }

            function getPreferredLinkIndex(links) {
                if (!links || !links.length) return 0;
                var firstWithChildren = links.findIndex(function (link) {
                return getNodeChildren(link).length &gt; 0;
                });
                return firstWithChildren &gt; -1 ? firstWithChildren : 0;
            }

            function normalizeSectionLinks(section, links) {
                return (links || []).filter(function (link) {
                return !isSameCategory(section, link);
                });
            }

            function mergeNodes(existingNodes, referenceNodes, prefix) {
                var existingByKey = Object.create(null);
                (existingNodes || []).forEach(function (node) {
                    var key = getNodeKey(node);
                    if (key) {
                    existingByKey[key] = node;
                    }
                });

                var merged = [];

                (referenceNodes || []).forEach(function (refNode, idx) {
                    var refKey = getNodeKey(refNode);
                    var existingNode = refKey ? existingByKey[refKey] : null;
                    var baseNode = existingNode || cloneReferenceNode(refNode, prefix + "-" + idx);

                    merged.push({
                    id: baseNode.id || (refNode.categoryId ? "cat-" + refNode.categoryId : prefix + "-" + idx),
                    categoryId: baseNode.categoryId || refNode.categoryId || getCategoryId(baseNode.url || refNode.url) || null,
                    title: cleanText(baseNode.title || refNode.title),
                    url: baseNode.url || refNode.url,
                    children: mergeNodes(baseNode.children || [], refNode.children || [], prefix + "-" + idx)
                    });

                    if (refKey) {
                    delete existingByKey[refKey];
                    }
                });

                Object.keys(existingByKey).forEach(function (key) {
                    merged.push(existingByKey[key]);
                });

                return merged;
            }

            function enrichSections(sections) {
                return (sections || []).map(function (section, index) {
                var refNode = section.categoryId ? CATEGORY_REFERENCE_BY_ID[section.categoryId] : null;
                if (!refNode) return section;

                return {
                    id: section.id,
                    categoryId: section.categoryId,
                    title: cleanText(section.title || refNode.title),
                    url: section.url || refNode.url,
                    links: normalizeSectionLinks(
                    section,
                    mergeNodes(section.links || [], refNode.children || [], "sec-" + index + "-ref")
                    )
                };
                });
            }

            function indexNodesByCategoryId(nodes) {
                var registry = Object.create(null);
                (nodes || []).forEach(function (node) {
                if (node &amp;&amp; node.categoryId) {
                    registry[node.categoryId] = node;
                }
                });
                return registry;
            }

            function buildSectionsFromReference(parsedSections) {
                if (!CATEGORY_REFERENCE_TREE || CATEGORY_REFERENCE_TREE.length &lt; 2) {
                return enrichSections(parsedSections || []);
                }

                var parsedById = indexNodesByCategoryId(parsedSections || []);

                return CATEGORY_REFERENCE_TREE.map(function (refNode, index) {
                var parsedSection = parsedById[refNode.categoryId] || null;
                var sectionBase = {
                    id: parsedSection &amp;&amp; parsedSection.id ? parsedSection.id : "sec-" + index,
                    categoryId: refNode.categoryId || null,
                    title: cleanText((parsedSection &amp;&amp; parsedSection.title) || refNode.title),
                    url: (parsedSection &amp;&amp; parsedSection.url) || refNode.url,
                    links: mergeNodes(
                    (parsedSection &amp;&amp; parsedSection.links) || [],
                    refNode.children || [],
                    "sec-" + index + "-ref"
                    )
                };

                sectionBase.links = normalizeSectionLinks(sectionBase, sectionBase.links);
                return sectionBase;
                }).filter(function (section) {
                return section &amp;&amp; section.title;
                });
            }

            function ensureMenuScaffold(menu) {
                if (!menu) return null;

                var sectionEl = menu.querySelector(SECTION_SELECTOR);
                if (!sectionEl) {
                sectionEl = makeEl("section", "s_mega_menu_multi_menus py-4 o_colored_level o_cc o_cc1");
                menu.appendChild(sectionEl);
                }

                var container = Array.from(sectionEl.children).find(function (child) {
                return child.classList &amp;&amp; child.classList.contains("container");
                }) || null;
                if (!container) {
                container = makeEl("div", "container");
                sectionEl.appendChild(container);
                }

                var row = Array.from(container.children).find(function (child) {
                return child.classList &amp;&amp; child.classList.contains("row");
                }) || null;
                if (!row) {
                row = makeEl("div", "row");
                container.appendChild(row);
                }

                return {
                sectionEl: sectionEl,
                sourceRow: row
                };
            }

            function resetClonedMenu(menu) {
                var sectionEl = menu.querySelector(SECTION_SELECTOR);
                if (!sectionEl) return;

                Array.from(sectionEl.querySelectorAll(".syscomify-topbar, .syscomify-shell, .syscomify-mobile")).forEach(function (node) {
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                });

                var sourceRow = sectionEl.querySelector(".syscomify-source");
                if (sourceRow) {
                sourceRow.classList.remove("syscomify-source");
                }

                sectionEl.classList.remove("syscomify-mode-app", "syscomify-mode-classic");
                delete sectionEl._syscomifyRender;
                delete menu._syscomifyRender;
                menu.removeAttribute(PROCESSED_ATTR);
            }

            function removeDuplicatedInteractiveBlocks(sectionEl) {
                if (!sectionEl) return;

                [".syscomify-topbar", ".syscomify-shell", ".syscomify-mobile"].forEach(function (selector) {
                Array.from(sectionEl.querySelectorAll(selector)).forEach(function (node, index) {
                    if (index &gt; 0 &amp;&amp; node.parentNode) {
                    node.parentNode.removeChild(node);
                    }
                });
                });
            }

            function removeDuplicatedMenuSections(menu) {
                if (!menu) return;

                var sections = Array.from(menu.querySelectorAll(SECTION_SELECTOR));
                if (sections.length &lt; 2) return;

                var primarySection = sections.find(function (section) {
                return section.querySelector(".syscomify-shell") || section.classList.contains("syscomify-mode-app");
                }) || sections[0];

                sections.forEach(function (section) {
                if (section !== primarySection &amp;&amp; section.parentNode) {
                    section.parentNode.removeChild(section);
                }
                });
            }

            function buildInteractiveMenu(sectionEl, sections, sourceRow) {
                if (!sourceRow || sections.length &lt; 2) return;
                removeDuplicatedInteractiveBlocks(sectionEl);
                if (sectionEl.querySelector(".syscomify-shell")) return;

                sectionEl.classList.add("syscomify-mode-app");
                sourceRow.classList.add("syscomify-source");
                var hasSourceContent = Array.from(sourceRow.children).some(function (child) {
                return child &amp;&amp; child.nodeType === 1;
                });

                var topbar = makeEl("div", "syscomify-topbar");

                var searchWrap = makeEl("div", "syscomify-search");
                var searchInput = document.createElement("input");
                searchInput.type = "search";
                searchInput.placeholder = cleanText("Buscar en el menÃº");
                searchInput.setAttribute("autocomplete", "off");
                searchWrap.appendChild(searchInput);

                var toggleBtn = makeEl("button", "syscomify-toggle", "ClÃ¡sico");
                toggleBtn.type = "button";

                topbar.appendChild(searchWrap);
                topbar.appendChild(toggleBtn);
                if (!hasSourceContent) {
                toggleBtn.remove();
                toggleBtn = {
                    textContent: "",
                    addEventListener: function () {}
                };
                }

                var shell = makeEl("div", "syscomify-shell");

                var leftPane = makeEl("aside", "syscomify-pane syscomify-pane--left");
                var leftList = makeEl("ul", "syscomify-list");
                leftPane.appendChild(leftList);

                var centerPane = makeEl("section", "syscomify-pane syscomify-pane--center");
                var centerHeading = makeEl("h3", "syscomify-heading");
                var centerSubtitle = makeEl("div", "syscomify-subtitle");
                var centerLinks = makeEl("ul", "syscomify-links");
                centerPane.appendChild(centerHeading);
                centerPane.appendChild(centerSubtitle);
                centerPane.appendChild(centerLinks);

                var rightPane = makeEl("aside", "syscomify-pane syscomify-pane--right");
                shell.appendChild(leftPane);
                shell.appendChild(centerPane);
                shell.appendChild(rightPane);

                var mobilePane = makeEl("section", "syscomify-mobile");

                sourceRow.parentNode.insertBefore(topbar, sourceRow);
                sourceRow.parentNode.insertBefore(shell, sourceRow.nextSibling);
                sourceRow.parentNode.insertBefore(mobilePane, shell.nextSibling);

                var state = {
                term: "",
                sectionIndex: 0,
                linkIndex: 0,
                mobilePath: []
                };

                function setActiveSection(index, sectionList) {
                var sourceSections = sectionList || sections;
                var targetSection = sourceSections[index] || sourceSections[0];
                state.sectionIndex = index;
                state.linkIndex = getPreferredLinkIndex(filteredLinks(targetSection, state.term.toLowerCase()));
                }

                function currentView() {
                var term = state.term.toLowerCase();
                var visibleSections = sections.filter(function (section) {
                    return matchesTerm(section, term);
                });

                if (!visibleSections.length) {
                    return {
                    sections: [],
                    section: null,
                    links: [],
                    selectedLink: null
                    };
                }

                if (state.sectionIndex &gt; visibleSections.length - 1) {
                    state.sectionIndex = 0;
                }

                var activeSection = visibleSections[state.sectionIndex];
                var links = filteredLinks(activeSection, term);

                if (!links.length) {
                    var firstSectionWithLinks = visibleSections.find(function (section) {
                    return filteredLinks(section, term).length &gt; 0;
                    });

                    if (firstSectionWithLinks) {
                    state.sectionIndex = visibleSections.indexOf(firstSectionWithLinks);
                    activeSection = firstSectionWithLinks;
                    links = filteredLinks(activeSection, term);
                    }
                }

                if (state.linkIndex &gt; links.length - 1) {
                    state.linkIndex = getPreferredLinkIndex(links);
                }

                return {
                    sections: visibleSections,
                    section: activeSection,
                    links: links,
                    selectedLink: links[state.linkIndex] || null
                };
                }

                function isMobileViewport() {
                return window.matchMedia("(max-width: " + MOBILE_BREAKPOINT + "px)").matches;
                }

                function syncResponsiveMode() {
                if (!isMobileViewport()) return;
                sectionEl.classList.add("syscomify-mode-app");
                sectionEl.classList.remove("syscomify-mode-classic");
                toggleBtn.textContent = cleanText("ClÃ¡sico");
                }

                function getMobileEntryChildren(entry) {
                if (!entry) return [];
                return entry.type === "section" ? getSectionLinks(entry.node) : getNodeChildren(entry.node);
                }

                function getMobileEntryMeta(entry) {
                var count = getMobileEntryChildren(entry).length;
                if (!count) return "";
                return count + (count === 1 ? " " + cleanText(" categorÃ­a") : " " + cleanText(" categorÃ­as"));
                }

                function getMobileEntries() {
                var term = state.term.toLowerCase();

                if (!state.mobilePath.length) {
                    return sections
                    .map(function (section, idx) {
                    return {
                        type: "section",
                        node: section,
                        sectionIndex: idx,
                        linkIndex: 0
                    };
                    })
                    .filter(function (entry) {
                    return !term || matchesTerm(entry.node, term);
                    });
                }

                var parentEntry = state.mobilePath[state.mobilePath.length - 1];
                return getMobileEntryChildren(parentEntry)
                    .map(function (node, idx) {
                    return {
                        type: "link",
                        node: node,
                        sectionIndex: parentEntry.sectionIndex,
                        linkIndex: idx
                    };
                    })
                    .filter(function (entry) {
                    return !term || linkMatchesTerm(entry.node, term);
                    });
                }

                function renderMobile() {
                mobilePane.innerHTML = "";

                if (!isMobileViewport() || !sectionEl.classList.contains("syscomify-mode-app")) {
                    return;
                }

                var headerWrap = makeEl("div", "syscomify-mobile-wrap");
                var header = makeEl("div", "syscomify-mobile-header");
                var currentParent = state.mobilePath.length ? state.mobilePath[state.mobilePath.length - 1] : null;
                var title = makeEl("h3", "syscomify-mobile-title", currentParent ? currentParent.node.title : "CategorÃ­as");
                var tools = makeEl("div", "syscomify-mobile-tools");

                header.appendChild(title);

                if (currentParent) {
                    var viewAll = document.createElement("a");
                    viewAll.className = "syscomify-mobile-view-all";
                    viewAll.href = currentParent.node.url;
                    viewAll.textContent = "Ver todas";
                    tools.appendChild(viewAll);
                }

                if (tools.children.length) {
                    header.appendChild(tools);
                }

                headerWrap.appendChild(header);

                if (currentParent) {
                    var backBtn = document.createElement("a");
                    backBtn.className = "syscomify-mobile-back";
                    backBtn.href = "#";
                    backBtn.textContent = "Volver";
                    backBtn.addEventListener("click", function (ev) {
                    ev.preventDefault();
                    state.mobilePath.pop();

                    if (state.mobilePath.length === 1) {
                        state.linkIndex = state.mobilePath[0].linkIndex || getPreferredLinkIndex(getMobileEntryChildren(state.mobilePath[0]));
                    }

                    render();
                    });
                    headerWrap.appendChild(backBtn);
                }

                mobilePane.appendChild(headerWrap);

                var items = getMobileEntries();
                var list = makeEl("ul", "syscomify-mobile-list");

                if (!items.length) {
                    mobilePane.appendChild(makeEl("div", "syscomify-empty", "No hay categorÃ­as para mostrar."));
                    return;
                }

                items.forEach(function (entry) {
                    var li = document.createElement("li");
                    var childCount = getMobileEntryChildren(entry).length;
                    var item = document.createElement(childCount ? "button" : "a");
                    item.className = "syscomify-mobile-item";
                    if (childCount) {
                    item.type = "button";
                    } else {
                    item.href = entry.node.url;
                    }
                    item.innerHTML =
                    '<span class="syscomify-mobile-item-main">' +
                        '<span class="syscomify-mobile-item-title">' + entry.node.title + '</span>' +
                        (getMobileEntryMeta(entry) ? '<span class="syscomify-mobile-item-meta">' + getMobileEntryMeta(entry) + '</span>' : '') +
                    '</span>';

                    item.addEventListener("click", function (ev) {
                    if (!childCount) return;
                    ev.preventDefault();
                    ev.stopPropagation();

                    if (entry.type === "section") {
                        state.sectionIndex = entry.sectionIndex;
                        state.linkIndex = getPreferredLinkIndex(getSectionLinks(entry.node));
                    } else if (state.mobilePath.length === 1) {
                        state.linkIndex = entry.linkIndex;
                    }

                    state.mobilePath.push(entry);
                    render();
                    });

                    li.appendChild(item);
                    list.appendChild(li);
                });

                mobilePane.appendChild(list);
                }

                function renderLeft(view) {
                leftList.innerHTML = "";

                if (!view.sections.length) {
                    leftPane.innerHTML = '<div class="syscomify-empty">' + cleanText("No encontrÃ© categorÃ­as con ese texto.") + '</div>';
                    return;
                }

                if (!leftPane.contains(leftList)) {
                    leftPane.innerHTML = "";
                    leftPane.appendChild(leftList);
                }

                view.sections.forEach(function (section, idx) {
                    var li = document.createElement("li");
                    var btn = document.createElement("button");
                    btn.type = "button";
                    btn.className = "syscomify-section-btn" + (idx === state.sectionIndex ? " is-active" : "");
                    btn.innerHTML =
                    '<span><span>' + section.title + '</span><span class="syscomify-section-meta">' +
                    getSectionLinks(section).length + " " + cleanText(" subcategorÃ­as") + '</span></span>' +
                    '<span class="syscomify-arrow">›</span>';

                    btn.addEventListener("mouseenter", function () {
                    setActiveSection(idx, view.sections);
                    render();
                    });

                    btn.addEventListener("focus", function () {
                    setActiveSection(idx, view.sections);
                    render();
                    });

                    btn.addEventListener("click", function () {
                    setActiveSection(idx, view.sections);
                    render();
                    });

                    li.appendChild(btn);
                    leftList.appendChild(li);
                });
                }

                function renderCenter(view) {
                centerLinks.innerHTML = "";

                if (!view.section) {
                    centerHeading.textContent = "Sin resultados";
                    centerSubtitle.textContent = "Prueba con otro texto.";
                    centerPane.appendChild(centerLinks);
                    return;
                }

                centerHeading.textContent = view.section.title;
                centerSubtitle.textContent = view.links.length
                    ? view.links.length + " " + cleanText(" accesos directos disponibles")
                    : cleanText("Esta categorÃ­a no tiene enlaces visibles.");

                if (!view.links.length) {
                    centerLinks.innerHTML = '<li><div class="syscomify-empty">' + cleanText("No hay subcategorÃ­as para mostrar aquÃ­.") + '</div></li>';
                    return;
                }

                view.links.forEach(function (link, idx) {
                    var li = document.createElement("li");
                    var a = document.createElement("a");
                    var childCount = getNodeChildren(link).length;
                    a.className = "syscomify-link" + (idx === state.linkIndex ? " is-active" : "");
                    a.href = link.url;
                    a.innerHTML = '<span>' + link.title + '</span>';

                    a.addEventListener("mouseenter", function () {
                    state.linkIndex = idx;
                    renderRight(currentView());
                    updateCenterActiveState();
                    });

                    a.addEventListener("focus", function () {
                    state.linkIndex = idx;
                    renderRight(currentView());
                    updateCenterActiveState();
                    });

                    a.addEventListener("click", function (ev) {
                    if (!childCount) return;
                    ev.preventDefault();
                    state.linkIndex = idx;
                    render();
                    });

                    li.appendChild(a);

                    if (childCount) {
                    var childList = makeEl("ul", "syscomify-sub-links");

                    getNodeChildren(link).forEach(function (child) {
                        var childItem = document.createElement("li");
                        var childLink = document.createElement("a");
                        childLink.className = "syscomify-sub-link";
                        childLink.href = child.url;
                        childLink.innerHTML = '&lt;span&gt;' + child.title + '&lt;/span&gt;';
                        childItem.appendChild(childLink);
                        childList.appendChild(childItem);
                    });

                    li.appendChild(childList);
                    }

                    centerLinks.appendChild(li);
                });
                }

                function updateCenterActiveState() {
                Array.from(centerLinks.querySelectorAll(".syscomify-link")).forEach(function (linkEl, idx) {
                    linkEl.classList.toggle("is-active", idx === state.linkIndex);
                });
                }

                function renderRight(view) {
                rightPane.innerHTML = "";

                if (!view.section) {
                    rightPane.innerHTML = '<div class="syscomify-empty">' + cleanText("Sin informaciÃ³n para mostrar.") + '</div>';
                    return;
                }

                var selectedLink = view.selectedLink;
                var finalLinks = selectedLink ? getNodeChildren(selectedLink) : [];
                var card = makeEl("div", "syscomify-card");
                var label = makeEl("div", "syscomify-card-label", selectedLink ? "SubcategorÃ­a seleccionada" : "CategorÃ­a principal");
                var title = makeEl("h4", "syscomify-card-title", selectedLink ? selectedLink.title : view.section.title);
                var text = makeEl(
                    "div",
                    "syscomify-card-text",
                    selectedLink
                    ? "Acceso rÃ¡pido" 
                    : "Selecciona una subcategorÃ­a del panel central o entra directo a la categorÃ­a principal."
                );

                var cta = document.createElement("a");
                cta.className = "syscomify-cta";
                cta.href = selectedLink ? selectedLink.url : view.section.url;
                cta.textContent = selectedLink ? "Ir a " + selectedLink.title : "Ver todo en " + view.section.title;

                card.appendChild(label);
                card.appendChild(title);
                card.appendChild(text);
                card.appendChild(cta);
                rightPane.appendChild(card);

                if (selectedLink &amp;&amp; finalLinks.length) {
                    text.textContent = cleanText("Estas son las categorÃ­as finales disponibles dentro de esta subcategorÃ­a.");
                }

                var quickTitle = makeEl("h5", "syscomify-mini-title", "Accesos rÃ¡pidos");
                var chipList = makeEl("ul", "syscomify-chip-list");

                view.links.forEach(function (link) {
                    var li = document.createElement("li");
                    var a = document.createElement("a");
                    a.className = "syscomify-chip";
                    a.href = link.url;
                    a.textContent = link.title;
                    li.appendChild(a);
                    chipList.appendChild(li);
                });

                rightPane.appendChild(quickTitle);
                rightPane.appendChild(chipList);

                if (finalLinks.length) {
                    var finalTitle = makeEl("h5", "syscomify-mini-title", "CategorÃ­as finales");
                    var finalList = makeEl("ul", "syscomify-right-links");

                    finalLinks.forEach(function (link) {
                    var finalItem = document.createElement("li");
                    var finalLink = document.createElement("a");
                    finalLink.className = "syscomify-right-link";
                    finalLink.href = link.url;
                    finalLink.innerHTML = '&lt;span&gt;' + link.title + '&lt;/span&gt;&lt;small&gt;abrir&lt;/small&gt;';
                    finalItem.appendChild(finalLink);
                    finalList.appendChild(finalItem);
                    });

                    rightPane.appendChild(finalTitle);
                    rightPane.appendChild(finalList);
                }
                }

                function render() {
                syncResponsiveMode();
                var view = currentView();
                renderLeft(view);
                renderCenter(view);
                renderRight(view);
                renderMobile();
                }

                searchInput.addEventListener("input", function () {
                state.term = cleanText(searchInput.value);
                setActiveSection(0);
                state.mobilePath = [];
                render();
                });

                toggleBtn.addEventListener("click", function () {
                if (isMobileViewport()) {
                    syncResponsiveMode();
                    return;
                }
                var isApp = sectionEl.classList.contains("syscomify-mode-app");
                sectionEl.classList.toggle("syscomify-mode-app", !isApp);
                sectionEl.classList.toggle("syscomify-mode-classic", isApp);
                toggleBtn.textContent = isApp ? "Nuevo" : "ClÃ¡sico";
                });

                window.addEventListener("resize", function () {
                render();
                });

                window.addEventListener("orientationchange", function () {
                render();
                });

                sectionEl._syscomifyRender = render;
                var ownerMenu = sectionEl.closest(MENU_SELECTOR);
                if (ownerMenu) {
                ownerMenu._syscomifyRender = render;
                }

                setActiveSection(0);
                render();
                window.requestAnimationFrame(render);
                window.setTimeout(render, 150);
            }

            function enhanceMenus(root) {
                (root || document).querySelectorAll(MENU_SELECTOR).forEach(function (menu) {
                if (!isTargetMegaMenu(menu)) return;
                removeDuplicatedMenuSections(menu);
                if (menu.getAttribute(PROCESSED_ATTR) === "1") {
                    var existingSection = menu.querySelector(SECTION_SELECTOR);
                    removeDuplicatedInteractiveBlocks(existingSection);
                    var rerender = menu._syscomifyRender || (existingSection &amp;&amp; existingSection._syscomifyRender);
                    if (typeof rerender === "function") {
                    return;
                    }
                    resetClonedMenu(menu);
                }

                try {
                    menu.classList.add(MENU_ROOT_CLASS);

                    var scaffold = ensureMenuScaffold(menu);
                    if (!scaffold) return;

                    var parsedSections = parseSections(scaffold.sourceRow);
                    var sections = buildSectionsFromReference(parsedSections);
                    if (sections.length &lt; 2) return;

                    menu.setAttribute(PROCESSED_ATTR, "1");
                    buildInteractiveMenu(scaffold.sectionEl, sections, scaffold.sourceRow);
                } catch (error) {
                    console.error("[Syscomify Mega Menu]", error);
                }
                });
            }

            document.addEventListener("DOMContentLoaded", function () {
                enhanceMenus(document);
            });

            window.addEventListener("load", function () {
                enhanceMenus(document);
            });

            var pendingEnhance = null;
            var observer = new MutationObserver(function () {
                window.clearTimeout(pendingEnhance);
                pendingEnhance = window.setTimeout(function () {
                enhanceMenus(document);
                }, 120);
            });

            observer.observe(document.documentElement, {
                childList: true,
                subtree: true
            });

            function syscomifyRefreshAfterClick() {
                window.setTimeout(function () {
                enhanceMenus(document);
                }, 80);
            }

            document.addEventListener("click", syscomifyRefreshAfterClick, true);
            document.addEventListener("touchend", syscomifyRefreshAfterClick, true);
            })();
            
            // document.addEventListener("DOMContentLoaded", function () {
            //     document.querySelectorAll('header a[href="/shop"], header a[href^="/shop?"]').forEach(function (link) {
            //         var item = link.closest("li");
            //         if (item) {
            //             item.remove();
            //         } else {
            //             link.remove();
            //         }
            //     });
            // });
            (function() {
                function corregirPosicionBoton() {
                    const navContainer = document.querySelector('#top_menu') || document.querySelector('.navbar-nav') || document.querySelector('header ul');
                    if (!navContainer) return;

                    const inicioItem = navContainer.querySelector('a[href="/"]')?.closest('li');
                    const productosItem = Array.from(navContainer.querySelectorAll('li')).find(li =&gt; li.textContent.includes('Productos'));

                    if (inicioItem &amp;&amp; productosItem) {
                        if (inicioItem.nextElementSibling === productosItem) return;

                        inicioItem.insertAdjacentElement('afterend', productosItem);
                        console.log("✅ [Guardián] Botón de 'Productos' regresado a su lugar.");
                    }
                }

                const guardianMenu = new MutationObserver(function() {
                    guardianMenu.disconnect();
                    corregirPosicionBoton();
                    conectarGuardian();
                });

                function conectarGuardian() {
                    const headerTarget = document.querySelector('header') || document.body;
                    guardianMenu.observe(headerTarget, { childList: true, subtree: true });
                }

                corregirPosicionBoton();
                
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', conectarGuardian);
                } else {
                    conectarGuardian();
                }
            })();
            
            document.addEventListener("DOMContentLoaded", function() {
              const copyrightBlocks = document.querySelectorAll(".o_footer_copyright");
              const currentYear = new Date().getFullYear();
              const companyName = "Maple Alarm Systems";
              
              copyrightBlocks.forEach(function(block, index) {
                if(index &gt; 0) {
                  block.remove();
                  return;
                }
                
                block.innerHTML = `
                  <div class="container py-3">
                    <div class="row row-gap-2">
                      <div class="text-center col-md text-md-start">
                        <span class="o_footer_copyright_name me-2 small">
                          Todos los Derechos Reservados © ${currentYear} ${companyName}
                        </span>
                      </div>
                    </div>
                  </div>
                `;
              });
            });
            
            document.addEventListener("DOMContentLoaded", function() {
                if(window.location.pathname.includes('/helpdesk')) {
                    var helpdeskLink = document.querySelector('.nav-item a[href="/helpdesk"]');
                    if(helpdeskLink) {
                        helpdeskLink.classList.add('active');
                    }
                }
            });
            
            document.addEventListener("DOMContentLoaded", function() {
                const botonBarraMovil = document.querySelector('.btn.nav-link.oi.oi-chevron-left.ms-n2.px-2');
                if (botonBarraMovil) {
                  botonBarraMovil.textContent = 'Regresar';
                  botonBarraMovil.style.color = 'white';
                  botonBarraMovil.style.backgroundColor = 'black';
                  botonBarraMovil.style.margin = '1rem 1rem';
                  botonBarraMovil.style.padding = '0rem 1rem';
                }
            });
            
            document.addEventListener("DOMContentLoaded", () =&gt; {
                const enlaceSucursales = document.querySelector('div.container &gt; a.oe_unremovable.btn.btn-primary[href="/contactus"]:first-of-type');
                if (enlaceSucursales) {
                  enlaceSucursales.textContent = 'Cotizaciones';
                }
            });
            
            
            
            
            document.addEventListener('DOMContentLoaded',function(){
                function adiDesktopify(){
                    if(window.innerWidth &lt; 1200){return;}

                    document.querySelectorAll('.o_mega_menu.fetchEcomCategories').forEach(function(menu){

                        var center = menu.querySelector('.syscomify-pane--center');

                        if(!center || center.dataset.adiApplied==='1'){
                            return;
                        }

                        center.dataset.adiApplied='1';

                        var links = center.querySelector('.syscomify-links');

                        if(links){
                          if (links.children.length &gt; 12) {
                              links.style.display = 'grid';
                              links.style.gridTemplateColumns = 'repeat(3, minmax(170px, 1fr))';
                              links.style.gap = '24px';
                              links.style.width = '100%';
                          }
                        }
                    });
                }

                adiDesktopify();
            });

            const subtitleObserver = new MutationObserver((mutations) =&gt; {
              const subtitles = document.querySelectorAll('.syscomify-section-meta');
              if(subtitles.length &gt; 0) {
                subtitles.forEach(subtitle =&gt; subtitle.remove());
              }
            });

            document.addEventListener("DOMContentLoaded", function () {
                            subtitleObserver.observe(document.body, {
                                childList: true,
                                subtree: true
                            });
                        });

            document.addEventListener("DOMContentLoaded", function () {
                const toggles = document.querySelectorAll(".dropdown-toggle.nav-link.o_mega_menu_toggle");
            
                toggles.forEach(toggle =&gt; {
                    const parentLi = toggle.closest("li.nav-item.dropdown");
                    if (!parentLi) return;
            
                    const megaMenu = parentLi.querySelector(".o_mega_menu, .dropdown-menu");
            
                    let intendedState = false;
            
                    toggle.removeAttribute("data-bs-toggle");
            
                    const blockEvents = (e) =&gt; {
                        e.preventDefault();
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                    };
            
                    ["mouseenter", "mouseleave", "mouseover", "mouseout"].forEach(evt =&gt; {
                        parentLi.addEventListener(evt, blockEvents, true);
                        toggle.addEventListener(evt, blockEvents, true);
                    });

                    const observer = new MutationObserver((mutations) =&gt; {
                        mutations.forEach((mutation) =&gt; {
                            if (mutation.attributeName === "class") {
                                const hasShow = parentLi.classList.contains("show");
                                
                                if (intendedState &amp;&amp; !hasShow) {

                                    parentLi.classList.add("show");
                                    toggle.classList.add("show");
                                    toggle.setAttribute("aria-expanded", "true");
                                    if (megaMenu) megaMenu.classList.add("show");
                                } else if (!intendedState &amp;&amp; hasShow) {
                                    parentLi.classList.remove("show");
                                    toggle.classList.remove("show");
                                    toggle.setAttribute("aria-expanded", "false");
                                    if (megaMenu) megaMenu.classList.remove("show");
                                }
                            }
                        });
                    });
            
                    observer.observe(parentLi, { attributes: true, attributeFilter: ["class"] });
            
                    toggle.addEventListener("click", function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        e.stopImmediatePropagation();

                        intendedState = !intendedState;

                        if (intendedState) {
                            parentLi.classList.add("show");
                            toggle.classList.add("show");
                            toggle.setAttribute("aria-expanded", "true");
                            if (megaMenu) megaMenu.classList.add("show");
                        } else {
                            parentLi.classList.remove("show");
                            toggle.classList.remove("show");
                            toggle.setAttribute("aria-expanded", "false");
                            if (megaMenu) megaMenu.classList.remove("show");
                        }
                    }, true);
            
                    document.addEventListener("click", function (e) {
                        if (intendedState &amp;&amp; !parentLi.contains(e.target)) {
                            intendedState = false;
                            parentLi.classList.remove("show");
                            toggle.classList.remove("show");
                            toggle.setAttribute("aria-expanded", "false");
                            if (megaMenu) megaMenu.classList.remove("show");
                        }
                    }, true);
                });
            });





            document.addEventListener("DOMContentLoaded", function () {
              const categoryItems = document.querySelectorAll("#products_grid_before li.nav-item");
              categoryItems.forEach(item =&gt; {
                const children = Array.from(item.children);
                const subMenu = children.find(child =&gt; child.matches &amp;&amp; child.matches("ul.nav-hierarchy"));
                const mainLink = children.find(child =&gt; child.matches &amp;&amp; child.matches("a"));
                if (!subMenu || !mainLink || mainLink.getAttribute("href") === "/shop") {
                  return;
                }

                let toggleBtn = children.find(child =&gt; child.classList &amp;&amp; child.classList.contains("category-toggle-btn"));
                if (!toggleBtn) {
                  toggleBtn = document.createElement("span");
                  toggleBtn.className = "category-toggle-btn";
                  mainLink.after(toggleBtn);
                }

                toggleBtn.setAttribute("role", "button");
                toggleBtn.setAttribute("tabindex", "0");
                toggleBtn.setAttribute("aria-label", "Alternar subcategorías");
                toggleBtn.setAttribute("aria-expanded", item.classList.contains("is-expanded") ? "true" : "false");

                const toggleCategory = function (e) {
                  e.preventDefault();
                  e.stopPropagation();
                  const expanded = item.classList.toggle("is-expanded");
                  toggleBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
                };

                toggleBtn.addEventListener("click", toggleCategory);
                toggleBtn.addEventListener("keydown", function (e) {
                  if (e.key === "Enter" || e.key === " ") {
                    toggleCategory(e);
                  }
                });
              });
            });

            document.addEventListener("DOMContentLoaded", function() {
                const observerStockNotification = new MutationObserver(() =&gt; {
                    const stockDiv = document.querySelector("#stock_notification_div");

                    if (stockDiv) {
                        stockDiv.remove();
                        observerStockNotification.disconnect();
                    }
                });

                observerStockNotification.observe(document.body, {
                    childList: true,
                    subtree: true
                });
            });

            document.addEventListener("DOMContentLoaded", function() {
                const topMenu = document.querySelector("#top_menu");
                if (!topMenu) return;

                const observerProductos = new MutationObserver (() =&gt; {
                    const topMenu = document.querySelector("#top_menu");

                    const inicio = topMenu.querySelector(
                        'span[data-oe-id="5"]'
                    )?.closest("li");

                    const productos = topMenu.querySelector(
                        "li.nav-item.position-static.dropdown"
                    );

                    if (inicio &amp;&amp; productos &amp;&amp; inicio.nextElementSibling !== productos) {
                        observerProductos.disconnect();

                        inicio.insertAdjacentElement("afterend", productos);
                        
                        observerProductos.observe(topMenu, {
                            childList: true,
                            subtree: true
                        });
                    }
                });

                observerProductos.observe(topMenu, {
                        childList: true,
                        subtree: true
                });

            });

            (function () {
                const orderMap = {};
                var CATEGORY_REFERENCE_TREE = [
  {
    "categoryId": "374",
    "title": "Sistemas de Alarma",
    "url": "/shop/category/sistemas-de-alarma-374",
    "children": [
      {
        "categoryId": "425",
        "title": "Kits listos para Instalar",
        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-kits-listos-para-instalar-425",
        "children": [
          {
            "categoryId": "879",
            "title": "Alarmas Inalámbricas",
            "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-kits-listos-para-instalar-sistemas-de-alarma-kits-listos-para-instalar-alarmas-inalambricas-879",
            "children": []
          },
          {
            "categoryId": "498",
            "title": "Alarmas cableadas",
            "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-kits-listos-para-instalar-sistemas-de-alarma-kits-listos-para-instalar-alarmas-cableadas-498",
            "children": []
          }
        ]
      },
      {
        "categoryId": "805",
        "title": "Comprar por Familia de Productos",
        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-comprar-por-familia-de-productos-805",
        "children": [
          {
            "categoryId": "806",
            "title": "Hikvision AX PRO",
            "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-comprar-por-familia-de-productos-sistemas-de-alarma-comprar-por-familia-de-productos-hikvision-ax-pro-806",
            "children": []
          },
          {
            "categoryId": "880",
            "title": "Hikvision AX HYBRID PRO",
            "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-comprar-por-familia-de-productos-sistemas-de-alarma-comprar-por-familia-de-productos-hikvision-ax-hybrid-pro-880",
            "children": []
          },
          {
            "categoryId": "881",
            "title": "Qolsys IQ",
            "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-comprar-por-familia-de-productos-sistemas-de-alarma-comprar-por-familia-de-productos-qolsys-iq-881",
            "children": []
          },
          {
            "categoryId": "884",
            "title": "DSC NEO",
            "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-comprar-por-familia-de-productos-sistemas-de-alarma-comprar-por-familia-de-productos-dsc-neo-884",
            "children": []
          }
        ]
      },
      {
        "categoryId": "383",
        "title": "Sensores y Detectores",
        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-sensores-y-detectores-383",
        "children": [
          {
            "categoryId": "418",
            "title": "Botones de Pánico",
            "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-sensores-y-detectores-sistemas-de-alarma-sensores-y-detectores-botones-de-panico-418",
            "children": []
          },
          {
            "categoryId": "422",
            "title": "Contactos magnéticos",
            "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-sensores-y-detectores-sistemas-de-alarma-sensores-y-detectores-contactos-magneticos-422",
            "children": []
          },
          {
            "categoryId": "384",
            "title": "Sensores de movimiento",
            "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-sensores-y-detectores-sistemas-de-alarma-sensores-y-detectores-sensores-de-movimiento-384",
            "children": []
          },
          {
            "categoryId": "433",
            "title": "Sensores de rotura de cristales",
            "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-sensores-y-detectores-sistemas-de-alarma-sensores-y-detectores-sensores-de-rotura-de-cristales-433",
            "children": []
          },
          {
            "categoryId": "419",
            "title": "Sensores de humo y temperatura",
            "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-sensores-y-detectores-sistemas-de-alarma-sensores-y-detectores-sensores-de-humo-y-temperatura-419",
            "children": []
          },
          {
            "categoryId": "494",
            "title": "Fotoceldas",
            "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-sensores-y-detectores-sistemas-de-alarma-sensores-y-detectores-fotoceldas-494",
            "children": []
          },
          {
            "categoryId": "495",
            "title": "Sensores varios",
            "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-sensores-y-detectores-sistemas-de-alarma-sensores-y-detectores-sensores-varios-495",
            "children": []
          },
          {
            "categoryId": "517",
            "title": "Estaciones de jalón",
            "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-sensores-y-detectores-sistemas-de-alarma-sensores-y-detectores-estaciones-de-jalon-517",
            "children": []
          }
        ]
      },
      {
        "categoryId": "792",
        "title": "Accesorios para Sistemas de Alarma",
        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-792",
        "children": [
          {
            "categoryId": "793",
            "title": "Teclados",
            "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-teclados-793",
            "children": []
          },
          {
            "categoryId": "798",
            "title": "Sirenas y Estrobos",
            "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-sirenas-y-estrobos-798",
            "children": []
          },
          {
            "categoryId": "794",
            "title": "Controles y llaveros",
            "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-controles-y-llaveros-794",
            "children": []
          },
          {
            "categoryId": "807",
            "title": "Módulos para Hikvision AX PRO",
            "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-modulos-para-hikvision-ax-pro-807",
            "children": []
          },
          {
            "categoryId": "797",
            "title": "Módulos para DSC Neo",
            "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-modulos-para-dsc-neo-797",
            "children": []
          },
          {
            "categoryId": "796",
            "title": "Paneles o Tablillas de Alarma",
            "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-paneles-o-tablillas-de-alarma-796",
            "children": []
          },
          {
            "categoryId": "799",
            "title": "Fuentes de Poder y Transformadores",
            "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-fuentes-de-poder-y-transformadores-799",
            "children": []
          },
          {
            "categoryId": "795",
            "title": "Gabinetes para Sistemas de Alarma",
            "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-sistemas-de-alarma-accesorios-para-sistemas-de-alarma-gabinetes-para-sistemas-de-alarma-795",
            "children": []
          }
        ]
      },
      {
        "categoryId": "375",
        "title": "Comunicadores para Alarmas",
        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-comunicadores-para-alarmas-375",
        "children": [
          {
            "categoryId": "449",
            "title": "Comunicadores para Monitoreo y App",
            "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-comunicadores-para-alarmas-sistemas-de-alarma-comunicadores-para-alarmas-comunicadores-para-monitoreo-y-app-449",
            "children": []
          },
          {
            "categoryId": "376",
            "title": "Servicios de paga para comunicadores",
            "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-comunicadores-para-alarmas-sistemas-de-alarma-comunicadores-para-alarmas-servicios-de-paga-para-comunicadores-376",
            "children": []
          }
        ]
      },
      {
        "categoryId": "580",
        "title": "Complementos de Alarma",
        "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-complementos-de-alarma-580",
        "children": [
          {
            "categoryId": "581",
            "title": "Accesorios para Sistemas de Alarma",
            "url": "/shop/category/sistemas-de-alarma-sistemas-de-alarma-complementos-de-alarma-sistemas-de-alarma-complementos-de-alarma-accesorios-para-sistemas-de-alarma-581",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "categoryId": "501",
    "title": "Hogar Inteligente",
    "url": "/shop/category/hogar-inteligente-501",
    "children": [
      {
        "categoryId": "504",
        "title": "Dispositivos Z-WAVE",
        "url": "/shop/category/hogar-inteligente-hogar-inteligente-dispositivos-z-wave-504",
        "children": [
          {
            "categoryId": "507",
            "title": "Apagadores y Control de Iluminación",
            "url": "/shop/category/hogar-inteligente-hogar-inteligente-dispositivos-z-wave-hogar-inteligente-dispositivos-z-wave-apagadores-y-control-de-iluminacion-507",
            "children": []
          },
          {
            "categoryId": "506",
            "title": "Enchufes y Sockets Inteligentes",
            "url": "/shop/category/hogar-inteligente-hogar-inteligente-dispositivos-z-wave-hogar-inteligente-dispositivos-z-wave-enchufes-y-sockets-inteligentes-506",
            "children": []
          }
        ]
      },
      {
        "categoryId": "584",
        "title": "Domótica",
        "url": "/shop/category/hogar-inteligente-hogar-inteligente-domotica-584",
        "children": [
          {
            "categoryId": "585",
            "title": "Accesorios para Automatizacion del Hogar",
            "url": "/shop/category/hogar-inteligente-hogar-inteligente-domotica-hogar-inteligente-domotica-accesorios-para-automatizacion-del-hogar-585",
            "children": []
          }
        ]
      },
      {
        "categoryId": "882",
        "title": "Alarmas para Automatizar Hogares",
        "url": "/shop/category/hogar-inteligente-hogar-inteligente-alarmas-para-automatizar-hogares-882",
        "children": [
          {
            "categoryId": "883",
            "title": "Qolsys IQ",
            "url": "/shop/category/hogar-inteligente-hogar-inteligente-alarmas-para-automatizar-hogares-hogar-inteligente-alarmas-para-automatizar-hogares-qolsys-iq-883",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "categoryId": "520",
    "title": "Cámaras de Seguridad",
    "url": "/shop/category/camaras-de-seguridad-520",
    "children": [
      {
        "categoryId": "839",
        "title": "Paquetes",
        "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-paquetes-839",
        "children": [
          {
            "categoryId": "840",
            "title": "Kits listos para instalar",
            "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-paquetes-camaras-de-seguridad-paquetes-kits-listos-para-instalar-840",
            "children": []
          }
        ]
      },
      {
        "categoryId": "533",
        "title": "Cámaras IP",
        "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-ip-533",
        "children": [
          {
            "categoryId": "812",
            "title": "Cámaras tipo Bala",
            "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-ip-camaras-de-seguridad-camaras-ip-camaras-tipo-bala-812",
            "children": []
          },
          {
            "categoryId": "543",
            "title": "Cámaras tipo Domo",
            "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-ip-camaras-de-seguridad-camaras-ip-camaras-tipo-domo-543",
            "children": []
          },
          {
            "categoryId": "556",
            "title": "Cámaras con vision 180° y 360°",
            "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-ip-camaras-de-seguridad-camaras-ip-camaras-con-vision-180-y-360-556",
            "children": []
          },
          {
            "categoryId": "557",
            "title": "Cámaras especiales",
            "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-ip-camaras-de-seguridad-camaras-ip-camaras-especiales-557",
            "children": []
          },
          {
            "categoryId": "547",
            "title": "Cámaras con movimiento (PTZ)",
            "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-ip-camaras-de-seguridad-camaras-ip-camaras-con-movimiento-ptz-547",
            "children": []
          },
          {
            "categoryId": "831",
            "title": "Grabadores para Cámaras IP (NVR)",
            "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-ip-camaras-de-seguridad-camaras-ip-grabadores-para-camaras-ip-nvr-831",
            "children": []
          }
        ]
      },
      {
        "categoryId": "813",
        "title": "Cámaras Analógicas HD",
        "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-analogicas-hd-813",
        "children": [
          {
            "categoryId": "814",
            "title": "Cámaras tipo Bala",
            "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-analogicas-hd-camaras-de-seguridad-camaras-analogicas-hd-camaras-tipo-bala-814",
            "children": []
          },
          {
            "categoryId": "834",
            "title": "Cámaras tipo Domo",
            "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-analogicas-hd-camaras-de-seguridad-camaras-analogicas-hd-camaras-tipo-domo-834",
            "children": []
          },
          {
            "categoryId": "852",
            "title": "Cámaras especiales",
            "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-analogicas-hd-camaras-de-seguridad-camaras-analogicas-hd-camaras-especiales-852",
            "children": []
          },
          {
            "categoryId": "874",
            "title": "Cámaras con movimiento PTZ",
            "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-analogicas-hd-camaras-de-seguridad-camaras-analogicas-hd-camaras-con-movimiento-ptz-874",
            "children": []
          },
          {
            "categoryId": "826",
            "title": "Grabadores para Cámaras Analógicas HD",
            "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-analogicas-hd-camaras-de-seguridad-camaras-analogicas-hd-grabadores-para-camaras-analogicas-hd-826",
            "children": []
          }
        ]
      },
      {
        "categoryId": "800",
        "title": "Cámaras Especiales",
        "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-especiales-800",
        "children": [
          {
            "categoryId": "846",
            "title": "Bodycam",
            "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-especiales-camaras-de-seguridad-camaras-especiales-bodycam-846",
            "children": []
          },
          {
            "categoryId": "801",
            "title": "Dashcam",
            "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-especiales-camaras-de-seguridad-camaras-especiales-dashcam-801",
            "children": []
          },
          {
            "categoryId": "873",
            "title": "Cámaras Autónomas",
            "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-especiales-camaras-de-seguridad-camaras-especiales-camaras-autonomas-873",
            "children": []
          },
          {
            "categoryId": "853",
            "title": "Cámaras Web",
            "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-camaras-especiales-camaras-de-seguridad-camaras-especiales-camaras-web-853",
            "children": []
          }
        ]
      },
      {
        "categoryId": "803",
        "title": "Accesorios para Cámaras de Seguridad",
        "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-accesorios-para-camaras-de-seguridad-803",
        "children": [
          {
            "categoryId": "804",
            "title": "Discos Duros y Almacenamiento",
            "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-accesorios-para-camaras-de-seguridad-camaras-de-seguridad-accesorios-para-camaras-de-seguridad-discos-duros-y-almacenamiento-804",
            "children": []
          },
          {
            "categoryId": "821",
            "title": "Extensión de Video y Multipantalla",
            "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-accesorios-para-camaras-de-seguridad-camaras-de-seguridad-accesorios-para-camaras-de-seguridad-extension-de-video-y-multipantalla-821",
            "children": []
          },
          {
            "categoryId": "858",
            "title": "Joysticks para Cámaras PTZ",
            "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-accesorios-para-camaras-de-seguridad-camaras-de-seguridad-accesorios-para-camaras-de-seguridad-joysticks-para-camaras-ptz-858",
            "children": []
          },
          {
            "categoryId": "811",
            "title": "Montajes para Cámaras de Seguridad",
            "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-accesorios-para-camaras-de-seguridad-camaras-de-seguridad-accesorios-para-camaras-de-seguridad-montajes-para-camaras-de-seguridad-811",
            "children": []
          },
          {
            "categoryId": "866",
            "title": "Gabinetes para grabadores",
            "url": "/shop/category/camaras-de-seguridad-camaras-de-seguridad-accesorios-para-camaras-de-seguridad-camaras-de-seguridad-accesorios-para-camaras-de-seguridad-gabinetes-para-grabadores-866",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "categoryId": "335",
    "title": "Controles de Acceso",
    "url": "/shop/category/controles-de-acceso-335",
    "children": [
      {
        "categoryId": "824",
        "title": "Cerraduras para Control de Acceso",
        "url": "/shop/category/controles-de-acceso-controles-de-acceso-cerraduras-para-control-de-acceso-824",
        "children": [
          {
            "categoryId": "869",
            "title": "Cerraduras Autónomas",
            "url": "/shop/category/controles-de-acceso-controles-de-acceso-cerraduras-para-control-de-acceso-controles-de-acceso-cerraduras-para-control-de-acceso-cerraduras-autonomas-869",
            "children": []
          },
          {
            "categoryId": "825",
            "title": "Chapas Magnéticas y Eléctricas",
            "url": "/shop/category/controles-de-acceso-controles-de-acceso-cerraduras-para-control-de-acceso-controles-de-acceso-cerraduras-para-control-de-acceso-chapas-magneticas-y-electricas-825",
            "children": []
          },
          {
            "categoryId": "870",
            "title": "Cerraduras de Perno y Contrachapas Eléctricas",
            "url": "/shop/category/controles-de-acceso-controles-de-acceso-cerraduras-para-control-de-acceso-controles-de-acceso-cerraduras-para-control-de-acceso-cerraduras-de-perno-y-contrachapas-electricas-870",
            "children": []
          }
        ]
      },
      {
        "categoryId": "827",
        "title": "Intercomunicación",
        "url": "/shop/category/controles-de-acceso-controles-de-acceso-intercomunicacion-827",
        "children": [
          {
            "categoryId": "828",
            "title": "Video Porteros",
            "url": "/shop/category/controles-de-acceso-controles-de-acceso-intercomunicacion-controles-de-acceso-intercomunicacion-video-porteros-828",
            "children": []
          },
          {
            "categoryId": "830",
            "title": "Interfones y Porteros",
            "url": "/shop/category/controles-de-acceso-controles-de-acceso-intercomunicacion-controles-de-acceso-intercomunicacion-interfones-y-porteros-830",
            "children": []
          }
        ]
      },
      {
        "categoryId": "832",
        "title": "Sistemas de Acceso",
        "url": "/shop/category/controles-de-acceso-controles-de-acceso-sistemas-de-acceso-832",
        "children": [
          {
            "categoryId": "851",
            "title": "Controladores de Acceso",
            "url": "/shop/category/controles-de-acceso-controles-de-acceso-sistemas-de-acceso-controles-de-acceso-sistemas-de-acceso-controladores-de-acceso-851",
            "children": []
          },
          {
            "categoryId": "872",
            "title": "Terminales de Tiempo y Asistencia",
            "url": "/shop/category/controles-de-acceso-controles-de-acceso-sistemas-de-acceso-controles-de-acceso-sistemas-de-acceso-terminales-de-tiempo-y-asistencia-872",
            "children": []
          },
          {
            "categoryId": "833",
            "title": "Lectores de Proximidad",
            "url": "/shop/category/controles-de-acceso-controles-de-acceso-sistemas-de-acceso-controles-de-acceso-sistemas-de-acceso-lectores-de-proximidad-833",
            "children": []
          },
          {
            "categoryId": "871",
            "title": "Lectores de QR",
            "url": "/shop/category/controles-de-acceso-controles-de-acceso-sistemas-de-acceso-controles-de-acceso-sistemas-de-acceso-lectores-de-qr-871",
            "children": []
          },
          {
            "categoryId": "860",
            "title": "Tarjetas de Proximidad",
            "url": "/shop/category/controles-de-acceso-controles-de-acceso-sistemas-de-acceso-controles-de-acceso-sistemas-de-acceso-tarjetas-de-proximidad-860",
            "children": []
          },
          {
            "categoryId": "854",
            "title": "Enroladores de Tarjetas",
            "url": "/shop/category/controles-de-acceso-controles-de-acceso-sistemas-de-acceso-controles-de-acceso-sistemas-de-acceso-enroladores-de-tarjetas-854",
            "children": []
          },
          {
            "categoryId": "847",
            "title": "Botones de petición de salida",
            "url": "/shop/category/controles-de-acceso-controles-de-acceso-sistemas-de-acceso-controles-de-acceso-sistemas-de-acceso-botones-de-peticion-de-salida-847",
            "children": []
          },
          {
            "categoryId": "867",
            "title": "Botones de paro de emergencia",
            "url": "/shop/category/controles-de-acceso-controles-de-acceso-sistemas-de-acceso-controles-de-acceso-sistemas-de-acceso-botones-de-paro-de-emergencia-867",
            "children": []
          }
        ]
      },
      {
        "categoryId": "841",
        "title": "Lectores Biométricos",
        "url": "/shop/category/controles-de-acceso-controles-de-acceso-lectores-biometricos-841",
        "children": [
          {
            "categoryId": "842",
            "title": "Biométricos para controladores",
            "url": "/shop/category/controles-de-acceso-controles-de-acceso-lectores-biometricos-controles-de-acceso-lectores-biometricos-biometricos-para-controladores-842",
            "children": []
          },
          {
            "categoryId": "843",
            "title": "Biométricos Autónomos",
            "url": "/shop/category/controles-de-acceso-controles-de-acceso-lectores-biometricos-controles-de-acceso-lectores-biometricos-biometricos-autonomos-843",
            "children": []
          }
        ]
      },
      {
        "categoryId": "819",
        "title": "Accesorios para Control de Acceso",
        "url": "/shop/category/controles-de-acceso-controles-de-acceso-accesorios-para-control-de-acceso-819",
        "children": [
          {
            "categoryId": "820",
            "title": "Controles Remotos",
            "url": "/shop/category/controles-de-acceso-controles-de-acceso-accesorios-para-control-de-acceso-controles-de-acceso-accesorios-para-control-de-acceso-controles-remotos-820",
            "children": []
          },
          {
            "categoryId": "868",
            "title": "Cierra Puertas",
            "url": "/shop/category/controles-de-acceso-controles-de-acceso-accesorios-para-control-de-acceso-controles-de-acceso-accesorios-para-control-de-acceso-cierra-puertas-868",
            "children": []
          }
        ]
      },
      {
        "categoryId": "618",
        "title": "Complementos",
        "url": "/shop/category/controles-de-acceso-controles-de-acceso-complementos-618",
        "children": [
          {
            "categoryId": "619",
            "title": "Accesorios para Controles de Acceso",
            "url": "/shop/category/controles-de-acceso-controles-de-acceso-complementos-controles-de-acceso-complementos-accesorios-para-controles-de-acceso-619",
            "children": []
          }
        ]
      },
      {
        "categoryId": "658",
        "title": "Dispositivos de Control",
        "url": "/shop/category/controles-de-acceso-controles-de-acceso-dispositivos-de-control-658",
        "children": [
          {
            "categoryId": "861",
            "title": "Teclados Autónomos",
            "url": "/shop/category/controles-de-acceso-controles-de-acceso-dispositivos-de-control-controles-de-acceso-dispositivos-de-control-teclados-autonomos-861",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "categoryId": "351",
    "title": "Cercas Eléctricas",
    "url": "/shop/category/cercas-electricas-351",
    "children": [
      {
        "categoryId": "643",
        "title": "Equipos Principales",
        "url": "/shop/category/cercas-electricas-cercas-electricas-equipos-principales-643",
        "children": [
          {
            "categoryId": "644",
            "title": "Energizadores y Kits",
            "url": "/shop/category/cercas-electricas-cercas-electricas-equipos-principales-cercas-electricas-equipos-principales-energizadores-y-kits-644",
            "children": []
          }
        ]
      },
      {
        "categoryId": "837",
        "title": "Accesorios para Cercas Eléctricas",
        "url": "/shop/category/cercas-electricas-cercas-electricas-accesorios-para-cercas-electricas-837",
        "children": [
          {
            "categoryId": "838",
            "title": "Postes y Aisladores",
            "url": "/shop/category/cercas-electricas-cercas-electricas-accesorios-para-cercas-electricas-cercas-electricas-accesorios-para-cercas-electricas-postes-y-aisladores-838",
            "children": []
          },
          {
            "categoryId": "849",
            "title": "Alambre y cable bujía",
            "url": "/shop/category/cercas-electricas-cercas-electricas-accesorios-para-cercas-electricas-cercas-electricas-accesorios-para-cercas-electricas-alambre-y-cable-bujia-849",
            "children": []
          }
        ]
      },
      {
        "categoryId": "654",
        "title": "Complementos",
        "url": "/shop/category/cercas-electricas-cercas-electricas-complementos-654",
        "children": [
          {
            "categoryId": "655",
            "title": "Accesorios para Cercas Eléctricas",
            "url": "/shop/category/cercas-electricas-cercas-electricas-complementos-cercas-electricas-complementos-accesorios-para-cercas-electricas-655",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "categoryId": "365",
    "title": "Redes",
    "url": "/shop/category/redes-365",
    "children": [
      {
        "categoryId": "835",
        "title": "Antenas",
        "url": "/shop/category/redes-redes-antenas-835",
        "children": [
          {
            "categoryId": "859",
            "title": "Antenas PtP y PtMP",
            "url": "/shop/category/redes-redes-antenas-redes-antenas-antenas-ptp-y-ptmp-859",
            "children": []
          },
          {
            "categoryId": "836",
            "title": "Access Point",
            "url": "/shop/category/redes-redes-antenas-redes-antenas-access-point-836",
            "children": []
          }
        ]
      },
      {
        "categoryId": "822",
        "title": "Accesorios para Redes",
        "url": "/shop/category/redes-redes-accesorios-para-redes-822",
        "children": [
          {
            "categoryId": "857",
            "title": "Gabinetes para Redes",
            "url": "/shop/category/redes-redes-accesorios-para-redes-redes-accesorios-para-redes-gabinetes-para-redes-857",
            "children": []
          },
          {
            "categoryId": "850",
            "title": "Accesorios para Rack",
            "url": "/shop/category/redes-redes-accesorios-para-redes-redes-accesorios-para-redes-accesorios-para-rack-850",
            "children": []
          },
          {
            "categoryId": "848",
            "title": "Inyectores y Switches",
            "url": "/shop/category/redes-redes-accesorios-para-redes-redes-accesorios-para-redes-inyectores-y-switches-848",
            "children": []
          },
          {
            "categoryId": "823",
            "title": "Cajas y accesorios para cableado estructurado",
            "url": "/shop/category/redes-redes-accesorios-para-redes-redes-accesorios-para-redes-cajas-y-accesorios-para-cableado-estructurado-823",
            "children": []
          },
          {
            "categoryId": "863",
            "title": "Tomacorrientes para Rack (PDU)",
            "url": "/shop/category/redes-redes-accesorios-para-redes-redes-accesorios-para-redes-tomacorrientes-para-rack-pdu-863",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "categoryId": "358",
    "title": "Cables",
    "url": "/shop/category/cables-358",
    "children": [
      {
        "categoryId": "817",
        "title": "Cables para Equipos de Seguridad",
        "url": "/shop/category/cables-cables-cables-para-equipos-de-seguridad-817",
        "children": [
          {
            "categoryId": "818",
            "title": "Cables para Sistemas de Alarma y Automatización",
            "url": "/shop/category/cables-cables-cables-para-equipos-de-seguridad-cables-cables-para-equipos-de-seguridad-cables-para-sistemas-de-alarma-y-automatizacion-818",
            "children": []
          },
          {
            "categoryId": "845",
            "title": "Cables para Sistemas de Detección de Incendio",
            "url": "/shop/category/cables-cables-cables-para-equipos-de-seguridad-cables-cables-para-equipos-de-seguridad-cables-para-sistemas-de-deteccion-de-incendio-845",
            "children": []
          },
          {
            "categoryId": "844",
            "title": "Cables para Controles de Acceso",
            "url": "/shop/category/cables-cables-cables-para-equipos-de-seguridad-cables-cables-para-equipos-de-seguridad-cables-para-controles-de-acceso-844",
            "children": []
          }
        ]
      },
      {
        "categoryId": "598",
        "title": "Cables para Redes",
        "url": "/shop/category/cables-cables-cables-para-redes-598",
        "children": [
          {
            "categoryId": "599",
            "title": "Cable UTP",
            "url": "/shop/category/cables-cables-cables-para-redes-cables-cables-para-redes-cable-utp-599",
            "children": []
          },
          {
            "categoryId": "632",
            "title": "Patch Cords",
            "url": "/shop/category/cables-cables-cables-para-redes-cables-cables-para-redes-patch-cords-632",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "categoryId": "808",
    "title": "Fuentes de Poder y Respaldo",
    "url": "/shop/category/fuentes-de-poder-y-respaldo-808",
    "children": [
      {
        "categoryId": "815",
        "title": "Baterías",
        "url": "/shop/category/fuentes-de-poder-y-respaldo-fuentes-de-poder-y-respaldo-baterias-815",
        "children": [
          {
            "categoryId": "816",
            "title": "Baterías para Sistemas de Seguridad",
            "url": "/shop/category/fuentes-de-poder-y-respaldo-fuentes-de-poder-y-respaldo-baterias-fuentes-de-poder-y-respaldo-baterias-baterias-para-sistemas-de-seguridad-816",
            "children": []
          },
          {
            "categoryId": "862",
            "title": "Equipos para Respaldo UPS No Break",
            "url": "/shop/category/fuentes-de-poder-y-respaldo-fuentes-de-poder-y-respaldo-baterias-fuentes-de-poder-y-respaldo-baterias-equipos-para-respaldo-ups-no-break-862",
            "children": []
          }
        ]
      },
      {
        "categoryId": "809",
        "title": "Fuentes de Alimentación",
        "url": "/shop/category/fuentes-de-poder-y-respaldo-fuentes-de-poder-y-respaldo-fuentes-de-alimentacion-809",
        "children": [
          {
            "categoryId": "829",
            "title": "Fuentes para Control de Acceso",
            "url": "/shop/category/fuentes-de-poder-y-respaldo-fuentes-de-poder-y-respaldo-fuentes-de-alimentacion-fuentes-de-poder-y-respaldo-fuentes-de-alimentacion-fuentes-para-control-de-acceso-829",
            "children": []
          },
          {
            "categoryId": "810",
            "title": "Fuentes para Cámaras de Seguridad",
            "url": "/shop/category/fuentes-de-poder-y-respaldo-fuentes-de-poder-y-respaldo-fuentes-de-alimentacion-fuentes-de-poder-y-respaldo-fuentes-de-alimentacion-fuentes-para-camaras-de-seguridad-810",
            "children": []
          },
          {
            "categoryId": "875",
            "title": "Eliminadores de Corriente",
            "url": "/shop/category/fuentes-de-poder-y-respaldo-fuentes-de-poder-y-respaldo-fuentes-de-alimentacion-fuentes-de-poder-y-respaldo-fuentes-de-alimentacion-eliminadores-de-corriente-875",
            "children": []
          }
        ]
      },
      {
        "categoryId": "864",
        "title": "Tierras Físicas",
        "url": "/shop/category/fuentes-de-poder-y-respaldo-fuentes-de-poder-y-respaldo-tierras-fisicas-864",
        "children": [
          {
            "categoryId": "865",
            "title": "Equipo para Tierras Físicas",
            "url": "/shop/category/fuentes-de-poder-y-respaldo-fuentes-de-poder-y-respaldo-tierras-fisicas-fuentes-de-poder-y-respaldo-tierras-fisicas-equipo-para-tierras-fisicas-865",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "categoryId": "482",
    "title": "Instalaciones",
    "url": "/shop/category/instalaciones-482",
    "children": [
      {
        "categoryId": "855",
        "title": "Gabinetes",
        "url": "/shop/category/instalaciones-instalaciones-gabinetes-855",
        "children": [
          {
            "categoryId": "856",
            "title": "Gabinetes para Todo Tipo de Instalaciones",
            "url": "/shop/category/instalaciones-instalaciones-gabinetes-instalaciones-gabinetes-gabinetes-para-todo-tipo-de-instalaciones-856",
            "children": []
          }
        ]
      }
    ]
  }
];
                let globalOrderIndex = 0;

                function buildOrderMap(nodes) {
                    nodes.forEach(node =&gt; {
                        if (node.url) {
                            orderMap[node.url] = globalOrderIndex++;
                        }

                        if (node.children &amp;&amp; node.children.length &gt; 0) {
                            buildOrderMap(node.children);
                        }
                    });
                }

                buildOrderMap(CATEGORY_REFERENCE_TREE);

                function reorderAllCategories() {
                    const containers = document.querySelectorAll('.nav, .dropdown-menu, .o_mega_menu, .s_mega_menu_multi_menus');
                    
                    console.log("Contenedores encontrados:", containers.length);
            
                    containers.forEach(container =&gt; {
                        const items = Array.from(container.children).filter(item =&gt; item.querySelector('a[href*="/shop/category"]'));
                        
                        console.log("Items encontrados en contenedor:", items.length);
            
                        items.sort((a, b) =&gt; {
                            const linkA = a.querySelector('a[href*="/shop/category"]');
                            const linkB = b.querySelector('a[href*="/shop/category"]');
                            const hrefA = linkA ? linkA.getAttribute('href') : '';
                            const hrefB = linkB ? linkB.getAttribute('href') : '';
            
                            const indexA = orderMap.hasOwnProperty(hrefA) ? orderMap[hrefA] : 999999;
                            const indexB = orderMap.hasOwnProperty(hrefB) ? orderMap[hrefB] : 999999;
            
                            return indexA - indexB;
                        });
            
                        items.forEach(item =&gt; container.appendChild(item));
                    });
                }

                window.addEventListener('load', reorderAllCategories);
                setTimeout(reorderAllCategories, 1000);
            })();