$(document.body).on('mouseover', '.stars-hover a', function (event) {
  var starIndex = $(this).index();
      starIndex = starIndex + 1;      
    // Use this ↓ to assign a number value to a hidden input or whatever
    $('#rating_value').val(starIndex);
    
    switch (starIndex) {
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
});

$(document.body).on('click', '.stars-hover a', function (event) {
    event.preventDefault();
    $('.stars').css('color','#222');
});