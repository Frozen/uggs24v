$(document).ready(function(){
	


	//popup block
	$('.popup-wrap .btn-toggle').on('click touchstart', function() {
		$(this).toggleClass('active');
		$(this).next('.frm-search').children('input').focus();
		return false;
	})
	$(document).click(function(event) {
	    if ($(event.target).closest(".popup-block").length) return;
	    $('.popup-wrap .btn-toggle').removeClass('active');
	    event.stopPropagation();
	});


	//menu mobile
	$('#menu-mobile').append($('.nav .main-soc-block').clone());
	$('#menu-mobile').append($('.header .search-block').clone());
	$('#menu-mobile').append($('.nav .menu').clone());
	$('#menu-mobile').append($('.header .delivery-block').clone());
	$('#menu-mobile').append($('.header .callback-block').clone());
	$('#menu-mobile').append($('.category-box').clone());
	$('#menu-mobile li a').on('click', function() {
		if ($(this).next('ul').length>0) {
			if ($(this).parent().hasClass('open-mobile')) {
				$(this).parent().removeClass('open-mobile');
			} else {
				$('#menu-mobile .open-mobile').removeClass('open-mobile');
				$(this).parent().addClass('open-mobile')
			}
			return false;
		}
	})



	//main slider
	$('.main-slider-box').owlCarousel({
		items: 1,
		dots: true,
		loop: true,
		animateOut: 'fadeOut',
		autoplay: true,
		autoplayTimeout: 5000,
		responsive: {
			480: {nav: true}
		}
	})

	//catalog slider
	$('.catalog-slider-box .slider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		responsive: {
			0: {items: 2},
			640: {items: 3},
			750: {items: 2},
			1150: {items: 3},
		}
	})


	//opins slider
	$('.text-opins-box .slider, .video-opins-box .slider').owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: true,
		autoheight: true
	})


	//frm counter
	$('.frm-counter .btn-minus').bind('click', function(){
	    var cnt=$(this).parents('.frm-counter').find('input').val();
	    cnt=parseInt(cnt);
	    if (cnt>0) {
	        $(this).parents('.frm-counter').find('input').val(cnt-1);
	    }
	    return false;
	})
	$('.frm-counter .btn-plus').bind('click', function(){
	    var cnt=$(this).parents('.frm-counter').find('input').val();
	    $(this).parents('.frm-counter').find('input').val(cnt-1+2);
	    return false;
	})


	//product photos box
	$('.photos-box .preview-block .slider').owlCarousel({
		loop: false,
		nav: true,
		dots: false,
		responsive: {
			0: {items: 3},
			400: {items: 4},
			500: {items: 5},
			600: {items: 6},
			700: {items: 7},
			750: {items: 4},
			850: {items: 5},
			930: {items: 6},
			1000: {items: 4}
		}
	})
	$('.photos-box .main-block .item').eq($('.photos-box .preview-block .item.active').parents('.owl-item').index()).addClass('active');
	$('.photos-box .preview-block .item').on('click', function () {
	    if ($(this).hasClass('active')) {} else {
	        $('.photos-box .preview-block .item.active').removeClass('active');
	        $('.photos-box .main-block .item').removeClass('active')
	            .eq($(this).parents('.owl-item').index()).addClass('active');
	        $(this).addClass('active');
	    }
	    return false;
	})


	//tabs
	$('.tabs-box').tabs();
});