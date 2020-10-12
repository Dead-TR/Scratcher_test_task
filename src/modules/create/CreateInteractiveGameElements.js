import config from '../../config';

export let cardCells, cardRequired, cardUnits, bonus;

export const CreateInteractiveGameElements = (game) => {
  bonus = game.add.image(config.scale.width - 300, 620, 'bow')
  .setOrigin(0.5);
  cardRequired = game.add.image(0, 0, 'bow_small')
    .setOrigin(0.5)
    // .setVisible(false)
    .setPosition(570, 1090);

  cardCells = game.add.group({ //створює клітинки, в котрі буде поміщено елементи
    key: 'frame',
    repeat: 5,
    setXY: {x: 75, y: 1225}
  });

  cardCells.children.iterate((cell, i) => { //розміщує ці клітинки
    cell.setOrigin(0);
    if (i < 3) {
      cell.x += (337 * (i));
    } else {
      cell.y = 1560;
      cell.x += (337 * (i-3));
    }
  });

  cardUnits = game.add.group({
    key: 'bow',
    repeat: 5,
    setXY: {x: 215, y: 1365}
  });

  cardUnits.children.iterate((unit, i) => {
    if (i < 3) {
      unit.x += (337 * (i));
    } else {
      unit.y = 1700;
      unit.x += (337 * (i-3));
    }
  });
}
