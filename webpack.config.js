const path = require("path");

module.exports = {
  entry: [
    "./js/stat.js",
    "./js/game.js",
    "./js/util.js",
    "./js/debounce.js",
    "./js/colorize.js",
    "./js/backend.js",
    "./js/dialog.js",
    "./js/avatar.js",
    "./js/setup.js",
    "./js/move.js"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
    iife: true
  },
  devtool: false
};
