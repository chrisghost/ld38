import {CellTypes} from '../objects/grid.jsx';
import {CellProduction, Resources} from '../constants.jsx';

class Furnace {
  constructor(x, y, sprite, stage) {
    this.game = stage.game
    this.stage = stage

    this.wp = this.stage.cellToWorld(x, y)

    this.sprite = this.stage.spritesGroups.buildings.create(
      this.wp.x,
      this.wp.y,
      sprite
    )

    this.x = x
    this.y = y

    this.gridPos = {x: x, y: y}

    this.coalStorage = 0
    this.ironStorage = 0
    this.stoneStorage = 0

    this.ironPlateStorage = 0
    this.stoneBrickStorage = 0

    this.maxCoalStorage = 5
    this.maxMatterStorage = 20
    this.maxProductStorage = 40

    this.nowProducing = null
    this.productionTime = 10000
    this.productionTimer = 0

    this.matterInTransit = 0
  }

  addMatterInTransit(n) { this.matterInTransit += n }

  matterStorage() { return this.ironStorage + this.stoneStorage + this.matterInTransit }
  outputStorage() { return this.ironPlateStorage + this.stoneBrickStorage}

  needFuel() { return this.coalStorage < this.maxCoalStorage }
  needMatter() { return this.matterStorage() < this.maxMatterStorage }

  outputStorageFull() { return this.ironPlateStorage + this.stoneBrickStorage > this.maxProductStorage }

  add(kind, n) {
    switch (kind) {
      case CellTypes.KIND_COAL :
        this.coalStorage+=n
        break
      case CellTypes.KIND_IRON :
        this.ironStorage+=n
        this.matterInTransit-=n
        break
      case CellTypes.KIND_STONE :
        this.stoneStorage+=n
        this.matterInTransit-=n
        break
    }
  }

  work() {
    if(Math.random() > 0.5)
      this._work(CellTypes.KIND_IRON)
    else
      this._work(CellTypes.KIND_STONE)

  }

  _work(k) {
    if(this.coalStorage >= 1 && !this.outputStorageFull())
      //console.log("_work", this)
      switch(k) {
        case CellTypes.KIND_STONE:
          if(this.stoneStorage >= 10) {
            this.nowProducing = Resources.STONE_BRICK
            this.stoneStorage -= 10
            this.coalStorage -= 2
          }
          break
        case CellTypes.KIND_IRON:
          if(this.ironStorage >= 10) {
            this.nowProducing = Resources.IRON_PLATE
            this.ironStorage -= 10
            this.coalStorage -= 2
          }
          break
      }
  }

  update() {
    var t = this.game.time.elapsed

    this.productionTimer += t
    if(this.productionTimer >= this.productionTime) {
      this.productionTimer = 0

      switch(this.nowProducing) {
        case Resources.IRON_PLATE :
          this.ironPlateStorage+=10
          break
        case Resources.STONE_BRICK :
          this.stoneBrickStorage+=10
          break
      }
      this.nowProducing = null
    }
    if(this.nowProducing == null)
      this.work()
    if(this.outputStorage() > 0 && !this.stage.hasCarAt(this.gridPos)) {
      var d = this.stage.findClosestDepot(this.x, this.y)

      if(d != null) {
        this.stage.createCar(this.x, this.y, {x: d.gridPos.x, y: d.gridPos.y}, this.takeProduct(), 10)
      }
    }
  }

  takeProduct() {
    if(this.stoneBrickStorage == 0) return this.takeIronPlate()
    else if(this.ironPlateStorage == 0) return this.takeStoneBrick()
    else if(Math.random() > 0.5) return this.takeStoneBrick()
    else                         return this.takeIronPlate()
  }
  takeStoneBrick() {
    this.stoneBrickStorage-=10
    return Resources.STONE_BRICK
  }
  takeIronPlate() {
    this.ironPlateStorage-=10
    return Resources.IRON_PLATE
  }
  getInfo() {
    return "Furnace\nCoal "+this.coalStorage
     + "\nIron "+this.ironStorage
     + "\nStone " + this.stoneStorage
     + "\nOut Iron "+this.ironPlateStorage
     + "\nOutStone " + this.stoneBrickStorage
     + "\nMatterInTransit " + this.matterInTransit
  }
}
 export default Furnace
