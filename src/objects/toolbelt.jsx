import {CELL_SIZE, Direction} from '../constants.jsx';

class ToolBelt {
  constructor(stage) {
    this.game = stage.game
    this.stage = stage

    var keys = [

      {key: Phaser.Keyboard.ESC, action: this.unselect}
    , {key: Phaser.Keyboard.ONE, action: (() => this.select('road'))}
    , {key: Phaser.Keyboard.TWO, action: (() => this.select('car'))}
    , {key: Phaser.Keyboard.THREE, action: (() => this.select('mine'))}
    , {key: Phaser.Keyboard.FOUR, action: (() => this.select('depot'))}
    , {key: Phaser.Keyboard.R, action: this.rotateSelection}

    ].map(k => {
      var key = this.game.input.keyboard.addKey(k.key)
      key.onDown.add(k.action, this)
    })

    this.selected = null

    this.hoverSprites = {}

    var genSpritesHover = [
      'road',
      'car',
      'mine',
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

  select(s) {
    if(this.selected != null) this.selected.sprite.visible = false
    this.selected = {
      sprite: this.hoverSprites[s],
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

      //console.log(this.selected.type)

      switch(this.selected.type) {
        case 'road' : this.stage.createRoad(p.x, p.y, this.selected.direction)
          break;
        case 'car' : this.stage.createCar(wp.x, wp.y)
          break;
        case 'depot' : this.stage.createDepot(wp.x, wp.y)
          break;
        case 'mine' : this.stage.createMine(wp.x, wp.y)
          break;
        default:
      }

    }
  }
}

export default ToolBelt;
