'use strict';

// Модуль табов
window.tabs = (function () {
  // Контейнер табов
  var placesDetails = document.querySelector('.places-details');
  // Имена табов в виде ссылок
  var tabsNamesLinks = placesDetails.querySelectorAll('.tabs-names__link');
  // Содержимое табов
  var tabsContent = placesDetails.querySelectorAll('.tab-content');

  // Получает содержимое таба по его tab-id
  var getTabContent = function (tabId) {
    for (var i = 0; i < tabsContent.length; i++) {
      if (tabsContent[i].dataset.tabId === tabId) {
        return tabsContent[i];
      }
    }
  };

  // Сбрасывает табы
  var resetTabs = function () {
    for (var i = 0; i < tabsNamesLinks.length || i < tabsContent.length; i++) {
      if (tabsNamesLinks[i]) {
        tabsNamesLinks[i].removeAttribute('href');
        tabsNamesLinks[i].classList.remove('tabs-names__link--active');
      }
      if (tabsContent[i]) {
        tabsContent[i].classList.add('tab-content--hide');
        // tabsContent[i].classList.remove('tab-content--show');
      }
    }
  }

  // Делает таб активным
  var activateTab = function (tabNameElem) {
    if (tabNameElem) {
      tabNameElem.classList.add('tabs-names__link--active');
      var suitTabId = tabNameElem.dataset.tabHref;
      var suitTab = getTabContent(suitTabId);
      suitTab.classList.remove('tab-content--hide');
    }
  }

  // Переключает на определённый таб
  var switchToTab = function (tabNameElem) {
    resetTabs();
    activateTab(tabNameElem);
  }

  // Инициализирует табы
  var initTabs = function () {
    if (tabsNamesLinks) {
      switchToTab(tabsNamesLinks[0]);
      for (var i = 0; i < tabsNamesLinks.length; i++) {
        tabsNamesLinks[i].addEventListener('click', function (evt) {
          switchToTab(evt.target);
        });
      }
    }
  }

  return {
    initTabs: initTabs
  }
})();
