/* CLICK LINK WITH DATA-IMAGE-ZOOM
=========================================*/
$('a[data-image-zoom]').click(function(event) {
	event.preventDefault();

	/* GET PROPERTIES
	=========================================*/
	var largeImg = $(this).attr('href'),
		groupName = $(this).data('image-zoom');

	/* SET ID ON CLICKED LINK
	=========================================*/
	$(this).attr('id', 'image-zoom-active');

	/* ADD MODAL
	=========================================*/
	$('body').append("<div class='image-zoom-overlay'><div style='background:url("+largeImg+") center no-repeat; background-size:contain;'><a href='#' id='regress-image-zoom'></a><a href='#' id='advance-image-zoom'></a></div><a href='#' id='close-image-zoom'></a></div>");
	$('.image-zoom-overlay').offset();
	$('.image-zoom-overlay').addClass('image-zoom-visible');

	/* DETERMINE IF PART OF A GROUP
	=========================================*/
	var groupTotal = $('a[data-image-zoom=' + groupName + ']').length;
	if (groupTotal > 1){
		$(".image-zoom-overlay div").draggable();
	}
});


/* FN REMOVING OVERLAY
=========================================*/
function destroyImageZoom(){
	$('.image-zoom-overlay').removeClass('image-zoom-visible');
	setTimeout(function(){
		$('.image-zoom-overlay').remove();
	},250);
	$('#image-zoom-active').attr('id','');
}

$(document.body).on('click', '#close-image-zoom', function(event) {
	event.preventDefault();
	destroyImageZoom();
});

/* NEXT IMAGE
=========================================*/
function advanceImageZoom(){
	var groupName = $('#image-zoom-active').data('image-zoom'),
		groupTotal = $('a[data-image-zoom=' + groupName + ']').length,
		currentIndex = $('#image-zoom-active').index("[data-image-zoom=" + groupName + "]"),
		nextIndex = currentIndex + 1;
	/* At End */
	if (nextIndex >= groupTotal) {
		$('.image-zoom-overlay div').animate({
			left: 0
		}, 150);
	} else {
		$('#image-zoom-active').attr('id','');
		$('.image-zoom-overlay div').css('opacity','0');
		setTimeout(function(){
			$('.image-zoom-overlay div').remove();
			$("[data-image-zoom=" + groupName + "]:eq(" + nextIndex + ")").attr('id', 'image-zoom-active');
			var nextImg = $("#image-zoom-active").attr('href');
			$('.image-zoom-overlay').prepend("<div style='background:url("+nextImg+") center no-repeat; background-size:contain;left:100%;'><a href='#' id='regress-image-zoom'></a><a href='#' id='advance-image-zoom'></a></div>");
			$('.image-zoom-overlay div').animate({
				left: 0
			}, 150);
			$(".image-zoom-overlay div").draggable();
		}, 250);
	}
}

$(document.body).on('click', '#advance-image-zoom', function(event) {
	event.preventDefault();
	advanceImageZoom();
});

/* PREV IMAGE
=========================================*/
function regressImageZoom(){
	var groupName = $('#image-zoom-active').data('image-zoom'),
		groupTotal = $('a[data-image-zoom=' + groupName + ']').length,
		currentIndex = $('#image-zoom-active').index("[data-image-zoom=" + groupName + "]"),
		nextIndex = currentIndex - 1;
	/* At End */
	if (nextIndex <= -1) {
		$('.image-zoom-overlay div').animate({
			left: 0
		}, 150);
	} else {
		$('#image-zoom-active').attr('id','');
		$('.image-zoom-overlay div').css('opacity','0');
		setTimeout(function(){
			$('.image-zoom-overlay div').remove();
			$("[data-image-zoom=" + groupName + "]:eq(" + nextIndex + ")").attr('id', 'image-zoom-active');
			var nextImg = $("#image-zoom-active").attr('href');
			$('.image-zoom-overlay').prepend("<div style='background:url("+nextImg+") center no-repeat; background-size:contain;left:-100%;'><a href='#' id='regress-image-zoom'></a><a href='#' id='advance-image-zoom'></a></div>");
			$('.image-zoom-overlay div').animate({
				left: 0
			}, 150);
			$(".image-zoom-overlay div").draggable();
		}, 250);
	}
}

$(document.body).on('click', '#regress-image-zoom', function(event) {
	event.preventDefault();
	regressImageZoom();
});

/* DRAG FUNCTION
=========================================*/
$.fn.draggable = function() {
  var offset = null;
  var start = function(e) {
    var orig = e.originalEvent;
    var pos = $(this).position();
    offset = {
      x: orig.changedTouches[0].pageX - pos.left,
      y: orig.changedTouches[0].pageY - pos.top
    };
  };
  var moveItem = function(e) {
    e.preventDefault();
    var orig = e.originalEvent;
    $(this).css({
      left: orig.changedTouches[0].pageX - offset.x
    });
  };
  var releaseItem = function(e){
	e.preventDefault();
	var currentLeft = parseInt($(this).css('left'), 10),
	  	windowWidth = $(window).width(),
		percentMoved = (currentLeft / windowWidth) * 100;
	if (percentMoved < -30) {
		advanceImageZoom();
	} else if (percentMoved > 30) {
		regressImageZoom();
	} else {
		$(this).animate({
			left: '0'
		}, 100);
	}
  };
  this.bind("touchstart", start);
  this.bind("touchmove", moveItem);
  this.bind("touchend", releaseItem);
};
