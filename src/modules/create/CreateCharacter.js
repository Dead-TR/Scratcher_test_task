export let character;

export const CreateCharacter = (game) => {
  character = game.add.spine(300, 600, 'red', 'red_idle_loop', true);
}
