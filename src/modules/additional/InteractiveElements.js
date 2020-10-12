// import cardArrowCreator from './cardArrowCreator';
// import {Scratch, coordinator, scratchField} from '../create/Scratch';

// export const InteractiveElements = (game) => {
//   const condition = Phaser.Math.Between(0, 4);
//   const probability = Phaser.Math.Between(0, 99);
//   const bonusProbability = Phaser.Math.Between(0, 9); //не реалізована фіча, об'єму бонусу

//   switch (condition) {
//     case 0:
//       cardRequired.setTexture('bonfire_small');
//       bonus.setTexture('bonfire');
//       break;

//     case 1:
//       cardRequired.setTexture('bow_small');
//       bonus.setTexture('bow');
//       break;

//     case 2:
//       cardRequired.setTexture('leaf_small');
//       bonus.setTexture('leaf');
//       break;

//     case 3:
//       cardRequired.setTexture('rope_small');
//       bonus.setTexture('rope');
//       break;

//     default:
//       cardRequired.setTexture('tent_small');
//       bonus.setTexture('tent');
//   };

//   switch (true) {
//     case(probability < 2):
//       cardsResult = cardArrowCreator('tent');
//       break;

//     case(probability >= 2 && probability < 6):
//       cardsResult = cardArrowCreator('rope');
//       break;

//     case(probability >= 6 && probability < 12):
//       cardsResult = cardArrowCreator('leaf');
//       break;

//     case(probability >= 12 && probability < 20):
//       cardsResult = cardArrowCreator('bow');
//       break;

//     case(probability >= 20 && probability < 30):
//       cardsResult = cardArrowCreator('bonfire');
//       break;

//     default:
//       cardsResult = cardArrowCreator('lose');
//       break;
//   };

//   Scratch(game); //стирачка

//   cardCells.children.iterate((cell, i) => { //розміщує ці клітинки
//     scratchField.draw('card_scratch', cell.x, cell.y); //малює стирачки
//     coordinator[`card_${i}`] = { //зберігає параметри в координаторі
//       scratched: false,
//       type: 'card',
//       diagonal: 400,
//       segment: 280,
//       initialX: cell.x,
//       initialY: cell.y,
//     }
//   });

//   cardUnits.children.iterate((unit, i) => {
//     unit.setTexture(cardsResult[i]);

//     if (i < 3) {
//       unit.x += (337 * (i));
//     } else {
//       unit.y = 1700;
//       unit.x += (337 * (i-3));
//     }
//   });
// }
