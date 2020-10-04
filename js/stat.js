'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP_SHADOW = 10;
var GAP_TEXT = 20;

var textTitle = ['Ура вы победили!', 'Список результатов: '];

var renderCloud = function(ctx, x, y, fillColor, strokeColor) {
  ctx.fillStyle = fillColor;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.strokeStyle = strokeColor;
  ctx.strokeRect(x - 1, y - 1, CLOUD_WIDTH + 1, CLOUD_HEIGHT + 1);
};

var renderText = function(ctx, text, x, y) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText(text, x, y);
};

window.renderStatistics = function (ctx) {
  renderCloud(
    ctx,
    CLOUD_X + GAP_SHADOW,
    CLOUD_Y + GAP_SHADOW,
    'rgba(0, 0, 0, 0.7)',
    'rgba(0, 0, 0, 0)'
  );
  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    '#fff',
    'rgba(0, 0, 0, 0.7)'
  );

  for (var i = 0; i < textTitle.length; i++) {
    renderText(
      ctx,
      textTitle[i],
      CLOUD_X + GAP_TEXT,
      CLOUD_Y + GAP_TEXT * (i + 1)
    );
  }
};
