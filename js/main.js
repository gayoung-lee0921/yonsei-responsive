Splitting();
AOS.init();
const current = document.querySelector("#community .fraction .current");
const newsSlider = new Swiper("#main-visual .news", {
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: "#main-visual .pagination",
    clickable: true,
  },
});
new Swiper("#main-visual .mask .main-mask", {
  loop: true,
  effect: "fade",
  pagination: {
    el: "#main-visual .pagination",
    clickable: true,
  },
  controller: {
    control: newsSlider,
  },
});
new Swiper("#main-visual .notice-mask", {
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: "#main-visual .notice-mask .fraction-pagination",
    type: "fraction",
  },
  navigation: {
    prevEl: "#main-visual .notice-mask .btn-prev",
    nextEl: "#main-visual .notice-mask .btn-next",
  },
});

new Swiper("#research .mask", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    prevEl: "#research .btn-prev",
    nextEl: "#research .btn-next",
  },
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: "auto",
    },
  },
});
new Swiper("#community .mask", {
  effect: "fade",
  loop: true,
  navigation: {
    prevEl: "#community .btn-prev",
    nextEl: "#community .btn-next",
  },
  pagination: {
    el: "#community .pagination",
    type: "progressbar",
  },
  on: {
    init: function () {
      console.log("swiper initialized");
    },
    slideChange: function (swiper) {
      const idx = swiper.realIndex;
      const list = document.querySelectorAll("#community .link li");
      current.textContent = "0" + (idx + 1);
      for (let i = 0; i < 4; i++) {
        list[i].classList.remove("on");
      }
      const selectedItem = document.querySelector(`#community .link li:nth-child(${idx + 1})`);
      selectedItem.classList.add("on");
    },
  },
});

gsap.from("#main-visual .title .char", {
  y: -200,
  opacity: 0,
  duration: 1.5,
  ease: "bounce",
  stagger: {
    //each: 0.05,
    amount: 1.5,
    from: "random",
  },
});
//gsap.from();
//document.querySelector("#vid").disablePictureInPicture = true;

const now = new Date();
const date = now.getDate();
const day = now.getDay();
const month = now.getMonth();
console.log("🚀 ~ file: index.html ~ line 477 ~ month", month);

const days = ["일", "월", "화", "수", "목", "금", "토"];
const months = ["Feb", "Apr", "", "", "", "", "", "", "", "Oct"];
console.log(days[day]);
console.log(months[month]);
// if (day === 0) {
//   console.log("일요일");
// } else if (day === 1) {
//   console.log("화요일");
// }
console.log("🚀 ~ file: index.html ~ line 475 ~ date", date);

const fundList = document.querySelectorAll(".fund-list li");
const total = fundList.length;
console.log("🚀 ~ file: index.html ~ line 511 ~ total", total);
for (let i = 0; i < total; i++) {
  fundList[i].addEventListener("click", function () {
    for (let j = 0; j < total; j++) {
      fundList[j].classList.remove("on");
    }
    fundList[i].classList.add("on");
  });
}
//event driven
//객체가 가지는 함수 == methods
//객체가 가지는 변수 == properties
