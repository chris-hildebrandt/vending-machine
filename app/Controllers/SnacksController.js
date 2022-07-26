// Private functions
// drawing goes here
import { ProxyState } from "../AppState";
import { snacksService } from "../Services/SnacksService";

// you have to get through the proxy "bodyguard to access the appstate data"
function _drawSnacks(){
  let snacks = ProxyState.snacks
  console.log("drawing", snacks);
  let template = ""
  snacks.forEach(snack => template += snack.Template)
}

function _changeAppState(){
  // pass functions that change the appstate directly to the service layer
  snacksService.changeAppState()
}

// Public functions called by the user (onclicks)
export class SnacksController{
  constructor(){
    console.log("controller loaded");
    _drawSnacks()
    // setIntervals go here
  }

  onclick(name){
    service
  }

}