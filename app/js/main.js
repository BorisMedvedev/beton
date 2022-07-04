document.addEventListener("DOMContentLoaded", function () {
  function contactsMap() {
    ymaps.ready(init);

    function init() {
      var myMap = new ymaps.Map("contacts-map", {
        center: [55.75846806898367, 37.60108849999989],
        zoom: 16,
      });

      var myPlacemark = new ymaps.Placemark(
        [55.75846806898367, 37.60108849999989],
        {},
        {
          iconLayout: "default#image",
          iconImageHref: "../images/icons/ellipse.svg",
          iconImageSize: [12, 12],
          iconImageOffset: [-3, -42],
        }
      );
      myMap.geoObjects.add(myPlacemark);
      myMap.behaviors.disable("scrollZoom");
    }
  }
  contactsMap();


  const mapInfo = document.querySelector('.map__info');
  const closeBtn = document.querySelector('.btn-close');
  closeBtn.addEventListener("click", () => {
    mapInfo.classList.add('map__info--no-active');
  });



});

const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
});




const anchors = document.querySelectorAll('.nav__link, .footer__logo');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();


        const blockID = anchor.getAttribute('href');
        console.log(blockID);

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}


const validate = new window.JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
  ]);
