import {CELL_SIZE} from '../constants.jsx';
import Depot from '../objects/depot.jsx';

class Car {
  constructor(x, y, sprite, stage, load) {
    this.game = stage.game
    this.stage = stage
    this.load = load

    this.sprite = game.add.sprite(
      x,
      y,
      sprite
    )

    this.destinationSprite = game.add.sprite(
      x,
      y,
      'destination'
    )

    this.destinationSprite.visible = false

    this.path = []
    this.transitionTo = null

    this.speed = {
      x: 1.0, y: 1.0
    }
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

      this.sprite.x += ((
        (transitionToWorld.x - this.sprite.x) > 0 ? 1 : -1)
          * this.speed.x)

      this.sprite.y += ((
        (transitionToWorld.y - this.sprite.y) > 0 ? 1 : -1)
          * this.speed.y)

      if(Math.round(this.sprite.x) == Math.round(transitionToWorld.x) &&
         Math.round(this.sprite.y) == Math.round(transitionToWorld.y)) {
        this.transitionTo = null
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

      if(c != null && c instanceof Depot) {
        this.stage.addResource(this.load)

      //console.log("DESTROUUUUU")
      }

      this.sprite.destroy()
      return true
    }

    return false
  }
}

export default Car;
