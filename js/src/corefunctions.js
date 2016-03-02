$(document).ready(function() {

	// Stuff for old browsers
	$(document.body).on('click', '#upgrade-cancel', function(event) {
		Cookies.set('cancelupgrade', 'true', { expires: 1 });
		$('.old-browser-warning').remove();
	});

	// Set cookie to prevent the warning from popping up
	if (Cookies.get('cancelupgrade')){
		$('.old-browser-warning').remove();
	}

	$('nav > ul > li ul').each(function(){
		$(this).parent().find('>a').addClass("has-menu");
	});



});
