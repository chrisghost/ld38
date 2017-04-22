import {CELL_SIZE, Direction} from '../constants.jsx';

const CellTypes = {
  KIND_EARTH : 0
, KIND_WATER : 1
, KIND_ROAD : 2
}

class Cell {

  constructor(x, y, kind) {
    this.x = x;
    this.y = y;
    this.kind = kind;
  }

  print() {
    console.log("Cell at "+ this.x+", "+this.y)
  }
}

class Grid {
  constructor(w, h) {
    this.w = w;
    this.h = h;

    this.g = [];


    for (var y = 0; y < w; y++) {
      this.g.push([])
      for (var x = 0; x < h; x++)
        this.g[y].push(new Cell(x, y, (Math.random() > 0.0 ? CellTypes.KIND_EARTH : CellTypes.KIND_WATER)));
    }

    this.star = new EasyStar.js()

    this.initGrid()

    this.star.setAcceptableTiles(this.walkables())
  }

  initGrid() {
    this.star.setGrid(this.g.map(c => c.map(cell => { return cell.kind })))
  }

  getRandCell() {
    return {
      x : Math.floor(Math.random() * this.w),
      y : Math.floor(Math.random() * this.h)
    }
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

  walkables() {
    return [CellTypes.KIND_ROAD]
  }

  path(from, to, callback) {
    this.star.findPath(from.x, from.y, to.x, to.y, callback)
    this.star.calculate()
  }

  getCell(x, y) {
    try {
      return this.g[y][x]
    } catch (e) {
      return {}
    }
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
