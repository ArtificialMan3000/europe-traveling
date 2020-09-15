'use strict';

// Модуль модального окна
var modal = (function () {
  // Модальное окно
  var MODAL = document.querySelector('.modal');
  // Кнопка закрытия модального окна
  var MODAL_CLOSE = MODAL.querySelector('.modal__close');
  // Оверлэй модального окна
  var MODAL_OVERLAY = MODAL.querySelector('.modal__overlay');
  // Кнопки вызова модального окна
  var BUY_BUTTONS = document.querySelectorAll('.buy-button');

  // Показывает модальное окно
  var showModal = function () {
    MODAL.classList.add('modal--show');
  }

  // Скрывает модальное окно
  var hideModal = function () {
    MODAL.classList.remove('modal--show');
  }

  // Инициализирует модальное окно
  var initModal = function () {
    if (BUY_BUTTONS) {
      for (var i = 0; i < BUY_BUTTONS.length; i++) {
        BUY_BUTTONS[i].removeAttribute('href');
        BUY_BUTTONS[i].addEventListener('click', function () {
          showModal();
        });
      }
    }

    if (MODAL_CLOSE) {
      MODAL_CLOSE.addEventListener('click', function () {
        hideModal();
      });
    }

    if (MODAL_OVERLAY) {
      MODAL_OVERLAY.addEventListener('click', function () {
        hideModal();
      })
    }

    document.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        hideModal();
      }
    });
  }

  return {
    initModal: initModal
  }
})();
