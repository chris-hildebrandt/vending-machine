import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
// constants and variables go here templates too?
class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */

  balance = 0

  values = []

  /** @type {import('./Models/Snack').snacks[]} */
  snacks = [
    new Snack("Monster Nitro", "https://i.pinimg.com/originals/b6/b3/f8/b6b3f802e66ebe4ce76f6ff7fe40fb5a.png", 149.50),
    new Snack("Snapple Rain", "https://i.pinimg.com/236x/4f/1e/b9/4f1eb90f6ebab5b69edf09f61d821115--soda-drinks.jpg", 1.50),
    new Snack("Jolt", "https://dydza6t6xitx6.cloudfront.net/ci-jolt-cola-d0088dfafb3b2955.jpeg", 3.29)
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
