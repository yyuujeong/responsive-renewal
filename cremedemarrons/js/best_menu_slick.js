$(function(){  	
  //best products slick
  $('.best_main').slick({
    dots: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }}, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }}
    ]
  });
  
  // 메인 배너 이미지
  const swiper = new Swiper(".swiper-container", {
    pagination: ".swiper-pagination",
    paginationClickable: true,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
  });
});	