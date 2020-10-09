'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COATS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES = [`black`, `red`, `blue`, `yellow`, `green`];

// 1. Показывает блок setup
const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

// 2. Генерирует массив волшебников
let wizards = [
  {
    name: WIZARD_NAMES[0],
    coatColor: 'rgb(241, 43, 107)',
    eyes: 'black'
  },
  {
    name: WIZARD_NAMES[1],
    coatColor: 'rgb(215, 210, 55)',
    eyes: 'blue'
  },
  {
    name: WIZARD_NAMES[2],
    coatColor: 'rgb(101, 137, 164)',
    eyes: 'green'
  },
  {
    name: WIZARD_NAMES[3],
    coatColor: 'rgb(127, 127, 127)',
    eyes: 'red'
  }
];

const getRandomIndex = function (array) {
  return array[Math.floor(Math.random() * array.length)];
}

for (let j = 0; j < 4; j++) {
  const randomParam = Math.round(Math.random() * 100);
  if (randomParam % 2 == 0) {
    wizards[j].name = getRandomIndex(WIZARD_NAMES) + ' ' + getRandomIndex(WIZARD_SURNAMES);
  } else {
    wizards[j].name = getRandomIndex(WIZARD_SURNAMES) + ' ' + getRandomIndex(WIZARD_NAMES);
  };

  wizards[j].coatColor = getRandomIndex(WIZARD_COATS);
  wizards[j].eyes = getRandomIndex(WIZARD_EYES);
};

// 3. Создает DOM-элементы волшбников на основе шаблона
const similarListElement = userDialog.querySelector('.setup-similar-list');

const similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

const renderWizard = function (wizard) {
  const wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyes;
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
