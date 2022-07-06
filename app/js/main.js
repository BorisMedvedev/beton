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
  tabsContent();
  contactsForm();
  burgerBtn();
  modalPopup();
  burgerBtn1();
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
});
