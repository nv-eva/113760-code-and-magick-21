'use strict';

(function () {
  window.util = {
    isEnterEvent(evt, action) {
      if (evt.key === `Enter`) {
        action();
      }
    },

    isSpaceEvent(evt, action) {
      if (evt.code === `Space`) {
        action();
      }
    },

    getRandomIndex(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
  };
})();
