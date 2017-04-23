import {Resources, CELL_SIZE, Direction, WORLD_CELL_X, WORLD_CELL_Y } from '../constants.jsx';

const CellTypes = {
  KIND_EARTH : 0
, KIND_WATER : 1
, KIND_ROAD : 2
, KIND_STONE : 3
, KIND_IRON : 4
, KIND_COAL : 5
, KIND_SHIP : 999
}

const CellTypeMinable = function(tpe) {
  return ( tpe == CellTypes.KIND_STONE ||
           tpe == CellTypes.KIND_IRON ||
           tpe == CellTypes.KIND_COAL)
}

const CellTypesHuman = function(id) {
  switch(id) {
  case CellTypes.KIND_EARTH : return "KIND_EARTH"; break
  case CellTypes.KIND_WATER : return "KIND_WATER"; break
  case CellTypes.KIND_ROAD : return "KIND_ROAD"; break
  case CellTypes.KIND_STONE : return "KIND_STONE"; break
  case CellTypes.KIND_IRON : return "KIND_IRON"; break
  case CellTypes.KIND_COAL : return "KIND_COAL"; break
  case CellTypes.KIND_SHIP : return "KIND_SHIP"; break
  }
}

class Cell {

  constructor(x, y, kind, stage) {
    this.x = x;
    this.y = y;
    this.kind = kind;

    var p = stage.cellToWorld(x, y)
    this.sprite = stage.spritesGroups.map.create( p.x, p.y, stage.cellSpriteName(kind))
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
  }

  init() {
    var waterTiles = 0

    for (var y = 0; y < this.h; y++) {
      this.g.push([])
      for (var x = 0; x < this.w; x++) {

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

    this.star = new EasyStar.js()

    this.putResources()
    this.putShip()

    this.initGrid()

    this.star.setAcceptableTiles(this.walkables())
  }

  putShip() {

    var shipC = this.getRandCellNoNeighbours(CellTypes.KIND_EARTH, CellTypes.KIND_EARTH)

    shipC.sprite.loadTexture(this.stage.cellSpriteName(CellTypes.KIND_SHIP))
    shipC.kind = CellTypes.KIND_SHIP

    var storageC = this.getRandCellNoNeighbours(CellTypes.KIND_EARTH, CellTypes.KIND_EARTH)

    var d = this.stage.createDepot(storageC.x, storageC.y)

    d.addResource(Resources.IRON_PLATE, 100)
    d.addResource(Resources.STONE_BRICK, 100)
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

    for(var i = 0; i < 6; i++) {
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

  getRoadSpeed(x, y) {
    var spd = this.getCell(x, y).roadSpeed
    if(spd == null) return 0.5
    else return spd
  }

  initGrid() {
    this.star.setGrid(this.g.map(c => c.map(cell => { return cell.kind })))
  }

  getRandCellNoNeighbours(kind, noNeighboursKind) {
    var cell = this.getRandCell(CellTypes.KIND_EARTH)

    if(this.neighbours(cell.x, cell.y).reduceRight(
      function(acc, c) {
        return acc && c.kind == noNeighboursKind}, true)) {
      return cell
    } else
      return this.getRandCellNoNeighbours(kind, noNeighboursKind)
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

  addRoad(x, y, dir, speed) {
    this.g[y][x] = {x:x, y:y, dir: dir, kind: CellTypes.KIND_ROAD, roadSpeed: speed}
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

  removeConstruction(x, y) {
    this.g[y][x].kind = CellTypes.KIND_EARTH
    this.star.setAdditionalPointCost(x, y, 0)
    this.initGrid()
    this.star.setDirectionalCondition(x, y,
      [EasyStar.BOTTOM, EasyStar.LEFT, EasyStar.TOP, EasyStar.RIGHT])
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

export {Grid, CellTypes, CellTypesHuman, CellTypeMinable};
