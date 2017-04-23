import {Grid, CellTypes} from '../objects/grid.jsx';
import Car from '../objects/car.jsx';
import Mine from '../objects/mine.jsx';
import Furnace from '../objects/furnace.jsx';
import Depot from '../objects/depot.jsx';
import Road from '../objects/road.jsx';
import ToolBelt from '../objects/toolbelt.jsx';
import {Resources, CELL_SIZE, Direction, WORLD_CELL_X, WORLD_CELL_Y } from '../constants.jsx';

class PlayState extends Phaser.State {
  preload() {
    this.game.load.image('earthcell', 'assets/sprites/earthcell.png');
    this.game.load.image('watercell', 'assets/sprites/watercell.png');
    this.game.load.image('ironcell', 'assets/sprites/ironcell.png');
    this.game.load.image('coalcell', 'assets/sprites/coalcell.png');
    this.game.load.image('stonecell', 'assets/sprites/stonecell.png');
    this.game.load.image('cursorvisor', 'assets/sprites/cursorvisor.png');
    this.game.load.image('ship', 'assets/sprites/ship.png');
    this.game.load.image('furnace', 'assets/sprites/furnace.png');
    this.game.load.image('car', 'assets/sprites/car.png');
    this.game.load.image('mine', 'assets/sprites/mine.png');
    this.game.load.image('ironicon', 'assets/sprites/ironicon.png');
    this.game.load.image('coalicon', 'assets/sprites/coalicon.png');
    this.game.load.image('stoneicon', 'assets/sprites/stoneicon.png');
    this.game.load.image('ironplateicon', 'assets/sprites/ironplateicon.png');
    this.game.load.image('stonebrickicon', 'assets/sprites/stonebrickicon.png');
    this.game.load.image('depot', 'assets/sprites/depot.png');
    this.game.load.image('road1', 'assets/sprites/road1.png');
    this.game.load.image('road2', 'assets/sprites/road2.png');
    this.game.load.image('road3', 'assets/sprites/road3.png');
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
      x: Math.floor(((x + this.game.camera.x) ) / CELL_SIZE),
      y: Math.floor(((y + this.game.camera.y) ) / CELL_SIZE)
    }
  }

  getCellUnderCursor() {
    var x = this.game.input.x
    var y = this.game.input.y

    var cell = this.worldToGrid(x, y)

    return this.grid.getCell(cell.x, cell.y)
  }

  create() {
    this.game.camera.x = 0
    this.game.camera.y = 0

    this.spritesGroups = {}

    this.spritesGroups.map = this.game.add.group()
    this.spritesGroups.buildings = this.game.add.group()
    this.spritesGroups.cars = this.game.add.group()
    this.spritesGroups.hover = this.game.add.group()


    this.cursorVisor = this.spritesGroups.hover.create(0,0,'cursorvisor')

    this.game.input.mouse.capture = true;

    this.toolbelt = new ToolBelt(this)

    this.game.input.onDown.add(this.toolbelt.onMouseDown, this.toolbelt)

    this.cars = []
    this.mines = []

    this.depots = []
    this.furnaces = []

    this.resourcesTimerUpdate = 0

    this.grid = new Grid(WORLD_CELL_X, WORLD_CELL_Y, this)

    this.grid.init()

    this.initResources()
  }

  initResources() {
    this.resources = {}
    this.resources[Resources.IRON_PLATE] = 0
    this.resources[Resources.STONE_BRICK] = 0
  }

  createRoad(x, y, dir, speed, sprite) {
    console.log("create Road")
    var wp = this.cellToWorld(x, y)

    var s = this.spritesGroups.buildings.create(wp.x + CELL_SIZE / 2, wp.y + CELL_SIZE / 2, sprite)
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

    this.grid.addRoad(x, y, dir, speed)
  }

  hasCarAt(x, y) {
    for(let c of this.cars) {
      if(c != this) {
        var p = c.transitionTo || c.gridCoord()
        if(p.x == x && p.y == y) {
          return true
        }
      }
    }
    return false
  }

  getBuilding(x, y) {
    return this.mines.concat(this.depots).concat(this.furnaces)
      .filter(function(m) {
        //console.log("... >> getBuilding", m.gridPos)
        return (m.gridPos.x == x && m.gridPos.y == y)
      })[0]
  }

  removeConstruction(x, y) {
    var b = this.getBuilding(x, y)

    if(b != null) {
      if(b instanceof Mine) this.mines = this.mines.filter(m => m != b)
      else if(b instanceof Depot)
        this.depots = this.depots.filter(m => m != b)
      else if(b instanceof Furnace)
        this.furnaces = this.furnaces.filter(m => m != b)
    }

    this.grid.removeConstruction(x, y)
  }

  createFurnace(x, y) {
    this.furnaces.push(new Furnace(x, y, 'furnace', this))

    //var gridCoords = this.worldToGrid(x, y)
    this.grid.addBuilding(x, y)//gridCoords.x,gridCoords.y)
  }

  createDepot(x, y) {
    this.depots.push(new Depot(x, y, 'depot', this))

    //var gridCoords = this.worldToGrid(x, y)
    this.grid.addBuilding(x, y)

    return this.depots[this.depots.length - 1]
  }

  createCar(x, y, to, load, n) {
    to = to || null
    load = load || null

    var from = {x: x, y: y} //this.worldToGrid(x, y)

    this.grid.path(from, to, function(p) {
      if(p == null) console.log("Not path ", from, to, "input was : ", x, y)
      else {
        //console.log("Create car : ", x, y)
        var car = new Car(x, y, 'car', this, load, n)
        car.setPath(p)
        this.cars.push(car)
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

  findClosestFurnace(x, y, fuel) {
    try {
    return this.furnaces.map(
      function(d) {
        return {dist: Phaser.Math.distance(d.x, d.y, x, y), furnace: d}
      })
      .filter(e => e.dist > 0 )
      .map (function(e) {
        return e
      })
      .sort(function(a, b) {
        if(a.dist < b.dist) return -1
        else return 1
      }).find(function(f) {
        //console.log("findingFurnace, ", f.furnace.needFuel(), f.furnace.needMatter())
        if(fuel) return f.furnace.needFuel()
        else return f.furnace.needMatter()
      }).furnace
    } catch (e) {
      return null
    }
  }

  findClosestDepot(x, y) {
    try {
    return this.depots.map(
      function(d) {
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
    this.furnaces.map(c => c.update())

    this.resourcesTimerUpdate += this.game.time.elapsed

    if(this.resourcesTimerUpdate > 1000) {
      this.resourcesTimerUpdate = 0

      //console.log("BEDFORE UPDATE RESOURCE ", this.resources)
      this.initResources()

      this.resources = this.depots.reduce(function(acc, d) {
        //console.log("DEPOT CONTENTS : ", d.contents)
        acc[Resources.IRON_PLATE] += d.contents[Resources.IRON_PLATE]
        acc[Resources.STONE_BRICK] += d.contents[Resources.STONE_BRICK]

        return acc
      }, this.resources)

      //console.log("UPDATED RESOURCE ", this.resources)
    }

  }

  render() {
    //console.log("Drawing")
    //this.game.debug.cameraInfo(this.game.camera, 32, 32);
    var cc = this.getCellUnderCursor()

    if (cc != null) {
      var cPos = this.cellToWorld(cc.x, cc.y)

      this.cursorVisor.x = cPos.x
      this.cursorVisor.y = cPos.y

      var b = this.getBuilding(cc.x, cc.y)
      if(b != null) {
        this.game.debug.text( "Building: " + b.getInfo(), 600, 180 );
      }

      this.game.debug.text( "Cursor hovering : " + cc.x+", "+cc.y + " Kind : "+cc.kind , 100, 380 );

      this.game.debug.text( "Resources: " +
        " IRON PLATE : " + this.resources[Resources.IRON_PLATE] +
        " | STONE BRICK : " + this.resources[Resources.STONE_BRICK]
        , 100, 20)

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
