import {Grid, CellTypes} from '../objects/grid.jsx';
import Car from '../objects/car.jsx';
import Mine from '../objects/mine.jsx';
import Depot from '../objects/depot.jsx';
import Road from '../objects/road.jsx';
import ToolBelt from '../objects/toolbelt.jsx';
import {CELL_SIZE, Direction, WORLD_CELL_X, WORLD_CELL_Y } from '../constants.jsx';

class PlayState extends Phaser.State {
  preload() {
    this.game.load.image('earthcell', 'assets/sprites/earthcell.png');
    this.game.load.image('watercell', 'assets/sprites/watercell.png');
    this.game.load.image('ironcell', 'assets/sprites/ironcell.png');
    this.game.load.image('coalcell', 'assets/sprites/coalcell.png');
    this.game.load.image('stonecell', 'assets/sprites/stonecell.png');
    this.game.load.image('cursorvisor', 'assets/sprites/cursorvisor.png');
    this.game.load.image('ship', 'assets/sprites/ship.png');
    this.game.load.image('car', 'assets/sprites/car.png');
    this.game.load.image('mine', 'assets/sprites/mine.png');
    this.game.load.image('depot', 'assets/sprites/depot.png');
    this.game.load.image('road', 'assets/sprites/roadN.png');
    this.game.load.image('destination', 'assets/sprites/destination.png');
    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  cellSpriteName(kind) {
    switch (kind) {
      case CellTypes.KIND_EARTH: return 'earthcell'
      case CellTypes.KIND_WATER: return 'watercell'
      case CellTypes.KIND_COAL: return 'coalcell'
      case CellTypes.KIND_IRON: return 'ironcell'
      case CellTypes.KIND_STONE: return 'stonecell'
      case CellTypes.KIND_SHIP: return 'ship'
      default: return 'earthcell'
    }
  }

  worldToGrid(x, y) {
    return {
      x: Math.floor(((x + this.game.camera.x) /*- this.game.world.centerX*/) / CELL_SIZE),
      y: Math.floor(((y + this.game.camera.y) /*- this.game.world.centerY*/) / CELL_SIZE)
    }
  }

  getCellUnderCursor() {
    var x = this.game.input.x
    var y = this.game.input.y

    var cell = this.worldToGrid(x, y)

    return this.grid.getCell(cell.x, cell.y)
  }

  create() {
    this.grid = new Grid(WORLD_CELL_X, WORLD_CELL_Y, this)
    //this.grid.printGrid()

    this.game.camera.x = 0 //this.game.world.centerX
    this.game.camera.y = 0 //this.game.world.centerY

    //this.worldScale = 1.0

    this.cursorVisor = this.game.add.sprite(0,0,'cursorvisor')

    this.game.input.mouse.capture = true;

    this.toolbelt = new ToolBelt(this)

    this.game.input.onDown.add(this.toolbelt.onMouseDown, this.toolbelt)

    this.cars = []
    this.mines = []

    this.depots = []

    this.resources = {}
      this.resources[CellTypes.KIND_COAL] = 0
      this.resources[CellTypes.KIND_IRON] = 0
      this.resources[CellTypes.KIND_STONE] = 0
  }

  addResource(load) {
    this.resources[load] = this.resources[load] + 1
    console.log(load, this.resources)
  }

  createRoad(x, y, dir) {
    console.log("create Road")
    var wp = this.cellToWorld(x, y)

    var s = this.game.add.sprite(wp.x + CELL_SIZE / 2, wp.y + CELL_SIZE / 2, 'road')
    s.anchor.setTo(0.5, 0.5)

    switch(dir) {
      case Direction.E : s.angle = 90
            break;
      case Direction.S : s.angle = 180
            break;
      case Direction.W : s.angle = 270
            break;
      default : s.angle = 0
    }

    this.grid.addRoad(x, y, dir)
  }

  getBuilding(x, y) {
    return this.mines.concat(this.depots)
      .filter(function(m) {
        //console.log("... >> getBuilding", m.gridPos)
        return (m.gridPos.x == x && m.gridPos.y == y)
      })[0]
  }

  createDepot(x, y) {
    this.depots.push(new Depot(x, y, 'depot', this))

    var gridCoords = this.worldToGrid(x, y)
    this.grid.addBuilding(gridCoords.x,gridCoords.y)
  }

  createCar(x, y, to, load) {
    to = to || null // {x: 0, y: 0}
    load = load || null

    var from = this.worldToGrid(x, y)

    this.grid.path(from, to, function(p) {
      if(p == null) console.log("Not path")
      else {
        var car = new Car(x, y, 'car', this, load)
        car.setPath(p)
        this.cars.push(car)
        //console.log("Path : ")
        //p.map(c => console.log(c))
        //console.log("--------")
      }
    }.bind(this))
  }

  createMine(x, y) {
    var mine = new Mine(x, y, 'mine', this)
    this.mines.push(mine)

    //var gridCoords = this.worldToGrid(x, y)
    //this.grid.addBuilding(gridCoords.x,gridCoords.y)

  }

  cellToWorld(x, y) {
    return {
      x: /*this.game.world.centerX*/ + x * CELL_SIZE
    , y: /*this.game.world.centerY*/ + y * CELL_SIZE
    }
  }

  findClosestDepot(x, y) {
    try {
    return this.depots.map(
      function(d) {
        //console.log(d, d.x, d.y, x, y)
        return {dist: Phaser.Math.distance(d.x, d.y, x, y), depot: d}
      })
      .filter(e => e.dist > 0 )
      .sort(function(a, b) {
        if(a.dist < b.dist) return -1
        else return 1
      })[0].depot
    } catch (e) {
      return null
    }
  }

  update() {
    this.moveCamera()
    //this.game.world.scale.set(this.worldScale)
    this.cars = this.cars
        .filter(function(c) { return !c.update(this.cars)}.bind(this))

    this.mines.map(c => c.update())

  }

  render() {
    //console.log("Drawing")
    //this.game.debug.cameraInfo(this.game.camera, 32, 32);
    var cc = this.getCellUnderCursor()

    if (cc != null) {
      var cPos = this.cellToWorld(cc.x, cc.y)

      this.cursorVisor.x = cPos.x
      this.cursorVisor.y = cPos.y

      this.game.debug.text( "Cursor hovering : " + cc.x+", "+cc.y + " Kind : "+cc.kind , 100, 380 );

      this.game.debug.text( "Resources: " +
        " IRON : " + this.resources[CellTypes.KIND_IRON] +
        " | COAL : " + this.resources[CellTypes.KIND_COAL] +
        " | STONE : " + this.resources[CellTypes.KIND_STONE], 100, 20)

      this.toolbelt.render(cPos)

    }

  }

  moveCamera() {
    var cameraSpeed = 10
    if (this.cursors.up.isDown)
      this.game.camera.y -= cameraSpeed
    else if (this.cursors.down.isDown)
      this.game.camera.y += cameraSpeed

    if (this.cursors.left.isDown)
      this.game.camera.x -= cameraSpeed
    else if (this.cursors.right.isDown)
      this.game.camera.x += cameraSpeed

    //if (game.input.keyboard.isDown(Phaser.Keyboard.Q)) this.worldScale += 0.05
    //else if (game.input.keyboard.isDown(Phaser.Keyboard.A)) this.worldScale -= 0.05

    //Phaser.Math.clamp(this.worldScale, 0.25, 2)
  }
}

export default PlayState;
