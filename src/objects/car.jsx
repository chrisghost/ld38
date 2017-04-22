import {CELL_SIZE} from '../constants.jsx';

class Car {
  constructor(x, y, sprite, game) {
    this.game = game

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
      x: this.game.world.centerX + x * CELL_SIZE
    , y: this.game.world.centerY + y * CELL_SIZE
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
      x: Math.floor((this.sprite.x - this.game.world.centerX) / CELL_SIZE),
      y: Math.floor((this.sprite.y - this.game.world.centerY) / CELL_SIZE)
    }
  }

  update(cars) {
    if(this.transitionTo != null) {
      //var p = this.gridCoord()

      //console.log("update ", this.transitionTo, p, (this.transitionTo.x - p.x) + ", "+ (this.transitionTo.y - p.y))

      var transitionToWorld = this.cellToWorld(this.transitionTo.x, this.transitionTo.y)

      //console.log( Math.round(transitionToWorld.x) == Math.round(this.sprite.x), Math.round(transitionToWorld.y) == Math.round(this.sprite.y))


      //console.log((this.sprite.x +"-"+ transitionToWorld.x) + ", "+(this.sprite.y +"-"+ transitionToWorld.y))

      this.sprite.x += ((
        (transitionToWorld.x - this.sprite.x) > 0 ? 1 : -1)
          * this.speed.x)

      this.sprite.y += ((
        (transitionToWorld.y - this.sprite.y) > 0 ? 1 : -1)
          * this.speed.y)

      //p = this.gridCoord()
      //var toWorld = this.cellToWorld(p.x, p.y)

      //console.log( Math.round(toWorld.x) + " == " + Math.round(this.sprite.x) + " && " + Math.round(toWorld.y) +" == "+Math.round(this.sprite.y))

      //if(Math.round(toWorld.x) == Math.round(this.sprite.x) &&
         //Math.round(toWorld.y) == Math.round(this.sprite.y)) {

      if(Math.round(this.sprite.x) == Math.round(transitionToWorld.x) &&
         Math.round(this.sprite.y) == Math.round(transitionToWorld.y)) {
        this.transitionTo = null
      }

    } else if (this.path.length > 0) {
      var dest = this.path[0]

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

    } else if (this.path.length == 0) {
      this.destinationSprite.visible = false
    }
  }
}

export default Car;
