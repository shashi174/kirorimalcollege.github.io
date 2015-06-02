//=================================== SMOOTH SCROLLING EXTERNAL ANCHOR //
(function($){
  $(document).on("ready", function () {
      var urlHash = window.location.href.split("#")[1];
      $('html,body').animate({
          scrollTop: $('.' + urlHash + ', #' + urlHash +',[name='+urlHash+']').first().offset().top -100
      }, 1000);
  });

})(jQuery);


// =================================== SMOOTH SCROLLING LOCAL ANCHOR //
(function($) {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top -100
                }, 1000);
                return false;
              }
            }
        });
})(jQuery);
