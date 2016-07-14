$(document.body).on('click', '.accordion-title', function(event) {
	$(this).next('.accordion-result').slideToggle();
	$(this).toggleClass('accordion-open');
});

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

$('.document-list-search').on('input', function() {
		var searchParam = $(this).val();
		$(this).parents('.document-list-wrap').find('.document-list a').each(function(){
			if ($(this).text().search(new RegExp(searchParam, "i")) < 0) {
				$(this).css('display','none');
			} else {
				$(this).css('display','block');
			}
		});
	});


function starHighlighter(starAmt){
	switch (starAmt) {
	case 1:
		$('.stars').html('<i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>');
		break;
	case 2:
		$('.stars').html('<i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>');
		break;
	case 3:
		 $('.stars').html('<i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>');
		break;
	case 4:
		$('.stars').html('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>');
		break;
	case 5:
		$('.stars').html('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>');
		break;
	case 6:
		$('.stars').html('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>');
		break;
	case 7:
		$('.stars').html('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i>');
		break;
	case 8:
		$('.stars').html('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i>');
		break;
	case 9:
		$('.stars').html('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o">');
		break;
	case 10:
		$('.stars').html('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>');
		break;
	}
}

$(document.body).on('mouseover', '.stars-hover a', function (event) {
  var starIndex = $(this).index();
      starIndex = starIndex + 1;
    // Use this ↓ to assign a number value to a hidden input or whatever
    $('#rating_value').val(starIndex);
	starHighlighter(starIndex);
});

$(document.body).on('mouseout', '.stars-hover a', function (event) {
	var selectedRating = parseInt($(this).parents('.stars-wrap').attr('rel'),10);

	if(selectedRating){
		console.log(selectedRating);
		starHighlighter(selectedRating);
	} else {
		console.log('Not Set');
		$('.stars').html('<i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>');
	}
});

$(document.body).on('click', '.stars-hover a', function (event) {
    event.preventDefault();
	var starClicked = $(this).index(),
		starClicked = starClicked + 1;
	$(this).parents('.stars-wrap').attr('rel',starClicked).addClass('rating-selected');
});

// Video
$(".video").each(function() { 
	var youtubeEmbed = $('span', this).html();
		youtubeId = youtubeEmbed.replace('https://youtu.be/', '');
	$(this).attr('rel',youtubeId);
	$('span', this).html('<a href="#" class="home-video-thumb"><img src="http://img.youtube.com/vi/'+youtubeId+'/mqdefault.jpg" alt=""></a>');
});


