import config from '../../config';

export let canvas, scratchCard;

export const scratch = (game) => {
  const scratchBrush = game.textures.get("brush").getSourceImage();
  scratchCard = game.textures.get("scratch").getSourceImage();
  const scratchBonus = game.textures.get("bonus_scratch").getSourceImage();
  canvas = game.textures.createCanvas("canvas", config.scale.width, config.scale.height);

  game.add.image(0, 0, "canvas").setOrigin(0).setDepth(50);
  canvas.draw(615, 415, scratchBonus);

  game.input.on('pointermove', function (pointer) {
    if (pointer.isDown) {
      erase(canvas, scratchBrush, pointer.x, pointer.y);
    }
  });

  game.input.on('pointerdown', function (pointer) {
    erase(canvas, scratchBrush, pointer.x, pointer.y);
  });
}

function erase(canvasTexture, cut, x, y) {
  canvasTexture.getContext().globalCompositeOperation = "destination-out";

  canvasTexture.draw(x, y, cut);
}