$(document).ready(function ($) {
    'use strict';


/* ---------------------------------------------
     page  Prealoader
     --------------------------------------------- */
     $(window).on('load', function () {
        $("#loading-center-page").fadeOut();
        $("#loading-page").delay(400).fadeOut("slow");
    });




 /* ---------------------------------------------
     Sticky header
     --------------------------------------------- */
     $(window).on('scroll', function () {
        var scroll_top=$(window).scrollTop();

        if (scroll_top > 40){
            $('.navbar').addClass('sticky');

        }
        else{
          $('.navbar').removeClass('sticky');  
      }

  });

/*--------------------
Slick  JS
----------------------*/

$('.service-slider').slick({
  dots: true,
  padding: 0,
  slidesPerRow: 5,
  rows: 1,
  arrows: false,
  centerMode: true,
  margin: 20,
  slidesToShow:5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll:3,
        infinite: true,

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

});

$('.testimonial-slider').slick({
    dots: false,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev'><i class='uil uil-arrow-right'></i></button>",
    nextArrow: "<button type='button' class='slick-next'><i class='uil uil-arrow-left'></i></button>",
     centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
   cssEase: 'linear',

  
});
 
 
 
 
 
/* ---------------------------------------------
 Back top page scroll up
 --------------------------------------------- */


 $.scrollUp({
    scrollText: '<i class=" uil-angle-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
});


/* ---------------------------------------------
 WoW plugin
 --------------------------------------------- */

 new WOW().init({
    mobile: true,
});


    /*--------------------
 MAGNIFIC POPUP IMAGE  JS
 ----------------------*/
 $('.modal-image').magnificPopup({
  type: 'image',
  removalDelay:500,
  mainClass: 'mfp-fade',
  gallery: {
      enabled: true
  },
  zoom: {
      enabled: true,

      duration: 300,
      easing: 'ease-in-out',

      opener: function (openerElement) {

          return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
  }
}); 

/* ========================================================== */
	/*   Navigation Color                                         */
	/* ========================================================== */
	
	$('#navbarContent').onePageNav({
		filter: ':not(.external)'
	});

/* ---------------------------------------------
Circle anmations
 --------------------------------------------- */


 
const colors = ["#f37464b8", "#fef2f1"];

const numBalls =150;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 800)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  $('.circle-block').append(ball);
  
}


// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});


/* ---------------------------------------------
 Smooth scroll
 --------------------------------------------- */

 $('a.section-scroll[href*="#"]:not([href="#"])').on('click', function (event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
        location.hostname == this.hostname) {

        var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    
    if (target.length) {
            // Only prevent default if animation is actually gonna happen
        
            event.preventDefault();
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 750);
            return false;
        }
    }

});



/*----------------------------------------
 Newsletter Subscribe
 --------------------------------------*/

 $(".subscribe-mail").ajaxChimp({
    callback: mailchimpCallRep,
    url: "mailchimp-post-url" //Replace this with your own mailchimp post URL. Just paste the url inside "".
});

 function mailchimpCallRep(resp) {
    if (resp.result === "success") {
        $(".sucess-message").html(resp.msg).fadeIn(1000);
        $(".error-message").fadeOut(500);
    } else if (resp.result === "error") {
        $(".error-message").html(resp.msg).fadeIn(1000);
    }
}

});