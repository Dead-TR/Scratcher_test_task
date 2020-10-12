import config from '../../config';
import {setCreated} from '../update/StarterListener';

export let shadow, starterElements, winElements, winCoin, winNum, restart = true, firstRun = true;
export const setRestart = (value) => {
  restart = value
}

export const Starter = (game) => {
  shadow = game.add.image(0, 0, 'shadow')
    .setOrigin(0)
    .setDepth(2);

  const playFrame = game.add.image(
    -10,
    config.scale.height + 130,
    'frame3'
  )
    .setOrigin(0, 1)
    .setDepth(2);

  const playBtn = game.add.image(
    config.scale.width / 2,
    config.scale.height + 10,
    'button'
  )
    .setOrigin(0.5, 1)
    .setDepth(2)
    .setInteractive({ cursor: 'pointer' });

  const question_ico = game.add.image(
    300,
    config.scale.height - 250,
    'question_icon'
  )
    .setOrigin(0, 1)
    .setDepth(2);

  const question_text = game.add.dom(
    400,
    config.scale.height - 390,
    'h1',
    null,
    'How To Play'
  )
    .setClassName('questionDomText')
    .setOrigin(0);

  const playText = game.add.dom(
    config.scale.width / 2 - 35,
    config.scale.height - 125,
    'h1',
    null,
    'Play For 60'
  )
    .setClassName('playText')
    .setOrigin(0.5, 1);

  const coin = game.add.image(
    config.scale.width / 2 + 185,
    config.scale.height - 80,
    'coin_icon_small',
  )
    .setOrigin(0.5, 1)
    .setDepth(2);

  const winWindow = game.add.image(
    config.scale.width / 2,
    230,
    'frame1',
  )
    .setOrigin(0.5, 0)
    .setDepth(2);

  const winText = game.add.dom(
    config.scale.width / 2,
    175,
    'h1',
    null,
    'You win'
  )
    .setClassName('winText')
    .setOrigin(0.5, 0);

  const winNum = game.add.dom(
    config.scale.width / 2 - 70,
    300,
    'h1',
    null,
    '10'
  )
    .setClassName('winNum')
    .setOrigin(0.5, 0);

  const winCoin = game.add.image(
    config.scale.width / 2 + 70,
    425,
    'coin_icon_big',
  )
    .setOrigin(0.5, 0)
    .setDepth(2);

  playBtn.on('pointerup', function (event) {
    restart = false;

    if (!firstRun) {
      setCreated(false);
    }

    firstRun = false;
  });

  starterElements = [
    playFrame,
    playBtn,
    question_ico,
    question_text,
    playText,
    coin
  ];

  winElements = [
    winWindow,
    winText,
    winNum,
    winCoin,
  ]

  for (const element of starterElements) {
    element.defaultY = element.y;
  }

  for (const element of winElements) {
    element.setAlpha(0);
  }
}
