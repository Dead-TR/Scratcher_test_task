export const LoadCharacter = (game) => {
  game.load.setPath('assets/img/char_spine_v5/');
  game.load.spine('red', 'Red.json', 'Red.atlas');
}