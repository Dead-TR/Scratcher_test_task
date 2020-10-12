import config from '../../config'

export const CreateStaticGameElements = (game) => {
  const background = game.add.image(0, 0, 'background')
    .setOrigin(0)
    .setDisplaySize(config.scale.width, config.scale.height);

  const brunch = game.add.image(config.scale.width, 190, 'winner_frame')
    .setOrigin(1, 0);

  const winText = game.add.image(150, 80, 'win_up_to_100')
    .setOrigin(0);

  const frameText = game.add.image(45, 1040, 'frame_for_text')
    .setOrigin(0);

  const staticTextStyle = {
    fontFamily: 'DRAguSans',
    fontSize: '52px',
    color: '#f45b4e',
    textTransform: 'uppercase',
  }

  const textLeft = game.add.text(
    70,
    1065,
    'match the winner',
    staticTextStyle,
  );

  const textRight = game.add.text(
    640,
    textLeft.y,
    'and win a prize!',
    staticTextStyle,
  );

  textLeft.setText(textLeft.text.toUpperCase());
  textRight.setText(textRight.text.toUpperCase());
}
