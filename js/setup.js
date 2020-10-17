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
  if (evt.key === `Escape` && document.activeElement !== userNameInput) {
    evt.preventDefault();
    closePopup();
  }
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

const changeColor = function (element, colors, selector) {
  let newColor = getRandomIndex(colors);
  element.style.fill = newColor;
  setupPlayer.querySelector(selector).value = newColor;
};

const changeBackground = function (element, colors, selector) {
  let newColor = getRandomIndex(colors);
  element.style.backgroundColor = newColor;
  setupPlayer.querySelector(selector).value = newColor;
};

const changeCoatColor = function () {
  changeColor(wizardCoat, WIZARD_COATS, `[name="coat-color"]`);
};

const changeEyesColor = function () {
  changeColor(wizardEyes, WIZARD_EYES, `[name="eyes-color"]`);
};

const changeFireballColor = function () {
  changeBackground(fireball, FIREBALL, `[name="fireball-color"]`);
};

wizardCoat.addEventListener(`click`, function () {
  changeCoatColor();
});

wizardEyes.addEventListener(`click`, function () {
  changeEyesColor();
});

fireball.addEventListener(`click`, function () {
  changeFireballColor();
});

wizardCoat.addEventListener(`keydown`, function (evt) {
  if (evt.code === `Space`) {
    changeCoatColor();
  }
});

wizardEyes.addEventListener(`keydown`, function (evt) {
  if (evt.code === `Space`) {
    changeEyesColor();
  }
});

fireball.addEventListener(`keydown`, function (evt) {
  if (evt.code === `Space`) {
    changeFireballColor();
  }
});
