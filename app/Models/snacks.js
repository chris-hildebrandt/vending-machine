export class Snack{

  constructor(name, image, price){
    this.name = name,
    this.image = image,
    // if one field is optional, it must go at the end
    // eg. this.price || "out of stock"
    this.price = price
    // for set values and the end of the list of variables, omit the comma
    this.quantity = 15
    this.type = "food"
  }
}