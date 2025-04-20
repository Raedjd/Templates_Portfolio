(function($) {
    "use strict";

    /*****************************
     * Commons Variables
     *****************************/
    var $window = $(window),
        $body = $('body');

    /****************************
     * Sticky Menu
     *****************************/
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".sticky-header").removeClass("sticky");
        } else {
            $(".sticky-header").addClass("sticky");
        }
    });


    /*****************************
     * Off Canvas Function
     *****************************/
    (function() {
        var $offCanvasToggle = $('.offcanvas-toggle'),
            $offCanvas = $('.offcanvas'),
            $offCanvasOverlay = $('.offcanvas-overlay'),
            $mobileMenuToggle = $('.mobile-menu-toggle');
        $offCanvasToggle.on('click', function(e) {
            e.preventDefault();
            var $this = $(this),
                $target = $this.attr('href');
            $body.addClass('offcanvas-open');
            $($target).addClass('offcanvas-open');
            $offCanvasOverlay.fadeIn();
            if ($this.parent().hasClass('mobile-menu-toggle')) {
                $this.addClass('close');
            }
        });
        $('.offcanvas-close, .offcanvas-overlay').on('click', function(e) {
            e.preventDefault();
            $body.removeClass('offcanvas-open');
            $offCanvas.removeClass('offcanvas-open');
            $offCanvasOverlay.fadeOut();
            $mobileMenuToggle.find('a').removeClass('close');
        });
    })();


    /**************************
     * Offcanvas: Menu Content
     **************************/
    function mobileOffCanvasMenu() {
        var $offCanvasNav = $('.offcanvas-menu'),
            $offCanvasNavSubMenu = $offCanvasNav.find('.mobile-sub-menu');

        /*Add Toggle Button With Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.parent().prepend('<div class="offcanvas-menu-expand"></div>');

        /*Category Sub Menu Toggle*/
        $offCanvasNav.on('click', 'li a, .offcanvas-menu-expand', function(e) {
            var $this = $(this);
            if ($this.attr('href') === '#' || $this.hasClass('offcanvas-menu-expand')) {
                e.preventDefault();
                if ($this.siblings('ul:visible').length) {
                    $this.parent('li').removeClass('active');
                    $this.siblings('ul').slideUp();
                    $this.parent('li').find('li').removeClass('active');
                    $this.parent('li').find('ul:visible').slideUp();
                } else {
                    $this.parent('li').addClass('active');
                    $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                    $this.closest('li').siblings('li').find('ul:visible').slideUp();
                    $this.siblings('ul').slideDown();
                }
            }
        });
    }
    mobileOffCanvasMenu();

    /****************************************
     *   Service Slider
     *****************************************/
        var service_display_slider = new Swiper('.service-display-slider .swiper-container', {
            slidesPerView: 3,
            speed: 1500,
            loop: true,
            spaceBetween: 45,
            pagination: {
                el: '.service-display-dots .swiper-pagination',
                clickable: true,
              },
    
            breakpoints: {
    
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                },
                
            }
        });


   /****************************************
    *  Project Slider 
    *****************************************/
    var project_display_slider = new Swiper('.project-display-slider .swiper-container', {
        spaceBetween: 50,
        effect: 'slide',
        speed: 1500,
        // Navigation arrows
        navigation: {
            nextEl: '.project-display-box .button-next',
            prevEl: '.project-display-box .button-prev',
        },

        breakpoints: {

            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1800: {
                centeredSlides: true,
                slidesPerView: 3,
            }
            
        }
      });

   /****************************************
    *  Testimonial Slider
    *****************************************/
    var testimonial_display_slider = new Swiper('.testimonial-display-slider .swiper-container', {
        slidesPerView: 2,
        loop: true,
        // Navigation arrows
        navigation: {
            nextEl: '.testimonial-display-box .button-next',
            prevEl: '.testimonial-display-box .button-prev',
        },

        breakpoints: {

            0: {
                slidesPerView: 1,
            },
            992: {
                spaceBetween: 80,
                slidesPerView: 2,
            },
            1200: {
                spaceBetween: 100,
            },
            1400: {
                spaceBetween: 150,
            },
            1800: {
                spaceBetween: 175,
            }
            
        }
      });

   /****************************************
    *  Company Logo Slider
    *****************************************/
    var company_logo_display_slider = new Swiper('.company-logo-display-slider .swiper-container', {
        slidesPerView: 4,
        loop: true,

        breakpoints: {

            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
                spaceBetween:50,
            },
            576: {
                slidesPerView: 2,
                spaceBetween:50,
            },
            768: {
                slidesPerView: 3,
                spaceBetween:50,
            },
            992: {
                slidesPerView: 3,
                spaceBetween:60,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 85,
            }
        }
      });

      
    /************************************************
     * Counter Up
     ***********************************************/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    /************************************************
     * Video  Popup
     ***********************************************/
    $('.wave-btn').venobox(); 

    /************************************************
     * Project Filter
     ***********************************************/
      $('.projects-wrapper-gallery-content').imagesLoaded( function() {
         $('.projects-gallery-filter-nav').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
             
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
         });

        var $grid = $('.projects-wrapper-gallery-content').isotope({
            itemSelector: '.filter-item',
             percentPosition: true,
         });
     });


     /************************************************
     * Progressbar
     ***********************************************/
      if($('.progress-line').length){
        $('.progress-line').appear(function(){
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width',percent+'%');
        },{accY: 0});
    };

    /************************************************
     * Scroll Top
     ***********************************************/
    $('body').materialScrollTop();


})(jQuery);
