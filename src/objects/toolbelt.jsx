import {CELL_SIZE, Direction} from '../constants.jsx';
import {CellTypeMinable} from '../objects/grid.jsx';

class ToolBelt {
  constructor(stage) {
    this.game = stage.game
    this.stage = stage

    var keys = [

      {key: Phaser.Keyboard.ESC, action: this.unselect}
    , {key: Phaser.Keyboard.ONE, action: (() => this.select('road1'))}
    , {key: Phaser.Keyboard.TWO, action: (() => this.select('road2'))}
    , {key: Phaser.Keyboard.THREE, action: (() => this.select('road3'))}
    , {key: Phaser.Keyboard.FOUR, action: (() => this.select('mine'))}
    , {key: Phaser.Keyboard.FIVE, action: (() => this.select('depot'))}
    , {key: Phaser.Keyboard.SIX, action: (() => this.select('furnace'))}
    , {key: Phaser.Keyboard.R, action: this.rotateSelection}

    ].map(k => {
      var key = this.game.input.keyboard.addKey(k.key)
      key.onDown.add(k.action, this)
    })

    this.selected = null

    this.hoverSprites = {}

    var genSpritesHover = [
      'road1',
      'road2',
      'road3',
      'car',
      'mine',
      'furnace',
      'depot'
    ].map(function(s) {
      var hoverSprite = this.game.add.sprite(0, 0, s)
      hoverSprite.alpha = 0.5
      hoverSprite.visible = false
      hoverSprite.anchor.setTo(0.5, 0.5)

      console.log( this.hoverSprites )
      this.hoverSprites[s] = hoverSprite
    }.bind(this))

    console.log("Toolbelt up", this.hoverSprites)
  }

  unselect() {
    this.selected.sprite.visible = false
    this.selected = null
  }

  rotateSelection() {
    if(this.selected == null) return;

    this.selected.direction = (this.selected.direction + 1) % 4

    switch(this.selected.direction) {
      case Direction.E : this.selected.sprite.angle = 90
            break;
      case Direction.S : this.selected.sprite.angle = 180
            break;
      case Direction.W : this.selected.sprite.angle = 270
            break;
      default : this.selected.sprite.angle = 0
    }

  }

  getHoverSprite(s) {
    return this.hoverSprites[s]
  }

  select(s) {
    if(this.selected != null) this.selected.sprite.visible = false
    this.selected = {
      sprite: this.getHoverSprite(s),
      type: s,
      direction: Direction.N
    }
    this.selected.sprite.visible = true
    this.selected.sprite.angle = 0
  }

  render(cursorGridPos) {
    if(this.selected != null) {
      //console.log("SELECTED POS => "+cc.x+", "+cc.y)
      this.selected.sprite.x = cursorGridPos.x + CELL_SIZE / 2
      this.selected.sprite.y = cursorGridPos.y + CELL_SIZE / 2
    }
  }

  onMouseDown() {
    if(this.selected != null) {
      var p = this.stage.worldToGrid(this.game.input.x, this.game.input.y)
      var wp = this.stage.cellToWorld(p.x, p.y)

      console.log("Mouse down on grid "+p.x+","+p.y)

      switch(this.selected.type) {
        case 'road1' :
        case 'road2' :
        case 'road3' :
          this.stage.removeConstruction(p.x, p.y)
          var spd = 1
          switch(this.selected.type) {
              case 'road1' : spd = 1; break
              case 'road2' : spd = 2; break
              case 'road3' : spd = 6; break
            }
          this.stage.createRoad(p.x, p.y, this.selected.direction, spd, this.selected.type)
          break;
        case 'car' :
          this.stage.createCar(wp.x, wp.y)
          break;
        case 'depot' :
          this.stage.removeConstruction(p.x, p.y)
          this.stage.createDepot(p.x, p.y)
          break;
        case 'furnace' :
          this.stage.removeConstruction(p.x, p.y)
          this.stage.createFurnace(p.x, p.y)
          break;
        case 'mine' :
          var dest = this.stage.grid.getCell(p.x, p.y)
          if(dest != null && CellTypeMinable(dest.kind))
            this.stage.createMine(p.x, p.y)
          break;
        default:
      }

    }
  }
}

export default ToolBelt;
