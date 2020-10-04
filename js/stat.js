'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var renderCloud = function(ctx, x, y, fillColor, strokeColor) {
  ctx.fillStyle = fillColor;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.strokeStyle = strokeColor;
  ctx.strokeRect(x - 1, y - 1, CLOUD_WIDTH + 1, CLOUD_HEIGHT + 1);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0)');
  renderCloud(ctx, 100, 10, '#fff', 'rgba(0, 0, 0, 0.7)');
};
