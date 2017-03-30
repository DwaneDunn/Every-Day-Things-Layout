/* JavaScript Document */

// Wait for docuent to be fully ready
$(document).ready(function(){

  // Find Mobile Menu Class and respond to on click
  $('nav a.mobile_menu').on('click',function(){

    var currentNavHeight = $('nav').height();

    if (currentNavHeight < 5) {

      var newNavHeight = $('nav > ul').height() + 15;

      $('nav').animate({
        'height':newNavHeight+'px'},750);

    } else {

      $('nav').animate({'height':'0px'},750, function(){

        $(this).removeAttr('style');

      });

    } // End if else
  }); // End on click function

  $(window).resize(function(){

    if( $(this).width() > 625 ){

      $('nav').removeAttr('style');
      
    }

  });


}); // End document ready function
