$('.burger-btn').on('click',function(){
    $('.header-nav').fadeToggle(300);
    $(this).toggleClass('open');
    $('body').toggleClass('noscroll');
});

$(".faq-item dd").hide();
  $(".faq-list dl").on("click", function(e){
    $('dd',this).slideToggle('fast');
  });

  const swiper = new Swiper(".swiper",{
    loop: true,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 20,

    autoplay: {
        delay: 5000
    },

    breakpoints: {
        1025: {
          slidesPerView: 3.75, 
          spaceBetween: 56, 
        } 
      },
    
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

var windowWidth = $(window).width();
  var headerHeight = 94;
  $("a[href^='#']").click(function(){
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href=="#" || href==""?"html":href);
    var position = target.offset().top - headerHeight;
    $("body,html").animate({scrollTop:position}, speed, "swing");
    return false;
  });

AOS.init();