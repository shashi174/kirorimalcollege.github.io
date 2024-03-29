/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
  "use strict";
  // Start of use strict

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  // $('a.page-scroll').bind('click', function(event) {
  //   var $anchor = $(this);
  //   $('html, body').stop().animate({
  //     scrollTop: ($($anchor.attr('href')).offset().top - 50)
  //   }, 1250, 'easeInOutExpo');
  //   event.preventDefault();
  // });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  //  My custom code taken from :http://stackoverflow.com/questions/29912472/bootstrap-dropdown-menu-external-link
  // jQuery(function() {
  //   jQuery('a[href*=#]:not([href=#])').click(function() {
  //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //       var target = jQuery(this.hash);
  //       target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
  //       if (target.length) {
  //         jQuery('html,body').animate({
  //           scrollTop: target.offset().top
  //         }, 1000);
  //         return false;
  //       }
  //     }
  //   });
  // });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  })

  // Closes the Responsive Menu on Menu Item Click
  // $('.navbar-collapse li a ul li a').click(function() {
  //     $('.navbar-toggle:visible').click();
  // });

  // Custom JS snippet added by me for closing the menu
  $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
      $(this).collapse('hide');
    }
  });

  // Fit Text Plugin for Main Header
  $("h1").fitText(
    1.2, {
      minFontSize: '35px',
      maxFontSize: '65px'
    }
  );

  // Offset for Main Navigation
  $('#mainNav').affix({
    offset: {
      top: 100
    }
  })

  // Initialize WOW.js Scrolling Animations
  new WOW().init();

})(jQuery); // End of use strict
