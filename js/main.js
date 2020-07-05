(function($) {
  "use strict";

  $('select').niceSelect();
  $(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll < 50) {
      $("#sticky-header").removeClass("sticky-menu");
    } else {
      $("#sticky-header").addClass("sticky-menu");
    }
  });
  //transparent
  $('.main-menu ul li:first-child > a').addClass('active')

  $('.main-menu ul li > a').on('click', function() {
    $('.basic-menu li a').removeClass('active');
    $(this).addClass("active");
    $('.basic-menu li ul.sub-menu li a').removeClass('active');
  });

  //item active
  function smoothSctollTop() {
    $('.main-menu ul li > a').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 10
        }, 800);
      }
    });
  }
  smoothSctollTop();
  //one page Menu Nav

  $('#mobile-menu').meanmenu({
      meanScreenWidth: "767",
      meanMenuContainer: '.mobile-menu',
    });
    //mobile menu

  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('.goTop').fadeIn();
    } else {
      $('.goTop').fadeOut();
    }
  });

  $(".goTop").on('click', function() {
    $("body, html").animate({
      scrollTop: 0
    }, 500);
    return false;
  });
  //sticky top
  $('#container').imagesLoaded(function() {
    $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-item'
      }
    })
    $('.protfolio-part').on('click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue
      });
    });
    $('.protfolio-part button').on('click', function(event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });
    var $grid = $('.grid').isotope({});
  });
  //isotop
  function mainSlider() {
    var BasicSlider = $('.slider-active');
    BasicSlider.on('init', function(e, slick) {
      var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('.single-slier[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      doAnimations($animatingElements);
    });
    BasicSlider.slick({
      autoplay: false,
      autoplaySpeed: 10000,
      dots: false,
      fade: true,
      prevArrow: '<button type="button" class="prevarrow"><span><i class="fas fa-angle-left"></i></span></button>',
      nextArrow: '<button type="button" class="nextarrow"><span><i class="fas fa-angle-right"></i></span></button>',
      arrows: true,
      responsive: [{
        breakpoint: 992,
        settings: {
          dots: false,
          fade: false,
          arrows: false
        }
      }]
    });

    function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function() {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function() {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();
  new WOW().init();
  //slick slider








})(jQuery);
