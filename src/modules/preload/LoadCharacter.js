import config from '../../config';

export const LoadCharacter = (game) => {
  game.load.setPath('assets/img/char_spine_v5/');
  game.load.spine('red', 'Red.json', 'Red.atlas');
  game.load.image('loader', 'loader.png');

  let loader;
  game.load.on('start', () => {
    loader = game.make.text({
      x: config.scale.width / 2,
      y: config.scale.height / 3,
      text: 'Loading',
      style: {
          font: '100px monospace',
          fill: '#ffffff'
      }
  })
    .setOrigin(0.5);
  });

  game.load.on('complete', function () {
    loader.destroy();
  });
}
