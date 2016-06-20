$(document).ready(function(){
  
  // Smooth Scroll Function - external code by community
  $(function() {
    $('.smoothScroll').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 800); // The number here represents the speed of the scroll in milliseconds
          return false;
        }
      }
    });
  });

  // Subscribe Button Email Check
  	$('.newsletter').on('submit', function(){
      alert('Thank You for Subscribing!');
    });

  //Calling the bxSlider with jquery
  $('.bxslider').bxSlider({
    minSlides: 1,
    maxSlides: 4,
    slideWidth: 280,
    slideMargin: 20,  
    auto:true,
      });

});