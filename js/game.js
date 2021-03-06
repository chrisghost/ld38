/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _boot = __webpack_require__(1);

	var _boot2 = _interopRequireDefault(_boot);

	var _play = __webpack_require__(4);

	var _play2 = _interopRequireDefault(_play);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Game = function (_Phaser$Game) {
	  _inherits(Game, _Phaser$Game);

	  function Game() {
	    _classCallCheck(this, Game);

	    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, window.innerWidth, window.innerHeight, Phaser.AUTO, 'game'));

	    console.log(window);
	    window.game = _this;

	    _this.state.add('boot', _boot2.default);
	    _this.state.add('play', _play2.default);

	    _this.state.start('boot');
	    return _this;
	  }

	  return Game;
	}(Phaser.Game);

	new Game();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _constants = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BootState = function (_Phaser$State) {
	  _inherits(BootState, _Phaser$State);

	  function BootState() {
	    _classCallCheck(this, BootState);

	    return _possibleConstructorReturn(this, (BootState.__proto__ || Object.getPrototypeOf(BootState)).apply(this, arguments));
	  }

	  _createClass(BootState, [{
	    key: 'preload',
	    value: function preload() {}
	  }, {
	    key: 'create',
	    value: function create() {
	      this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
	      this.stage.smoothed = false;
	      this.game.antialias = false;
	      this.game.renderer.renderSession.roundPixels = true;

	      this.game.world.setBounds(0, 0, _constants.WORLD_W, _constants.WORLD_H);

	      this.state.start('play');
	    }
	  }]);

	  return BootState;
	}(Phaser.State);

	exports.default = BootState;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Resources = exports.CellProduction = exports.WORLD_H = exports.WORLD_W = exports.WORLD_CELL_Y = exports.WORLD_CELL_X = exports.Direction = exports.CELL_SIZE = undefined;

	var _grid = __webpack_require__(3);

	var CELL_SIZE = 64;

	var WORLD_CELL_X = 20;
	var WORLD_CELL_Y = 20;
	var WORLD_W = CELL_SIZE * WORLD_CELL_X;
	var WORLD_H = CELL_SIZE * WORLD_CELL_Y;

	var Resources = {
	  IRON_PLATE: 1,
	  STONE_BRICK: 2
	};

	var Direction = {
	  N: 0, E: 1, S: 2, W: 3, toSprite: function toSprite(d) {
	    switch (d) {
	      case 0:
	        return 'N';
	      case 1:
	        return 'E';
	      case 2:
	        return 'S';
	      default:
	        return 'W';
	    }
	  }
	};

	var CellProduction = function CellProduction(t) {

	  switch (t) {
	    case _grid.CellTypes.KIND_STONE:
	      return 6000;break;
	    case _grid.CellTypes.KIND_COAL:
	      return 3000;break;
	    case _grid.CellTypes.KIND_IRON:
	      return 6000;break;
	    default:
	      return 0;
	  }
	};

	exports.CELL_SIZE = CELL_SIZE;
	exports.Direction = Direction;
	exports.WORLD_CELL_X = WORLD_CELL_X;
	exports.WORLD_CELL_Y = WORLD_CELL_Y;
	exports.WORLD_W = WORLD_W;
	exports.WORLD_H = WORLD_H;
	exports.CellProduction = CellProduction;
	exports.Resources = Resources;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Prices = exports.CellTypeMinable = exports.CellTypesHuman = exports.CellTypes = exports.Grid = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _constants = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CellTypes = {
	  KIND_EARTH: 0,
	  KIND_WATER: 1,
	  KIND_ROAD: 2,
	  KIND_STONE: 3,
	  KIND_IRON: 4,
	  KIND_COAL: 5,
	  KIND_SHIP: 999
	};

	var Prices = {
	  'road1': { IRON: 1, STONE: 1 },
	  'road2': { IRON: 5, STONE: 5 },
	  'road3': { IRON: 10, STONE: 10 },
	  'depot': { IRON: 50, STONE: 50 },
	  'furnace': { IRON: 10, STONE: 10 },
	  'mine': { IRON: 20, STONE: 10 }
	};

	var CellTypeMinable = function CellTypeMinable(tpe) {
	  return tpe == CellTypes.KIND_STONE || tpe == CellTypes.KIND_IRON || tpe == CellTypes.KIND_COAL;
	};

	var CellTypesHuman = function CellTypesHuman(id) {
	  switch (id) {
	    case CellTypes.KIND_EARTH:
	      return "KIND_EARTH";break;
	    case CellTypes.KIND_WATER:
	      return "KIND_WATER";break;
	    case CellTypes.KIND_ROAD:
	      return "KIND_ROAD";break;
	    case CellTypes.KIND_STONE:
	      return "KIND_STONE";break;
	    case CellTypes.KIND_IRON:
	      return "KIND_IRON";break;
	    case CellTypes.KIND_COAL:
	      return "KIND_COAL";break;
	    case CellTypes.KIND_SHIP:
	      return "KIND_SHIP";break;
	  }
	};

	var Cell = function () {
	  function Cell(x, y, kind, stage) {
	    _classCallCheck(this, Cell);

	    this.x = x;
	    this.y = y;
	    this.kind = kind;

	    var p = stage.cellToWorld(x, y);
	    this.sprite = stage.spritesGroups.map.create(p.x, p.y, stage.cellSpriteName(kind));
	  }

	  _createClass(Cell, [{
	    key: 'print',
	    value: function print() {
	      console.log("Cell at " + this.x + ", " + this.y);
	    }
	  }]);

	  return Cell;
	}();

	var Grid = function () {
	  function Grid(w, h, stage) {
	    _classCallCheck(this, Grid);

	    this.w = w;
	    this.h = h;

	    this.g = [];

	    this.stage = stage;
	  }

	  _createClass(Grid, [{
	    key: 'init',
	    value: function init() {
	      var waterTiles = 0;

	      for (var y = 0; y < this.h; y++) {
	        this.g.push([]);
	        for (var x = 0; x < this.w; x++) {

	          var hasOnlyEarthNeighbours = this.neighbours(x, y).reduceRight(function (acc, c) {
	            return acc && c.kind == CellTypes.KIND_EARTH;
	          }, true);

	          var c = new Cell(x, y, hasOnlyEarthNeighbours && waterTiles < 6 && Math.random() < 0.3 ? CellTypes.KIND_WATER : CellTypes.KIND_EARTH, this.stage);

	          this.g[y].push(c);

	          if (c.kind == CellTypes.KIND_WATER) waterTiles++;
	        }
	      }

	      this.star = new EasyStar.js();

	      this.putResources();
	      this.putShip();

	      this.initGrid();

	      this.star.setAcceptableTiles(this.walkables());
	    }
	  }, {
	    key: 'putShip',
	    value: function putShip() {

	      var shipC = this.getRandCellNoNeighbours(CellTypes.KIND_EARTH, CellTypes.KIND_EARTH);

	      shipC.sprite.loadTexture(this.stage.cellSpriteName(CellTypes.KIND_SHIP));
	      shipC.kind = CellTypes.KIND_SHIP;

	      var storageC = this.getRandCellNoNeighbours(CellTypes.KIND_EARTH, CellTypes.KIND_EARTH);

	      var d = this.stage.createDepot(storageC.x, storageC.y);

	      d.addResource(_constants.Resources.IRON_PLATE, 200);
	      d.addResource(_constants.Resources.STONE_BRICK, 200);
	    }
	  }, {
	    key: 'neighbours',
	    value: function neighbours(x, y) {
	      var _this = this;

	      return [{ x: x - 1, y: y }, { x: x + 1, y: y }, { x: x, y: y + 1 }, { x: x, y: y - 1 }].map(function (p) {
	        return _this.getCell(p.x, p.y);
	      }).filter(function (c) {
	        return c != null;
	      });
	    }
	  }, {
	    key: 'putResources',
	    value: function putResources() {
	      for (var i = 0; i < 5; i++) {
	        var c1 = this.getRandCell(CellTypes.KIND_EARTH);
	        c1.sprite.loadTexture(this.stage.cellSpriteName(CellTypes.KIND_STONE));
	        c1.kind = CellTypes.KIND_STONE;
	      }

	      for (var i = 0; i < 5; i++) {
	        var c2 = this.getRandCell(CellTypes.KIND_EARTH);
	        c2.sprite.loadTexture(this.stage.cellSpriteName(CellTypes.KIND_COAL));
	        c2.kind = CellTypes.KIND_COAL;
	      }

	      for (var i = 0; i < 7; i++) {
	        var c3 = this.getRandCell(CellTypes.KIND_EARTH);
	        c3.sprite.loadTexture(this.stage.cellSpriteName(CellTypes.KIND_IRON));
	        c3.kind = CellTypes.KIND_IRON;
	      }
	    }
	  }, {
	    key: 'getRoadSpeed',
	    value: function getRoadSpeed(x, y) {
	      var spd = this.getCell(x, y).roadSpeed;
	      if (spd == null) return 0.5;else return spd;
	    }
	  }, {
	    key: 'initGrid',
	    value: function initGrid() {
	      this.star.setGrid(this.g.map(function (c) {
	        return c.map(function (cell) {
	          return cell.kind;
	        });
	      }));
	    }
	  }, {
	    key: 'getRandCellNoNeighbours',
	    value: function getRandCellNoNeighbours(kind, noNeighboursKind) {
	      var cell = this.getRandCell(CellTypes.KIND_EARTH);

	      if (this.neighbours(cell.x, cell.y).reduceRight(function (acc, c) {
	        return acc && c.kind == noNeighboursKind;
	      }, true)) {
	        return cell;
	      } else return this.getRandCellNoNeighbours(kind, noNeighboursKind);
	    }
	  }, {
	    key: 'getRandCell',
	    value: function getRandCell(kind) {
	      //kind = kind || CellTypes.KIND_EARTH

	      var c = this.getCell(Math.floor(Math.random() * this.w), Math.floor(Math.random() * this.h));

	      if (kind == null || c.kind == kind) return c;else return this.getRandCell(kind);
	    }
	  }, {
	    key: 'toEasterStar',
	    value: function toEasterStar(d) {
	      switch (d) {
	        case _constants.Direction.N:
	          return EasyStar.TOP;
	        case _constants.Direction.S:
	          return EasyStar.BOTTOM;
	        case _constants.Direction.W:
	          return EasyStar.LEFT;
	        default:
	          return EasyStar.RIGHT;
	      }
	    }
	  }, {
	    key: 'addRoad',
	    value: function addRoad(x, y, dir, speed) {
	      var _this2 = this;

	      var entrances = { N: 1, E: 1, S: 1, W: 1 };

	      switch (dir) {
	        case _constants.Direction.N:
	          entrances.N = 0;break;
	        case _constants.Direction.S:
	          entrances.S = 0;break;
	        case _constants.Direction.W:
	          entrances.W = 0;break;
	        default:
	          entrances.E = 0;break;
	      }

	      this.g[y][x] = {
	        x: x,
	        y: y,
	        dir: dir,
	        kind: CellTypes.KIND_ROAD,
	        roadSpeed: speed,
	        entrances: entrances
	      };

	      this.initGrid();
	      this.star.setDirectionalCondition(x, y, [EasyStar.BOTTOM, EasyStar.LEFT, EasyStar.TOP, EasyStar.RIGHT].filter(function (d) {
	        return d != _this2.toEasterStar(dir);
	      }));
	    }
	  }, {
	    key: 'refreshRoad',
	    value: function refreshRoad(x, y) {
	      var r = this.getCell(x, y);

	      if (r == null) return;

	      var directions = [];

	      if (r.entrances.N) directions.push(EasyStar.TOP);
	      if (r.entrances.E) directions.push(EasyStar.RIGHT);
	      if (r.entrances.S) directions.push(EasyStar.BOTTOM);
	      if (r.entrances.W) directions.push(EasyStar.LEFT);

	      this.star.setDirectionalCondition(x, y, directions);
	    }
	  }, {
	    key: 'addBuilding',
	    value: function addBuilding(x, y) {
	      this.g[y][x].kind = CellTypes.KIND_ROAD;
	      this.star.setAdditionalPointCost(x, y, 99999);
	      this.initGrid();
	    }
	  }, {
	    key: 'removeConstruction',
	    value: function removeConstruction(x, y) {
	      this.g[y][x].kind = CellTypes.KIND_EARTH;
	      this.star.setAdditionalPointCost(x, y, 0);
	      this.initGrid();
	      this.star.setDirectionalCondition(x, y, [EasyStar.BOTTOM, EasyStar.LEFT, EasyStar.TOP, EasyStar.RIGHT]);
	    }
	  }, {
	    key: 'walkables',
	    value: function walkables() {
	      return [CellTypes.KIND_ROAD, CellTypes.KIND_DEPOT];
	    }
	  }, {
	    key: 'path',
	    value: function path(from, to, callback) {
	      this.star.findPath(from.x, from.y, to.x, to.y, callback);
	      this.star.calculate();
	    }
	  }, {
	    key: 'getCell',
	    value: function getCell(x, y) {
	      //console.log(this.g.length, this.g[0].length)
	      try {
	        return this.g[y][x];
	      } catch (e) {
	        return null;
	      }
	    }
	  }, {
	    key: 'forEach',
	    value: function forEach(f) {
	      this.g.forEach(function (col) {
	        col.forEach(f);
	        //function(cell) { })
	      });
	    }
	  }, {
	    key: 'printGrid',
	    value: function printGrid() {
	      this.g.forEach(function (col) {
	        var l = "";
	        col.forEach(function (cell) {
	          l += cell.kind;
	          //cell.print()
	        });
	        console.log(l);
	      });
	    }
	  }]);

	  return Grid;
	}();

	exports.Grid = Grid;
	exports.CellTypes = CellTypes;
	exports.CellTypesHuman = CellTypesHuman;
	exports.CellTypeMinable = CellTypeMinable;
	exports.Prices = Prices;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _grid = __webpack_require__(3);

	var _car = __webpack_require__(5);

	var _car2 = _interopRequireDefault(_car);

	var _mine = __webpack_require__(8);

	var _mine2 = _interopRequireDefault(_mine);

	var _furnace = __webpack_require__(7);

	var _furnace2 = _interopRequireDefault(_furnace);

	var _depot = __webpack_require__(6);

	var _depot2 = _interopRequireDefault(_depot);

	var _road = __webpack_require__(9);

	var _road2 = _interopRequireDefault(_road);

	var _toolbelt = __webpack_require__(10);

	var _toolbelt2 = _interopRequireDefault(_toolbelt);

	var _gui = __webpack_require__(11);

	var _gui2 = _interopRequireDefault(_gui);

	var _constants = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PlayState = function (_Phaser$State) {
	  _inherits(PlayState, _Phaser$State);

	  function PlayState() {
	    _classCallCheck(this, PlayState);

	    return _possibleConstructorReturn(this, (PlayState.__proto__ || Object.getPrototypeOf(PlayState)).apply(this, arguments));
	  }

	  _createClass(PlayState, [{
	    key: 'preload',
	    value: function preload() {
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

	      this.game.load.image('guibkg', 'assets/sprites/guibkg.png');
	      this.game.load.image('toggle_on', 'assets/sprites/toggle_on.png');
	      this.game.load.image('toggle_off', 'assets/sprites/toggle_off.png');

	      this.cursors = this.game.input.keyboard.createCursorKeys();
	    }
	  }, {
	    key: 'cellSpriteName',
	    value: function cellSpriteName(kind) {
	      switch (kind) {
	        case _grid.CellTypes.KIND_EARTH:
	          return 'earthcell';
	        case _grid.CellTypes.KIND_WATER:
	          return 'watercell';
	        case _grid.CellTypes.KIND_COAL:
	          return 'coalcell';
	        case _grid.CellTypes.KIND_IRON:
	          return 'ironcell';
	        case _grid.CellTypes.KIND_STONE:
	          return 'stonecell';
	        case _grid.CellTypes.KIND_SHIP:
	          return 'ship';
	        default:
	          return 'earthcell';
	      }
	    }
	  }, {
	    key: 'worldToGrid',
	    value: function worldToGrid(x, y) {
	      return {
	        x: Math.floor((x + this.game.camera.x) / _constants.CELL_SIZE),
	        y: Math.floor((y + this.game.camera.y) / _constants.CELL_SIZE)
	      };
	    }
	  }, {
	    key: 'getCellUnderCursor',
	    value: function getCellUnderCursor() {
	      var x = this.game.input.x;
	      var y = this.game.input.y;

	      var cell = this.worldToGrid(x, y);

	      return this.grid.getCell(cell.x, cell.y);
	    }
	  }, {
	    key: 'create',
	    value: function create() {
	      this.game.camera.x = 0;
	      this.game.camera.y = 0;

	      var cb = this.game.camera.bounds;
	      var CAMERA_OFFSET = 300;
	      var CAMERA_OFFSET_RIGHT = 700;

	      this.game.camera.bounds.setTo(cb.x - CAMERA_OFFSET, cb.y - CAMERA_OFFSET, cb.width + CAMERA_OFFSET + CAMERA_OFFSET_RIGHT, cb.height + CAMERA_OFFSET * 2);

	      this.spritesGroups = {};

	      this.spritesGroups.map = this.game.add.group();
	      this.spritesGroups.buildings = this.game.add.group();
	      this.spritesGroups.cars = this.game.add.group();
	      this.spritesGroups.hover = this.game.add.group();

	      this.gui = new _gui2.default(this);

	      this.cursorVisor = this.spritesGroups.hover.create(0, 0, 'cursorvisor');

	      this.game.input.mouse.capture = true;

	      this.toolbelt = new _toolbelt2.default(this);

	      this.game.input.onDown.add(function () {
	        if (this.game.input.x > this.game.width - 400) console.log("click on gui");else this.toolbelt.onMouseDown(); //.bind(this.toolbelt)
	      }, this);

	      this.cars = [];
	      this.mines = [];

	      this.depots = [];
	      this.furnaces = [];

	      this.resourcesTimerUpdate = 0;

	      this.grid = new _grid.Grid(_constants.WORLD_CELL_X, _constants.WORLD_CELL_Y, this);

	      this.grid.init();

	      this.initResources();
	    }
	  }, {
	    key: 'initResources',
	    value: function initResources() {
	      this.resources = {};
	      this.resources[_constants.Resources.IRON_PLATE] = 0;
	      this.resources[_constants.Resources.STONE_BRICK] = 0;
	    }
	  }, {
	    key: 'spend',
	    value: function spend(t) {
	      var p = _grid.Prices[t];
	      if (p == null) return false;else if (this.resources) {
	        console.log(p, this);
	        var ironToRemove = p.IRON;
	        var stoneToRemove = p.STONE;

	        this.depots.map(function (d) {
	          if (ironToRemove == 0 && stoneToRemove == 0) return;

	          d.contents[_constants.Resources.IRON_PLATE] -= ironToRemove;
	          if (d.contents[_constants.Resources.IRON_PLATE] < 0) {
	            ironToRemove = Math.abs(d.contents[_constants.Resources.IRON_PLATE]);
	            d.contents[_constants.Resources.IRON_PLATE] = 0;
	          }
	          d.contents[_constants.Resources.STONE_BRICK] -= stoneToRemove;
	          if (d.contents[_constants.Resources.STONE_BRICK] < 0) {
	            stoneToRemove = Math.abs(d.contents[_constants.Resources.STONE_BRICK]);
	            d.contents[_constants.Resources.STONE_BRICK] = 0;
	          }
	        });

	        this.resources[_constants.Resources.IRON_PLATE] -= p.IRON;
	        this.resources[_constants.Resources.STONE_BRICK] -= p.STONE;
	      }
	    }
	  }, {
	    key: 'createRoad',
	    value: function createRoad(x, y, dir, speed, sprite) {
	      console.log("create Road");
	      var wp = this.cellToWorld(x, y);

	      this.spend(sprite);

	      var s = this.spritesGroups.buildings.create(wp.x + _constants.CELL_SIZE / 2, wp.y + _constants.CELL_SIZE / 2, sprite);
	      s.anchor.setTo(0.5, 0.5);

	      switch (dir) {
	        case _constants.Direction.E:
	          s.angle = 90;
	          break;
	        case _constants.Direction.S:
	          s.angle = 180;
	          break;
	        case _constants.Direction.W:
	          s.angle = 270;
	          break;
	        default:
	          s.angle = 0;
	      }

	      this.grid.addRoad(x, y, dir, speed);
	    }
	  }, {
	    key: 'hasCarAt',
	    value: function hasCarAt(x, y) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = this.cars[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var c = _step.value;

	          if (c != this) {
	            var p = c.transitionTo || c.gridCoord();
	            if (p.x == x && p.y == y) {
	              return true;
	            }
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      return false;
	    }
	  }, {
	    key: 'getBuilding',
	    value: function getBuilding(x, y) {
	      return this.mines.concat(this.depots).concat(this.furnaces).filter(function (m) {
	        //console.log("... >> getBuilding", m.gridPos)
	        return m.gridPos.x == x && m.gridPos.y == y;
	      })[0];
	    }
	  }, {
	    key: 'removeConstruction',
	    value: function removeConstruction(x, y) {
	      var b = this.getBuilding(x, y);

	      if (b != null) {
	        if (b instanceof _mine2.default) this.mines = this.mines.filter(function (m) {
	          return m != b;
	        });else if (b instanceof _depot2.default) this.depots = this.depots.filter(function (m) {
	          return m != b;
	        });else if (b instanceof _furnace2.default) this.furnaces = this.furnaces.filter(function (m) {
	          return m != b;
	        });
	      }

	      this.grid.removeConstruction(x, y);
	    }
	  }, {
	    key: 'createFurnace',
	    value: function createFurnace(x, y) {
	      this.spend('furnace');
	      this.furnaces.push(new _furnace2.default(x, y, 'furnace', this));

	      //var gridCoords = this.worldToGrid(x, y)
	      this.grid.addBuilding(x, y); //gridCoords.x,gridCoords.y)
	    }
	  }, {
	    key: 'createDepot',
	    value: function createDepot(x, y) {
	      this.spend('depot');

	      this.depots.push(new _depot2.default(x, y, 'depot', this));

	      //var gridCoords = this.worldToGrid(x, y)
	      this.grid.addBuilding(x, y);

	      return this.depots[this.depots.length - 1];
	    }
	  }, {
	    key: 'createCar',
	    value: function createCar(x, y, to, load, n) {
	      to = to || null;
	      load = load || null;

	      var from = { x: x, y: y }; //this.worldToGrid(x, y)

	      this.grid.path(from, to, function (p) {
	        if (p == null) console.log("Not path ", from, to, "input was : ", x, y);else {
	          //console.log("Create car : ", x, y)
	          var car = new _car2.default(x, y, 'car', this, load, n);
	          car.setPath(p);
	          this.cars.push(car);
	        }
	      }.bind(this));
	    }
	  }, {
	    key: 'createMine',
	    value: function createMine(x, y) {
	      this.spend('mine');
	      var mine = new _mine2.default(x, y, 'mine', this);
	      this.mines.push(mine);

	      //var gridCoords = this.worldToGrid(x, y)
	      //this.grid.addBuilding(gridCoords.x,gridCoords.y)
	    }
	  }, {
	    key: 'cellToWorld',
	    value: function cellToWorld(x, y) {
	      return {
	        x: /*this.game.world.centerX*/+x * _constants.CELL_SIZE,
	        y: /*this.game.world.centerY*/+y * _constants.CELL_SIZE
	      };
	    }
	  }, {
	    key: 'findClosestFurnace',
	    value: function findClosestFurnace(x, y, fuel) {
	      try {
	        return this.furnaces.map(function (d) {
	          return { dist: Phaser.Math.distance(d.x, d.y, x, y), furnace: d };
	        }).filter(function (e) {
	          return e.dist > 0;
	        }).map(function (e) {
	          return e;
	        }).sort(function (a, b) {
	          if (a.dist < b.dist) return -1;else return 1;
	        }).find(function (f) {
	          //console.log("findingFurnace, ", f.furnace.needFuel(), f.furnace.needMatter())
	          if (fuel) return f.furnace.needFuel();else return f.furnace.needMatter();
	        }).furnace;
	      } catch (e) {
	        return null;
	      }
	    }
	  }, {
	    key: 'findClosestDepot',
	    value: function findClosestDepot(x, y) {
	      try {
	        return this.depots.map(function (d) {
	          return { dist: Phaser.Math.distance(d.x, d.y, x, y), depot: d };
	        }).filter(function (e) {
	          return e.dist > 0;
	        }).sort(function (a, b) {
	          if (a.dist < b.dist) return -1;else return 1;
	        })[0].depot;
	      } catch (e) {
	        return null;
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      this.moveCamera();
	      //this.game.world.scale.set(this.worldScale)

	      this.cars = this.cars.filter(function (c) {
	        return !c.update(this.cars);
	      }.bind(this));

	      this.mines.map(function (c) {
	        return c.update();
	      });
	      this.furnaces.map(function (c) {
	        return c.update();
	      });

	      this.resourcesTimerUpdate += this.game.time.elapsed;

	      if (this.resourcesTimerUpdate > 1000) {
	        this.resourcesTimerUpdate = 0;

	        //console.log("BEDFORE UPDATE RESOURCE ", this.resources)
	        this.initResources();

	        this.resources = this.depots.reduce(function (acc, d) {
	          //console.log("DEPOT CONTENTS : ", d.contents)
	          acc[_constants.Resources.IRON_PLATE] += d.contents[_constants.Resources.IRON_PLATE];
	          acc[_constants.Resources.STONE_BRICK] += d.contents[_constants.Resources.STONE_BRICK];

	          return acc;
	        }, this.resources);

	        //console.log("UPDATED RESOURCE ", this.resources)
	      }

	      this.gui.update(this.resources);
	    }
	  }, {
	    key: 'getBuildingUnderCursor',
	    value: function getBuildingUnderCursor() {
	      var x = this.game.input.x;
	      var y = this.game.input.y;

	      var cell = this.worldToGrid(x, y);

	      return this.getBuilding(cell.x, cell.y);
	    }
	  }, {
	    key: 'displayCellInfos',
	    value: function displayCellInfos() {
	      var s = this.getBuildingUnderCursor();

	      if (!s) s = this.getCellUnderCursor();

	      console.log("displayCellInfos", s);

	      this.gui.displayCellInfos(s);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      //console.log("Drawing")
	      //this.game.debug.cameraInfo(this.game.camera, 32, 32);
	      var cc = this.getCellUnderCursor();

	      if (cc != null) {
	        var cPos = this.cellToWorld(cc.x, cc.y);

	        this.cursorVisor.x = cPos.x;
	        this.cursorVisor.y = cPos.y;

	        /*
	        var b = this.getBuilding(cc.x, cc.y)
	        if(b != null) {
	          this.game.debug.text( "Building: " + b.getInfo(), 600, 180 );
	        }
	        */

	        //this.game.debug.text( "Cursor hovering : " + cc.x+", "+cc.y + " Kind : "+cc.kind , 100, 380 );

	        /*
	        this.game.debug.text( "Resources: " +
	          " IRON PLATE : " + this.resources[Resources.IRON_PLATE] +
	          " | STONE BRICK : " + this.resources[Resources.STONE_BRICK]
	          , 100, 20)
	        */

	        this.toolbelt.render(cPos);
	      }
	    }
	  }, {
	    key: 'moveCamera',
	    value: function moveCamera() {
	      var cameraSpeed = 10;
	      if (this.cursors.up.isDown) this.game.camera.y -= cameraSpeed;else if (this.cursors.down.isDown) this.game.camera.y += cameraSpeed;

	      if (this.cursors.left.isDown) this.game.camera.x -= cameraSpeed;else if (this.cursors.right.isDown) this.game.camera.x += cameraSpeed;

	      //if (game.input.keyboard.isDown(Phaser.Keyboard.Q)) this.worldScale += 0.05
	      //else if (game.input.keyboard.isDown(Phaser.Keyboard.A)) this.worldScale -= 0.05

	      //Phaser.Math.clamp(this.worldScale, 0.25, 2)
	    }
	  }]);

	  return PlayState;
	}(Phaser.State);

	exports.default = PlayState;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _constants = __webpack_require__(2);

	var _grid = __webpack_require__(3);

	var _depot = __webpack_require__(6);

	var _depot2 = _interopRequireDefault(_depot);

	var _furnace = __webpack_require__(7);

	var _furnace2 = _interopRequireDefault(_furnace);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Car = function () {
	  function Car(x, y, sprite, stage, load, n) {
	    _classCallCheck(this, Car);

	    this.game = stage.game;
	    this.stage = stage;
	    this.load = load;
	    this.number = n;

	    this.wp = this.stage.cellToWorld(x, y);

	    this.sprite = this.stage.spritesGroups.cars.create(this.wp.x, this.wp.y, sprite);

	    var icon = '';
	    switch (load) {
	      case _grid.CellTypes.KIND_IRON:
	        icon = 'ironicon';
	        break;
	      case _grid.CellTypes.KIND_STONE:
	        icon = 'stoneicon';
	        break;
	      case _grid.CellTypes.KIND_COAL:
	        icon = 'coalicon';
	        break;
	      case _constants.Resources.IRON_PLATE:
	        icon = 'ironplateicon';
	        break;
	      case _constants.Resources.STONE_BRICK:
	        icon = 'stonebrickicon';
	        break;
	    }

	    this.iconSprite = this.stage.spritesGroups.cars.create(this.wp.x, this.wp.y, icon);

	    /*this.destinationSprite = this.stage.spritesGroups.cars.create(
	      this.wp.x,
	      this.wp.y,
	      'destination'
	    )*/

	    //this.destinationSprite.visible = false

	    this.path = [];
	    this.transitionTo = null;

	    this.speed = 4;

	    this.moving = false;
	  }

	  _createClass(Car, [{
	    key: 'cellToWorld',
	    value: function cellToWorld(x, y) {
	      return {
	        x: /*this.game.world.centerX +*/x * /*- this.game.world.centerX*/ /*- this.game.world.centerY*/_constants.CELL_SIZE,
	        y: /*this.game.world.centerY +*/y * _constants.CELL_SIZE
	      };
	    }
	  }, {
	    key: 'setPath',
	    value: function setPath(p) {
	      this.path = p;
	      //this.destinationSprite.visible = true
	      var dst = this.cellToWorld(p[p.length - 1].x, p[p.length - 1].y);
	      //this.destinationSprite.x = dst.x
	      //this.destinationSprite.y = dst.y
	    }
	  }, {
	    key: 'gridCoord',
	    value: function gridCoord() {
	      return {
	        x: Math.floor(this.sprite.x / _constants.CELL_SIZE),
	        y: Math.floor(this.sprite.y / _constants.CELL_SIZE)
	      };
	    }
	  }, {
	    key: 'update',
	    value: function update(cars) {
	      if (this.transitionTo != null) {
	        //console.log(">> Transition To", this.transitionTo)

	        var transitionToWorld = this.cellToWorld(this.transitionTo.x, this.transitionTo.y);
	        if (!this.moving) {

	          //console.log("Creating tween => ", this.sprite.x, this.sprite.y, " To ", transitionToWorld)
	          var gc = this.gridCoord();
	          var spd = this.stage.grid.getRoadSpeed(gc.x, gc.y);

	          if (spd != null) this.speed = spd;

	          var mvt = this.game.add.tween(this.sprite).to(transitionToWorld, 1000 / this.speed, Phaser.Easing.Linear.None, true);
	          mvt.onComplete.addOnce(function () {
	            this.moving = false;
	            this.transitionTo = null;
	          }, this);
	          mvt.start();
	          this.moving = true;
	        } else {
	          this.iconSprite.x = this.sprite.x;
	          this.iconSprite.y = this.sprite.y;

	          if (Math.round(this.sprite.x) == Math.round(transitionToWorld.x) && Math.round(this.sprite.y) == Math.round(transitionToWorld.y)) {
	            this.transitionTo = null;
	          }
	        }
	      } else if (this.path.length > 0) {
	        var dest = this.path[0];
	        //console.log("go to next")

	        var canGo = true;
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = cars[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var _c = _step.value;

	            if (_c != this) {
	              var p = _c.transitionTo || _c.gridCoord();
	              if (p.x == dest.x && p.y == dest.y) {
	                canGo = false;
	                break;
	              }
	            }
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }

	        if (canGo) this.transitionTo = this.path.shift();
	        //else console.log("I can't gooo :(")

	        //console.log("transit == ", this.transitionTo)
	      } else if (this.path.length == 0) {
	        //this.destinationSprite.visible = false

	        var gC = this.gridCoord();
	        var c = this.stage.getBuilding(gC.x, gC.y);

	        //console.log("no path -- ", gC, c)

	        if (c != null) {
	          if (c instanceof _depot2.default) {
	            c.addResource(this.load, this.number);
	          } else if (c instanceof _furnace2.default) {
	            c.add(this.load, this.number);
	          }
	        }

	        this.sprite.destroy();
	        this.iconSprite.destroy();
	        return true;
	      }

	      return false;
	    }
	  }]);

	  return Car;
	}();

	exports.default = Car;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _grid = __webpack_require__(3);

	var _constants = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Depot = function () {
	  function Depot(x, y, sprite, stage) {
	    _classCallCheck(this, Depot);

	    this.game = stage.game;
	    this.stage = stage;

	    this.wp = this.stage.cellToWorld(x, y);

	    this.sprite = this.stage.spritesGroups.buildings.create(this.wp.x, this.wp.y, sprite);

	    this.x = x;
	    this.y = y;

	    this.gridPos = { x: x, y: y };

	    this.contents = {};
	    this.contents[_constants.Resources.IRON_PLATE] = 0;
	    this.contents[_constants.Resources.STONE_BRICK] = 0;
	  }

	  _createClass(Depot, [{
	    key: 'addResource',
	    value: function addResource(t, n) {
	      //console.log("Add resource to depot : ", t, n, this.contents)
	      this.contents[t] += n;
	    }
	  }, {
	    key: 'getInfo',
	    value: function getInfo() {
	      return "Depot\n IRON : " + this.contents[_constants.Resources.IRON_PLATE] + " | STONE : " + this.contents[_constants.Resources.STONE_BRICK];
	    }
	  }]);

	  return Depot;
	}();

	exports.default = Depot;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _grid = __webpack_require__(3);

	var _constants = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Furnace = function () {
	  function Furnace(x, y, sprite, stage) {
	    _classCallCheck(this, Furnace);

	    this.game = stage.game;
	    this.stage = stage;

	    this.wp = this.stage.cellToWorld(x, y);

	    this.sprite = this.stage.spritesGroups.buildings.create(this.wp.x, this.wp.y, sprite);

	    this.x = x;
	    this.y = y;

	    this.gridPos = { x: x, y: y };

	    this.coalStorage = 0;
	    this.ironStorage = 0;
	    this.stoneStorage = 0;

	    this.ironPlateStorage = 0;
	    this.stoneBrickStorage = 0;

	    this.maxCoalStorage = 5;
	    this.maxMatterStorage = 20;
	    this.maxProductStorage = 40;

	    this.nowProducing = null;
	    this.productionTime = 10000;
	    this.productionTimer = 0;

	    this.matterInTransit = 0;
	  }

	  _createClass(Furnace, [{
	    key: 'addMatterInTransit',
	    value: function addMatterInTransit(n) {
	      this.matterInTransit += n;
	    }
	  }, {
	    key: 'matterStorage',
	    value: function matterStorage() {
	      return this.ironStorage + this.stoneStorage + this.matterInTransit;
	    }
	  }, {
	    key: 'outputStorage',
	    value: function outputStorage() {
	      return this.ironPlateStorage + this.stoneBrickStorage;
	    }
	  }, {
	    key: 'needFuel',
	    value: function needFuel() {
	      return this.coalStorage < this.maxCoalStorage;
	    }
	  }, {
	    key: 'needMatter',
	    value: function needMatter() {
	      return this.matterStorage() < this.maxMatterStorage;
	    }
	  }, {
	    key: 'outputStorageFull',
	    value: function outputStorageFull() {
	      return this.ironPlateStorage + this.stoneBrickStorage > this.maxProductStorage;
	    }
	  }, {
	    key: 'add',
	    value: function add(kind, n) {
	      switch (kind) {
	        case _grid.CellTypes.KIND_COAL:
	          this.coalStorage += n;
	          break;
	        case _grid.CellTypes.KIND_IRON:
	          this.ironStorage += n;
	          this.matterInTransit -= n;
	          break;
	        case _grid.CellTypes.KIND_STONE:
	          this.stoneStorage += n;
	          this.matterInTransit -= n;
	          break;
	      }
	    }
	  }, {
	    key: 'work',
	    value: function work() {
	      if (Math.random() > 0.5) this._work(_grid.CellTypes.KIND_IRON);else this._work(_grid.CellTypes.KIND_STONE);
	    }
	  }, {
	    key: '_work',
	    value: function _work(k) {
	      if (this.coalStorage >= 1 && !this.outputStorageFull())
	        //console.log("_work", this)
	        switch (k) {
	          case _grid.CellTypes.KIND_STONE:
	            if (this.stoneStorage >= 10) {
	              this.nowProducing = _constants.Resources.STONE_BRICK;
	              this.stoneStorage -= 10;
	              this.coalStorage -= 2;
	            }
	            break;
	          case _grid.CellTypes.KIND_IRON:
	            if (this.ironStorage >= 10) {
	              this.nowProducing = _constants.Resources.IRON_PLATE;
	              this.ironStorage -= 10;
	              this.coalStorage -= 2;
	            }
	            break;
	        }
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      var t = this.game.time.elapsed;

	      this.productionTimer += t;
	      if (this.productionTimer >= this.productionTime) {
	        this.productionTimer = 0;

	        switch (this.nowProducing) {
	          case _constants.Resources.IRON_PLATE:
	            this.ironPlateStorage += 10;
	            break;
	          case _constants.Resources.STONE_BRICK:
	            this.stoneBrickStorage += 10;
	            break;
	        }
	        this.nowProducing = null;
	      }
	      if (this.nowProducing == null) this.work();
	      if (this.outputStorage() > 0 && !this.stage.hasCarAt(this.gridPos)) {
	        var d = this.stage.findClosestDepot(this.x, this.y);

	        if (d != null) {
	          this.stage.createCar(this.x, this.y, { x: d.gridPos.x, y: d.gridPos.y }, this.takeProduct(), 10);
	        }
	      }
	    }
	  }, {
	    key: 'takeProduct',
	    value: function takeProduct() {
	      if (this.stoneBrickStorage == 0) return this.takeIronPlate();else if (this.ironPlateStorage == 0) return this.takeStoneBrick();else if (Math.random() > 0.5) return this.takeStoneBrick();else return this.takeIronPlate();
	    }
	  }, {
	    key: 'takeStoneBrick',
	    value: function takeStoneBrick() {
	      this.stoneBrickStorage -= 10;
	      return _constants.Resources.STONE_BRICK;
	    }
	  }, {
	    key: 'takeIronPlate',
	    value: function takeIronPlate() {
	      this.ironPlateStorage -= 10;
	      return _constants.Resources.IRON_PLATE;
	    }
	  }, {
	    key: 'getInfo',
	    value: function getInfo() {
	      return "Furnace\nCoal " + this.coalStorage + "\nIron " + this.ironStorage + "\nStone " + this.stoneStorage + "\nOut Iron " + this.ironPlateStorage + "\nOutStone " + this.stoneBrickStorage + "\nMatterInTransit " + this.matterInTransit;
	    }
	  }]);

	  return Furnace;
	}();

	exports.default = Furnace;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _grid = __webpack_require__(3);

	var _constants = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Mine = function () {
	  function Mine(x, y, sprite, stage) {
	    _classCallCheck(this, Mine);

	    this.game = stage.game;
	    this.stage = stage;

	    this.wp = this.stage.cellToWorld(x, y);

	    this.sprite = this.stage.spritesGroups.buildings.create(this.wp.x, this.wp.y, sprite);

	    this.x = x;
	    this.y = y;

	    this.gridPos = { x: x, y: y };
	    console.log("Buildin mine at : ", this.gridPos);

	    console.log(this.gridPos);
	    this.product = stage.grid.getCell(this.gridPos.x, this.gridPos.y).kind || null;
	    this.productionTime = (0, _constants.CellProduction)(this.product);
	    this.productionTimer = 0;
	  }

	  _createClass(Mine, [{
	    key: 'update',
	    value: function update() {
	      var t = this.game.time.elapsed;

	      this.productionTimer += t;
	      if (this.product != null && this.productionTimer >= this.productionTime && !this.stage.hasCarAt(this.gridPos)) {
	        //console.log("Producted ! "+this.product)
	        this.productionTimer = 0;

	        var d = null;
	        switch (this.product) {
	          case _grid.CellTypes.KIND_IRON:
	            d = this.stage.findClosestFurnace(this.x, this.y, false);
	            break;
	          case _grid.CellTypes.KIND_COAL:
	            d = this.stage.findClosestFurnace(this.x, this.y, true);
	            break;
	          case _grid.CellTypes.KIND_STONE:
	            d = this.stage.findClosestFurnace(this.x, this.y, false);
	            break;
	        }

	        if (d != null) {
	          if (this.product != _grid.CellTypes.KIND_COAL) d.addMatterInTransit(10);
	          this.stage.createCar(this.x, this.y, { x: d.gridPos.x, y: d.gridPos.y }, this.product, 10);
	        } else {
	          console.log("no route for mine producing " + (0, _grid.CellTypesHuman)(this.product) + ", mine located at : " + this.x + "," + this.y);
	        }
	      }
	    }
	  }, {
	    key: 'getInfo',
	    value: function getInfo() {
	      return "Mine";
	    }
	  }]);

	  return Mine;
	}();

	exports.default = Mine;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _constants = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Road = function Road(x, y, direction) {
	  _classCallCheck(this, Road);

	  this.sprite = stage.game.add.sprite(x, y, _constants.Direction.toSprite(direction));
	};

	exports.default = Road;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _constants = __webpack_require__(2);

	var _grid = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ToolBelt = function () {
	  function ToolBelt(stage) {
	    var _this = this;

	    _classCallCheck(this, ToolBelt);

	    this.game = stage.game;
	    this.stage = stage;

	    var keys = [{ key: Phaser.Keyboard.ESC, action: this.unselect }, { key: Phaser.Keyboard.ONE, action: function action() {
	        return _this.select('road1');
	      } }, { key: Phaser.Keyboard.TWO, action: function action() {
	        return _this.select('road2');
	      } }, { key: Phaser.Keyboard.THREE, action: function action() {
	        return _this.select('road3');
	      } }, { key: Phaser.Keyboard.FOUR, action: function action() {
	        return _this.select('mine');
	      } }, { key: Phaser.Keyboard.FIVE, action: function action() {
	        return _this.select('depot');
	      } }, { key: Phaser.Keyboard.SIX, action: function action() {
	        return _this.select('furnace');
	      } }, { key: Phaser.Keyboard.R, action: this.rotateSelection }].map(function (k) {
	      var key = _this.game.input.keyboard.addKey(k.key);
	      key.onDown.add(k.action, _this);
	    });

	    this.selected = null;

	    this.hoverSprites = {};

	    var genSpritesHover = ['road1', 'road2', 'road3', 'car', 'mine', 'furnace', 'depot'].map(function (s) {
	      var hoverSprite = this.stage.spritesGroups.hover.create(0, 0, s);
	      hoverSprite.alpha = 0.5;
	      hoverSprite.visible = false;
	      hoverSprite.anchor.setTo(0.5, 0.5);

	      //console.log( this.hoverSprites )
	      this.hoverSprites[s] = hoverSprite;
	    }.bind(this));

	    console.log("Toolbelt up", this.hoverSprites);
	  }

	  _createClass(ToolBelt, [{
	    key: 'unselect',
	    value: function unselect() {
	      this.selected.sprite.visible = false;
	      this.selected = null;
	    }
	  }, {
	    key: 'rotateSelection',
	    value: function rotateSelection() {
	      if (this.selected == null) return;

	      this.selected.direction = (this.selected.direction + 1) % 4;

	      switch (this.selected.direction) {
	        case _constants.Direction.E:
	          this.selected.sprite.angle = 90;
	          break;
	        case _constants.Direction.S:
	          this.selected.sprite.angle = 180;
	          break;
	        case _constants.Direction.W:
	          this.selected.sprite.angle = 270;
	          break;
	        default:
	          this.selected.sprite.angle = 0;
	      }
	    }
	  }, {
	    key: 'getHoverSprite',
	    value: function getHoverSprite(s) {
	      return this.hoverSprites[s];
	    }
	  }, {
	    key: 'select',
	    value: function select(s) {
	      if (this.selected != null) this.selected.sprite.visible = false;
	      this.selected = {
	        sprite: this.getHoverSprite(s),
	        type: s,
	        direction: _constants.Direction.N
	      };
	      this.selected.sprite.visible = true;
	      this.selected.sprite.angle = 0;
	    }
	  }, {
	    key: 'render',
	    value: function render(cursorGridPos) {
	      if (this.selected != null) {
	        //console.log("SELECTED POS => "+cc.x+", "+cc.y)
	        this.selected.sprite.x = cursorGridPos.x + _constants.CELL_SIZE / 2;
	        this.selected.sprite.y = cursorGridPos.y + _constants.CELL_SIZE / 2;
	      }
	    }
	  }, {
	    key: 'canAfford',
	    value: function canAfford() {
	      console.log(this.selected, _grid.Prices);
	      var p = _grid.Prices[this.selected.type];
	      if (p == null) return false;else {
	        console.log("canAfford ? ", this.selected.type, this.stage.resources);
	        return this.stage.resources[_constants.Resources.IRON_PLATE] >= p.IRON && this.stage.resources[_constants.Resources.STONE_BRICK] >= p.STONE;
	      }
	    }
	  }, {
	    key: 'onMouseDown',
	    value: function onMouseDown() {
	      if (this.selected != null) {
	        if (!this.canAfford(this.selected)) return;

	        var p = this.stage.worldToGrid(this.game.input.x, this.game.input.y);
	        var wp = this.stage.cellToWorld(p.x, p.y);

	        //console.log("Mouse down on grid "+p.x+","+p.y)

	        switch (this.selected.type) {
	          case 'road1':
	          case 'road2':
	          case 'road3':
	            this.stage.removeConstruction(p.x, p.y);
	            var spd = 1;
	            switch (this.selected.type) {
	              case 'road1':
	                spd = 1;break;
	              case 'road2':
	                spd = 2;break;
	              case 'road3':
	                spd = 6;break;
	            }
	            this.stage.createRoad(p.x, p.y, this.selected.direction, spd, this.selected.type);
	            break;
	          case 'car':
	            this.stage.createCar(wp.x, wp.y);
	            break;
	          case 'depot':
	            this.stage.removeConstruction(p.x, p.y);
	            this.stage.createDepot(p.x, p.y);
	            break;
	          case 'furnace':
	            this.stage.removeConstruction(p.x, p.y);
	            this.stage.createFurnace(p.x, p.y);
	            break;
	          case 'mine':
	            var dest = this.stage.grid.getCell(p.x, p.y);
	            if (dest != null && (0, _grid.CellTypeMinable)(dest.kind)) this.stage.createMine(p.x, p.y);
	            break;
	          default:
	        }
	      } else {

	        this.stage.displayCellInfos();
	      }
	    }
	  }]);

	  return ToolBelt;
	}();

	exports.default = ToolBelt;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _grid = __webpack_require__(3);

	var _constants = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Gui = function () {
	  function Gui(stage) {
	    _classCallCheck(this, Gui);

	    this.game = stage.game;
	    this.stage = stage;

	    this.group = this.game.add.group();

	    var bkg = this.group.create(this.game.width - 400, 0, 'guibkg');
	    bkg.fixedToCamera = true;

	    this.resourcesText = this.game.add.text(this.game.width - 350, 20, "", { font: "18px Arial", fill: "#ffffff", align: "center" });
	    this.resourcesText.fixedToCamera = true;

	    this.title = this.game.add.text(this.game.width - 300, 70, "", { font: "24px Arial", fill: "#ffffff", align: "center" });
	    this.title.fixedToCamera = true;

	    //this.details = this.game.add.text(this.game.width - 300, 120, "Details", { font: "24px Arial", fill: "#f26c4f", align: "center" })

	    this.currentlyShowing = null;

	    this.toggleN = this.group.create(this.game.width - 250, 150, 'toggle_on');
	    this.toggleE = this.group.create(this.game.width - 150, 250, 'toggle_on');
	    this.toggleS = this.group.create(this.game.width - 250, 350, 'toggle_on');
	    this.toggleW = this.group.create(this.game.width - 350, 250, 'toggle_on');

	    this.toggleN.fixedToCamera = true;
	    this.toggleE.fixedToCamera = true;
	    this.toggleS.fixedToCamera = true;
	    this.toggleW.fixedToCamera = true;

	    this.toggleN.inputEnabled = true;
	    this.toggleE.inputEnabled = true;
	    this.toggleS.inputEnabled = true;
	    this.toggleW.inputEnabled = true;

	    this.toggleN.events.onInputDown.add(this.toggleEntrance(_constants.Direction.N), this);
	    this.toggleE.events.onInputDown.add(this.toggleEntrance(_constants.Direction.E), this);
	    this.toggleS.events.onInputDown.add(this.toggleEntrance(_constants.Direction.S), this);
	    this.toggleW.events.onInputDown.add(this.toggleEntrance(_constants.Direction.W), this);

	    this.hideTogglers();
	  }

	  _createClass(Gui, [{
	    key: 'toggleEntrance',
	    value: function toggleEntrance(d) {
	      return function () {
	        console.log("Toggle entrance !" + d + ", ", this.currentlyShowing);
	        switch (d) {
	          case _constants.Direction.N:
	            this.currentlyShowing.entrances.N = (this.currentlyShowing.entrances.N + 1) % 2;
	            break;
	          case _constants.Direction.S:
	            this.currentlyShowing.entrances.S = (this.currentlyShowing.entrances.S + 1) % 2;
	            break;
	          case _constants.Direction.W:
	            this.currentlyShowing.entrances.W = (this.currentlyShowing.entrances.W + 1) % 2;
	            break;
	          case _constants.Direction.E:
	            this.currentlyShowing.entrances.E = (this.currentlyShowing.entrances.E + 1) % 2;
	            break;
	        }

	        this.stage.grid.refreshRoad(this.currentlyShowing.x, this.currentlyShowing.y);
	      };
	    }
	  }, {
	    key: 'hideTogglers',
	    value: function hideTogglers() {
	      this.toggleN.visible = false;
	      this.toggleE.visible = false;
	      this.toggleS.visible = false;
	      this.toggleW.visible = false;
	    }
	  }, {
	    key: 'displayTogglers',
	    value: function displayTogglers(entrances) {
	      //console.log("ENTRANCES", entrances)
	      this.toggleN.visible = true;
	      this.toggleE.visible = true;
	      this.toggleS.visible = true;
	      this.toggleW.visible = true;

	      if (entrances.N) this.toggleN.loadTexture('toggle_on');else this.toggleN.loadTexture('toggle_off');

	      if (entrances.E) this.toggleE.loadTexture('toggle_on');else this.toggleE.loadTexture('toggle_off');

	      if (entrances.S) this.toggleS.loadTexture('toggle_on');else this.toggleS.loadTexture('toggle_off');

	      if (entrances.W) this.toggleW.loadTexture('toggle_on');else this.toggleW.loadTexture('toggle_off');
	    }
	  }, {
	    key: 'displayCellInfos',
	    value: function displayCellInfos(it) {
	      if (it == null) return;

	      this.currentlyShowing = it;
	      //console.log("currentlyShowing", it)

	      try {
	        this.title.text = this.currentlyShowing.getInfo();

	        this.hideTogglers();
	      } catch (e) {
	        if (it.kind == _grid.CellTypes.KIND_ROAD) {
	          this.title.text = "Road";
	          this.displayTogglers(it.entrances);
	        }
	      }

	      //console.log("displayItem", it)
	    }
	  }, {
	    key: 'update',
	    value: function update(resources) {
	      this.displayCellInfos(this.currentlyShowing);

	      this.resourcesText.text = "IRON PLATE : " + resources[_constants.Resources.IRON_PLATE] + " | STONE BRICK : " + resources[_constants.Resources.STONE_BRICK];
	    }
	  }]);

	  return Gui;
	}();

	exports.default = Gui;

/***/ })
/******/ ]);