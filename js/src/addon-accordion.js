$(document.body).on('click', '.accordion-title', function(event) {
	$(this).next('.accordion-result').slideToggle();
	$(this).toggleClass('accordion-open');
});
