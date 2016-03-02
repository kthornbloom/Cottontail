/* ADD MARKUP
=========================================*/
$('.carousel').each(function(){
	$(this).wrapInner('<div class="carousel-stage"></div>').append('<a href="#" class="carousel-prev"></a><a href="#" class="carousel-next"></a>');
})

/* CLICK NEXT
=========================================*/
$(document.body).on('click', '.carousel-next', function (e) {
	e.preventDefault();
	var winWidth = $(window).width();
	if (winWidth > 720) {
		var moveAmt = '-25%'
	} else if(winWidth < 720 && winWidth > 512) {
		var moveAmt = '-33.3%'
	} else if(winWidth < 512) {
		var moveAmt = '-50%'
	}
	$(this).parents('.carousel').find('.carousel-stage').css('left', moveAmt);
	$(this).parents('.carousel').addClass('active-carousel');
	setTimeout(function(){
		$('.active-carousel').addClass('notrans-carousel');
		$('.active-carousel .carousel-item:first').appendTo('.active-carousel .carousel-stage');
		$('.active-carousel .carousel-stage').css('left', '0%');

	}, 250);
	setTimeout(function(){
		$('.active-carousel').removeClass('active-carousel notrans-carousel');
	}, 300);
});

/* CLICK PREV
=========================================*/
$(document.body).on('click', '.carousel-prev', function (e) {
	e.preventDefault();
	var winWidth = $(window).width();
	if (winWidth > 720) {
		var moveAmt = '-25%'
	} else if(winWidth < 720 && winWidth > 512) {
		var moveAmt = '-33.3%'
	} else if(winWidth < 512) {
		var moveAmt = '-50%'
	}

	$(this).parents('.carousel').addClass('notrans-carousel').addClass('active-carousel');
	$('.notrans-carousel .carousel-stage').css('left', moveAmt);
	$('.notrans-carousel .carousel-item:last').prependTo('.notrans-carousel .carousel-stage');
	setTimeout(function(){

		$('.notrans-carousel').removeClass('notrans-carousel');
		$('.active-carousel .carousel-stage').css('left', '0%');
	}, 10);
	setTimeout(function(){
		$('.active-carousel').removeClass('active-carousel');
	}, 20);
});
