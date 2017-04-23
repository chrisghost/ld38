import {CellTypes} from '../objects/grid.jsx';
import {CellProduction} from '../constants.jsx';

class Depot {
  constructor(x, y, sprite, stage) {
    this.game = stage.game
    this.stage = stage

    this.wp = this.stage.cellToWorld(x, y)

    this.sprite = game.add.sprite(
      this.wp.x,
      this.wp.y,
      sprite
    )

    this.x = x
    this.y = y

    this.gridPos = {x: x, y: y}
  }
  getInfo() {
    return "Depot"
  }
}
 export default Depot