$('.video').click(function(event){
	var youtubeId = $(this).attr('rel');
	$(".home-video-thumb", this).html('<div class="responsive-iframe-container"><iframe src="https://www.youtube.com/embed/'+youtubeId+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe></div>');
	event.preventDefault();
});
$(document).ready(function() {

	/* WHEN CLOSING BROWSER WARNING, SET COOKIE TO MAKE IT STAY AWAY
	=========================================*/
	$(document.body).on('click', '#upgrade-cancel', function(event) {
		Cookies.set('cancelupgrade', 'true', { expires: 1 });
		$('.old-browser-warning').remove();
	});

	/* IF COOKIE IS SET, DON'T SHOW OLD BROWSER WARN
	=========================================*/
	if (Cookies.get('cancelupgrade')){
		$('.old-browser-warning').remove();
	}

	/* ADD CLASS TO NAV ITEMS WITH MENUES FOR SYTLING
	=========================================*/
	$('nav > ul > li ul').each(function(){
		$(this).parent().find('>a').addClass("has-menu");
	});

	/* CHECK IF NAV MENU IS OFF-SCREEN. ADD CLASS IF SO
	=========================================*/
	$(document.body).on('mouseover', 'nav li', function(event) {
		if($('>ul', this).length) {
			var windowWidth = $(window).width(),
				menuWidth = $('>ul', this).outerWidth(),
				parentWidth = $('>ul', this).parent().outerWidth(),
				parentOffset = $('>ul', this).parent().offset();

			if((menuWidth + parentOffset.left + parentWidth) > windowWidth) {
				$('>ul', this).addClass('menu-reposition');
			} else {
				$('>ul', this).removeClass('menu-reposition');
			}
		}
	});

	/* OPEN MOBILE NAV
	=========================================*/
	$(document.body).on('click', '#mobile-open', function(event) {
		event.preventDefault();
		$('nav').show();
		$('nav').offset();
		$('nav').attr('id','mobile-nav').prepend('<a href="#" id="mobile-close">X</a>');
	});

	/* TOGGLE SUB MENUES ON MOBILE
	=========================================*/
	$(document.body).on('click', '#mobile-nav .has-menu', function(event) {
		var windowWidth = $(window).width(),
			pseudoWidth = 50,
			clickPos = event.pageX;
		if (clickPos >= (windowWidth - pseudoWidth)) {
			event.preventDefault();
			$(this).parent().find('>ul').toggleClass('mobile-menu-open');
			$(this).toggleClass('has-open-menu');
		} else {

		}
	});

	/* CLOSE MOBILE NAV
	=========================================*/
	$(document.body).on('click', '#mobile-close', function(event) {
		event.preventDefault();
		$('nav').attr('id','desktop-nav');
		setTimeout(function(){
			$('nav').css('display','');
		}, 250);
		$('#mobile-close').remove();
		$('.has-open-menu').removeClass('has-open-menu');
		$('.mobile-menu-open').removeClass('mobile-menu-open');
	});

});

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

/*!
 * JavaScript Cookie v2.0.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		var _OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = _OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				return (document.cookie = [
					key, '=', value,
					attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
					attributes.path    && '; path=' + attributes.path,
					attributes.domain  && '; domain=' + attributes.domain,
					attributes.secure ? '; secure' : ''
				].join(''));
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var name = parts[0].replace(rdecode, decodeURIComponent);
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.get = api.set = api;
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));
/*
Monthly 2.0.6 by Kevin Thornbloom is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.
*/

(function($) {
	$.fn.extend({
		monthly: function(options) {
			// These are overridden by options declared in footer
			var defaults = {
				weekStart: 'Sun',
				mode: '',
				xmlUrl: '',
				target: '',
				eventList: true,
				maxWidth: false,
				setWidth: false,
				startHidden: false,
				showTrigger: '',
				stylePast: false,
				disablePast: false
			}

			var options = $.extend(defaults, options),
				that = this,
				uniqueId = $(this).attr('id'),
				d = new Date(),
				currentMonth = d.getMonth() + 1,
				currentYear = d.getFullYear(),
				currentDay = d.getDate(),
				monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				dayNames = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

		if (options.maxWidth != false){
			$('#'+uniqueId).css('maxWidth',options.maxWidth);
		}
		if (options.setWidth != false){
			$('#'+uniqueId).css('width',options.setWidth);
		}

		if (options.startHidden == true){
			$('#'+uniqueId).addClass('monthly-pop').css({
				'position' : 'absolute',
				'display' : 'none'
			});
			$(document).on('focus', ''+options.showTrigger+'', function (e) {
				$('#'+uniqueId).show();
				e.preventDefault();
			});
			$(document).on('click', ''+options.showTrigger+', .monthly-pop', function (e) {
				e.stopPropagation();
				e.preventDefault();
			});
			$(document).on('click', function (e) {
				$('#'+uniqueId).hide();
			});
		}

		// Add Day Of Week Titles
		if (options.weekStart == 'Sun') {
			$('#' + uniqueId).append('<div class="monthly-day-title-wrap"><div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div></div><div class="monthly-day-wrap"></div>');
		} else if (options.weekStart == 'Mon') {
			$('#' + uniqueId).append('<div class="monthly-day-title-wrap"><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div></div><div class="monthly-day-wrap"></div>');
		} else {
			console.error('Monthly.js has an incorrect entry for the weekStart variable');
		}

		// Add Header & event list markup
		$('#' + uniqueId).prepend('<div class="monthly-header"><div class="monthly-header-title"></div><a href="#" class="monthly-prev"></a><a href="#" class="monthly-next"></a></div>').append('<div class="monthly-event-list"></div>');

		// How many days are in this month?
		function daysInMonth(m, y){
			return m===2?y&3||!(y%25)&&y&15?28:29:30+(m+(m>>3)&1);
		}

		// Massive function to build the month
		function setMonthly(m, y){
			$('#' + uniqueId).data('setMonth', m).data('setYear', y);

			// Get number of days
			var dayQty = daysInMonth(m, y),
				// Get day of the week the first day is
				mZeroed = m -1,
				firstDay = new Date(y, mZeroed, 1, 0, 0, 0, 0).getDay();

			// Remove old days
			$('#' + uniqueId + ' .monthly-day, #' + uniqueId + ' .monthly-day-blank').remove();
			$('#'+uniqueId+' .monthly-event-list').empty();
			// Print out the days
			if (options.mode == 'event') {
				for(var i = 0; i < dayQty; i++) {

					var day = i + 1; // Fix 0 indexed days
					var dayNamenum = new Date(y, mZeroed, day, 0, 0, 0, 0).getDay()

					$('#' + uniqueId + ' .monthly-day-wrap').append('<a href="#" class="m-d monthly-day monthly-day-event" data-number="'+day+'"><div class="monthly-day-number">'+day+'</div><div class="monthly-indicator-wrap"></div></a>');
					$('#' + uniqueId + ' .monthly-event-list').append('<div class="monthly-list-item" id="'+uniqueId+'day'+day+'" data-number="'+day+'"><div class="monthly-event-list-date">'+dayNames[dayNamenum]+'<br>'+day+'</div></div>');
				}
			} else {
				for(var i = 0; i < dayQty; i++) {
					// Fix 0 indexed days
					var day = i + 1;

					// Check if it's a day in the past
					if(((day < currentDay && m === currentMonth) || y < currentYear || (m < currentMonth && y == currentYear)) && options.stylePast == true){
							$('#' + uniqueId + ' .monthly-day-wrap').append('<a href="#" class="m-d monthly-day monthly-day-pick monthly-past-day" data-number="'+day+'"><div class="monthly-day-number">'+day+'</div><div class="monthly-indicator-wrap"></div></a>');
					} else {
						$('#' + uniqueId + ' .monthly-day-wrap').append('<a href="#" class="m-d monthly-day monthly-day-pick" data-number="'+day+'"><div class="monthly-day-number">'+day+'</div><div class="monthly-indicator-wrap"></div></a>');
					}
				}
			}


			// Set Today
			var setMonth = $('#' + uniqueId).data('setMonth'),
				setYear = $('#' + uniqueId).data('setYear');
			if (setMonth == currentMonth && setYear == currentYear) {
				$('#' + uniqueId + ' *[data-number="'+currentDay+'"]').addClass('monthly-today');
			}

			// Reset button
			if (setMonth == currentMonth && setYear == currentYear) {
				$('#' + uniqueId + ' .monthly-header-title').html(monthNames[m - 1] +' '+ y);
			} else {
				$('#' + uniqueId + ' .monthly-header-title').html(monthNames[m - 1] +' '+ y +'<a href="#" class="monthly-reset" title="Back To This Month"></a> ');
			}

			// Account for empty days at start
			if(options.weekStart == 'Sun' && firstDay != 7) {
				for(var i = 0; i < firstDay; i++) {
					$('#' + uniqueId + ' .monthly-day-wrap').prepend('<div class="m-d monthly-day-blank"><div class="monthly-day-number"></div></div>');
				}
			} else if (options.weekStart == 'Mon' && firstDay == 0) {
				for(var i = 0; i < 6; i++) {
					$('#' + uniqueId + ' .monthly-day-wrap').prepend('<div class="m-d monthly-day-blank" ><div class="monthly-day-number"></div></div>');
				}
			} else if (options.weekStart == 'Mon' && firstDay != 1) {
				for(var i = 0; i < (firstDay - 1); i++) {
					$('#' + uniqueId + ' .monthly-day-wrap').prepend('<div class="m-d monthly-day-blank" ><div class="monthly-day-number"></div></div>');
				}
			}

			//Account for empty days at end
			var numdays = $('#' + uniqueId + ' .monthly-day').length,
				numempty = $('#' + uniqueId + ' .monthly-day-blank').length,
				totaldays = numdays + numempty,
				roundup = Math.ceil(totaldays/7) * 7,
				daysdiff = roundup - totaldays;
			if(totaldays % 7 != 0) {
				for(var i = 0; i < daysdiff; i++) {
					$('#' + uniqueId + ' .monthly-day-wrap').append('<div class="m-d monthly-day-blank"><div class="monthly-day-number"></div></div>');
				}
			}

			// Events
			if (options.mode == 'event') {
				// Remove previous events
				// Add Events
				$.get(''+options.xmlUrl+'', function(d){
					$(d).find('event').each(function(){
						// Year [0]   Month [1]   Day [2]
						var fullstartDate = $(this).find('startdate').text(),
							startArr = fullstartDate.split("-"),
							startYear = startArr[0],
							startMonth = parseInt(startArr[1], 10),
							startDay = parseInt(startArr[2], 10),
							fullendDate = $(this).find('enddate').text(),
							endArr = fullendDate.split("-"),
							endYear = endArr[0],
							endMonth = parseInt(endArr[1], 10),
							endDay = parseInt(endArr[2], 10),
							eventURL = $(this).find('url').text(),
							eventTitle = $(this).find('name').text(),
							eventColor = $(this).find('color').text(),
							eventId = $(this).find('id').text(),
							startTime = $(this).find('starttime').text(),
							startSplit = startTime.split(":");
							endTime = $(this).find('endtime').text(),
							endSplit = endTime.split(":");
							eventLink = '',
							startPeriod = 'AM',
							endPeriod = 'PM';

						/* Convert times to 12 hour & determine AM or PM */
						if(parseInt(startSplit[0]) >= 12) {
							var startTime = (startSplit[0] - 12)+':'+startSplit[1]+'';
							var startPeriod = 'PM'
						}

						if(parseInt(startTime) == 0) {
							var startTime = '12:'+startSplit[1]+'';
						}

						if(parseInt(endSplit[0]) >= 12) {
							var endTime = (endSplit[0] - 12)+':'+endSplit[1]+'';
							var endPeriod = 'PM'
						}
						if(parseInt(endTime) == 0) {
							var endTime = '12:'+endSplit[1]+'';
						}
						if (eventURL){
							var eventLink = 'href="'+eventURL+'"';
						}

						// function to print out list for multi day events
						function multidaylist(){
							var timeHtml = '';
							if (startTime){
								var startTimehtml = '<div><div class="monthly-list-time-start">'+startTime+' '+startPeriod+'</div>';
								var endTimehtml = '';
								if (endTime){
									var endTimehtml = '<div class="monthly-list-time-end">'+endTime+' '+endPeriod+'</div>';
								}
								var timeHtml = startTimehtml + endTimehtml + '</div>';
							}
							$('#'+uniqueId+' .monthly-list-item[data-number="'+i+'"]').addClass('item-has-event').append('<a href="'+eventURL+'" class="listed-event"  data-eventid="'+ eventId +'" style="background:'+eventColor+'" title="'+eventTitle+'">'+eventTitle+' '+timeHtml+'</a>');
						}


						// If event is one day & within month
						if (!fullendDate && startMonth == setMonth && startYear == setYear) {
							// Add Indicators
							$('#'+uniqueId+' *[data-number="'+startDay+'"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator"  data-eventid="'+ eventId +'" style="background:'+eventColor+'" title="'+eventTitle+'">'+eventTitle+'</div>');
							// Print out event list for single day event
							var timeHtml = '';
							if (startTime){
								var startTimehtml = '<div><div class="monthly-list-time-start">'+startTime+' '+startPeriod+'</div>';
								var endTimehtml = '';
								if (endTime){
									var endTimehtml = '<div class="monthly-list-time-end">'+endTime+' '+endPeriod+'</div>';
								}
								var timeHtml = startTimehtml + endTimehtml + '</div>';
							}
							$('#'+uniqueId+' .monthly-list-item[data-number="'+startDay+'"]').addClass('item-has-event').append('<a href="'+eventURL+'" class="listed-event"  data-eventid="'+ eventId +'" style="background:'+eventColor+'" title="'+eventTitle+'">'+eventTitle+' '+timeHtml+'</a>');


						// If event is multi day & within month
						} else if (startMonth == setMonth && startYear == setYear && endMonth == setMonth && endYear == setYear){
							for(var i = parseInt(startDay); i <= parseInt(endDay); i++) {
								// If first day, add title
								if (i == parseInt(startDay)) {
									$('#'+uniqueId+' *[data-number="'+i+'"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator" data-eventid="'+ eventId +'" style="background:'+eventColor+'" title="'+eventTitle+'">'+eventTitle+'</div>');
								} else {
									$('#'+uniqueId+' *[data-number="'+i+'"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator" data-eventid="'+ eventId +'" style="background:'+eventColor+'" title="'+eventTitle+'"></div>');
								}
								multidaylist();
							}

						// If event is multi day, starts in prev month, and ends in current month
						} else if ((endMonth == setMonth && endYear == setYear) && ((startMonth < setMonth && startYear == setYear) || (startYear < setYear))) {
							for(var i = 0; i <= parseInt(endDay); i++) {
								// If first day, add title
								if (i==1){
									$('#'+uniqueId+' *[data-number="'+i+'"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator" data-eventid="'+ eventId +'" style="background:'+eventColor+'" title="'+eventTitle+'">'+eventTitle+'</div>');
								} else {
									$('#'+uniqueId+' *[data-number="'+i+'"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator" data-eventid="'+ eventId +'" style="background:'+eventColor+'" title="'+eventTitle+'"></div>');
								}
								multidaylist();
							}

						// If event is multi day, starts in this month, but ends in next
						} else if ((startMonth == setMonth && startYear == setYear) && ((endMonth > setMonth && endYear == setYear) || (endYear > setYear))){
							for(var i = parseInt(startDay); i <= dayQty; i++) {
								// If first day, add title
								if (i == parseInt(startDay)) {
									$('#'+uniqueId+' *[data-number="'+i+'"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator" data-eventid="'+ eventId +'" style="background:'+eventColor+'" title="'+eventTitle+'">'+eventTitle+'</div>');
								} else {
									$('#'+uniqueId+' *[data-number="'+i+'"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator" data-eventid="'+ eventId +'" style="background:'+eventColor+'" title="'+eventTitle+'"></div>');
								}
								multidaylist();
							}

						// If event is multi day, starts in a prev month, ends in a future month
						} else if (((startMonth < setMonth && startYear == setYear) || (startYear < setYear)) && ((endMonth > setMonth && endYear == setYear) || (endYear > setYear))){
							for(var i = 0; i <= dayQty; i++) {
								// If first day, add title
								if (i == 1){
									$('#'+uniqueId+' *[data-number="'+i+'"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator" data-eventid="'+ eventId +'" style="background:'+eventColor+'" title="'+eventTitle+'">'+eventTitle+'</div>');
								} else {
									$('#'+uniqueId+' *[data-number="'+i+'"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator" data-eventid="'+ eventId +'" style="background:'+eventColor+'" title="'+eventTitle+'"></div>');
								}
								multidaylist();
							}

						}
					});
				}).fail(function() {
				console.error('Monthly.js failed to import '+options.xmlUrl+'. Please check for the correct path & XML syntax.');
			});

			}
			var divs = $("#"+uniqueId+" .m-d");
			for(var i = 0; i < divs.length; i+=7) {
			  divs.slice(i, i+7).wrapAll("<div class='monthly-week'></div>");
			}
		}

		// Set the calendar the first time
		setMonthly(currentMonth, currentYear);

		// Function to go back to the month view
		function viewToggleButton(){
			if($('#'+uniqueId+' .monthly-event-list').is(":visible")) {
				$('#'+uniqueId+' .monthly-cal').remove();
				$('#'+uniqueId+' .monthly-header-title').prepend('<a href="#" class="monthly-cal" title="Back To Month View"><div></div></a>');
			}
		}

		// Advance months
		$(document.body).on('click', '#'+uniqueId+' .monthly-next', function (e) {
			var setMonth = $('#' + uniqueId).data('setMonth'),
				setYear = $('#' + uniqueId).data('setYear');
			if (setMonth == 12) {
				var newMonth = 1,
					newYear = setYear + 1;
				setMonthly(newMonth, newYear);
			} else {
				var newMonth = setMonth + 1,
					newYear = setYear;
				setMonthly(newMonth, newYear);
			}
			viewToggleButton();
			e.preventDefault();
		});

		// Go back in months
		$(document.body).on('click', '#'+uniqueId+' .monthly-prev', function (e) {
			var setMonth = $('#' + uniqueId).data('setMonth'),
				setYear = $('#' + uniqueId).data('setYear');
			if (setMonth == 1) {
				var newMonth = 12,
					newYear = setYear - 1;
				setMonthly(newMonth, newYear);
			} else {
				var newMonth = setMonth - 1,
					newYear = setYear;
				setMonthly(newMonth, newYear);
			}
			viewToggleButton();
			e.preventDefault();
		});

		// Reset Month
		$(document.body).on('click', '#'+uniqueId+' .monthly-reset', function (e) {
			setMonthly(currentMonth, currentYear);
			viewToggleButton();
			e.preventDefault();
			e.stopPropagation();
		});

		// Back to month view
		$(document.body).on('click', '#'+uniqueId+' .monthly-cal', function (e) {
			$(this).remove();
				$('#' + uniqueId+' .monthly-event-list').css('transform','scale(0)').delay('800').hide();
			e.preventDefault();
		});

		// Click A Day
		$(document.body).on('click', '#'+uniqueId+' a.monthly-day', function (e) {
			// If events, show events list
			if(options.mode == 'event' && options.eventList == true) {
				var whichDay = $(this).data('number');
				$('#' + uniqueId+' .monthly-event-list').show();
				$('#' + uniqueId+' .monthly-event-list').css('transform');
				$('#' + uniqueId+' .monthly-event-list').css('transform','scale(1)');
				$('#'+uniqueId+' .monthly-list-item[data-number="'+whichDay+'"]').show();

				var myElement = document.getElementById(uniqueId+'day'+whichDay);
				var topPos = myElement.offsetTop;
				//document.getElementByClassname('scrolling_div').scrollTop = topPos;
				$('#'+uniqueId+' .monthly-event-list').scrollTop(topPos);
				viewToggleButton();
			// If picker, pick date
			} else if (options.mode == 'picker') {
				var whichDay = $(this).data('number'),
				setMonth = $('#' + uniqueId).data('setMonth'),
				setYear = $('#' + uniqueId).data('setYear');

				// Should days in the past be disabled?
				if($(this).hasClass('monthly-past-day') && options.disablePast == true) {
					// If so, don't do anything.
					e.preventDefault();
				} else {
					// Otherwise, select the date ...
					$(''+options.target+'').val(setMonth+'/'+whichDay+'/'+setYear);
					// ... and then hide the calendar if it started that way
					if(options.startHidden == true) {
						$('#'+uniqueId).hide();
					}
				}
			}
			e.preventDefault();
		});

		// Clicking an event within the list
		$(document.body).on('click', '#'+uniqueId+' .listed-event', function (e) {
			var href = $(this).attr('href');
			// If there isn't a link, don't go anywhere
			if(!href) {
				e.preventDefault();
			}
		});

		}
	});
})(jQuery);
/*
 * Responsive Tables V1.0.0
 * http://kthornbloom.com/responsivetables.php
 *
 * Copyright 2013, Kevin Thornbloom
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function($) {
	$.fn.extend({
		responsiveTables: function() {

			// Add wrapper to tables, this helps us know if they're getting too big
			$('.rwd-table').wrap('<div class="rt-wrap"></div>');

			// Does the table have a heading?
			$('.rwd-table').each(function() {
				var autogen = $(this).attr("data-autogen-headers");
				
				if ($('thead', this).length && autogen != "false") {
					// If so, create data-attributes for each cell based on the heading
					$('thead tr:first th', this).each(function() {
						saveTitle = $(this).text(),
						whichPosition = $(this).index()+1;
						$(this).parents('table').find('tr td:nth-child('+whichPosition+')').attr('data-title', saveTitle);
					});
				}
			});

			// Check if table is too big for viewport.
			function tableChecker() {
				$(".rwd-table").each(function() {
					// wrapper width (page width)
					var wrapWidth1 = parseInt($(this).parent().width(), 10),
						// table width
						tableWidth = parseInt($(this).outerWidth(), 10),
						// If we've already gone mobile, let's save the breakpoint at which it happened
						breakpoint = $(this).parent().find('.rt-breakpoint').html();


					if (wrapWidth1 < tableWidth) {
						// Table is too big!
						$(this).parent().prepend("<div class='rt-breakpoint'>" + tableWidth + "</div>");
						$(this).addClass('mobile-table');
					} else if (breakpoint < wrapWidth1) {
						// Ok, there's enough room for the table again. Let's put it back.
						$(this).parent().find('.rt-breakpoint').remove();
						$(this).removeClass('mobile-table');
					}
				});
			}

			// Call on page load and page resize
			tableChecker();

			(function($, sr) {
				var debounce = function(func, threshold, execAsap) {
						var timeout;

						return function debounced() {
							var obj = this,
								args = arguments;

							function delayed() {
								if (!execAsap)
									func.apply(obj, args);
								timeout = null;
							};

							if (timeout)
								clearTimeout(timeout);
							else if (execAsap)
								func.apply(obj, args);

							timeout = setTimeout(delayed, threshold || 100);
						};
					}
					// smartresize
				jQuery.fn[sr] = function(fn) {
					return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
				};

			})(jQuery, 'smartresize');


			// On resize (with delay)
			$(window).smartresize(function() {
				tableChecker();
			});


		}
	});
})(jQuery);

/*
Smoothslides 2.2.0 by Kevin Thornbloom is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.
*/

(function($) {
	$.fn.extend({
		smoothSlides: function(options) {
			// These are overridden by options declared in footer
			var defaults = {
				effectDuration: 5000,
				transitionDuration: 500,
				effectModifier: 1.3,
				order: 'normal',
				autoPlay: 'true',
				effect: 'zoomOut,zoomIn,panUp,panDown,panLeft,panRight,diagTopLeftToBottomRight,diagTopRightToBottomLeft,diagBottomRightToTopLeft,diagBottomLeftToTopRight',
				effectEasing: 'ease-in-out',
				nextText: ' ►',
				prevText: '◄ ',
				captions: 'true',
				navigation: 'true',
				pagination: 'true',
				matchImageSize: 'true'
			}

			var options = $.extend(defaults, options),
				that = this,
				uniqueId = $(this).attr('id'),
				fullTime= options.effectDuration + options.transitionDuration,
				maxWidth = $(this).find('img').width(),
				effectModPercent = ((options.effectModifier * 100)-100)*.25;

			if (options.transitionDuration >= options.effectDuration) {
				console.log("Make sure effectDuration is greater than transitionDuration");
			}

			// Change wrapper class to remove loading spinner
			$('#'+uniqueId).removeClass('smoothslides').addClass('smoothslides-on');

			function fadeOutLast() {
				// Crapbag (<=IE9) detector
				if (document.all && !window.atob){
					// Crapbag detected! Use jQuery to fade
					$('#'+uniqueId).find('.ss-slide:last').animate({
						'opacity':'0'
					})
				} else {
					// Fade out last with CSS
					$('#'+uniqueId).find('.ss-slide:last').css({
						'transition':'all '+options.transitionDuration+'ms',
						'opacity':'0'
					});
				}
			}
			// FX
			that.crossFade = function() {
				fadeOutLast();
				setTimeout(function(){
					// Wait for fade, then sort & animate next
					$(that).find('.ss-slide:last').prependTo($(".ss-slide-stage", that)).css({
						'opacity':'1',
						'transform':'none'
					});
					$(that).find('.ss-slide:last').css({
						'transition': 'all ' + options.effectDuration + 'ms ' + options.effectEasing +'',
						'transform':'scale(1)  rotate(0deg)'
					});
				}, options.transitionDuration);
			}

			that.zoomOut = function() {
				fadeOutLast();
				// Set up next
				$(this).find('.ss-slide:eq(-2)').css({
					'transition':'none',
					'transform':'scale('+options.effectModifier+') rotate(1.5deg)'
				});
				setTimeout(function(){
					// Wait for fade, then sort & animate next
					$(that).find('.ss-slide:last').prependTo($(".ss-slide-stage", that)).css({
						'opacity':'1',
						'transform':'none'
					});
					$(that).find('.ss-slide:last').css({
						'transition': 'all ' + options.effectDuration + 'ms ' + options.effectEasing +'',
						'transform':'scale(1)  rotate(0deg)'
					});
				}, options.transitionDuration);
			}

			that.zoomIn = function() {
				fadeOutLast();
				// Set up next
				$(this).find('.ss-slide:eq(-2)').css({
					'transition':'none',
					'transform':'scale(1.1) rotate(-1.5deg)'
				});
				setTimeout(function(){
					// Wait for fade, then sort & animate next
					$(that).find('.ss-slide:last').prependTo($(".ss-slide-stage", that)).css({
						'opacity':'1',
						'transform':'none'
					});
					$(that).find('.ss-slide:last').css({
						'transition': 'all ' + options.effectDuration + 'ms ' + options.effectEasing +'',
						'transform':'scale('+options.effectModifier+') rotate(0deg)'
					});
				}, options.transitionDuration);
			}

			that.panLeft = function() {
				// Set up next
				$(this).find('.ss-slide:eq(-2)').css({
					'transition':'none',
					'transform':'scale('+options.effectModifier+') translateX('+effectModPercent+'%)'
				});
				fadeOutLast();

				setTimeout(function(){
					// Wait for fade, then sort & animate next
					$(that).find('.ss-slide:last').prependTo($(".ss-slide-stage", that)).css({
						'opacity':'1',
						'transform':'none'
					});
					$(that).find('.ss-slide:last').css({
						'transition': 'all ' + options.effectDuration + 'ms ' + options.effectEasing +'',
						'transform':'scale('+options.effectModifier+') translateX(0%)'
					});
				}, options.transitionDuration);
			}

			that.panRight = function() {
				fadeOutLast();
				// Set up next
				$(this).find('.ss-slide:eq(-2)').css({
					'transition':'none',
					'transform':'scale('+options.effectModifier+') translateX(-'+effectModPercent+'%)'
				});
				setTimeout(function(){
					// Wait for fade, then sort & animate next
					$(that).find('.ss-slide:last').prependTo($(".ss-slide-stage", that)).css({
						'opacity':'1',
						'transform':'none'
					});
					$(that).find('.ss-slide:last').css({
						'transition': 'all ' + options.effectDuration + 'ms ' + options.effectEasing +'',
						'transform':'scale('+options.effectModifier+') translateX(0%)'
					});
				}, options.transitionDuration);
			}

			that.panUp = function() {
				fadeOutLast();
				// Set up next
				$(this).find('.ss-slide:eq(-2)').css({
					'transition':'none',
					'transform':'scale('+options.effectModifier+') translateY('+effectModPercent+'%)'
				});
				setTimeout(function(){
					// Wait for fade, then sort & animate next
					$(that).find('.ss-slide:last').prependTo($(".ss-slide-stage", that)).css({
						'opacity':'1',
						'transform':'none'
					});
					$(that).find('.ss-slide:last').css({
						'transition': 'all ' + options.effectDuration + 'ms ' + options.effectEasing +'',
						'transform':'scale('+options.effectModifier+') translateY(0%)'
					});
				}, options.transitionDuration);
			}

			that.panDown = function() {
				fadeOutLast();
				// Set up next
				$(this).find('.ss-slide:eq(-2)').css({
					'transition':'none',
					'transform':'scale('+options.effectModifier+') translateY(-'+effectModPercent+'%)'
				});
				setTimeout(function(){
					// Wait for fade, then sort & animate next
					$(that).find('.ss-slide:last').prependTo($(".ss-slide-stage", that)).css({
						'opacity':'1',
						'transform':'none'
					});
					$(that).find('.ss-slide:last').css({
						'transition': 'all ' + options.effectDuration + 'ms ' + options.effectEasing +'',
						'transform':'scale('+options.effectModifier+') translateY(0%)'
					});
				}, options.transitionDuration);
			}

			that.diagTopLeftToBottomRight = function() {
				fadeOutLast();
				// Set up next
				$(this).find('.ss-slide:eq(-2)').css({
					'transition':'none',
					'transform':'scale('+options.effectModifier+') translateY(-'+effectModPercent+'%) translateX(-'+effectModPercent+'%)'
				});
				setTimeout(function(){
					// Wait for fade, then sort & animate next
					$(that).find('.ss-slide:last').prependTo($(".ss-slide-stage", that)).css({
						'opacity':'1',
						'transform':'none'
					});
					$(that).find('.ss-slide:last').css({
						'transition': 'all ' + options.effectDuration + 'ms ' + options.effectEasing +'',
						'transform':'scale('+options.effectModifier+') translateY(0%) translateX(0%)'
					});
				}, options.transitionDuration);
			}

			that.diagBottomRightToTopLeft= function() {
				fadeOutLast();
				// Set up next
				$(this).find('.ss-slide:eq(-2)').css({
					'transition':'none',
					'transform':'scale('+options.effectModifier+') translateY('+effectModPercent+'%) translateX('+effectModPercent+'%)'
				});
				setTimeout(function(){
					// Wait for fade, then sort & animate next
					$(that).find('.ss-slide:last').prependTo($(".ss-slide-stage", that)).css({
						'opacity':'1',
						'transform':'none'
					});
					$(that).find('.ss-slide:last').css({
						'transition': 'all ' + options.effectDuration + 'ms ' + options.effectEasing +'',
						'transform':'scale('+options.effectModifier+') translateY(0%) translateX(0%)'
					});
				}, options.transitionDuration);
			}

			that.diagTopRightToBottomLeft = function() {
				fadeOutLast();
				// Set up next
				$(this).find('.ss-slide:eq(-2)').css({
					'transition':'none',
					'transform':'scale('+options.effectModifier+') translateY(-'+effectModPercent+'%) translateX('+effectModPercent+'%)'
				});
				setTimeout(function(){
					// Wait for fade, then sort & animate next
					$(that).find('.ss-slide:last').prependTo($(".ss-slide-stage", that)).css({
						'opacity':'1',
						'transform':'none'
					});
					$(that).find('.ss-slide:last').css({
						'transition': 'all ' + options.effectDuration + 'ms ' + options.effectEasing +'',
						'transform':'scale('+options.effectModifier+') translateY(0%) translateX(0%)'
					});
				}, options.transitionDuration);
			}

			that.diagBottomLeftToTopRight = function() {
				fadeOutLast();
				// Set up next
				$(this).find('.ss-slide:eq(-2)').css({
					'transition':'none',
					'transform':'scale('+options.effectModifier+') translateY('+effectModPercent+'%) translateX(-'+effectModPercent+'%)'
				});
				setTimeout(function(){
					// Wait for fade, then sort & animate next
					$(that).find('.ss-slide:last').prependTo($(".ss-slide-stage", that)).css({
						'opacity':'1',
						'transform':'none'
					});
					$(that).find('.ss-slide:last').css({
						'transition': 'all ' + options.effectDuration + 'ms ' + options.effectEasing +'',
						'transform':'scale('+options.effectModifier+') translateY(0%) translateX(0%)'
					});
				}, options.transitionDuration);
			}

			// Set max-width based on img size
			if(options.matchImageSize == 'true') {
				$('#'+uniqueId).css('maxWidth',maxWidth);
				$('#'+uniqueId+' img').css('maxWidth','100%');
			} else {
				$('#'+uniqueId+' img').css('width','100%');
			}

			// Wrap each in a div
			$(this).children().each(function(){
				$(this).wrap('<div class="ss-slide"></div>');
			});

			// Function to randomize things. (used below)
			$.fn.smoothslidesRandomize=function(a){(a?this.find(a):this).parent().each(function(){$(this).children(a).sort(function(){return Math.random()-0.5}).detach().appendTo(this)});return this};

			// Set slide order
			if (options.order == "random") {
				$('#'+ uniqueId +'').smoothslidesRandomize('.ss-slide');
			} else {
				$('#'+ uniqueId +' .ss-slide').each(function() {
					$(this).prependTo('#'+uniqueId);
				});
			}

			// Set one as relative for height
			$('#'+uniqueId+' .ss-slide:first').css('position','relative');


			if(options.autoPlay == 'true') {
				$(".ss-slide:first", this).appendTo(this)
			}

			// Add CSS easing & duration. Add wrapper div around each image
			$(this).wrapInner("<div class='ss-slide-stage'></div>")
			$(".ss-slide",this).each(function(){
				$(this).css({
					transition: 'all ' + options.effectDuration + 'ms ' + options.effectEasing +''
				});
			});

			// Captions, Yo
			function captionUpdate() {
				var nextCaption = $('#'+uniqueId).find('.ss-slide:eq(-2) img').prop('alt');
				if (!nextCaption) {
					$('#'+uniqueId).find(".ss-caption").css('opacity','0');
				} else {
					$('#'+uniqueId).find(".ss-caption").css('opacity','1').html(nextCaption);
				}
			}
			// Captions backward
			function captionUpdateBack() {
				var nextCaption = $('#'+uniqueId).find('.ss-slide:eq(-1) img').prop('alt');
				if (!nextCaption) {
					$('#'+uniqueId).find(".ss-caption").css('opacity','0');
				} else {
					$('#'+uniqueId).find(".ss-caption").css('opacity','1').html(nextCaption);
				}
			}
			// Add Caption Markup
			if (options.captions == 'true') {
				$(that).append("<div class='ss-caption-wrap'><div class='ss-caption'></div></div>");
				if (options.autoPlay == 'true') {
					captionUpdate();
				} else {
					var nextCaption = $('#'+uniqueId).find('.ss-slide:last img').prop('alt');
					if (!nextCaption) {
						$('#'+uniqueId).find(".ss-caption").css('opacity','0');
					} else {
						$('#'+uniqueId).find(".ss-caption").css('opacity','1').html(nextCaption);
					}
				}
			}

			// You want some Nav arrows? You got 'em
			if (options.navigation == 'true') {
				$(that).append('<a href="#" class="ss-prev ss-prev-on">' + options.prevText + '</a><a href="#" class="ss-next ss-next-on">' + options.nextText + '</a>');
			}

			// How 'bout some dots? We got dots.
			if (options.pagination == 'true') {
				$(that).append('<div class="ss-paginate-wrap"><div class="ss-paginate"></div></div>');
				$(".ss-slide",that).each(function() {
					$('.ss-paginate', that).append('<a href="#"></a>');
				});
				if (options.autoPlay == "true") {
					$('.ss-paginate a:last', that).addClass("ss-paginate-current");
				} else {
					$('.ss-paginate a:first', that).addClass("ss-paginate-current");
				}
			}

			// Update pagination forward
			function paginationUpdate() {
				var total = $(that).find('.ss-paginate a').length;
				var	current = $(that).find('a.ss-paginate-current').index();
				var next = current + 1;
				if (next >= total) {
					$(that).find('a.ss-paginate-current').removeClass();
					$(that).find('.ss-paginate a:eq(0)').addClass('ss-paginate-current');
				} else {
					$(that).find('a.ss-paginate-current').removeClass();
					$(that).find('.ss-paginate a:eq('+ next +')').addClass('ss-paginate-current');
				}
			}

			// Update pagination backward
			function paginationUpdateBack() {
				var total = $(that).find('.ss-paginate a').length;
				var	current = $(that).find('a.ss-paginate-current').index();
				var next = current - 1;
				if (next <= -2) {
					$(that).find('a.ss-paginate-current').removeClass();
					$(that).find('.ss-paginate a:eq('+total+')').addClass('ss-paginate-current');
				} else {
					$(that).find('a.ss-paginate-current').removeClass();
					$(that).find('.ss-paginate a:eq('+ next +')').addClass('ss-paginate-current');
				}
			}

			// Autoplay Function
			var autoPlay = function () {
				// Crapbag (<=IE9) detector
				if (document.all && !window.atob){
					that.crossFade();
				} else if ($('#' + uniqueId).find('.ss-slide:eq(-2) img').attr('data-effect')){
					var selectedEffect = $('#' + uniqueId).find('.ss-slide:eq(-2) img').attr('data-effect');
					that[selectedEffect]();
				} else {
					effectArray = options.effect.split(',');
					var effect = effectArray[Math.floor(Math.random() * effectArray.length)];
					that[effect]();
				}
				captionUpdate();
				paginationUpdate();
			}

			// Autoplay Interval
			if (options.autoPlay == 'true') {
				autoPlay();
				var playInterval = setInterval(autoPlay, fullTime);
			}

			// Pause on Nav hover
			$('.ss-prev, .ss-next, .ss-paginate', that).mouseover(function() {
				clearInterval(playInterval);
			}).mouseout(function() {
				playInterval = setInterval(autoPlay, fullTime);
			});

			// Navigation Forward
			$('#'+uniqueId).on('click', '.ss-next-on', function(event) {
				$('.ss-next-on', that).removeClass('ss-next-on');
				// Fade out last
				$(that).find('.ss-slide:last').css({
					'transition':'all '+options.transitionDuration+'ms',
					'opacity':'0'
				});
				captionUpdate();
				paginationUpdate();
				setTimeout(function(){
					// Wait for fade, then sort & animate next
					$(that).find('.ss-slide:last').prependTo($(".ss-slide-stage", that)).css({
						'opacity':'1',
						'transform':'none'
					});
					$(that).find('.ss-slide:last').css({
						'transition': 'all ' + options.effectDuration + 'ms ' + options.effectEasing +'',
						'transform':'scale(1)  rotate(0deg)'
					});
					$('.ss-next', that).addClass('ss-next-on');
				}, options.transitionDuration);
				event.preventDefault();
			});

			// Navigation Backward
			$('#'+uniqueId).on('click', '.ss-prev-on', function(event) {
				$('.ss-prev-on', that).removeClass('ss-prev-on');
				// Fade out last
				$('#'+uniqueId).find(".ss-slide:first").css({
					'transition':'none',
					'opacity':'0'
				}).appendTo('#'+uniqueId+' .ss-slide-stage');
				$('#'+uniqueId).find('.ss-slide:last').css('opacity');
				$('#'+uniqueId).find('.ss-slide:last').css({
					'transition':'all '+options.transitionDuration+'ms',
					'opacity':'1'
				});
				captionUpdateBack();
				paginationUpdateBack();
				setTimeout(function(){
					$('.ss-prev').addClass('ss-prev-on');

				}, options.transitionDuration);
				event.preventDefault();
			});

			// Disabled nav
			$('#'+uniqueId).on('click', '.ss-prev, .ss-next', function(event) {
				event.preventDefault();
			});

			// Pagination Clicking
			$('#'+uniqueId).on('click', '.ss-paginate a', function(event) {
				var dotClicked = $(this).index(); // 0 indexed
				var currentDot = $('#'+uniqueId+' .ss-paginate-current').index(); // 0 indexed

				if (dotClicked < currentDot) {
					var iterate = (currentDot - dotClicked);
					for (var i = 0; i < iterate; i++) {
						$('#'+uniqueId).find('.ss-slide:first').appendTo('#'+uniqueId+' .ss-slide-stage');
					}
				} else if (dotClicked > currentDot) {
					var iterate = (dotClicked - currentDot);
					for (var i = 0; i < iterate; i++) {
						$('#'+uniqueId).find('.ss-slide:last').prependTo('#'+uniqueId+' .ss-slide-stage');
					}
				}
				$('#'+uniqueId).find('.ss-paginate-current').removeClass();
				$('#'+uniqueId).find('.ss-paginate a:eq('+dotClicked+')').addClass('ss-paginate-current');
				var nextCaption = $('#'+uniqueId).find('.ss-slide:eq(-1) img').prop('alt');
				if (!nextCaption) {
					$('#'+uniqueId).find(".ss-caption").css('opacity','0');
				} else {
					$('#'+uniqueId).find(".ss-caption").css('opacity','1').html(nextCaption);
				}
				event.preventDefault();
			});

		}
	});
})(jQuery);
