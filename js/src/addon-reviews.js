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
