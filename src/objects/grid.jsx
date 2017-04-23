import {CELL_SIZE, Direction} from '../constants.jsx';

const CellTypes = {
  KIND_EARTH : 0
, KIND_WATER : 1
, KIND_ROAD : 2
, KIND_STONE : 3
, KIND_IRON : 4
, KIND_COAL : 5
, KIND_SHIP : 999
}

class Cell {

  constructor(x, y, kind, stage) {
    this.x = x;
    this.y = y;
    this.kind = kind;

    var p = stage.cellToWorld(x, y)
    this.sprite = stage.game.add.sprite( p.x, p.y, stage.cellSpriteName(kind))
  }

  print() {
    console.log("Cell at "+ this.x+", "+this.y)
  }
}

class Grid {
  constructor(w, h, stage) {
    this.w = w;
    this.h = h;

    this.g = [];

    this.stage = stage

    var waterTiles = 0

    for (var y = 0; y < h; y++) {
      this.g.push([])
      for (var x = 0; x < w; x++) {

        var hasOnlyEarthNeighbours =
          this.neighbours(x, y).reduceRight(
            function(acc, c) {
              return acc && c.kind == CellTypes.KIND_EARTH}, true)

        var c = new Cell(
          x, y,
          ((hasOnlyEarthNeighbours && (waterTiles < 6) && (Math.random() < 0.3)) ?
            CellTypes.KIND_WATER : CellTypes.KIND_EARTH)
          , this.stage)

        this.g[y].push(c)

        if(c.kind == CellTypes.KIND_WATER) waterTiles++

      }
    }

    this.putResources()
    this.putShip()

    this.star = new EasyStar.js()

    this.initGrid()

    this.star.setAcceptableTiles(this.walkables())
  }

  putShip() {

    var shipC = this.getRandCell(CellTypes.KIND_EARTH)

    if(this.neighbours(shipC.x, shipC.y).reduceRight(
      function(acc, c) {
        return acc && c.kind == CellTypes.KIND_EARTH}, true)) {
      shipC.sprite.loadTexture(this.stage.cellSpriteName(CellTypes.KIND_SHIP))
      shipC.kind = CellTypes.KIND_SHIP
    } else
      this.putShip()

  }

  neighbours(x, y) {
    return [ {x: x - 1, y: y}
           , {x: x + 1, y: y}
           , {x: x, y: y + 1}
           , {x: x, y: y - 1}
           ].map(p => this.getCell(p.x, p.y))
            .filter(c => c != null)
  }

  putResources() {
    for(var i = 0; i < 10; i++) {
      var c1 = this.getRandCell(CellTypes.KIND_EARTH)
      c1.sprite.loadTexture(this.stage.cellSpriteName(CellTypes.KIND_STONE))
      c1.kind = CellTypes.KIND_STONE
    }

    for(var i = 0; i < 4; i++) {
      var c2 = this.getRandCell(CellTypes.KIND_EARTH)
      c2.sprite.loadTexture(this.stage.cellSpriteName(CellTypes.KIND_COAL))
      c2.kind = CellTypes.KIND_COAL
    }

    for(var i = 0; i < 20; i++) {
      var c3 = this.getRandCell(CellTypes.KIND_EARTH)
      c3.sprite.loadTexture(this.stage.cellSpriteName(CellTypes.KIND_IRON))
      c3.kind = CellTypes.KIND_IRON
    }
  }

  initGrid() {
    this.star.setGrid(this.g.map(c => c.map(cell => { return cell.kind })))
  }

  getRandCell(kind) {
    //kind = kind || CellTypes.KIND_EARTH

    var c = this.getCell(
      Math.floor(Math.random() * this.w)
     ,Math.floor(Math.random() * this.h))

    if(kind == null || c.kind == kind)
      return c
    else
      return this.getRandCell(kind)
  }

  toEasterStar(d) {
    switch(d) {
      case Direction.N : return EasyStar.TOP
      case Direction.S : return EasyStar.BOTTOM
      case Direction.W : return EasyStar.LEFT
      default: return EasyStar.RIGHT
    }
  }

  addRoad(x, y, dir) {
    this.g[y][x] = {x:x, y:y, dir: dir, kind: CellTypes.KIND_ROAD}
    this.initGrid()
    this.star.setDirectionalCondition(x, y,
      [EasyStar.BOTTOM, EasyStar.LEFT, EasyStar.TOP, EasyStar.RIGHT]
        .filter(d => d != this.toEasterStar(dir))
    )
  }

  addBuilding(x, y) {
    this.g[y][x].kind = CellTypes.KIND_ROAD
    this.star.setAdditionalPointCost(x, y, 99999)
    this.initGrid()
  }

  walkables() {
    return [CellTypes.KIND_ROAD, CellTypes.KIND_DEPOT]
  }

  path(from, to, callback) {
    this.star.findPath(from.x, from.y, to.x, to.y, callback)
    this.star.calculate()
  }

  getCell(x, y) {
    //console.log(this.g.length, this.g[0].length)
    try { return this.g[y][x] } catch (e) { return null }
  }

  forEach(f) {
    this.g.forEach(function(col) {
      col.forEach(f)
      //function(cell) { })
    })
  }

  printGrid() {
    this.g.forEach(function(col) {
      var l = ""
      col.forEach(function(cell) {
        l += cell.kind
        //cell.print()
      })
      console.log(l)
    })
  }
}

export {Grid, CellTypes};
