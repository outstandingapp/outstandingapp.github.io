$('.typeit-box_title').typeIt({

  // what to type
  whatToType:['here to help you sit less.'],

  // typing speed
  typeSpeed: 100,

  // make the typing pace irregular
  lifeLike: false,

  // show cursor
  showCursor: true,

  // Choose whether you want multiple strings to be printed on top of each other
  breakLines: true,

  // The amount of time between typing multiple strings.
  breakDelay: 750,

  // The amount of time before the plugin begins typing after initalizing.
  startDelay: 250,

  // Have your string or strings continuously loop after completing.
  loop: false,

  // The amount of time between looping over a string or set of strings again.  
  loopDelay: 2000
  
});


// When the DOM is ready, run this function
$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });
});



