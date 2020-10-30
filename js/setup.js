'use strict';

(function () {
  const WIZARD_COATS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const WIZARD_EYES = [`black`, `red`, `blue`, `yellow`, `green`];
  const FIREBALL = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
  const COUNT_WIZARDS = 4;

  /*
  // Генерирует массив волшебников
  const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
  const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];

  const generateWizard = function () {
    const wizard = {};

    if (Math.random() > 0.5) {
      wizard.name = window.util.getRandomIndex(WIZARD_NAMES) + ` ` + window.util.getRandomIndex(WIZARD_SURNAMES);
    } else {
      wizard.name = window.util.getRandomIndex(WIZARD_SURNAMES) + ` ` + window.util.getRandomIndex(WIZARD_NAMES);
    }

    wizard.coatColor = window.util.getRandomIndex(WIZARD_COATS);
    wizard.eyes = window.util.getRandomIndex(WIZARD_EYES);

    return (wizard);
  };

  const generateWizards = (countWizards) =>
    (new Array(countWizards)).fill(``).map(generateWizard);

  const wizards = generateWizards(COUNT_WIZARDS);
  */

  // Создает DOM-элементы волшбников на основе шаблона
  const similarListElement = window.setup.querySelector(`.setup-similar-list`);
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);

  const renderWizard = function (wizard) {
    const wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat; // coatColor
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes; // eyes

    return wizardElement;
  };

  // Вставляет сгенерированные элементы на страницу
  window.backend.load(function (wizards) {
    const fragment = document.createDocumentFragment();

    let countWizards = COUNT_WIZARDS;
    if (wizards.length < COUNT_WIZARDS) {
      countWizards = wizards.length;
    }

    for (let i = 0; i < countWizards; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    similarListElement.appendChild(fragment);

    window.setup.querySelector(`.setup-similar`).classList.remove(`hidden`);
  }, function () {});

  // Изменяет цвета волшебника по нажатию
  let wizardCoat = window.setupPlayer.querySelector(`.setup-wizard .wizard-coat`);
  let wizardEyes = window.setupPlayer.querySelector(`.setup-wizard .wizard-eyes`);
  let fireball = window.setupPlayer.querySelector(`.setup-fireball-wrap`);

  window.colorize(wizardCoat, WIZARD_COATS, `[name="coat-color"]`);
  window.colorize(wizardEyes, WIZARD_EYES, `[name="eyes-color"]`);
  window.colorize(fireball, FIREBALL, `[name="fireball-color"]`);
})();
