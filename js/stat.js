'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP_SHADOW = 10;
const GAP_TEXT = 20;
const GAP_BAR = 50;
const BAR_WIDTH = 40;
const BAR_HEIGHT = 150;

const statisticsTitle = [`Ура вы победили!`, `Список результатов: `];

const renderCloud = function (ctx, x, y, fillColor, strokeColor) {
  ctx.fillStyle = fillColor;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.strokeStyle = strokeColor;
  ctx.strokeRect(x - 1, y - 1, CLOUD_WIDTH + 1, CLOUD_HEIGHT + 1);
};

const renderText = function (ctx, text, x, y) {
  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  ctx.fillText(text, x, y);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let k = 1; k < arr.length; k++) {
    if (arr[k] > maxElement) {
      maxElement = arr[k];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(
      ctx,
      CLOUD_X + GAP_SHADOW,
      CLOUD_Y + GAP_SHADOW,
      `rgba(0, 0, 0, 0.7)`,
      `rgba(0, 0, 0, 0)`
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `#fff`,
      `rgba(0, 0, 0, 0.5)`
  );

  for (let i = 0; i < statisticsTitle.length; i++) {
    renderText(
        ctx,
        statisticsTitle[i],
        CLOUD_X + GAP_TEXT,
        CLOUD_Y + GAP_TEXT * (i + 1)
    );
  }

  const maxTime = getMaxElement(times);

  for (let j = 0; j < players.length; j++) {
    const barX = CLOUD_X + GAP_BAR + (GAP_BAR + BAR_WIDTH) * j;
    const barY = CLOUD_Y + GAP_TEXT * (statisticsTitle.length + 1) + BAR_HEIGHT + 3;
    const barHeightCurrent = (BAR_HEIGHT * times[j]) / maxTime;

    renderText(
        ctx,
        Math.round(times[j]),
        barX,
        barY - barHeightCurrent
    );

    if (players[j] === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    } else {
      const saturation = Math.round(Math.random() * 100) + `%`;
      ctx.fillStyle = `hsl(240, ${saturation}, 50%)`;
    }

    ctx.fillRect(
        barX,
        barY - barHeightCurrent + GAP_TEXT,
        BAR_WIDTH,
        barHeightCurrent
    );

    renderText(
        ctx,
        players[j],
        barX,
        barY + GAP_TEXT + 10
    );
  }
};
