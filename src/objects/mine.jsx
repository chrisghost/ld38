import {CellTypes} from '../objects/grid.jsx';
import {CellProduction} from '../constants.jsx';

class Mine {
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

    this.product = stage.grid.getCell(this.gridPos.x, this.gridPos.y).kind
    this.productionTime = CellProduction(this.product)
    this.productionTimer = 0
  }

  update() {
    var t = this.game.time.elapsed

    this.productionTimer += t
    if(this.productionTimer >= this.productionTime) {
      console.log("Producted ! "+this.product)

      var d = this.stage.findClosestDepot(this.x, this.y)

      this.productionTimer = 0

      if(d != null) {
        //console.log(d)
        this.stage.createCar(this.x, this.y, {x: d.gridPos.x, y: d.gridPos.y}, this.product)
      } else {
        console.log("no route")
      }
    }
  }
}
 export default Mine
