'use strict';

(function () {
  const setupPlayer = document.querySelector(`.setup-player`);
  window.setupPlayer = setupPlayer;

  window.colorize = function (element, colors, selector) {
    const changeColor = function () {
      const newColor = window.util.getRandomIndex(colors);

      if (element.tagName.toLowerCase() === `div`) {
        element.style.backgroundColor = newColor;
      } else {
        element.style.fill = newColor;
      }

      setupPlayer.querySelector(selector).value = newColor;

      window.debounce(function () {
        window.setup.updateWizards();
      })();
    };

    element.addEventListener(`mouseover`, function () {
      element.style.cursor = `pointer`;
    });

    element.addEventListener(`click`, function () {
      changeColor();
    });

    element.addEventListener(`keydown`, function (evt) {
      window.util.isSpaceEvent(evt, changeColor);
    });
  };
})();
