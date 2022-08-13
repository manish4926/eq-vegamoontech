var boxX = 1;
var boxY = 1;
var boxZ = 1;


$('.sizeoptions button').click(function() {
  
  $('.sizeoptions button').removeClass('sizeoptionsselected');
  $(this).addClass('sizeoptionsselected');
  $('.size-value').text($(this).text());

  var qty = $('.selected-qty').text();
  var price  =  $(this).data('up');
  var finalprice = (price * qty).toFixed(2);
  $('.final-price').text("$"+ finalprice);

  var size = $(this).text();
  var splitter = size.split('x');
    // $.each(splitter, function (key, val) {
    //     console.log(parseInt(val));
    // });
  //console.log(splitter);
  boxX = parseInt(splitter[0]);
  boxY = parseInt(splitter[1]);
  boxZ = parseInt(splitter[2]);

  //renderer.render(scene, camera);
  box.scale.x = boxX;
  box.scale.y = boxY;
  box.scale.z = boxZ;

  box1.scale.x = boxX;
  box1.scale.y = boxY;
  box1.scale.z = 0.1;
  

    

});

$('.switcherinput').on('change', function() {
    
    var switcherinput = $(this).is(':checked');

    if(switcherinput == true) {
    	img_src = "box-1.jpg";
        //box1.rotation.x -= 1;    
        
        //box1.rotation.x = 3.1;    
        // box1.rotation.y = 0.06; 
        // box1.rotation.z = 0.06; 
        // box1.position.x = 1;   
        // box1.position.y = 1.9;   

        box1.rotation.x = 3.1;
        box1.rotation.z = 0.2;
        box1.rotation.y = 0.3;
        
        box1.translateX( 0.5 );
        box1.translateY( -3.5 );
        box1.translateZ( 2.5 );
    } else {
    	img_src = "box-2.jpg";
        
        box1.rotation.x = 2;
        box1.rotation.z = 0.5;
        box1.rotation.y = 0;

        box1.translateX( 0 );
        box1.translateY( 0 );
        box1.translateZ( 0 );
    }


    // $(this).fadeOut('fast',function(){
    //   $(this).attr('src', $('.image-box img').attr('src')).fadeIn('fast');
    // });

    // $('.image-box img').fadeOut('fast',function(){
    //    $(this).attr('src', "assets/images/"+img_src ).fadeIn('fast');
    // });
});


$("document").ready(function() {
    setTimeout(function() {
        $(".sizeoptions button").eq(3).trigger('click');
    },10);
});