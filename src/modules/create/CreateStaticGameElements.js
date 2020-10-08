import config from '../../config'

export const CreateStaticGameElements = (context) => {
  const background = context.add.image(0, 0, 'background')
    .setOrigin(0)
    .setDisplaySize(config.scale.width, config.scale.height);

  const brunch = context.add.image(config.scale.width, 190, 'winner_frame')
    .setOrigin(1, 0);

  const winText = context.add.image(150, 80, 'win_up_to_100')
    .setOrigin(0);

  const frameText = context.add.image(45, 1040, 'frame_for_text')
    .setOrigin(0);

  const domTextLeft = context.add.dom(70, 1025, 'h1', null, 'match the winner')
    .setClassName('visibleDomText')
    // .setVisible(false)
    .setOrigin(0);
  const domTextRight = context.add.dom(
    640,
    1025,
    'h1',
    null,
    'and win a prize!'
  )
  .setClassName('visibleDomText')
  // .setVisible(false)
  .setOrigin(0);

}
