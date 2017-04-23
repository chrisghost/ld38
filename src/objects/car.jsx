import {CELL_SIZE, Resources} from '../constants.jsx';
import {CellTypes} from '../objects/grid.jsx';
import Depot from '../objects/depot.jsx';
import Furnace from '../objects/furnace.jsx';

class Car {
  constructor(x, y, sprite, stage, load, n) {
    this.game = stage.game
    this.stage = stage
    this.load = load
    this.number = n

    this.wp = this.stage.cellToWorld(x, y)

    this.sprite = this.stage.spritesGroups.cars.create(
      this.wp.x,
      this.wp.y,
      sprite
    )

    var icon = ''
    switch(load) {
      case CellTypes.KIND_IRON:
        icon = 'ironicon'
          break
      case CellTypes.KIND_STONE :
        icon = 'stoneicon'
          break
      case CellTypes.KIND_COAL :
        icon = 'coalicon'
          break
      case Resources.IRON_PLATE :
        icon = 'ironplateicon'
          break
      case Resources.STONE_BRICK :
        icon = 'stonebrickicon'
          break
    }

    this.iconSprite = this.stage.spritesGroups.cars.create(
      this.wp.x,
      this.wp.y,
      icon
    )

    this.destinationSprite = this.stage.spritesGroups.cars.create(
      this.wp.x,
      this.wp.y,
      'destination'
    )

    this.destinationSprite.visible = false

    this.path = []
    this.transitionTo = null

    this.speed = 4

    this.moving = false
  }

  cellToWorld(x, y) {
    return {
      x: /*this.game.world.centerX +*/ x * CELL_SIZE
    , y: /*this.game.world.centerY +*/ y * CELL_SIZE
    }
  }

  setPath(p) {
    this.path = p
    this.destinationSprite.visible = true
    var dst = this.cellToWorld(p[p.length - 1].x, p[p.length - 1].y)
    this.destinationSprite.x = dst.x
    this.destinationSprite.y = dst.y
  }

  gridCoord() {
    return {
      x: Math.floor((this.sprite.x /*- this.game.world.centerX*/) / CELL_SIZE),
      y: Math.floor((this.sprite.y /*- this.game.world.centerY*/) / CELL_SIZE)
    }
  }

  update(cars) {
    if(this.transitionTo != null) {
      //console.log(">> Transition To", this.transitionTo)

      var transitionToWorld = this.cellToWorld(this.transitionTo.x, this.transitionTo.y)
      if(!this.moving) {

        //console.log("Creating tween => ", this.sprite.x, this.sprite.y, " To ", transitionToWorld)
        var gc = this.gridCoord()
        var spd = this.stage.grid.getRoadSpeed(gc.x, gc.y)

        if(spd != null) this.speed = spd

        var mvt = this.game.add.tween(this.sprite)
            .to(transitionToWorld, 1000 / this.speed, Phaser.Easing.Linear.None, true)
        mvt.onComplete.addOnce(function() {
          this.moving = false
          this.transitionTo = null
        }, this)
        mvt.start()
        this.moving = true

      } else {
        this.iconSprite.x = this.sprite.x
        this.iconSprite.y = this.sprite.y

        if(Math.round(this.sprite.x) == Math.round(transitionToWorld.x) &&
           Math.round(this.sprite.y) == Math.round(transitionToWorld.y)) {
          this.transitionTo = null
        }
      }

    } else if (this.path.length > 0) {
      var dest = this.path[0]
      //console.log("go to next")

      var canGo = true
      for(let c of cars) {
        if(c != this) {
          var p = c.transitionTo || c.gridCoord()
          if(p.x == dest.x && p.y == dest.y) {
            canGo = false
            break
          }
        }
      }

      if(canGo) this.transitionTo = this.path.shift()
      //else console.log("I can't gooo :(")

      //console.log("transit == ", this.transitionTo)

    } else if (this.path.length == 0) {
      this.destinationSprite.visible = false

      var gC = this.gridCoord()
      var c = this.stage.getBuilding(gC.x, gC.y)

        //console.log("no path -- ", gC, c)

      if(c != null) {
        if(c instanceof Depot) {
          c.addResource(this.load, this.number)
        } else if(c instanceof Furnace) {
          c.add(this.load, this.number)
        }
      }

      this.sprite.destroy()
      this.iconSprite.destroy()
      return true
    }

    return false
  }
}

export default Car;
