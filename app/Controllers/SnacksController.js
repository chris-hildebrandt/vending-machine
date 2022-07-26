// Private functions
// drawing goes here
import { ProxyState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";

// you have to get through the proxy "bodyguard to access the appstate data"

function _drawSnacks() {
  let snacks = ProxyState.snacks
  let template = ""
  snacks.forEach(snack => {
    template += snack.Template
  })
  let vendingWindowElm = document.getElementById("vending-window")
  vendingWindowElm.innerHTML = template
}

function _drawBalance() {
  let balanceElm = document.getElementById("balance")
  balanceElm.innerText = ProxyState.balance.toFixed(2)
}

// function _changeAppState(){
//   pass functions that change the appstate directly to the service layer
//   snacksService.changeAppState()
// }

// Public functions called by the user (onclicks)
export class SnacksController {
  constructor() {
    // console.log("controller loaded");
    _drawSnacks()
    // setIntervals go here
  }

  // onclick(name){
  //   service
  // }
  addQuarter() {
    snacksService.addQuarter()
    _drawBalance()
  }

  purchaseSnack(name) {
    snacksService.purchaseSnack(name)
  }

}