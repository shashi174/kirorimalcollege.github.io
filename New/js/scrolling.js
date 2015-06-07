//=================================== SMOOTH SCROLLING EXTERNAL ANCHOR //
(function($){
  $(document).on("ready", function () {
      var urlHash = window.location.href.split("#")[1];
      $('html,body').animate({
          scrollTop: $('.' + urlHash + ', #' + urlHash +',[name='+urlHash+']').first().offset().top -100
      }, 1000);
  });

})(jQuery);


// // =================================== SMOOTH SCROLLING LOCAL ANCHOR //
(function($) {
$('[href^=#]').not('#carousel-example-generic a').click(function() {
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


//=================================== SMOOTH SCROLLING EXTERNAL ANCHOR //
// (function($){

//     var jump=function(e)
//     {
//        if (e){
//            e.preventDefault();
//            var target = $(this).attr("href");
//        }else{
//            var target = location.hash;
//        }

//        $('html,body').animate(
//        {
//            scrollTop: $(target).offset().top
//        },1000,function()
//        {
//            location.hash = target;
//        });

//     }

//     $('html, body').hide()

//     $(document).ready(function()
//     {
//         $('a[href^=#]').bind("click", jump);

//         if (location.hash){
//             setTimeout(function(){
//                 $('html, body').scrollTop(0).show()
//                 jump()
//             }, 0);
//         }else{
//           $('html, body').show()
//         }
//     });

// })(jQuery);
