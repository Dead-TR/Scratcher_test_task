import cardArrowCreator from '../additional/cardArrowCreator';
import config from '../../config';

export const CreateInteractive = (game) => {
  const condition = Phaser.Math.Between(0, 4);
  const probability = Phaser.Math.Between(0, 99);
  const bonusProbability = Phaser.Math.Between(0, 9);
  let bonus;
  let cardRequired, cardsResult, cardUnits;
  // const probability = 1;

  bonus = game.add.image(config.scale.width - 300, 620, 'bow')
    .setOrigin(0.5);

  switch (condition) {
    case 0:
      cardRequired = game.add.image(0, 0, 'bonfire_small');
      bonus.setTexture('bonfire');
      break;

    case 1:
      cardRequired = game.add.image(0, 0, 'bow_small');
      break;

    case 2:
      cardRequired = game.add.image(0, 0, 'leaf_small');
      bonus.setTexture('leaf');
      break;

    case 3:
      cardRequired = game.add.image(0, 0, 'rope_small');
      bonus.setTexture('rope');
      break;

    default:
      cardRequired = game.add.image(0, 0, 'tent_small');
      bonus.setTexture('tent');
  };

  cardRequired
    .setOrigin(0.5)
  // .setVisible(false)
    .setPosition(570, 1090);

  switch (true) {
    case(probability < 2):
      cardsResult = cardArrowCreator('tent');
      break;

    case(probability >= 2 && probability < 6):
      cardsResult = cardArrowCreator('rope');
      break;

    case(probability >= 6 && probability < 12):
      cardsResult = cardArrowCreator('leaf');
      break;

    case(probability >= 12 && probability < 20):
      cardsResult = cardArrowCreator('bow');
      break;

    case(probability >= 20 && probability < 30):
      cardsResult = cardArrowCreator('bonfire');
      break;

    default:
      cardsResult = cardArrowCreator('lose');
      break;
  };

  const coordinator = {}

  const brush = game.add.image(0, 0, 'coin_icon_big');
  const scratchField = game.add.renderTexture(
    0,
    0,
    config.scale.width,
    config.scale.height
  ).setDepth(50);
  scratchField.destroy = 0;
  scratchField.draw('bonus_scratch', 615, 415);

  coordinator.bonusCard = {
    diagonal: 520,
    segment: 368,
    initialX: 615,
    initialY: 415,
  }

  const cardCells = game.add.group({
    key: 'frame',
    repeat: 5,
    setXY: {x: 75, y: 1225}
  });

  cardCells.children.iterate((cell, i) => {
    cell.setOrigin(0);
    if (i < 3) {
      cell.x += (337 * (i));
    } else {
      cell.y = 1560;
      cell.x += (337 * (i-3));
    }

    scratchField.draw('scratch', cell.x, cell.y);
    coordinator[`card_${i}`] = {
      diagonal: 390,
      segment: 368,
      initialX: cell.x,
      initialY: cell.y,
    }
  });

  cardUnits = game.add.group({
    key: 'bow',
    repeat: 5,
    setXY: {x: 215, y: 1365}
  });

  cardUnits.children.iterate((unit, i) => {
    unit.setTexture(cardsResult[i]);

    if (i < 3) {
      unit.x += (337 * (i));
    } else {
      unit.y = 1700;
      unit.x += (337 * (i-3));
    }
  });

  game.input.on('pointermove', function (pointer) {
    if (pointer.isDown){
      scratchField.erase(brush, pointer.x, pointer.y);
      coordinatorAudit(pointer, coordinator, cardCells);
    }
  });

  game.input.on('pointerdown', function (pointer) {
    scratchField.erase(brush, pointer.x, pointer.y);
  });
}

function coordinatorAudit(pointer, coordinator, cardCells) {
  for (const card in coordinator) {
    // coordinator[card]
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
        console.log("coordinatorAudit -> diagonal", diagonal)
      }
    }
  }
}

/*

      console.log("CreateInteractive -> scratchField", scratchField)
      console.log("======>", scratchField.texture.pixels)


*/