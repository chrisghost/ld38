const CELL_SIZE = 64
const Direction = {
  N: 0, E: 1, S: 2, W: 3, toSprite: function(d) {
    switch(d) {
      case 0: return 'N'
      case 1: return 'E'
      case 2: return 'S'
      default: return 'W'
    }
  }
}

export {CELL_SIZE, Direction};
