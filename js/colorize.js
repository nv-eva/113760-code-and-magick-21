'use strict';

(function () {
  const setupPlayer = document.querySelector(`.setup-player`);
  window.setupPlayer = setupPlayer;

  window.colorize = function (element, colors, selector) {
    const changeColor = function () {
      const color = window.util.getRandomIndex(colors);

      if (element.tagName.toLowerCase() === `div`) {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }

      setupPlayer.querySelector(selector).value = color;
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
