// selected plan
const planOptions = document.querySelectorAll(".plan__data");
function activateBtn(btn, isSelected) {
  if (isSelected) {
    btn.classList.remove("btn--outlined");
    btn.classList.add("btn--filled");
  } else {
    btn.classList.remove("btn--filled");
    btn.classList.add("btn--outlined");
  }
}
function activatePlanOption() {
  planOptions.forEach((planOption) => {
    const btn = planOption.querySelector(".btn");
    const isSelected = Array.from(planOption.classList).includes("selected");
    activateBtn(btn, isSelected);
  });
}
activatePlanOption();
planOptions.forEach((planOption) => {
  planOption.addEventListener("click", function () {
    const isSelected = Array.from(planOption.classList).includes("selected");
    if (!isSelected) {
      console.log("not selected");
      const selectedOption = document.querySelector(".plan__data.selected");
      selectedOption.classList.remove("selected");
      planOption.classList.add("selected");
    }
    activatePlanOption();
  });
});

// scroll up
const scrollUpBtn = document.getElementById("scroll-up");

function scrollUp() {
  window.scrollTo(0, 0);
}

scrollUpBtn.addEventListener("click", scrollUp);

// show scroll-up button
function showScrollUp() {
  if (this.scrollY > 400) {
    scrollUpBtn.classList.add("show-scrollup");
  } else {
    scrollUpBtn.classList.remove("show-scrollup");
  }
}
window.addEventListener("scroll", showScrollUp);

// scrolling header
const header = document.getElementById("header");
function scrollingHeader() {
  if (this.scrollY > 0) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollingHeader);

let testimonialSwiper = new Swiper(".testimonial-swiper", {
  loop: true,
  centeredSlides: true,
  breakpoints: {
    320: {
      spaceBetween: 20,
    },
    1200: {
      spaceBetween: 50,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-navigation-button.next",
    prevEl: ".swiper-navigation-button.prev",
  },
  slidesPerView: "auto",
});

// show nav menu
const navClose = document.getElementById("nav__close"),
  navToggle = document.getElementById("nav__toggle"),
  navMenu = document.getElementById("nav__menu");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
// SCROLL REVEAL

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 100,
  // reset: true
});

sr.reveal(`.home__content, .feature__content,.footer__info`);
sr.reveal(`.plan__data, .footer__menu, .global__brand`, {
  interval: 100,
});
sr.reveal(`.feature__img`, { origin: "left" });
sr.reveal(`.home__img`, { origin: "right" });
