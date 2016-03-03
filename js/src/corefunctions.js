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
