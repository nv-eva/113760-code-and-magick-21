'use strict';

(function () {
  window.colorize = function (element, colors, selector) {
    const setupPlayer = document.querySelector(`.setup-player`);
    window.setupPlayer = setupPlayer;

    const changeColor = function () {
      let newColor = window.util.getRandomIndex(colors);

      if (element.tagName.toLowerCase() === `div`) {
        element.style.backgroundColor = newColor;
      } else {
        element.style.fill = newColor;
      }

      setupPlayer.querySelector(selector).value = newColor;
    };

    element.addEventListener(`click`, function () {
      changeColor();
    });

    /*
    element.addEventListener(`keydown`, function (evt) {
      window.util.isSpaceEvent(evt, changeColor);
    });
    */
  };
})();
