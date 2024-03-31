$(function() {
   // 애니메이션
   $(".wp1, .wp2, .wp3, .wp4").each(function() {
      $(this).waypoint(function() {
         $(this).addClass("animated fadeInUp");
      }, {
         offset: "75%"
      });
   });
});