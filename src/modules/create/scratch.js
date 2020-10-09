import config from '../../config';

export const coordinator = {}
export let scratchField;

export const Scratch = (game) => {
  const brush = game.add.image(0, 0, 'coin_icon_big');

  scratchField = game.add.renderTexture(
    0,
    0,
    config.scale.width,
    config.scale.height
  ).setDepth(50);
  scratchField.destroy = 0;
  scratchField.draw('bonus_scratch', 615, 415);

  coordinator.bonusCard = {
    type: 'bonus',
    diagonal: 520,
    segment: 368,
    initialX: 615,
    initialY: 415,
  }

  game.input.on('pointermove', function (pointer) {
    if (pointer.isDown){
      scratchField.erase(brush, pointer.x, pointer.y);
      coordinatorAudit(pointer, coordinator, scratchField, game);
    }
  });

  game.input.on('pointerdown', function (pointer) {
    scratchField.erase(brush, pointer.x, pointer.y);
  });
}

function coordinatorAudit(pointer, coordinator, scratchField, game) {
  for (const card in coordinator) {
    if (
      pointer.x > coordinator[card].initialX
        && pointer.x < (coordinator[card].initialX + coordinator[card].segment)
      && pointer.y > coordinator[card].initialY
        && pointer.y < (coordinator[card].initialY + coordinator[card].segment)
    ) {
      if (coordinator[card].minX > pointer.x || !coordinator[card].minX) {
        coordinator[card].minX = Math.floor(pointer.x)
      }
      if (coordinator[card].minY > pointer.y || !coordinator[card].minY) {
        coordinator[card].minY = Math.floor(pointer.y)
      }

      if (coordinator[card].maxX < pointer.x || !coordinator[card].maxX) {
        coordinator[card].maxX = Math.floor(pointer.x)
      }
      if (coordinator[card].maxY < pointer.y || !coordinator[card].maxY) {
        coordinator[card].maxY = Math.floor(pointer.y)
      }

      const verticalSide = coordinator[card].maxY - coordinator[card].minY;
      const horizontalSide = coordinator[card].maxX - coordinator[card].minX;
      const diagonal = Math.sqrt(Math.pow(verticalSide, 2) + Math.pow(horizontalSide, 2))
      if (diagonal > coordinator[card].diagonal * 0.9) {
        scratchField.erase(
          game.add.image(
            -500,
            -500,
            `${coordinator[card].type}_scratch`,
          ).setOrigin(0),
          coordinator[card].initialX,
          coordinator[card].initialY,
        );
      }
    }
  }
}
