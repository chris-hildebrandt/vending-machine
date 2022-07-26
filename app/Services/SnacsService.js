import { ProxyState } from ".AppState.js"
// functions that change the appstate go here "business logic"
class SnacksService {

}

// ctrl+. to declare functions here

export const snacksService = new SnacksService()

// onclicks need to go through the layers of our app so instead of just calling the function app.is from the main which links the controller app.snacksController references the controller which houses the method

// for functions searching for info we need to go through the proxy 
// let alias = ProxyState.object.find(alias => alias.name == parameter)