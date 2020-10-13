import {
  cardRequired,
  cardUnits,
  cardCells,
  bonus
} from '../create/CreateInteractiveGameElements';
import cardArrowCreator from '../additional/cardArrowCreator';
import {Scratch, coordinator, scratchField} from '../create/Scratch';
import {winElements} from '../create/Starter';

export let coins = 0;

export const UpdateInteractiveElements = (game) => {
  let cardsArray;
  const condition = Phaser.Math.Between(0, 4);
  const probability = Phaser.Math.Between(0, 99);
  const bonusProbability = Phaser.Math.Between(0, 9);

  if (bonusProbability <= 7) {
    coins += 25;
  }

  switch (condition) {
    case 0:
      cardRequired.setTexture('bonfire_small');
      bonus.setTexture('bonfire');
      break;

    case 1:
      cardRequired.setTexture('bow_small');
      bonus.setTexture('bow');
      break;

    case 2:
      cardRequired.setTexture('leaf_small');
      bonus.setTexture('leaf');
      break;

    case 3:
      cardRequired.setTexture('rope_small');
      bonus.setTexture('rope');
      break;

    default:
      cardRequired.setTexture('tent_small');
      bonus.setTexture('tent');
  };

  switch (true) {
    case(probability < 2):
      cardsArray = cardArrowCreator('tent');
      if (condition === 4) {
        coins += 100;
      }
      break;

    case(probability >= 2 && probability < 6):
      cardsArray = cardArrowCreator('rope');
      if (condition === 3) {
        coins += 50;
      }
      break;

    case(probability >= 6 && probability < 12):
      cardsArray = cardArrowCreator('leaf');
      if (condition === 2) {
        coins += 35;
      }
      break;

    case(probability >= 12 && probability < 20):
      cardsArray = cardArrowCreator('bow');
      if (condition === 1) {
        coins += 30;
      }
      break;

    case(probability >= 20 && probability < 30):
      cardsArray = cardArrowCreator('bonfire');
      if (condition === 0) {
        coins += 25;
      }
      break;

    default:
      cardsArray = cardArrowCreator('lose');
      break;
  };

  Scratch(game);

  cardCells.children.iterate((cell, i) => {
    scratchField.draw('card_scratch', cell.x, cell.y);
    coordinator[`card_${i}`] = {
      scratched: false,
      type: 'card',
      diagonal: 400,
      segment: 280,
      initialX: cell.x,
      initialY: cell.y,
    }
  });

  cardUnits.children.iterate((unit, i) => {
    unit.setTexture(cardsArray[i]);
    coordinator[`card_${i}`].key = unit.texture.key;
  });

  if (bonusProbability > 7) {
    coins = 1000;
  }

  if (coins) {
    if (coins < 1000) {
      winElements[2].setText(`${coins}`);
      winElements[3].setTexture('coin_icon_big');
    } else {
      winElements[2].setText(`1`);
      winElements[3].setTexture('dollar_icon');
    }
  }

  coordinator.bonusCard.key = bonus.texture.key;
  coins = 0;
}
