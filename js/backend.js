'use strict';
(function () {
  const URL = `https://21.javascript.pages.academy/code-and-magick`;

  window.backend = {
    save(data, onLoad) {
      const xhr = new XMLHttpRequest();
      xhr.responseType = `json`;

      xhr.addEventListener(`load`, function () {
        onLoad(xhr.response);
      });

      xhr.open(`POST`, URL);
      xhr.send(data);
    }
  };
})();
