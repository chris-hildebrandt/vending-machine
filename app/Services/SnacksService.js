import { ProxyState } from "../AppState.js"

// functions that change the appstate go here "business logic"

class SnacksService {
  addQuarter(){
    ProxyState.balance += .25
    console.log("service logic running");
    console.log("balance remaining:", ProxyState.balance);
  }

  purchaseSnack(name){
  ProxyState.snacks.find
  if(ProxyState.balance < snack.price){}
  else {
    ProxyState.balance -= snack.price
    snack.quantity--
  }
  // update quantity so i need the object

}

// ctrl+. to declare functions here
}
export const snacksService = new SnacksService()

// onclicks need to go through the layers of our app so instead of just calling the function app.is from the main which links the controller app.snacksController references the controller which houses the method

// for functions searching for info we need to go through the proxy 
// let alias = ProxyState.object.find(alias => alias.name == parameter)