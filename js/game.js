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

	      console.log(_constants.WORLD_W, _constants.WORLD_H);
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
	      return 3000;break;
	    case _grid.CellTypes.KIND_COAL:
	      return 5500;break;
	    case _grid.CellTypes.KIND_IRON:
	      return 8000;break;
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

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CellTypes = exports.Grid = undefined;

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

	var Cell = function () {
	  function Cell(x, y, kind, stage) {
	    _classCallCheck(this, Cell);

	    this.x = x;
	    this.y = y;
	    this.kind = kind;

	    var p = stage.cellToWorld(x, y);
	    this.sprite = stage.game.add.sprite(p.x, p.y, stage.cellSpriteName(kind));
	  }

	  _createClass(Cell, [{
	    key: "print",
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

	    var waterTiles = 0;

	    for (var y = 0; y < h; y++) {
	      this.g.push([]);
	      for (var x = 0; x < w; x++) {

	        var hasOnlyEarthNeighbours = this.neighbours(x, y).reduceRight(function (acc, c) {
	          return acc && c.kind == CellTypes.KIND_EARTH;
	        }, true);

	        var c = new Cell(x, y, hasOnlyEarthNeighbours && waterTiles < 6 && Math.random() < 0.3 ? CellTypes.KIND_WATER : CellTypes.KIND_EARTH, this.stage);

	        this.g[y].push(c);

	        if (c.kind == CellTypes.KIND_WATER) waterTiles++;
	      }
	    }

	    this.putResources();
	    this.putShip();

	    this.star = new EasyStar.js();

	    this.initGrid();

	    this.star.setAcceptableTiles(this.walkables());
	  }

	  _createClass(Grid, [{
	    key: "putShip",
	    value: function putShip() {

	      var shipC = this.getRandCell(CellTypes.KIND_EARTH);

	      if (this.neighbours(shipC.x, shipC.y).reduceRight(function (acc, c) {
	        return acc && c.kind == CellTypes.KIND_EARTH;
	      }, true)) {
	        shipC.sprite.loadTexture(this.stage.cellSpriteName(CellTypes.KIND_SHIP));
	        shipC.kind = CellTypes.KIND_SHIP;
	      } else this.putShip();
	    }
	  }, {
	    key: "neighbours",
	    value: function neighbours(x, y) {
	      var _this = this;

	      return [{ x: x - 1, y: y }, { x: x + 1, y: y }, { x: x, y: y + 1 }, { x: x, y: y - 1 }].map(function (p) {
	        return _this.getCell(p.x, p.y);
	      }).filter(function (c) {
	        return c != null;
	      });
	    }
	  }, {
	    key: "putResources",
	    value: function putResources() {
	      for (var i = 0; i < 10; i++) {
	        var c1 = this.getRandCell(CellTypes.KIND_EARTH);
	        c1.sprite.loadTexture(this.stage.cellSpriteName(CellTypes.KIND_STONE));
	        c1.kind = CellTypes.KIND_STONE;
	      }

	      for (var i = 0; i < 4; i++) {
	        var c2 = this.getRandCell(CellTypes.KIND_EARTH);
	        c2.sprite.loadTexture(this.stage.cellSpriteName(CellTypes.KIND_COAL));
	        c2.kind = CellTypes.KIND_COAL;
	      }

	      for (var i = 0; i < 20; i++) {
	        var c3 = this.getRandCell(CellTypes.KIND_EARTH);
	        c3.sprite.loadTexture(this.stage.cellSpriteName(CellTypes.KIND_IRON));
	        c3.kind = CellTypes.KIND_IRON;
	      }
	    }
	  }, {
	    key: "initGrid",
	    value: function initGrid() {
	      this.star.setGrid(this.g.map(function (c) {
	        return c.map(function (cell) {
	          return cell.kind;
	        });
	      }));
	    }
	  }, {
	    key: "getRandCell",
	    value: function getRandCell(kind) {
	      //kind = kind || CellTypes.KIND_EARTH

	      var c = this.getCell(Math.floor(Math.random() * this.w), Math.floor(Math.random() * this.h));

	      if (kind == null || c.kind == kind) return c;else return this.getRandCell(kind);
	    }
	  }, {
	    key: "toEasterStar",
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
	    key: "addRoad",
	    value: function addRoad(x, y, dir) {
	      var _this2 = this;

	      this.g[y][x] = { x: x, y: y, dir: dir, kind: CellTypes.KIND_ROAD };
	      this.initGrid();
	      this.star.setDirectionalCondition(x, y, [EasyStar.BOTTOM, EasyStar.LEFT, EasyStar.TOP, EasyStar.RIGHT].filter(function (d) {
	        return d != _this2.toEasterStar(dir);
	      }));
	    }
	  }, {
	    key: "addBuilding",
	    value: function addBuilding(x, y) {
	      this.g[y][x].kind = CellTypes.KIND_ROAD;
	      this.star.setAdditionalPointCost(x, y, 99999);
	      this.initGrid();
	    }
	  }, {
	    key: "walkables",
	    value: function walkables() {
	      return [CellTypes.KIND_ROAD, CellTypes.KIND_DEPOT];
	    }
	  }, {
	    key: "path",
	    value: function path(from, to, callback) {
	      this.star.findPath(from.x, from.y, to.x, to.y, callback);
	      this.star.calculate();
	    }
	  }, {
	    key: "getCell",
	    value: function getCell(x, y) {
	      //console.log(this.g.length, this.g[0].length)
	      try {
	        return this.g[y][x];
	      } catch (e) {
	        return null;
	      }
	    }
	  }, {
	    key: "forEach",
	    value: function forEach(f) {
	      this.g.forEach(function (col) {
	        col.forEach(f);
	        //function(cell) { })
	      });
	    }
	  }, {
	    key: "printGrid",
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
	      this.game.load.image('road', 'assets/sprites/roadN.png');
	      this.game.load.image('destination', 'assets/sprites/destination.png');
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
	      this.grid = new _grid.Grid(_constants.WORLD_CELL_X, _constants.WORLD_CELL_Y, this);
	      //this.grid.printGrid()

	      this.game.camera.x = 0; //this.game.world.centerX
	      this.game.camera.y = 0; //this.game.world.centerY

	      //this.worldScale = 1.0

	      this.cursorVisor = this.game.add.sprite(0, 0, 'cursorvisor');

	      this.game.input.mouse.capture = true;

	      this.toolbelt = new _toolbelt2.default(this);

	      this.game.input.onDown.add(this.toolbelt.onMouseDown, this.toolbelt);

	      this.cars = [];
	      this.mines = [];

	      this.depots = [];
	      this.furnaces = [];

	      this.resources = {};
	      this.resources[_constants.Resources.IRON_PLATE] = 0;
	      this.resources[_constants.Resources.STONE_BRICK] = 0;
	    }
	  }, {
	    key: 'addResource',
	    value: function addResource(load, n) {
	      this.resources[load] = this.resources[load] + n;
	      console.log(load, n, this.resources);
	    }
	  }, {
	    key: 'createRoad',
	    value: function createRoad(x, y, dir) {
	      console.log("create Road");
	      var wp = this.cellToWorld(x, y);

	      var s = this.game.add.sprite(wp.x + _constants.CELL_SIZE / 2, wp.y + _constants.CELL_SIZE / 2, 'road');
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

	      this.grid.addRoad(x, y, dir);
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
	    key: 'createFurnace',
	    value: function createFurnace(x, y) {
	      this.furnaces.push(new _furnace2.default(x, y, 'furnace', this));

	      var gridCoords = this.worldToGrid(x, y);
	      this.grid.addBuilding(gridCoords.x, gridCoords.y);
	    }
	  }, {
	    key: 'createDepot',
	    value: function createDepot(x, y) {
	      this.depots.push(new _depot2.default(x, y, 'depot', this));

	      var gridCoords = this.worldToGrid(x, y);
	      this.grid.addBuilding(gridCoords.x, gridCoords.y);
	    }
	  }, {
	    key: 'createCar',
	    value: function createCar(x, y, to, load, n) {
	      to = to || null;
	      load = load || null;

	      var from = this.worldToGrid(x, y);

	      this.grid.path(from, to, function (p) {
	        if (p == null) console.log("Not path");else {
	          var car = new _car2.default(x, y, 'car', this, load, n);
	          car.setPath(p);
	          this.cars.push(car);
	        }
	      }.bind(this));
	    }
	  }, {
	    key: 'createMine',
	    value: function createMine(x, y) {
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

	        var b = this.getBuilding(cc.x, cc.y);
	        if (b != null) {
	          this.game.debug.text("Building: " + b.getInfo(), 600, 180);
	        }

	        this.game.debug.text("Cursor hovering : " + cc.x + ", " + cc.y + " Kind : " + cc.kind, 100, 380);

	        this.game.debug.text("Resources: " + " IRON PLATE : " + this.resources[_constants.Resources.IRON_PLATE] + " | STONE BRICK : " + this.resources[_constants.Resources.STONE_BRICK], 100, 20);

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

	    this.sprite = game.add.sprite(x, y, sprite);

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
	    this.iconSprite = game.add.sprite(x, y, icon);

	    this.destinationSprite = game.add.sprite(x, y, 'destination');

	    this.destinationSprite.visible = false;

	    this.path = [];
	    this.transitionTo = null;

	    this.speed = {
	      x: 1.0, y: 1.0
	    };
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
	      this.destinationSprite.visible = true;
	      var dst = this.cellToWorld(p[p.length - 1].x, p[p.length - 1].y);
	      this.destinationSprite.x = dst.x;
	      this.destinationSprite.y = dst.y;
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

	        this.sprite.x += (transitionToWorld.x - this.sprite.x > 0 ? 1 : -1) * this.speed.x;

	        this.sprite.y += (transitionToWorld.y - this.sprite.y > 0 ? 1 : -1) * this.speed.y;

	        this.iconSprite.x = this.sprite.x;
	        this.iconSprite.y = this.sprite.y;

	        if (Math.round(this.sprite.x) == Math.round(transitionToWorld.x) && Math.round(this.sprite.y) == Math.round(transitionToWorld.y)) {
	          this.transitionTo = null;
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
	        this.destinationSprite.visible = false;

	        var gC = this.gridCoord();
	        var c = this.stage.getBuilding(gC.x, gC.y);

	        //console.log("no path -- ", gC, c)

	        if (c != null) {
	          if (c instanceof _depot2.default) {
	            this.stage.addResource(this.load, this.number);
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

	    this.sprite = game.add.sprite(x, y, sprite);

	    this.x = x;
	    this.y = y;

	    this.gridPos = stage.worldToGrid(x, y);
	  }

	  _createClass(Depot, [{
	    key: 'getInfo',
	    value: function getInfo() {
	      return "Depot";
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

	    this.sprite = game.add.sprite(x, y, sprite);

	    this.x = x;
	    this.y = y;

	    this.gridPos = stage.worldToGrid(x, y);

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
	  }

	  _createClass(Furnace, [{
	    key: 'matterStorage',
	    value: function matterStorage() {
	      return this.ironStorage + this.stoneStorage;
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
	          break;
	        case _grid.CellTypes.KIND_STONE:
	          this.stoneStorage += n;
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
	      return _constants.Resources.IRON_PLATE;
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
	      return "Furnace. Coal " + this.coalStorage + " | Iron " + this.ironStorage + " | Stone " + this.stoneStorage + " | Out Iron " + this.ironPlateStorage + " | OutStone " + this.stoneBrickStorage;
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

	    this.sprite = game.add.sprite(x, y, sprite);

	    this.x = x;
	    this.y = y;

	    this.gridPos = stage.worldToGrid(x, y);

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
	          this.stage.createCar(this.x, this.y, { x: d.gridPos.x, y: d.gridPos.y }, this.product, 10);
	        } else {
	          console.log("no route", this.x, this.y);
	        }
	      }
	    }
	  }, {
	    key: 'getInfo',
	    value: function getInfo() {
	      return "Mine of " + this.product;
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

	  this.sprite = game.add.sprite(x, y, _constants.Direction.toSprite(direction));
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

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ToolBelt = function () {
	  function ToolBelt(stage) {
	    var _this = this;

	    _classCallCheck(this, ToolBelt);

	    this.game = stage.game;
	    this.stage = stage;

	    var keys = [{ key: Phaser.Keyboard.ESC, action: this.unselect }, { key: Phaser.Keyboard.ONE, action: function action() {
	        return _this.select('road');
	      } }, { key: Phaser.Keyboard.TWO, action: function action() {
	        return _this.select('car');
	      } }, { key: Phaser.Keyboard.THREE, action: function action() {
	        return _this.select('mine');
	      } }, { key: Phaser.Keyboard.FOUR, action: function action() {
	        return _this.select('depot');
	      } }, { key: Phaser.Keyboard.FIVE, action: function action() {
	        return _this.select('furnace');
	      } }, { key: Phaser.Keyboard.R, action: this.rotateSelection }].map(function (k) {
	      var key = _this.game.input.keyboard.addKey(k.key);
	      key.onDown.add(k.action, _this);
	    });

	    this.selected = null;

	    this.hoverSprites = {};

	    var genSpritesHover = ['road', 'car', 'mine', 'furnace', 'depot'].map(function (s) {
	      var hoverSprite = this.game.add.sprite(0, 0, s);
	      hoverSprite.alpha = 0.5;
	      hoverSprite.visible = false;
	      hoverSprite.anchor.setTo(0.5, 0.5);

	      console.log(this.hoverSprites);
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
	    key: 'select',
	    value: function select(s) {
	      if (this.selected != null) this.selected.sprite.visible = false;
	      this.selected = {
	        sprite: this.hoverSprites[s],
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
	    key: 'onMouseDown',
	    value: function onMouseDown() {
	      if (this.selected != null) {
	        var p = this.stage.worldToGrid(this.game.input.x, this.game.input.y);
	        var wp = this.stage.cellToWorld(p.x, p.y);

	        //console.log(this.selected.type)

	        switch (this.selected.type) {
	          case 'road':
	            this.stage.createRoad(p.x, p.y, this.selected.direction);
	            break;
	          case 'car':
	            this.stage.createCar(wp.x, wp.y);
	            break;
	          case 'depot':
	            this.stage.createDepot(wp.x, wp.y);
	            break;
	          case 'furnace':
	            this.stage.createFurnace(wp.x, wp.y);
	            break;
	          case 'mine':
	            this.stage.createMine(wp.x, wp.y);
	            break;
	          default:
	        }
	      }
	    }
	  }]);

	  return ToolBelt;
	}();

	exports.default = ToolBelt;

/***/ })
/******/ ]);