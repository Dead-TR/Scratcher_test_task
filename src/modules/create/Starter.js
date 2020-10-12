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

  const questionText = game.add.text(
    400,
    playFrame.y - 460,
    'How To Play',
    {
      fontSize: '72px',
      color: '#ff8729',
      fontFamily: 'DRAguSans',
    },
  )
    .setDepth(2);

  const playText = game.add.text(
    config.scale.width / 2 - 50,
    playBtn.y - 90,
    'Play For 60',
    {
      fontSize: '72px',
      color: '#fff',
      fontFamily: 'DRAguSans',
    },
  )
    .setOrigin(0.5, 1)
    .setDepth(2);

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

  const winText = game.add.text(
    config.scale.width / 2,
    winWindow.y + 40,
    'You win',
    {
      fontSize: '116px',
      fontFamily: 'DRAguSans',
      color: '#f45b4e',
    },
  )
  .setDepth(2)
  .setOrigin(0.5, 0);
  winText.setText(winText.text.toUpperCase());

  const winNum = game.add.text(
    config.scale.width / 2 - 50,
    winWindow.y + 220,
    '0',
    {
      fontSize: '126px',
      fontFamily: 'DRAguSans',
      color: '#000',
    },
  )
  .setDepth(2)
  .setOrigin(0.5);

  const winCoin = game.add.image(
    winNum.x + (winNum.width * 2) + 20,
    winNum.y,
    'coin_icon_big',
  )
    .setOrigin(0.5)
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
    questionText,
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
