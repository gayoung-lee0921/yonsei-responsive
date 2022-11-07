const header = $("#header");
const gnb = $("#gnb");
const btnTop = $(".btn-top");
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 0) {
    header.addClass("on");
  } else {
    header.removeClass("on");
  }
  if ($(window).scrollTop() > 500) {
    btnTop.addClass("on");
  } else {
    btnTop.removeClass("on");
  }
});

btnTop.on("click", function () {
  gsap.to(window, { scrollTo: 100, duration: 1 });
});

$(".family-site button").on("click", function () {
  $(".family-site").toggleClass("on");
});

const lnbMenu = $("#lnb .lnb-box > a");
// console.log("🚀 ~ file: common.js ~ line 26 ~ lnbMenu", lnbMenu);
lnbMenu.on("click", function (e) {
  console.log("click");
  e.preventDefault();
  const siblings = $(this).next();
  siblings.stop().fadeToggle();
});
