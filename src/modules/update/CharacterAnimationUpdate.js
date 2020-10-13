import {character} from '../create/CreateCharacter';
import {coordinator} from '../create/Scratch';
import {restart} from '../create/Starter';

let animationChanger = 0;

export const setAnimationChanger = (value = 0) => {
  animationChanger = value
}

export const CharacterAnimationUpdate = (game) => {
  auditScratch(coordinator, game);

  if (!restart) {
    if (animationChanger === 0) {
      character.setMix(character.getCurrentAnimation().name, 'red_idle_loop', 0.3)
      character.play('red_idle_loop', true, true);
    } else if (animationChanger === 1) {
      character.play('red_worry_loop', true, true);
      animationChanger = 0;
    } else if (animationChanger === 2) {
      character.play('red_happy_bonus_loop', true, true);
      game.time.delayedCall(1500, () => {
        animationChanger = 0;
      })
    } else if (animationChanger === 3) {
      character.play('red_happy_card_loop', true, true);
      game.time.delayedCall(1500, () => {
        animationChanger = 0;
      })
    } else if (animationChanger === 4) {
      character.play('red_disappointed_loop', true, true);
      game.time.delayedCall(1500, () => {
        animationChanger = 0;
      })
    }
  }
}

function auditScratch(coordinator, game) {
  for (const card in coordinator) {
    if (
      game.input.mousePointer.x > coordinator[card].initialX
        && game.input.mousePointer.x < (coordinator[card].initialX + coordinator[card].segment)
      && game.input.mousePointer.y > coordinator[card].initialY
        && game.input.mousePointer.y < (coordinator[card].initialY + coordinator[card].segment)
    ) {
      if (coordinator[card].scratched != true) {
        setAnimationChanger(1);
      }
    }
  }
}
