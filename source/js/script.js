'use strict';

// Корректируем выравнивание последних элементов в блоке "Места посещения"
window.layoutHelper.alignPlacesCards();

// Инициализируем главное меню
window.menu.initMainMenu();

// Инициализируем табы
window.tabs.initTabs();

// Форма покупки
var buyForm = document.querySelector('#buy-form');
// Форма обратной связи
var feedbackForm = document.querySelector('#feedback-form');

// Инициализируем формы
window.form.initForm(buyForm, ['phone', 'email']);
window.form.initForm(feedbackForm, ['phone', 'email']);

// Инициализируем модальное окно
window.modal.initModal();
