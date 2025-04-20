/*========================================================================
EXCLUSIVE ON themeforest.net
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Template Name   : KEIRA
Author          : mital_04
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Copyright (c) 2018 - mital_04
========================================================================*/


(function($){
   "use strict"   
    var KEIRA = {};

    /*--------------------
      * Pre Load
    ----------------------*/
    KEIRA.WebLoad = function(){
      document.getElementById("loading").style.display = "none"; 
    }

    /*--------------------
        * Menu Close
    ----------------------*/
    KEIRA.MenuClose = function(){
      $(".toggler-menu").on('click', function(){
        $(this).toggleClass('open');
        $('.nav_menu').stop().toggleClass('menu-open');
        $('.nav_menu .navbar-nav').toggleClass('nav-open');
      });
    }

    /*--------------------
        * Menu Close
    ----------------------*/
    KEIRA.MenuClose01 = function(){
      $('.navbar-nav .nav-link').on('click', function() {
       var toggle = $('.navbar-toggler').is(':visible');
       if (toggle) {
         $('.navbar-collapse').collapse('hide');
       }
      });
    }


    /*--------------------
        * Smooth Scroll
    ----------------------*/
    KEIRA.HeaderScroll = function(){
        $('a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
              var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - 0,
                      }, 1000);
                      return false;
                  }
            }
        });
    }

    /*--------------------
        * Header Fixed
    ----------------------*/
    KEIRA.HeaderFixed = function(){
        if ($(window).scrollTop() >= 60) {
           $('.navbar').addClass('fixed-header');
        }
        else {
           $('.navbar').removeClass('fixed-header');
        }
    }    

    /*--------------------
        * Progress Bar 
    ----------------------*/
    KEIRA.ProgressBar = function(){
        $(".progress .progress-bar").each(function () {
          var bottom_object = $(this).offset().top + $(this).outerHeight();
          var bottom_window = $(window).scrollTop() + $(window).height();
          var progressWidth = $(this).attr('aria-valuenow') + '%';
          if(bottom_window > bottom_object) {
            $(this).css({
              width : progressWidth
            });
          }
        });
    }

    /*--------------------
    * Counter JS
    ----------------------*/
    var a = 0;
    KEIRA.Counter = function(){
      var oTop = $('.counter-box').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
          a = 1;
        }
    }

    /*--------------------
    * Isotope
    ----------------------*/
    KEIRA.MasoNry = function () {
      var portfolioWork = $('.portfolio-content');
        $(portfolioWork).isotope({
            resizable: false,
            itemSelector: '.portfolio-item',
            layoutMode: 'masonry',
            filter: '*'
          });
          //Filtering items on portfolio.html
          var portfolioFilter = $('.filter li');
          // filter items on button click
          $(portfolioFilter).on( 'click', function() {
            var filterValue = $(this).attr('data-filter');
            portfolioWork.isotope({ filter: filterValue });
          });
          //Add/remove class on filter list
          $(portfolioFilter).on( 'click', function() {
            $(this).addClass('active').siblings().removeClass('active');
          });
    }

    
    /*--------------------
    * owl Slider
    ----------------------*/
    KEIRA.ProjectSlider = function(){
      var project_slider = $('#project-slider-single');
        project_slider.owlCarousel({
            loop: true,
            margin: 0,
            nav:false,
            responsive: {
              0: {
                items: 1
              },
              768: {
                items: 1
              },
              991: {
                items: 2
              },
              1140: {
                items: 3
              }
            }
        });
    }

    KEIRA.ClientSlider = function(){
      var OwlClientSlider = $('#client-slider-single');
        OwlClientSlider.owlCarousel({
            loop: true,
            margin: 30,
            nav:false,
            responsive: {
              0: {
                items: 1
              },
              600: {
                items: 1
              },
              768: {
                items: 2
              },
              991: {
                items: 3
              }
            }
        });
    }


    KEIRA.PopupVideo = function(){
      $('.popup-video').magnificPopup({
              disableOn: 700,
              type: 'iframe',
              mainClass: 'mfp-fade',
              removalDelay: 160,
              preloader: false,
              fixedContentPos: false
        });
    }

    KEIRA.LightboxGallery = function(){
      $('.portfolio-col').magnificPopup({
          delegate: '.lightbox-gallery',
          type: 'image',
          tLoading: '#%curr%',
          mainClass: 'mfp-fade',
          fixedContentPos: true,
          closeBtnInside: true,
          gallery: {
              enabled: true,
              navigateByImgClick: true,
              preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
          }
      });
    }

    KEIRA.mTypeIt = function() {
        new TypeIt('#type-it', {
            speed: 200,
            loop:true,
            strings: [
              'Designer',
              'Developer'
            ],
            breakLines: false
        }); 
    }

    
    // Window on Load
    $(window).on("load", function(){
      KEIRA.WebLoad();
    });

    $(document).on("ready", function(){
        KEIRA.MasoNry(),
        KEIRA.ClientSlider(),
        KEIRA.MenuClose(),
        KEIRA.MenuClose01(),
        KEIRA.ProjectSlider(),
        KEIRA.Counter(),
        KEIRA.ProgressBar(),
        KEIRA.HeaderScroll(),
        KEIRA.PopupVideo(),
        KEIRA.LightboxGallery(),
        KEIRA.mTypeIt();
    });

    $(window).on("scroll", function(){
        KEIRA.Counter(),
        KEIRA.ProgressBar(),
        KEIRA.HeaderFixed();
    });

})(jQuery);
