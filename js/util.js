'use strict';

(function () {
  window.util = {
    isEnterEvent: function (evt, action) {
      if (evt.key === `Enter`) {
        action();
      }
    },

    isSpaceEvent: function (evt, action) {
      if (evt.code === `Space`) {
        action();
      }
    },

    getRandomIndex: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    }
  };
})();
