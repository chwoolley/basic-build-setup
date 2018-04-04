$(document).ready(function () {

	/* ==========================================================================
	   Breakpoints
	   ========================================================================== */

	var $breakpointLargest = "screen and (max-width:1276px)";
	var $breakpointLarge = "screen and (max-width:1024px)";
	var $breakpointMedium = "screen and (max-width:768px)";
	var $breakpointSmallish = "screen and (max-width:672px)";
	var $breakpointSmall = "screen and (max-width:480px)";

	/* ==========================================================================
	   Enquire.js Content Folding
	   ========================================================================== */

	enquire
	.register($breakpointLarge, {
	    match: function () {
	    },
	    unmatch: function () {
	    }
	})
	.register($breakpointMedium, {
	    match: function () {
	    },
	    unmatch: function () {
	    }
	})
	.register($breakpointSmallish, {
	    match: function () {
	    },
	    unmatch: function () {
	    }
	});

	/* ==========================================================================
	   Mobile Menu Button
	   ========================================================================== */

	$( ".js-trigger-mobile-nav" ).click(function(e) {
		e.preventDefault();
		$("nav").slideToggle("slow", "swing");
		$(this).toggleClass("is-active");
		$("body").toggleClass("lock-scroll");
	});

	/* ==========================================================================
	   Slick Sliders
	   ========================================================================== */

	$('.single-item').slick({
		dots: true
	});

	$('.multiple-items').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		responsive: [
			{
			breakpoint: 780,
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

	/* ==========================================================================
	   Form Validation
	   ========================================================================== */

	$("form").validate();

});
