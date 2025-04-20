(function($) {
    "use strict";
    var NAY = {};
    var plugin_track = 'static/plugin/index.html';
    $.fn.exists = function() {
        return this.length > 0;
    };

    /* ---------------------------------------------- /*
     * Pre load
    /* ---------------------------------------------- */
    NAY.PreLoad = function() {
        document.getElementById("loading").style.display = "none";
    }

    /* ---------------------------------------------- /*
     * Menu Toggle
    /* ---------------------------------------------- */
    NAY.MenuTogglerClose = function() {
        $(".toggler-menu").on('click', function() {
            $(this).toggleClass('open');
            $('.header-left').stop().toggleClass('menu-open menu-open-desk');
        });
        $('.header-left a').on('click', function() {
            var toggle = $('.toggler-menu').is(':visible');
            if (toggle) {
                $('.header-left').removeClass('menu-open');
                $('.toggler-menu').removeClass('open');
            }
        });
    }

    /*--------------------
    * OwlSlider
    ----------------------*/
    NAY.Owl = function() {
        var owlslider = jQuery("div.owl-carousel");
        if (owlslider.length > 0) {
            loadScript(plugin_track + 'owl-carousel/js/owl.carousel.min.js', function() {
                owlslider.each(function() {
                    var $this = $(this),
                        $items = ($this.data('items')) ? $this.data('items') : 1,
                        $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
                        $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
                        $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
                        $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
                        $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 5000,
                        $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 1000,
                        $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
                        $CenterSlider = ($this.data('center')) ? $this.data('center') : false,
                        $space = ($this.attr('data-space')) ? $this.data('space') : 30;

                    $(this).owlCarousel({
                        loop: $loop,
                        items: $items,
                        responsive: {
                            0: { items: $this.data('xx-items') ? $this.data('xx-items') : 1 },
                            480: { items: $this.data('xs-items') ? $this.data('xs-items') : 1 },
                            768: { items: $this.data('sm-items') ? $this.data('sm-items') : 1 },
                            980: { items: $this.data('md-items') ? $this.data('md-items') : 1 },
                            1200: { items: $items }
                        },
                        dots: $navdots,
                        autoplayTimeout: $autospeed,
                        smartSpeed: $smartspeed,
                        autoHeight: $autohgt,
                        center: $CenterSlider,
                        margin: $space,
                        nav: $navarrow,
                        navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
                        autoplay: $autoplay,
                        autoplayHoverPause: true
                    });
                });
            });
        }
    }

    /* ---------------------------------------------- /*
     * lightbox gallery
    /* ---------------------------------------------- */
    NAY.Gallery = function() {
        if ($(".lightbox-gallery").exists() || $(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
            loadScript(plugin_track + 'magnific/jquery.magnific-popup.min.js', function() {
                if ($(".lightbox-gallery").exists()) {
                    $('.lightbox-gallery').magnificPopup({
                        delegate: '.gallery-link',
                        type: 'image',
                        tLoading: 'Loading image #%curr%...',
                        mainClass: 'mfp-fade',
                        fixedContentPos: true,
                        closeBtnInside: false,
                        gallery: {
                            enabled: true,
                            navigateByImgClick: true,
                            preload: [0, 1] // Will preload 0 - before current, and 1 after NAY current image
                        }
                    });
                }
                if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
                    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                        disableOn: 700,
                        type: 'iframe',
                        mainClass: 'mfp-fade',
                        removalDelay: 160,
                        preloader: false,
                        fixedContentPos: false
                    });
                }
            });
        }
    }

    /*--------------------
    * Masonry
    ----------------------*/
    NAY.masonry = function() {
        var portfolioWork = $('.portfolio-content');
        if ($(".portfolio-content").exists()) {
            loadScript(plugin_track + 'isotope/isotope.pkgd.min.js', function() {
                if ($(".portfolio-content").exists()) {
                    $(portfolioWork).isotope({
                        resizable: false,
                        itemSelector: '.grid-item',
                        layoutMode: 'masonry',
                        filter: '*'
                    });
                    //Filtering items on portfolio.html
                    var portfolioFilter = $('.filter li');
                    // filter items on button click
                    $(portfolioFilter).on('click', function() {
                        var filterValue = $(this).attr('data-filter');
                        portfolioWork.isotope({ filter: filterValue });
                    });
                    //Add/remove class on filter list
                    $(portfolioFilter).on('click', function() {
                        $(this).addClass('active').siblings().removeClass('active');
                    });
                }
            });
        }
    }

    /*--------------------
        * Scroll
    ----------------------*/
    NAY.scrollBar = function() {
        if ($(".scroll-bar").exists()) {
            loadScript(plugin_track + 'scroll/jquery.mCustomScrollbar.min.js', function() {
                $(".scroll-bar").mCustomScrollbar({
                    theme: "minimal"
                });
            });
        }
    }

    /*--------------------
        * Page Piling
    ----------------------*/
    NAY.PagePailing = function() {
        var id = [];
        var tooltips = [];
        var colors = [];
        $('.pp-section').each(function() {
            id.push(this.id);
            tooltips.push($(this).data("navigation-tooltip"));
            colors.push($(this).data("bg-color"));
        });
        if ($(".pp-main-section").exists()) {
            $('.pp-main-section').pagepiling({
                direction: 'vertical',
                menu: '#pp-menu',
                anchors: id,
                sectionsColor: colors,
                navigation: {
                    'position': 'right',
                    'tooltips': false
                },
                afterRender: function() {
                    $('#pp-menu').addClass('custom');
                },
                afterLoad: function(anchorLink, index) {
                    if (index > 1) {
                        $('#pp-menu').removeClass('custom');
                    } else {
                        $('#pp-menu').addClass('custom');
                    }
                }
            });
        }
    }

    /*--------------------
        * Type It
    ----------------------*/
    NAY.mTypeIt = function() {
        if ($("#type-it").exists()) {
            loadScript(plugin_track + 'typeit-master/typeit.min.js', function() {
                new TypeIt('#type-it', {
                    speed: 200,
                    loop: true,
                    strings: [
                        'Full-stack Developer',
                        'UX/UI Designer',
                        'Freelancer'
                    ],
                    breakLines: false
                });
            });
        }
    }

    /*--------------------
      * glitch
    ----------------------*/
    NAY.glitch = function() {
      if ($(".glitch").exists()){
            loadScript(plugin_track + 'glitch/mgGlitch.min.js', function() {
                $( ".glitch" ).mgGlitch({
                    // set 'true' to stop the plugin
                    destroy : false, 
                    // set 'false' to stop glitching
                    glitch: true, 
                    // set 'false' to stop scaling
                    scale: false, 
                    // set 'false' to stop glitch blending
                    blend : true, 
                    // select blend mode type
                    blendModeType : 'hue',
                    // set min time for glitch 1 elem
                    glitch1TimeMin : 100, 
                    // set max time for glitch 1 elem
                    glitch1TimeMax : 400,
                    // set min time for glitch 2 elem
                    glitch2TimeMin : 50, 
                    // set max time for glitch 2 elem
                    glitch2TimeMax : 200, 
              });
            });
        }
    }

    /*--------------------
        * Video Bg
    ----------------------*/
    NAY.VideoBG = function() {
      if ($(".video-bg").exists()){
        loadScript(plugin_track + 'ytplayer/jquery.mb.YTPlayer.min.js', function() {
          jQuery(".video-bg").YTPlayer();
        });
      }
    }

    /* ---------------------------------------------- /*
     * Demo
    /* ---------------------------------------------- */
    NAY.Demo = function() {
        $( "body" ).append( "<label class='color_switch'><i class='fas fa-moon'></i></label><a class='demo-back-link' href='https://pxdraft.com/themeforest/sergio/index.html'><i class='fas fa-arrow-left'></i></a>" );
        $(".color_switch").click(function(){
            $(this).toggleClass('m-toggle-toggle');
            $('body').toggleClass('theme-light');
        });
    }

    /* ---------------------------------------------- /*
     * All Functions
    /* ---------------------------------------------- */
    // loadScript
    var _arr = {};

    function loadScript(scriptName, callback) {
        if (!_arr[scriptName]) {
            _arr[scriptName] = true;
            var body = document.getElementsByTagName('body')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = scriptName;
            script.onload = callback;
            body.appendChild(script);
        } else if (callback) {
            callback();
        }
    };

    // Window on Load
    $(window).on("load", function() {
        NAY.masonry(),
        NAY.PreLoad();
    });
    // Document on Ready
    $(document).on("ready", function() {
        NAY.scrollBar(),
        NAY.Gallery(),
        NAY.PagePailing(),
        NAY.mTypeIt(),
        NAY.glitch(),
        NAY.VideoBG(),
        NAY.MenuTogglerClose(),
        NAY.Demo(),
        NAY.Owl(),
        $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });
    });

    // Document on Scrool
    $(window).on("scroll", function() {
    });

    // Window on Resize
    $(window).on("resize", function() {});


})(jQuery);