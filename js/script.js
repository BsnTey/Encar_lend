const advantagesSlider = document.querySelector(".advantages-swiper-container");
const koreaAdvantagesSlider = document.querySelector(".korea-advantages-swiper-container");

const header = document.querySelector(".header");
const burger = document.querySelector(".header__menu-burger");
const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menu-list");
const headerBtn = document.querySelector(".header__btn");
const headerAddress = document.querySelector(".header__address");
const koreaListTitle = document.querySelectorAll(".korea-advantages-list__title");
const qaContentTitle = document.querySelectorAll(".question-answer-content__title");

let advantagesSwiper;

function mobileSliderAdvantages() {
  if (window.innerWidth <= 1800 && advantagesSlider.dataset.mobile == "false") {
    advantagesSwiper = new Swiper(advantagesSlider, {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 48,
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });
    advantagesSlider.dataset.mobile = true;
  }

  if (window.innerWidth > 1800) {
    advantagesSlider.dataset.mobile == "false";
    advantagesSwiper.destroy();
  }
}

mobileSliderAdvantages();

let koreaAdvantagesSwiper;

function mobileSliderKoreaAdvantages() {
    koreaAdvantagesSwiper = new Swiper(koreaAdvantagesSlider, {
      loop: true,
      slidesPerView: 1,
      autoHeight: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      keyboard: true,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        // when window width is >= 620px
        620: {
          pagination: {
            el: false,
          },
        },
      }
    });
}

mobileSliderKoreaAdvantages();

window.addEventListener("resize", () => {});

burger.addEventListener("click", function () {
  burger.classList.toggle("header__menu-burger--active");
  header.classList.toggle("header--active");
  menu.classList.toggle("menu--active");
  menuList.classList.toggle("menu-list--active");
  headerBtn.classList.toggle("header__btn--active");
  headerAddress.classList.toggle("header__address--active");
});


for (let i = 0; i < koreaListTitle.length; i++) {
  koreaListTitle[i].addEventListener('click', function() {
    this.classList.toggle('korea-advantages-list__title--show');
    this.classList.toggle('no-pseudo-after');
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
}

for (let i = 0; i < qaContentTitle.length; i++) {
  qaContentTitle[i].addEventListener('click', function() {
    this.classList.toggle('question-answer-content__title--show');
    this.classList.toggle('no-pseudo-after');
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
}
