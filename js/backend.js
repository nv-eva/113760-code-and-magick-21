'use strict';
(function () {
  const URL_LOAD = `https://21.javascript.pages.academy/code-and-magick/data`;
  const URL_SAVE = `https://21.javascript.pages.academy/code-and-magick`;

  window.backend = {
    load(onLoad, onError) {
      const xhr = new XMLHttpRequest();
      xhr.responseType = `json`;

      xhr.open(`GET`, URL_LOAD);

      xhr.addEventListener(`load`, function () {
        onLoad(xhr.response);
      });

      xhr.send();
    },

    save(data, onLoad) {
      const xhr = new XMLHttpRequest();
      xhr.responseType = `json`;

      xhr.addEventListener(`load`, function () {
        onLoad(xhr.response);
      });

      xhr.open(`POST`, URL_SAVE);
      xhr.send(data);
    }
  };
})();
