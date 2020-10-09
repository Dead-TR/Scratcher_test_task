import {GameScene} from './GameScene';

const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'phaser-example',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1097,
    height: 1920
  },
  dom: {
    createContainer: true
  },
  scene: GameScene,
};

export default config;