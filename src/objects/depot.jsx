import {CellTypes} from '../objects/grid.jsx';
import {CellProduction} from '../constants.jsx';

class Depot {
  constructor(x, y, sprite, stage) {
    this.game = stage.game
    this.stage = stage

    this.sprite = game.add.sprite(
      x,
      y,
      sprite
    )

    this.x = x
    this.y = y

    this.gridPos = stage.worldToGrid(x, y)
  }
}
 export default Depot
