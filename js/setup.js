'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COATS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES = [`black`, `red`, `blue`, `yellow`, `green`];
const COUNT_WIZARDS = 4;

// 1. Показывает блок setup
const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

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
const similarListElement = userDialog.querySelector(`.setup-similar-list`);
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
const chooseWizards = userDialog.querySelector(`.setup-similar`);
chooseWizards.classList.remove(`hidden`);
