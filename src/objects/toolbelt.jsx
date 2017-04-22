import {CELL_SIZE, Direction} from '../constants.jsx';

class ToolBelt {
  constructor(stage) {
    this.game = stage.game
    this.stage = stage

    var keyEsc = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC)
    keyEsc.onDown.add(this.unselect, this)

    var key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.ONE)
    key1.onDown.add(this.selectRoad, this)

    var key2 = this.game.input.keyboard.addKey(Phaser.Keyboard.TWO)
    key2.onDown.add(this.selectCar, this)

    var keyR = this.game.input.keyboard.addKey(Phaser.Keyboard.R)
    keyR.onDown.add(this.rotateSelection, this)

    this.selected = null

    this.roadHover = this.game.add.sprite(0, 0, 'road')
    this.roadHover.alpha = 0.5
    this.roadHover.visible = false
    this.roadHover.anchor.setTo(0.5, 0.5)

    this.carHover = this.game.add.sprite(0, 0, 'car')
    this.carHover.alpha = 0.5
    this.carHover.visible = false
    this.carHover.anchor.setTo(0.5, 0.5)


    console.log("Toolbelt up")
  }

  unselect() {
    this.selected.sprite.visible = false
    this.selected = null
  }

  rotateSelection() {
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

  selectCar() {
    if(this.selected != null) this.selected.sprite.visible = false
    this.selected = { sprite: this.carHover, type: 'car', direction: Direction.N }
    this.selected.sprite.visible = true
  }

  selectRoad() {
    console.log("select road")
    if(this.selected != null) this.selected.sprite.visible = false
    this.selected = { sprite: this.roadHover, type: 'road', direction: Direction.N }
    this.selected.sprite.visible = true
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
      var p = this.stage.cursorToGrid(this.game.input.x, this.game.input.y)
      var wp = this.stage.cellToWorld(p.x, p.y)

      console.log(this.selected.type)
      switch(this.selected.type) {
        case 'road' : this.stage.createRoad(p.x, p.y, this.selected.direction)
          break;
        case 'car' : this.stage.createCar(wp.x, wp.y)
          break;
        default:
      }

    }
  }
}

export default ToolBelt;
