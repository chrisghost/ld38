import {CellTypes} from '../objects/grid.jsx';
import {Resources, CELL_SIZE, Direction, WORLD_CELL_X, WORLD_CELL_Y } from '../constants.jsx';

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

    this.contents = {}
    this.contents[Resources.IRON_PLATE] = 0
    this.contents[Resources.STONE_BRICK] = 0
  }

  addResource(t, n) {
    //console.log("Add resource to depot : ", t, n, this.contents)
    this.contents[t] += n
  }

  getInfo() {
    return "Depot"
  }
}
 export default Depot
