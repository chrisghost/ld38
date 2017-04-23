import {Direction} from '../constants.jsx';

class Road {
  constructor(x, y, direction) {
    this.sprite = stage.game.add.sprite(
      x,
      y,
      Direction.toSprite(direction)
    )

  }
}

export default Road
