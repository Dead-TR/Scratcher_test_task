import Phaser, { Scene } from 'phaser';
import {LoadGameElements} from './modules/preload/LoadGameElements';
import {CreateStaticGameElements} from './modules/create/CreateStaticGameElements';
import {CreateInteractiveGameElements} from './modules/create/CreateInteractiveGameElements';
import {Starter} from './modules/create/Starter';
import {StarterListener} from './modules/update/StarterListener';

let startInteractive = true;

export class GameScene extends Scene {
  preload (){
    LoadGameElements(this);
  }

  create (){
    CreateStaticGameElements(this);
    CreateInteractiveGameElements(this);
    Starter(this);
  }

  update() {
    StarterListener(this);
  }
}
