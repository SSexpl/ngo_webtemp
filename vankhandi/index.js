var activeOffset = $('nav ul .active').position().left;
var activeItemWidth = $('nav ul .active').width();

$('document').ready(function(){
	$('.dot').css('left', activeOffset + activeItemWidth / 2);
	var bgColor = $('.active a').css("background-color");
	$('.dot').css('background-color', bgColor);
});

$('nav').mouseout(function(){
	$('.dot').css('left', activeOffset + activeItemWidth / 2);
	var bgColor = $('.active a').css("background-color");
	$('.dot').css('background-color', bgColor);
});

$('nav ul li').hover(function(){
	var navOffset = $(this).position().left;
	var navItemWidth = $(this).width();
	
	$('.dot').css('left', navOffset + navItemWidth / 2);
	
	var bgColor = $('a', this).css("background-color");
	
	$('.dot').css('background-color', bgColor);
});

$('input').on('change', function() {
	$('body').toggleClass('blue');
  });
  
  (function () {
	"use strict";
  
	var carousels = function () {
	  $(".owl-carousel1").owlCarousel({
		loop: true,
		center: true,
		margin: 0,
		responsiveClass: true,
		nav: false,
		responsive: {
		  0: {
			items: 1,
			nav: false
		  },
		  680: {
			items: 2,
			nav: false,
			loop: false
		  },
		  1000: {
			items: 3,
			nav: true
		  }
		}
	  });
	};
  
	(function ($) {
	  carousels();
	})(jQuery);
  })();
  