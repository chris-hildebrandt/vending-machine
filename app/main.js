import { SnacksController } from "./Controllers/SnacksController.js";
// import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  // comment this out if you are not using it
  snacksController = new SnacksController();
}

window["app"] = new App();
