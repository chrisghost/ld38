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

	var _play = __webpack_require__(2);

	var _play2 = _interopRequireDefault(_play);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Game = function (_Phaser$Game) {
	  _inherits(Game, _Phaser$Game);

	  function Game() {
	    _classCallCheck(this, Game);

	    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, 1024, 768, Phaser.AUTO, 'game'));

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
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

	      this.game.world.setBounds(0, 0, 1920, 1920);

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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _grid = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CELL_SIZE = 64;

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
	      this.game.load.image('cursorvisor', 'assets/sprites/cursorvisor.png');
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
	        default:
	          return 'earthcell';
	      }
	    }
	  }, {
	    key: 'cursorToGrid',
	    value: function cursorToGrid(x, y) {
	      return {
	        x: Math.floor((x + this.game.camera.x - this.game.world.centerX) / CELL_SIZE),
	        y: Math.floor((y + this.game.camera.y - this.game.world.centerY) / CELL_SIZE)
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
	      this.grid = new _grid.Grid(10, 10);
	      //this.grid.printGrid()

	      this.grid.forEach(function (cell) {

	        var p = this.cellToWorld(cell.x, cell.y);

	        var c = this.game.add.sprite(p.x, p.y, this.cellSpriteName(cell.kind));
	        //console.log(c)
	      }.bind(this));

	      this.game.camera.x = this.game.world.centerX;
	      this.game.camera.y = this.game.world.centerY;

	      //this.worldScale = 1.0

	      this.cursorVisor = this.game.add.sprite(0, 0, 'cursorvisor');
	    }
	  }, {
	    key: 'cellToWorld',
	    value: function cellToWorld(x, y) {
	      return {
	        x: this.game.world.centerX + x * CELL_SIZE,
	        y: this.game.world.centerY + y * CELL_SIZE
	      };
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      this.moveCamera();
	      //this.game.world.scale.set(this.worldScale)
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      //console.log("Drawing")
	      this.game.debug.cameraInfo(this.game.camera, 32, 32);
	      var cc = this.getCellUnderCursor();

	      if (cc != null) {
	        var cPos = this.cellToWorld(cc.x, cc.y);

	        this.cursorVisor.x = cPos.x;
	        this.cursorVisor.y = cPos.y;

	        this.game.debug.text("Cursor hovering : " + cc.x + ", " + cc.y + " Kind : " + cc.kind, 100, 380);
	      }
	    }
	  }, {
	    key: 'moveCamera',
	    value: function moveCamera() {
	      if (this.cursors.up.isDown) this.game.camera.y -= 4;else if (this.cursors.down.isDown) this.game.camera.y += 4;

	      if (this.cursors.left.isDown) this.game.camera.x -= 4;else if (this.cursors.right.isDown) this.game.camera.x += 4;

	      //if (game.input.keyboard.isDown(Phaser.Keyboard.Q)) this.worldScale += 0.05
	      //else if (game.input.keyboard.isDown(Phaser.Keyboard.A)) this.worldScale -= 0.05

	      Phaser.Math.clamp(this.worldScale, 0.25, 2);
	    }
	  }]);

	  return PlayState;
	}(Phaser.State);

	exports.default = PlayState;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CellTypes = {
	  KIND_EARTH: 0,
	  KIND_WATER: 1
	};

	var Cell = function () {
	  function Cell(x, y, kind) {
	    _classCallCheck(this, Cell);

	    this.x = x;
	    this.y = y;
	    this.kind = kind;
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
	  function Grid(w, h) {
	    _classCallCheck(this, Grid);

	    this.w = w;
	    this.h = h;

	    this.g = [];

	    for (var x = 0; x < w; x++) {
	      this.g.push([]);
	      for (var y = 0; y < h; y++) {
	        this.g[x].push(new Cell(x, y, Math.random() > 0.3 ? CellTypes.KIND_EARTH : CellTypes.KIND_WATER));
	      }
	    }
	  }

	  _createClass(Grid, [{
	    key: "getCell",
	    value: function getCell(x, y) {
	      try {
	        return this.g[x][y];
	      } catch (e) {
	        return {};
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

/***/ })
/******/ ]);