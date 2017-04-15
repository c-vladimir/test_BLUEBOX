$('.clients-slider').slick({
	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
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
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});


$('.promo_slider').slick();

$(document).ready(function() {
			$("a.gallery").fancybox();

});

$('.icon-menu-mobile').click(function(e){
		$(this).toggleClass('open');
	});

$(document).on('click', '.js-menu', function(event) {
	// $(this).toggleClass('active');
	$('.menu').toggleClass('show');
	$('body').toggleClass('m-popup_opened');
	$("html,body").toggleClass("overflow");
});

$('.navigation__link').on('click', () => {
		$('.menu').removeClass('show');
		$('.icon-menu-mobile').removeClass('open');
		$('body').removeClass('m-popup_opened');
		$("html,body").removeClass("overflow");
	})

$('.navigation__link').click( function(){
			var scroll_el = $(this).attr('href').replace('#', '');
			if ($("a[name = " + scroll_el + "]").length != 0) {
					$('html, body').animate({ scrollTop: $(window).scrollTop() + $("a[name = " + scroll_el + "]").eq(0).offset().top - 100 }, 500);

			}
			return false;
	});
