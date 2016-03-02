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
