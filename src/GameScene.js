import Phaser, { Scene } from 'phaser';
import {LoadGameElements} from './modules/preload/LoadGameElements';
import {LoadCharacter} from './modules/preload/LoadCharacter';
import {CreateStaticGameElements} from './modules/create/CreateStaticGameElements';
import {CreateCharacter} from './modules/create/CreateCharacter';
import {CreateInteractiveGameElements} from './modules/create/CreateInteractiveGameElements';
import {Starter} from './modules/create/Starter';
import {StarterListener} from './modules/update/StarterListener';
import {CharacterAnimationUpdate} from './modules/update/CharacterAnimationUpdate';

let startInteractive = true;

export class GameScene extends Scene {

  preload (){
    LoadGameElements(this);
    LoadCharacter(this);
  }

  create (){
    CreateStaticGameElements(this);
    CreateInteractiveGameElements(this);
    Starter(this);
    CreateCharacter(this);
  }

  update() {
    StarterListener(this);
    CharacterAnimationUpdate(this)
  }
}
