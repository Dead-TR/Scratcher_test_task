import Phaser, { Scene } from 'phaser';
import {LoadGameElements} from './modules/preload/LoadGameElements';
import {CreateStaticGameElements} from './modules/create/CreateStaticGameElements';
import {CreateInteractive} from './modules/create/CreateInteractive';

export class GameScene extends Scene {
  preload (){
    LoadGameElements(this);
  }

  create (){
    CreateStaticGameElements(this);
    CreateInteractive(this);
  }

  update() {

  }
}
