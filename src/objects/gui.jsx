import {CellTypes} from '../objects/grid.jsx';
import {Resources, CELL_SIZE, Direction, WORLD_CELL_X, WORLD_CELL_Y } from '../constants.jsx';

class Gui {
  constructor(stage) {
    this.game = stage.game
    this.stage = stage

    this.group = this.game.add.group()

    var bkg = this.group.create(this.game.width - 400, 0, 'guibkg')
    bkg.fixedToCamera = true

    this.resourcesText = this.game.add.text(
      this.game.width - 350, 20, "",
      { font: "18px Arial", fill: "#ffffff", align: "center" })
    this.resourcesText.fixedToCamera = true

    this.title = this.game.add.text(this.game.width - 300, 70, "", { font: "24px Arial", fill: "#ffffff", align: "center" })
    this.title.fixedToCamera = true

    //this.details = this.game.add.text(this.game.width - 300, 120, "Details", { font: "24px Arial", fill: "#f26c4f", align: "center" })

    this.currentlyShowing = null


    this.toggleN = this.group.create(this.game.width - 250, 150, 'toggle_on')
    this.toggleE = this.group.create(this.game.width - 150, 250, 'toggle_on')
    this.toggleS = this.group.create(this.game.width - 250, 350, 'toggle_on')
    this.toggleW = this.group.create(this.game.width - 350, 250, 'toggle_on')

    this.toggleN.fixedToCamera = true
    this.toggleE.fixedToCamera = true
    this.toggleS.fixedToCamera = true
    this.toggleW.fixedToCamera = true

    this.toggleN.inputEnabled = true
    this.toggleE.inputEnabled = true
    this.toggleS.inputEnabled = true
    this.toggleW.inputEnabled = true

    this.toggleN.events.onInputDown.add(this.toggleEntrance(Direction.N), this)
    this.toggleE.events.onInputDown.add(this.toggleEntrance(Direction.E), this)
    this.toggleS.events.onInputDown.add(this.toggleEntrance(Direction.S), this)
    this.toggleW.events.onInputDown.add(this.toggleEntrance(Direction.W), this)

    this.hideTogglers()
  }

  toggleEntrance(d) {
    return function() {
      console.log("Toggle entrance !" + d+ ", ", this.currentlyShowing)
      switch(d) {
        case Direction.N :
          this.currentlyShowing.entrances.N = (this.currentlyShowing.entrances.N + 1) % 2
          break
        case Direction.S :
          this.currentlyShowing.entrances.S = (this.currentlyShowing.entrances.S + 1) % 2
          break
        case Direction.W :
          this.currentlyShowing.entrances.W = (this.currentlyShowing.entrances.W + 1) % 2
          break
        case Direction.E :
          this.currentlyShowing.entrances.E = (this.currentlyShowing.entrances.E + 1) % 2
          break
      }

      this.stage.grid.refreshRoad(this.currentlyShowing.x, this.currentlyShowing.y)
    }
  }

  hideTogglers() {
    this.toggleN.visible = false
    this.toggleE.visible = false
    this.toggleS.visible = false
    this.toggleW.visible = false
  }

  displayTogglers(entrances) {
    //console.log("ENTRANCES", entrances)
    this.toggleN.visible = true
    this.toggleE.visible = true
    this.toggleS.visible = true
    this.toggleW.visible = true

    if(entrances.N) this.toggleN.loadTexture('toggle_on')
    else this.toggleN.loadTexture('toggle_off')

    if(entrances.E) this.toggleE.loadTexture('toggle_on')
    else this.toggleE.loadTexture('toggle_off')

    if(entrances.S) this.toggleS.loadTexture('toggle_on')
    else this.toggleS.loadTexture('toggle_off')

    if(entrances.W) this.toggleW.loadTexture('toggle_on')
    else this.toggleW.loadTexture('toggle_off')
  }

  displayCellInfos(it) {
    if(it == null) return

    this.currentlyShowing = it
    //console.log("currentlyShowing", it)

    try {
      this.title.text = this.currentlyShowing.getInfo()

      this.hideTogglers()
    } catch(e) {
      if(it.kind == CellTypes.KIND_ROAD) {
        this.title.text = "Road"
        this.displayTogglers(it.entrances)
      }
    }

    //console.log("displayItem", it)
  }

  update(resources) {
    this.displayCellInfos(this.currentlyShowing)

    this.resourcesText.text = "IRON PLATE : " + resources[Resources.IRON_PLATE] + " | STONE BRICK : " + resources[Resources.STONE_BRICK]
  }
}

export default Gui
