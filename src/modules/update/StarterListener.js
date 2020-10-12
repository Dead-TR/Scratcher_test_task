import config from '../../config';
import {starterElements, winElements, shadow, restart, setRestart, firstRun} from '../create/Starter';
import {coordinator} from '../create/Scratch';
import {UpdateInteractiveElements} from './UpdateInteractiveElements';

let created = false;
export const setCreated = (value) => {
  created = value;
}

export const StarterListener = (game) => {
  let counter = 0;

  if (!created) {
    UpdateInteractiveElements(game);
    setCreated(true);
  }

  if (!restart) {
    for (const unit of starterElements) {
      if (unit.defaultY +400 > unit.y) {
        unit.y += 5;
      }
    }

    if (!firstRun) {
      for (const element of winElements) {
        element.setAlpha(0);
      }
    }
    shadow.setAlpha(0);

    for (const unit in coordinator) {
      coordinator[unit].scratched && counter++;
    }

    if (counter === 7) {
      setRestart(true);

      for (const unit in coordinator) {
        delete coordinator[unit].scratched;
      }
    }
  }

  if (restart) {
    for (const element of starterElements) {
      if (element.y > element.defaultY) {
        element.y -= 5;
      }
    }

    if (!firstRun) {
      for (const element of winElements) {
        element.setAlpha(1);
      }
    }
    shadow.setAlpha(1);
  }
}
