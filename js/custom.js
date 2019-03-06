$(document).ready(function() {
  $(".banner-carousel").owlCarousel({
    loop: true,
    // nav:true,
    items: 1
  });
  $(".testi-carousel").owlCarousel({
    loop: true,
    nav:true,
    navText: ["<img src='images/prevCar.svg'>","<img src='images/nextCar.svg'>"],
    items: 1
  });
  $(".oval-shape").paroller({
    factor: 0.3,
    factorXs: 0.2,
    type: "foreground",
    direction: "vertical"
  });
  $('#sidebarButton').click(function(){
    $('.sidebar').toggleClass('show');
    $('.toggler-icon').toggleClass('icon-burger-menu icon-close');
  });
});

$(window).scroll(function(){
  if ($(window).scrollTop() >= 150) {
      $('.main-nav').addClass('change');  }
  else {
      $('.main-nav').removeClass('change');
  }
});
