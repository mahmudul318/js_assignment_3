$(function(){

  $('.circlechart').circlechart();

});

$('#getting-started').countdown('2021/07/21', function(event) {
    $(this).html(event.strftime('<div class="single-counter">%D <span>Days</span></div> <div class="single-counter">%H <span>Hours</span></div> <div class="single-counter">%M <span>Minutes</span></div> <div class="single-counter">%S <span>Seconds</span></div>'));
  });
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$('.view').magnificPopup({
  type: 'image',
  // other options
});

$('.view2').magnificPopup({
  type: 'image',
  gallery: {
    	enabled: true
  	},
  // other options
});

wow = new WOW(
        {
           boxClass:     'wow',      // default
           animateClass: 'animated', // default
           offset:       0,          // default
           mobile:       true,       // default
           live:         true        // default
          }
          )
         wow.init();