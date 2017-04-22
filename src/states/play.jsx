import {Grid, CellTypes} from '../objects/grid.jsx';

const CELL_SIZE = 64

class PlayState extends Phaser.State {
  preload() {
    this.game.load.image('earthcell', 'assets/sprites/earthcell.png');
    this.game.load.image('watercell', 'assets/sprites/watercell.png');
    this.game.load.image('cursorvisor', 'assets/sprites/cursorvisor.png');
    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  cellSpriteName(kind) {
    switch (kind) {
      case CellTypes.KIND_EARTH: return 'earthcell'
      case CellTypes.KIND_WATER: return 'watercell'
      default: return 'earthcell'
    }
  }

  cursorToGrid(x, y) {
    return {
      x: Math.floor(((x + this.game.camera.x) - this.game.world.centerX) / CELL_SIZE),
      y: Math.floor(((y + this.game.camera.y) - this.game.world.centerY) / CELL_SIZE)
    }
  }

  getCellUnderCursor() {
    var x = this.game.input.x
    var y = this.game.input.y

    var cell = this.cursorToGrid(x, y)

    return this.grid.getCell(cell.x, cell.y)
  }

  create() {
    this.grid = new Grid(10, 10);
    //this.grid.printGrid()

    this.grid.forEach(function(cell) {

      var p = this.cellToWorld(cell.x, cell.y)

      var c = this.game.add.sprite(
        p.x,
        p.y,
        this.cellSpriteName(cell.kind)
      )
      //console.log(c)
    }.bind(this))

    this.game.camera.x = this.game.world.centerX
    this.game.camera.y = this.game.world.centerY

    //this.worldScale = 1.0

    this.cursorVisor = this.game.add.sprite(0,0,'cursorvisor')
  }

  cellToWorld(x, y) {
    return {
      x: this.game.world.centerX + x * CELL_SIZE
    , y: this.game.world.centerY + y * CELL_SIZE
    }
  }

  update() {
    this.moveCamera()
    //this.game.world.scale.set(this.worldScale)
  }

  render() {
    //console.log("Drawing")
    this.game.debug.cameraInfo(this.game.camera, 32, 32);
    var cc = this.getCellUnderCursor()

    if (cc != null) {
      var cPos = this.cellToWorld(cc.x, cc.y)

      this.cursorVisor.x = cPos.x
      this.cursorVisor.y = cPos.y

      this.game.debug.text( "Cursor hovering : " + cc.x+", "+cc.y + " Kind : "+cc.kind , 100, 380 );
    }

  }

  moveCamera() {
    if (this.cursors.up.isDown)
      this.game.camera.y -= 4;
    else if (this.cursors.down.isDown)
      this.game.camera.y += 4;

    if (this.cursors.left.isDown)
      this.game.camera.x -= 4;
    else if (this.cursors.right.isDown)
      this.game.camera.x += 4;

    //if (game.input.keyboard.isDown(Phaser.Keyboard.Q)) this.worldScale += 0.05
    //else if (game.input.keyboard.isDown(Phaser.Keyboard.A)) this.worldScale -= 0.05

    Phaser.Math.clamp(this.worldScale, 0.25, 2)
  }
}

export default PlayState;
