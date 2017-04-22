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

	var _play = __webpack_require__(3);

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
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CELL_SIZE = 64;

	var WORLD_CELL_X = 10;
	var WORLD_CELL_Y = 6;
	var WORLD_W = CELL_SIZE * WORLD_CELL_X;
	var WORLD_H = CELL_SIZE * WORLD_CELL_Y;

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

	exports.CELL_SIZE = CELL_SIZE;
	exports.Direction = Direction;
	exports.WORLD_CELL_X = WORLD_CELL_X;
	exports.WORLD_CELL_Y = WORLD_CELL_Y;
	exports.WORLD_W = WORLD_W;
	exports.WORLD_H = WORLD_H;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _grid = __webpack_require__(4);

	var _car = __webpack_require__(5);

	var _car2 = _interopRequireDefault(_car);

	var _road = __webpack_require__(6);

	var _road2 = _interopRequireDefault(_road);

	var _toolbelt = __webpack_require__(7);

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
	      this.game.load.image('car', 'assets/sprites/car.png');
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
	    key: 'cursorToGrid',
	    value: function cursorToGrid(x, y) {
	      return {
	        x: Math.floor((x + this.game.camera.x) / /*- this.game.world.centerX*/ /*- this.game.world.centerY*/_constants.CELL_SIZE),
	        y: Math.floor((y + this.game.camera.y) / _constants.CELL_SIZE)
	      };
	    }
	  }, {
	    key: 'getCellUnderCursor',
	    value: function getCellUnderCursor() {
	      var x = this.game.input.x;
	      var y = this.game.input.y;

	      var cell = this.cursorToGrid(x, y);

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
	    key: 'createCar',
	    value: function createCar(x, y) {
	      var car = new _car2.default(x, y, 'car', this);
	      this.cars.push(car);
	      var from = car.gridCoord();
	      var to = { x: 0, y: 0 }; //this.grid.getRandCell()
	      //console.log(to)

	      this.grid.path(from, to, function (p) {
	        if (p == null) console.log("Not path");else {
	          console.log("Path : ");
	          p.map(function (c) {
	            return console.log(c);
	          });
	          console.log("--------");
	          this.setPath(p);
	        }
	      }.bind(car));
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
	    key: 'update',
	    value: function update() {
	      var _this2 = this;

	      this.moveCamera();
	      //this.game.world.scale.set(this.worldScale)
	      this.cars.map(function (c) {
	        return c.update(_this2.cars);
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

	        this.game.debug.text("Cursor hovering : " + cc.x + ", " + cc.y + " Kind : " + cc.kind, 100, 380);

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
/* 4 */
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
	      var c1 = this.getRandCell(CellTypes.KIND_EARTH);
	      c1.sprite.loadTexture(this.stage.cellSpriteName(CellTypes.KIND_STONE));
	      c1.kind = CellTypes.KIND_STONE;

	      var c2 = this.getRandCell(CellTypes.KIND_EARTH);
	      c2.sprite.loadTexture(this.stage.cellSpriteName(CellTypes.KIND_COAL));
	      c2.kind = CellTypes.KIND_COAL;

	      var c3 = this.getRandCell(CellTypes.KIND_EARTH);
	      c3.sprite.loadTexture(this.stage.cellSpriteName(CellTypes.KIND_IRON));
	      c3.kind = CellTypes.KIND_IRON;
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
	    key: "walkables",
	    value: function walkables() {
	      return [CellTypes.KIND_ROAD];
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _constants = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Car = function () {
	  function Car(x, y, sprite, stage) {
	    _classCallCheck(this, Car);

	    this.game = stage.game;
	    this.stage = stage;

	    this.sprite = game.add.sprite(x, y, sprite);

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
	        //var p = this.gridCoord()

	        //console.log("update ", this.transitionTo, p, (this.transitionTo.x - p.x) + ", "+ (this.transitionTo.y - p.y))

	        var transitionToWorld = this.cellToWorld(this.transitionTo.x, this.transitionTo.y);

	        //console.log( Math.round(transitionToWorld.x) == Math.round(this.sprite.x), Math.round(transitionToWorld.y) == Math.round(this.sprite.y))


	        //console.log((this.sprite.x +"-"+ transitionToWorld.x) + ", "+(this.sprite.y +"-"+ transitionToWorld.y))

	        this.sprite.x += (transitionToWorld.x - this.sprite.x > 0 ? 1 : -1) * this.speed.x;

	        this.sprite.y += (transitionToWorld.y - this.sprite.y > 0 ? 1 : -1) * this.speed.y;

	        //p = this.gridCoord()
	        //var toWorld = this.cellToWorld(p.x, p.y)

	        //console.log( Math.round(toWorld.x) + " == " + Math.round(this.sprite.x) + " && " + Math.round(toWorld.y) +" == "+Math.round(this.sprite.y))

	        //if(Math.round(toWorld.x) == Math.round(this.sprite.x) &&
	        //Math.round(toWorld.y) == Math.round(this.sprite.y)) {

	        if (Math.round(this.sprite.x) == Math.round(transitionToWorld.x) && Math.round(this.sprite.y) == Math.round(transitionToWorld.y)) {
	          this.transitionTo = null;
	        }
	      } else if (this.path.length > 0) {
	        var dest = this.path[0];

	        var canGo = true;
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = cars[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var c = _step.value;

	            if (c != this) {
	              var p = c.transitionTo || c.gridCoord();
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
	      } else if (this.path.length == 0) {
	        this.destinationSprite.visible = false;
	      }
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

	var _constants = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Road = function Road(x, y, direction) {
	  _classCallCheck(this, Road);

	  this.sprite = game.add.sprite(x, y, _constants.Direction.toSprite(direction));
	};

	exports.default = Road;

/***/ }),
/* 7 */
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
	    _classCallCheck(this, ToolBelt);

	    this.game = stage.game;
	    this.stage = stage;

	    var keyEsc = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
	    keyEsc.onDown.add(this.unselect, this);

	    var key1 = this.game.input.keyboard.addKey(Phaser.Keyboard.ONE);
	    key1.onDown.add(this.selectRoad, this);

	    var key2 = this.game.input.keyboard.addKey(Phaser.Keyboard.TWO);
	    key2.onDown.add(this.selectCar, this);

	    var keyR = this.game.input.keyboard.addKey(Phaser.Keyboard.R);
	    keyR.onDown.add(this.rotateSelection, this);

	    this.selected = null;

	    this.roadHover = this.game.add.sprite(0, 0, 'road');
	    this.roadHover.alpha = 0.5;
	    this.roadHover.visible = false;
	    this.roadHover.anchor.setTo(0.5, 0.5);

	    this.carHover = this.game.add.sprite(0, 0, 'car');
	    this.carHover.alpha = 0.5;
	    this.carHover.visible = false;
	    this.carHover.anchor.setTo(0.5, 0.5);

	    console.log("Toolbelt up");
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
	    key: 'selectCar',
	    value: function selectCar() {
	      if (this.selected != null) this.selected.sprite.visible = false;
	      this.selected = { sprite: this.carHover, type: 'car', direction: _constants.Direction.N };
	      this.selected.sprite.visible = true;
	    }
	  }, {
	    key: 'selectRoad',
	    value: function selectRoad() {
	      console.log("select road");
	      if (this.selected != null) this.selected.sprite.visible = false;
	      this.selected = { sprite: this.roadHover, type: 'road', direction: _constants.Direction.N };
	      this.selected.sprite.angle = 0;
	      this.selected.sprite.visible = true;
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
	        var p = this.stage.cursorToGrid(this.game.input.x, this.game.input.y);
	        var wp = this.stage.cellToWorld(p.x, p.y);

	        console.log(this.selected.type);
	        switch (this.selected.type) {
	          case 'road':
	            this.stage.createRoad(p.x, p.y, this.selected.direction);
	            break;
	          case 'car':
	            this.stage.createCar(wp.x, wp.y);
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