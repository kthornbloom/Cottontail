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