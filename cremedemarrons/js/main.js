$(function() {
   // 햄버거버튼
   $(".ham_btn").click(function() {
      $("#hamburger").animate({
         marginRight:"80%"
      }, 300);
   });
   $(".btn").click(function() {
      $("#hamburger").animate({
         marginRight:"0%"
      }, 300);
   });

   // mobile, tablet 메뉴 상세
   $(".menu_list > li > a").click(function() {
   if($(this).next().is(":visible")) {
      $(this).next().stop().slideUp(500);
   } else {
      $(".menu_list .sub").stop().slideUp(500);
      $(this).next().stop().slideDown(500);
   }
   });

   // pc 메뉴 상세
   $(".m_list_pc > li > a").mouseenter(function() {
      $(this).next().stop().slideDown(500);
   });
   $(".m_list_pc > li").mouseleave(function() {
      $(this).find(".sub").stop().slideUp(500);
   });

   //모달
   function modalOn() {
      $(".modal_back").addClass("back_on");
   }
   function modalOff() {
      $(".modal_back").removeClass("back_on");
   }
   $(".ham_btn").click(function() {
      modalOn();
   });
   $(".cross").click(function() {
      modalOff();
   });

   //pc버전 슬라이드검색
   $("#search_trigger").click(function() {
      $("#search_inputt").toggleClass("search_input_open");
      $(".form_search_inputt").focus();
   });

   //TOP버튼 이동
   $(".top a").click(function() {
      $("html, body").animate({
			scrollTop:0}, "slow"
		);
      return false;
   });

   $(".form_search_inputt", ".search-form").keydown(function(e) {
      if (e.code === "Enter") {
         e.preventDefault();
      }
   });
});