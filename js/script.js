HeightNavAndSliderTop();

$(document).ready(function() {
	

	//Hover to navigation
	Hover2navigation();	

	//CompactNavigationOpenButton
	$('.compact_navigation .button').click(function(){
		// $('body').toggleClass('compact_navigation_open');
		$(this).addClass('anim').toggleClass('open');
		$('.compact_navigation').toggleClass('open');
		$('.compact_navigation .compact_navigation_drop_down').toggleClass('show');
		if( $(this).hasClass('open') ) {
			$('.compact_navigation .compact_navigation_drop_down').slideDown(300);
			$('.overlay_body').fadeIn();
		}
		else {
			$('.compact_navigation .compact_navigation_drop_down').slideUp(300);
			$('.overlay_body').fadeOut();
		}
	});

	$(".compact_navigation .search input").on('focus', function () {
		$(this).parent('.search').addClass('active');
	});
	$(".compact_navigation .search input").on('blur', function () {
		if($(this).val().length == 0)
			$(this).parent('.search').removeClass('active');
	});

	//Initialize sliders
	StartSliders();
	
	//Set Slider top height sidebar
	HeightNavAndSliderTop();
	$(window).resize(HeightNavAndSliderTop);

	//Add Dash for reviews and change button text
	ChangeReviewsLayout();

	//Setting All DatePicker
	SettingDatePicker();

	$('.online_quote_popup .online_quote .delete').click(function(){
		// console.log('Click');
		// console.log($(this).parent('li'));
		// $(this).parent('li').addClass('delete');
		$(this).parents('li').remove();
		// $('li').parent($(this)).addClass('delete');
	});

	$('.online_quote_popup .event_type input').click(function(){
		$('.online_quote_popup .event_type input').attr('checked', false);
		$(this).attr('checked', true);
	});

	$('header .online_quote a').on('click', function() {
		$('.online_quote_popup').addClass('show');
	});
	$('.online_quote_popup .close-form').click(function(){
		$('.online_quote_popup').removeClass('show');
	});
	$('.online_quote_popup').on('click', function(){
		if($(this).hasClass('show'))
			$('.online_quote_popup').removeClass('show');
	});
	$('.online_quote_popup .steps').slick({
		arrows: false,
		dots: false,
		touchMove: false,
		draggable: false,
		infinite: false,
		// fade: true,
		speed: 500,
		// slidesToShow: 2,
		// slidesToScroll: 2,
		init: function(){
			$('.step').each(function(){
				$(this).fadeIn();
			});
		}
	});

	function OnlineQuotePopup_ProgressBar_Width() {
		$('.online_quote_popup .progress-bar').width($('.online_quote_popup .get_quote_form').width() + 80);
	}
	OnlineQuotePopup_ProgressBar_Width();
	$(window).resize(OnlineQuotePopup_ProgressBar_Width);

	$('.online_quote_popup .next-step').on('click', function(){
		if ($(this).hasClass('next-step-2')) {
			// if(checkEmpty('#quote-name')) {
				// $(this).removeClass('first-step').addClass('next-step-3');
				$('.online_quote_popup .progress-bar-status').css('width', '66.6666%');
				$('.online_quote_popup .steps').slick('slickNext');
				$('.online_quote_popup .current-step').html($(this).parent().data('slick-index') + 2);
				// $('.error-msg').text('');
			// } else {
			// 	$('.error-msg').text('Please fill the field before continuing');
			// }
		} else if ($(this).hasClass('next-step-3')) {

			// if(checkEmpty('#quote-email')) {
			// 	if(validateEmail('#quote-email')) {
					$('.online_quote_popup .progress-bar-status').css('width', '100%');
					$('.online_quote_popup .steps').slick('slickNext');
					$('.online_quote_popup .current-step').html($(this).parent().data('slick-index') + 2);
				// 	$('.error-msg').text('');
				// } else {
				// 	$('.error-msg').text('Please enter correct email before continuing');
				// }

			// } else {
			// 	$('.error-msg').text('Please fill the field before continuing');
			// }

		} else if ($(this).hasClass('next-step-4')) {
			// if(checkEmpty('#quote-phone')) {
				// $('.progress-bar-status').css('width', '100%');
				$('.online_quote_popup .steps').slick('slickNext');
				$('.online_quote_popup .status-bar').fadeOut();
				$('.online_quote_popup .progress-bar').fadeOut();
				// $('.current-step').html($(this).parent().data('slick-index') + 2);
			// 	$('.error-msg').text('');
			// } else {
			// 	$('.error-msg').text('Please fill the field before continuing');
			// }

		} else {
			// if(checkEmpty('#quote-brief')) {
				$.ajax({
					url: ajaxurl,
					method: 'POST',
					data: $('.online_quote_popup .get_quote_form').serialize(),
					success: function(data){
						//$('.progress-bar-status').css('width', '100%');
						$('.online_quote_popup .steps').slick('slickNext');
						setTimeout(function(){
							$('.online_quote_popup .progress-bar').fadeOut();
							$('.online_quote_popup .status-bar').fadeOut();
						}, 100);
					},
					error: function(error){}
				});
				// $('.error-msg').text('');
			// }// else {
			// 	$('.error-msg').text('Please fill the field before continuing');
			// }

		}
	});

	$('.reviews_block .cd-testimonials-all .cd-testimonials-all-wrapper > ul').addClass('container');

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
	$('.header_nav_and_slider .compact_navigation .compact_navigation_drop_down nav a').hover(
		function() {
			$('.header_nav_and_slider .compact_navigation .compact_navigation_drop_down nav a').css('opacity', '.4');
		},
		function() {
			$('.header_nav_and_slider .compact_navigation .compact_navigation_drop_down nav a').css('opacity', '1');
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
		autoplaySpeed: 2000,
	});

	$('.featured_products .cd-items').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.reviews_block .cd-testimonials').slick({
		dots: true,
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 2000
	});
}

function HeightNavAndSliderTop () {
	if( $(window).width() >= 1024 ) {
		var heightNav = $('.logo_and_nav').outerHeight();
		$('.header_nav_and_slider .slider_top img').outerHeight(heightNav);
		$('.header_nav_and_slider .slider_top').outerHeight(heightNav);
	}
}

function ChangeReviewsLayout() {
	if( $(window).width() >= 768 )
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

function SettingDatePicker() {
	$('#event_details_date_function_from').datepicker({
		dateFormat: "dd/mm/yy",
		dayNamesShort: [ "Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam" ],
		firstDay: 1
	});
	$('#event_details_date_function_to').datepicker({
		dateFormat: "dd/mm/yy",
		dayNamesShort: [ "Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam" ],
		firstDay: 1
	});
}