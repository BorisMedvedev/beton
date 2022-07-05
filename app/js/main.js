document.addEventListener("DOMContentLoaded", function () {
  function navigation() {
    const anchors = document.querySelectorAll(
      ".nav__link, .hero__link, .accordion-list__inner-link, .logo, .inner-link"
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

  function gallerySlider() {
    var swiper1 = new Swiper(".gallery-slider__inner", {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 1,

      navigation: {
        nextEl: ".gallery-slider__btn-next",
        prevEl: ".gallery-slider__btn-prev",
      },

      pagination: {
        el: ".gallery-slider__pagination",
        type: "fraction",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          centeredSlides: true,
        },
        640: {
          slidesPerView: 1,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 34,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 34,
        },
        1340: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });
  }

  function eventsSwiper() {
    var swiper2 = new Swiper(".events-swiper", {
      slidesPerView: 3,
      spaceBetween: 50,

      navigation: {
        nextEl: ".events-swiper__next",
        prevEl: ".events-swiper__prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          centeredSlides: 50,
        },
        640: {
          slidesPerView: 2,
          centeredSlides: 50,
        },
        768: {
          slidesPerGroup: 3,
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1024: {
          slidesPerGroup: 2,
          slidesPerView: 3,
          spaceBetween: 27,
        },
        1340: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1600: {
          slidesPerGroup: 2,
        },
      },
    });
  }

  function projectSlider() {
    var swiper3 = new Swiper(".project-slider", {
      slidesPerView: 3,
      spaceBetween: 50,
      navigation: {
        nextEl: ".project__partners-btn-next",
        prevEl: ".project__partners-btn-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          centeredSlides: true,
        },
        640: {
          slidesPerView: 1,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 34,
        },
        940: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1340: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1560: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    });
  }

  function contactsMap() {
    ymaps.ready(init);

    function init() {
      var myMap = new ymaps.Map("contacts__map", {
        center: [55.75846806898367, 37.60108849999989],
        zoom: 16,
      });

      var myPlacemark = new ymaps.Placemark(
        [55.75846806898367, 37.60108849999989],
        {},
        {
          iconLayout: "default#image",
          iconImageHref: "../images/icons/group.svg",
          iconImageSize: [20, 20],
          iconImageOffset: [-3, -42],
        }
      );
      myMap.geoObjects.add(myPlacemark);
      myMap.behaviors.disable("scrollZoom");
    }
  }

  const defaultSelect = () => {
    const element = document.querySelector(".gallery-filter__select");
    const choices = new Choices(element, {
      searchEnabled: false,
    });
  };

  function newAccordion() {
    new Accordion(".accordion-list", {
      duration: 400,
      openOnInit: [0],
      elementClass: "accordion",
      triggerClass: "accordion-list__btn",
      panelClass: "accordion-list__content",
      activeClass: "accordion--active",
    });
  }

  function showData() {
    const button = document.querySelectorAll(".selection-menu__btn");
    const drop = document.querySelectorAll(".list-scroll");

    button.forEach((el) => {
      el.addEventListener("click", (e) => {
        drop.forEach((el) => {
          el.classList.remove("active");
        });
        e.currentTarget
          .closest("li")
          .querySelector(".list-scroll")
          .classList.toggle("active");
      });
    });

    document.addEventListener("click", (e) => {
      if (
        !e.target.classList.contains("list-scroll") &&
        !e.target.classList.contains("selection-menu__btn")
      ) {
        drop.forEach((el) => {
          el.classList.remove("active");
        });
      }
    });
  }

  function tulTip() {
    tippy(".tultip-1", {
      content:
        " уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Прежде",
      theme: "amethyst",

      trigger: "click",
    });
    tippy(".tultip-2", {
      content:
        "современных социальных резервов призывают нас к новым свершениям,",
      theme: "amethyst",

      trigger: "click",
    });
    tippy(".tultip-3", {
      content:
        "с не уникальными данными до степени совершенной неузнаваемости.",
      theme: "amethyst",

      trigger: "click",
    });
  }

  function tabsContent() {
    let tabsBtn = document.querySelectorAll(".accordion-list__inner-btn");
    let tabsItem = document.querySelectorAll(".catalog__author-information");

    tabsBtn.forEach(function (el) {
      el.addEventListener("click", function (e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function (btn) {
          btn.classList.remove("accordion-list__inner-btn--active");
          e.currentTarget.classList.add("accordion-list__inner-btn--active");

          tabsItem.forEach(function (el) {
            el.classList.remove("catalog__author-information--active");
            document
              .querySelector(`[data-target='${path}']`)
              .classList.add("catalog__author-information--active");
          });
        });
      });
    });
  }

  function contactsForm() {
    var Selector = document.querySelector("input[type='tel']");
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

  function burgerBtn() {
    const burger = document.querySelector(".burger");

    burger.addEventListener("click", toggleNav);

    function toggleNav() {
      burger.classList.contains("is-active")
        ? burger.classList.remove("is-active")
        : burger.classList.add("is-active");
    }
  }

  function burgerBtn1() {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".nav");

    burger.addEventListener("click", toggleNav);

    function toggleNav() {
      menu.classList.contains("btn-active")
        ? menu.classList.remove("btn-active")
        : menu.classList.add("btn-active");
    }
  }

  function modalPopup() {
    const openBtn = document.querySelector(".exit-btn");
    const modal = document.querySelector(".modal-popup");
    const closeBtn = document.querySelector(".close-btn");
    openBtn.addEventListener("click", () => {
      modal.showModal();
    });
    closeBtn.addEventListener("click", () => {
      modal.close();
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.close();
    });
  }

  contactsMap();
  navigation();
  defaultSelect();
  newAccordion();
  showData();
  gallerySlider();
  eventsSwiper();
  projectSlider();
  tulTip();
  tabsContent();
  contactsForm();
  burgerBtn();
  modalPopup();
  burgerBtn1();
});
