import {WORLD_W, WORLD_H} from '../constants.jsx';

class BootState extends Phaser.State {
  preload() {
  }

  create() {
    this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    this.stage.smoothed = false;
    this.game.antialias = false;
    this.game.renderer.renderSession.roundPixels = true;

    this.game.world.setBounds(0, 0, WORLD_W, WORLD_H);

    this.state.start('play');
  }
}

export default BootState;
