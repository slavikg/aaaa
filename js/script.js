
$(document).ready(function() {
	

	// Hover to navigation
	Hover2navigation();	

	//Initialize sliders
	StartSliders();
	
	//Add Dash for reviews
	ChangeReviewsLayout();

	// Column2Height($('.header_nav_and_slider .logo_and_nav'),
	// 	$('.header_nav_and_slider .slider_top'));
	// $(window).resize(Column2Height($('.header_nav_and_slider .logo_and_nav'),
	// 	$('.header_nav_and_slider .slider_top')));
	// Column2Height

});

function Hover2navigation() {
	$('.header_nav_and_slider .logo_and_nav nav a').hover(
		function() {
			$('.header_nav_and_slider .logo_and_nav nav a').css('opacity', '.4');
		},
		function() {
			$('.header_nav_and_slider .logo_and_nav nav a').css('opacity', '1');
		}
	);
}

function Column2Height(e1, e2) {
	e1.css('height', 'auto');
	e2.css('height', 'auto');

	height1 = e1.height();
	height2 = e2.height();
	if( height1 > height2)
		e2.height(height1);
	else
		e1.height(height2);
}

function StartSliders() {
	$('.slider_top').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 2000
	});

	$('.featured_products .cd-items').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1
	});

	$('.reviews_block .cd-testimonials').slick({
		dots: true,
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 2000
	});
}

function ChangeReviewsLayout() {
	$('.reviews_block .cd-testimonials-wrapper .cd-author li:first-child').each(
		function() {
			$(this).text( $(this).text() + ' - ' );
		});
	// $('.reviews_block .cd-testimonials-wrapper .cd-author li:last-child').each(
	// 	function() {
	// 		$(this).text( ' ' + $(this).text());
	// 	});
	$('.reviews_block .cd-testimonials-wrapper .cd-see-all').text('view all');
}