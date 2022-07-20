document.addEventListener("DOMContentLoaded", function () {
  function navigation() {
    const anchors = document.querySelectorAll(
      ".nav__link, .logo-footer, .hero__link, .aside__btn, .tabs-block__btn"
    );

    for (let anchor of anchors) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute("href");
        console.log(blockID);

        document.querySelector(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }


  function tabsContent() {
    let tabsBtn = document.querySelectorAll(".tabs-block__btn");
    let tabsItem = document.querySelectorAll(".table-prise");

    tabsBtn.forEach(function (el) {
      el.addEventListener("click", function (e) {
        const path = e.currentTarget.dataset.path;
        navigation();
        tabsBtn.forEach(function (btn) {
          btn.classList.remove("tabs-block__btn--active");
          e.currentTarget.classList.add("tabs-block__btn--active");

          tabsItem.forEach(function (el) {
            el.classList.remove("table-prise--active");
            document
              .querySelector(`[data-target='${path}']`)
              .classList.add("table-prise--active");
          });
        });

      });
    });
  }

  function contactsForm() {
    var Selector = document.querySelectorAll("input[type='tel']");
    var im = new Inputmask("+7 (999)-999-99-99");
    im.mask(Selector);
    new JustValidate(".contacts-form", {
      rules: {
        name: {
          required: true,
          minLength: 2,
          maxLength: 10,
        },
        phone: {
          required: true,
          function: (name, value) => {
            const phone = Selector.Inputmask.unmaskevalue();
            return Number(phone) && phone.length === 10;
          },
        },
        mail: {
          required: true,
          email: true,
        },
      },
    });
  }



  navigation();
  tabsContent();
  contactsForm();

});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 80,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      centeredSlides: false,
      slidesPerView: 1.5,
      spaceBetween: 50,
    },
    375: {
      centeredSlides: false,
      slidesPerView: 1.5,
      spaceBetween: 50,
    },
    440: {
      centeredSlides: false,
      slidesPerView: 1.5,
      spaceBetween: 50,
    },
    560: {
      centeredSlides: false,
      slidesPerView: 1.5,
      spaceBetween: 50,
    },
    978: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});


// Модальное окно

// открыть по кнопке
$('.js-button-campaign').click(function () {

  $('.js-overlay-campaign').fadeIn();
  $('.js-overlay-campaign').addClass('disabled');
  $("body").css("overflow", "hidden");
});

// закрыть на крестик
$('.js-close-campaign').click(function () {
  $('.js-overlay-campaign').fadeOut();
  $("body").css("overflow", "visible");

});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
  var popup = $('.js-popup-campaign');
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $('.js-overlay-campaign').fadeOut();
    $("body").css("overflow", "visible");

  }
});

// открыть по таймеру
$(window).on('load', function () {
  setTimeout(function () {
    if ($('.js-overlay-campaign').hasClass('disabled')) {
      return false;
    } else {

      $(".js-overlay-campaign").fadeIn();
    }
  }, 80000);
});



let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageXOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
  if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    header.classList.add('hide');
  } else if (scrollPosition() < lastScroll && containHide()) {
    header.classList.remove('hide');
  }

  lastScroll = scrollPosition();
});

document.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu-mobail');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('menu-mobail-active');
  });

  const close = document.querySelector('.burger-mob');
  close.addEventListener('click', () => {

    menu.classList.remove('menu-mobail-active');
    burger.classList.remove('burger--active');
  });

  const btns = document.querySelectorAll('.footer__nav-link');

  btns.forEach(el => {
    el.addEventListener('click', (e) => {
      menu.classList.remove('menu-mobail-active');
      burger.classList.remove('burger--active');
    });
  });

});


var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, '300');
});



const cookieEl = document.querySelector('.cookie-block');
const okEl = document.querySelector('.ok');

okEl.addEventListener('click', () => {
  cookieEl.style.display = 'none';
});

let cookies = () => {
  if (!Cookies.get('hide-cookie')) {
    setTimeout(() => {
      cookieEl.style.display = 'block';
    }, 5000);
  }

  Cookies.set('hide-cookie', 'true', {
    expires: 10
  });
}


cookies();
