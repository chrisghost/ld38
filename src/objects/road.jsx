import {Direction} from '../constants.jsx';

class Road {
  constructor(x, y, direction) {
    this.sprite = game.add.sprite(
      x,
      y,
      Direction.toSprite(direction)
    )

  }
}

export default Road
