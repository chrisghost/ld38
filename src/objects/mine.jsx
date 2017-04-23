import {CellTypes} from '../objects/grid.jsx';
import {CellProduction, Resources} from '../constants.jsx';

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

    console.log(this.gridPos)
    this.product = stage.grid.getCell(this.gridPos.x, this.gridPos.y).kind || null
    this.productionTime = CellProduction(this.product)
    this.productionTimer = 0
  }

  update() {
    var t = this.game.time.elapsed

    this.productionTimer += t
    if(this.product != null && this.productionTimer >= this.productionTime && !this.stage.hasCarAt(this.gridPos)) {
      //console.log("Producted ! "+this.product)
      this.productionTimer = 0

      var d = null
      switch(this.product) {
        case CellTypes.KIND_IRON :
          d = this.stage.findClosestFurnace(this.x, this.y, false)
          break
        case CellTypes.KIND_COAL :
          d = this.stage.findClosestFurnace(this.x, this.y, true)
          break
        case CellTypes.KIND_STONE :
          d = this.stage.findClosestFurnace(this.x, this.y, false)
          break
      }

      if(d != null) {
        this.stage.createCar(this.x, this.y, {x: d.gridPos.x, y: d.gridPos.y}, this.product, 10)
      } else {
        console.log("no route", this.x, this.y)
      }
    }
  }
  getInfo() {
    return "Mine of "+this.product
  }
}
 export default Mine
