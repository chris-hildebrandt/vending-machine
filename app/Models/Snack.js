export class Snack {

        // if one field is optional, it must go at the end
      // eg. this.price || "out of stock"
      // for set values and the end of the list of variables, omit the comma

  constructor(name, image, price, type) {
    this.name = name,
      this.image = image,
      this.price = price,
      this.type = type || "food",
      this.quantity = 15
  }

  get Template() {
    return `<div class="col-3 card btn" onclick="app.snacksController.purchaseSnack(${this.name})">
    <img class="img-fluid snack" src="${this.image}" alt="">
    <div class="text-end">
      <h3>$<span>${this.price}</span></h3>
    </div></div>`
    // variables ${this.variable}
  }

}