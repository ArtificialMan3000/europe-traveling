'use strict';

// Модуль главного меню
window.menu = (function () {
  // Главное меню
  var mainMenu = document.querySelector('.main-menu');
  // Кнопка "бургер"
  var burger = document.querySelector('.burger');
  // Логотип в хедере
  var logoLink = document.querySelector('.logo-link');

  // Прячет меню
  var hideMainMenu = function () {
    burger.classList.remove('burger--close');
    mainMenu.classList.remove('main-menu--show');
    logoLink.classList.remove('logo-link--hide');
  }

  // Переключает меню между открытым и закрытым состоянием
  var toggleMainMenu = function () {
    burger.classList.toggle('burger--close');
    mainMenu.classList.toggle('main-menu--show');
    logoLink.classList.toggle('logo-link--hide');
  }

  // Инициализирует главное меню
  var initMainMenu = function () {
    // Убираем меню из потока
    mainMenu.classList.add('main-menu--absolute');
    // Прячем меню
    hideMainMenu();
    // Вешаем на бургер обработчик для открытия и закрытия меню
    burger.addEventListener('click', function (evt) {
      evt.preventDefault();
      toggleMainMenu();
    });
  }

  return {
    initMainMenu: initMainMenu
  }
})();
