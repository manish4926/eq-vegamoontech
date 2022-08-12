$('.sizeoptions button').click(function() {
  
  $('.sizeoptions button').removeClass('sizeoptionsselected');
  $(this).addClass('sizeoptionsselected');
  $('.size-value').text($(this).text());

  var qty = $('.selected-qty').text();
  var price  =  $(this).data('up');
  var finalprice = (price * qty).toFixed(2);
  $('.final-price').text("$"+ finalprice);

});

$('.switcherinput').on('change', function() {
    
    var switcherinput = $(this).is(':checked');

    if(switcherinput == true) {
    	img_src = "box-1.jpg";
    } else {
    	img_src = "box-2.jpg";
    }

    $(this).fadeOut('fast',function(){
      $(this).attr('src', $('.image-box img').attr('src')).fadeIn('fast');
    });

    $('.image-box img').fadeOut('fast',function(){
       $(this).attr('src', "assets/images/"+img_src ).fadeIn('fast');
    });
});


$("document").ready(function() {
    setTimeout(function() {
        $(".sizeoptions button").eq(3).trigger('click');
    },10);
});