$(document).ready(function () {
// Boton Menu
$("#menu").click(function () {
  var visible = $("#menu-light").data("view");

  if (visible == false) {
    //$("#menu-header").css("right", 0);
    $("#menu-light").animate({ right: 0 }, 500);
    $("#menu-light").data("view", true);
  }

  if (visible == true) {
    //$("#menu-header").css("right", 100 + "vh");
    $("#menu-light").animate({ right: 100 + "vh" }, 500);
    $("#menu-light").data("view", false);
  }
});

  var cw = $("#user1").width();
  var cw2 = $("#user2").width();
  $("#user1").css({
    height: cw + "px",
  });
  $("#user2").css({
    height: cw2 + "px",
  });
  $("#places").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplaySpeed: 10,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".persons").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(window).resize(function () {
  resizeLogo();
});
$(document).ready(function () {
  resizeLogo();
});

function resizeLogo() {
  setTimeout(function () {
    $width1 = $("#user1").width();
    $width2 = $("#user2").width();
    $("#user1").css("height", $width1);
    $("#user2").css("height", $width2);
  }, 100);
}


$(document).ready(function () {
  
});

$(window).resize(function () {
  var ventana = $(window).width();

  if (ventana > 600) {
    $("#menu-header").css("right", 0);
    $("#menu-header").data("view", false);
  }
  if (ventana <= 600) {
    $("#menu-header").css("right", 100 + "vh");
    $("#menu-header").data("view", false);
  }
});
