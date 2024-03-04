$(function() {
   //상품 선택시 상품이름,수량,가격 나타나게
   $(".choose select").on("change", function() {
      const ab = $(this).val();
      const strName = ab;
      slideTarget(strName.substr(4,1));

      function slideTarget(n) {
         $(".select_opt").hide();
         if(n == 1) {
            $(".select_opt").show();
         } else if(n == 0) {
            $(".select_opt").hide();
         } else {
            $(".select_opt").eq(n).css("display", "block");
         }
      }
   });

   //총 합계 계산
   let sell_price;
   sell_price = document.form.sell_price.value;
	document.form.sum.value = Number(sell_price).toLocaleString();

   $(".plus").on("click", function() {
      hm = document.form.amount;
		sum = document.form.sum;
		hm.value++;
		sum.value = (Number(hm.value) * sell_price).toLocaleString();
   });
   $(".minus").on("click", function() {
      hm = document.form.amount;
		sum = document.form.sum;
		if(hm.value > 1) {
			hm.value--;
			sum.value = (Number(hm.value) * sell_price).toLocaleString();
      }
   });

   //작은 사이즈의 제품 이미지 변경
   $(".bisou_img2 ul li a").click(function() {	
      $(".bisou_img img").attr("src", $(this).attr("href"));	
      return false;
   });

   //하단Q&A 열고 닫기
   $("dd").css("display", "none");
	$("dt").click(function() {
		if($(this).next().css("display")=="none") {
			$(this).next().show();
		} else {
         $("dd").stop().hide();
         $("dd").hide();
      }
	});
});