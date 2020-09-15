'use strict';

// Модуль для коррекции вёрстки
window.layoutHelper = (function () {
  // Места посещения
  var places = document.querySelector('.places');
  // Карточки мест посещения
  var placesCards = places.querySelectorAll('.places__card');

  // Корректирует выравнивание последних элементов в блоке "Места посещения"
  var alignPlacesCards = function () {
    var placesCardsLength = placesCards.length;
    if (document.body.offsetWidth >= 1024) {
      if (placesCardsLength % 3 === 2) {
        placesCards[placesCardsLength - 2].classList.add('places__card--pre-last');
        placesCards[placesCardsLength - 1].classList.add('places__card--last');
      } else if (placesCardsLength % 3 === 1) {
        placesCards[placesCardsLength - 1].classList.add('places__card--last');
        placesCards[placesCardsLength - 1].style.marginRight = 'auto';
      }
    } else if (document.body.offsetWidth <= 1023 && document.body.offsetWidth >= 768) {
      if (placesCardsLength % 2 === 1) {
        placesCards[placesCardsLength - 1].classList.add('places__card--last');
      }
    }
  }

  // Корректируем выравнивание последних элементов в блоке "Места посещения"
  alignPlacesCards();

  return {
    alignPlacesCards: alignPlacesCards
  }
})();
