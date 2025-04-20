(function () {
    "use strict";
    var DURU = {
        init: function () {
            this.cacheDom();
            this.bindEvents();
            this.enableGridGallery();
            this.enablePopupGallery();
        }
        , cacheDom: function () {
            this._body = $('body');
            this.yscottGalleryTabs = $('.yscott-toolbar-item');
            this.yscottGalleryItem = $('.yscott-gallery-item');
        }
        , bindEvents: function () {
            var self = this;
            this.yscottGalleryTabs.on('click', self.changeActiveTab);
            this.yscottGalleryTabs.on('click', self.addGalleryFilter);
        }
        , /* ======= popup gallery ======= */
        enablePopupGallery: function () {
            $('.yscott-popup-gallery').each(function () {
                $(this).magnificPopup({
                    delegate: 'a'
                    , type: 'image'
                    , gallery: {
                        enabled: true
                    }
                });
            });
        }
        , /* ======= gallery tab ======= */
        changeActiveTab: function () {
            $(this).closest('.yscott-gallery-toolbar').find('.active').removeClass('active');
            $(this).addClass('active');
        }
        , /* ======= gallery filter ======= */
        addGalleryFilter: function () {
            var value = $(this).attr('data-filter');
            if (value === 'all') {
                DURU.yscottGalleryItem.show('3000');
            }
            else {
                DURU.yscottGalleryItem.not('.' + value).hide('3000');
                DURU.yscottGalleryItem.filter('.' + value).show('3000');
            }
        }
        , /* ======= grid gallery ======= */
        enableGridGallery: function () {
            $('.yscott-grid-gallery').each(function (i, el) {
                var item = $(el).find('.yscott-grid-item');
                $(el).masonry({
                    itemSelector: '.yscott-grid-item'
                    , columnWidth: '.yscott-grid-item'
                    , horizontalOrder: true
                });
            });
        }
    };
    var header = $(".start-style");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
            header.removeClass('start-style').addClass("scroll-on");
        }
        else {
            header.removeClass("scroll-on").addClass('start-style');
        }
    });
    // Animations
    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {
            if (direction === 'down' && !$(this.element).hasClass('animated')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function () {
                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated');
                            }
                            else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated');
                            }
                            else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated');
                            }
                            else {
                                el.addClass('fadeInUp animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, {
            offset: '85%'
        });
    };
    $(function () {
        contentWayPoint();
    });
    // Menu On Hover
    $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
        if ($(window).width() > 750) {
            var _d = $(e.target).closest('.nav-item');
            _d.addClass('show');
            setTimeout(function () {
                _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
            }, 1);
        }
    });
    // img zoom
    $(".img-zoom").magnificPopup({
            type: "image"
            , closeOnContentClick: !0
            , mainClass: "mfp-fade"
            , gallery: {
                enabled: !0
                , navigateByImgClick: !0
                , preload: [0, 1]
            }
        })
	
	// Services owlCarousel
    $('.yscott-services .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: false
        , dots: true
        , autoplayHoverPause:true
        , smartSpeed: 1000
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 2
            }
        }
    });
	
	// Awards owlCarousel
    $('.awards .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: true
        , dots: false
        , responsiveClass: true
        , responsive: {
            0: {
                margin: 10
                , items: 2
            }
            , 600: {
                items: 3
            }
            , 1000: {
                items: 6
            }
        }
    });
    
    DURU.init();
})();

// Contact Form
    var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;
    // success function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
        form.find('input:not([type="submit"]), textarea').val('');
    }
    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-success');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
    }
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });
    
