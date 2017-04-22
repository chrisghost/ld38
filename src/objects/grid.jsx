const CellTypes = {
  KIND_EARTH : 0,
  KIND_WATER : 1
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

    for (var x = 0; x < w; x++) {
      this.g.push([])
      for (var y = 0; y < h; y++)
        this.g[x].push(new Cell(x, y, (Math.random() > 0.3 ? CellTypes.KIND_EARTH : CellTypes.KIND_WATER)));
    }
  }

  getCell(x, y) {
    try {
      return this.g[x][y]
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
