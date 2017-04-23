import {CellTypes} from './objects/grid.jsx';

const CELL_SIZE = 64

const WORLD_CELL_X = 10
const WORLD_CELL_Y = 6
const WORLD_W = CELL_SIZE * WORLD_CELL_X
const WORLD_H = CELL_SIZE * WORLD_CELL_Y

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

let CellProduction = function(t) {

    switch(t) {
      case CellTypes.KIND_STONE : return 1000; break
      case CellTypes.KIND_COAL  : return 1500; break
      case CellTypes.KIND_IRON  : return 2000; break
      default : return 0;
    }

}

export {CELL_SIZE, Direction, WORLD_CELL_X, WORLD_CELL_Y, WORLD_W, WORLD_H, CellProduction};
