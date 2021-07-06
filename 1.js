 $(function() {

     $('.top-fixed').click(function() {
         $('html,body').animate({ scrollTop: 0 });
         return false;
     });
 })