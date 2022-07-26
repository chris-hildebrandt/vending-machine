export class Snack {

        // if one field is optional, it must go at the end
      // eg. this.price || "out of stock"
      // for set values and the end of the list of variables, omit the comma

  constructor(name, image, price, type,) {
    this.name = name,
      this.image = image,
      this.price = price,
      this.type = type || "food",
      this.quantity = 15
  }

  get Template() {
    return `
    variables ${this.variable}`
  }


}