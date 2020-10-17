'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COATS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES = [`black`, `red`, `blue`, `yellow`, `green`];
const FIREBALL = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const COUNT_WIZARDS = 4;

// 1. Открытие и закрытие блока setup
const setup = document.querySelector(`.setup`);
const setupOpen = document.querySelector(`.setup-open`);
const setupClose = setup.querySelector(`.setup-close`);
const userNameInput = document.querySelector(`.setup-user-name`);

const onPopupEscPress = function (evt) {
  userNameInput.addEventListener(`keydown`, function () {
    if (evt.key === `Escape`) {
      evt.preventDefault();
      closePopup();
    }
  });
};

const openPopup = function () {
  setup.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = function () {
  setup.classList.add(`hidden`);
  document.removeEventListener(`keydown`, onPopupEscPress);
};

setupOpen.addEventListener(`click`, function () {
  openPopup();
});

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closePopup();
  }
});

// 2. Генерирует массив волшебников
const getRandomIndex = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

const generateWizard = function () {
  const wizard = {};

  if (Math.random() > 0.5) {
    wizard.name = getRandomIndex(WIZARD_NAMES) + ` ` + getRandomIndex(WIZARD_SURNAMES);
  } else {
    wizard.name = getRandomIndex(WIZARD_SURNAMES) + ` ` + getRandomIndex(WIZARD_NAMES);
  }

  wizard.coatColor = getRandomIndex(WIZARD_COATS);
  wizard.eyes = getRandomIndex(WIZARD_EYES);

  return (wizard);
};

const generateWizards = (countWizards) =>
  (new Array(countWizards)).fill(``).map(generateWizard);

const wizards = generateWizards(COUNT_WIZARDS);

// 3. Создает DOM-элементы волшбников на основе шаблона
const similarListElement = setup.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

const renderWizard = function (wizard) {
  const wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyes;
  return wizardElement;
};

// 4. Вставляет сгенерированные элементы на страницу
const fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

// 5. Показывает блок setup-similar
const chooseWizards = setup.querySelector(`.setup-similar`);
chooseWizards.classList.remove(`hidden`);

// Изменяет цвета волшебника по нажатию
const setupPlayer = document.querySelector(`.setup-player`);
let wizardCoat = setupPlayer.querySelector(`.setup-wizard .wizard-coat`);
let wizardEyes = setupPlayer.querySelector(`.setup-wizard .wizard-eyes`);
let fireball = setupPlayer.querySelector(`.setup-fireball-wrap`);

wizardCoat.addEventListener(`click`, function () {
  let wizardCoatColor = getRandomIndex(WIZARD_COATS);
  wizardCoat.style.fill = wizardCoatColor;
  setupPlayer.querySelector(`[name="coat-color"]`).value = wizardCoatColor;
});

wizardEyes.addEventListener(`click`, function () {
  let wizardEyesColor = getRandomIndex(WIZARD_EYES);
  wizardEyes.style.fill = wizardEyesColor;
  setupPlayer.querySelector(`[name="eyes-color"]`).value = wizardEyesColor;
});

fireball.addEventListener(`click`, function () {
  let fireballColor = getRandomIndex(FIREBALL);
  fireball.style.backgroundColor = fireballColor;
  setupPlayer.querySelector(`[name="fireball-color"]`).value = fireballColor;
});
