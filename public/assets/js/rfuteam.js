(function($) {
  "use strict"; // Start of use strict

  var heightNavbar = 76; // height do navbar: 76px;

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - (heightNavbar - 2))
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click( function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: heightNavbar
  });

  // Activate tooltip to add content and markup after their trigger element
  $('#js-link').tooltip({
    placement: 'bottom',
    trigger: 'hover focus',
    title: 'Informações em breve!'
  });

  // Disable the link functionality of <a>
  $('#js-link').click( function() {
    return false;
  });

  // Informs the inner width of the browser window (in pixels)
  function getViewportWidth() {
    return window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
  }

  // Change the navbar style
  var changeStyleNavBar = function() {

    if (getViewportWidth() >= 992) {

      if ($("#mainNav").offset().top <= 100) { // At the top
        $("#mainNav").removeClass("bg-light");
        $("#mainNav").addClass("bg-transparent");
      } else { // At the body
        $("#mainNav").removeClass("bg-transparent");
        $("#mainNav").addClass("bg-light");
      }

    } else {
      $("#mainNav").removeClass("bg-transparent");
      $("#mainNav").addClass("bg-light");
    }

  };
  // Load the navbar when page is started
  changeStyleNavBar();
  // Reload the navbar when page is scrolled
  $(window).scroll(changeStyleNavBar);
  // Reload the navbar when page is resized
  $(window).resize(changeStyleNavBar);

})(jQuery); // End of use strict