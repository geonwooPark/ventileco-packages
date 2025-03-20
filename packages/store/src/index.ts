import { Store } from './core/Store.js'

const numberStore = new Store<number>(9)
const objectStore = new Store({ isOpen: true, count: 3 })

const a = numberStore.getState()
const b = objectStore.getState()

numberStore.setState(100)
objectStore.setState((prev) => ({ ...prev, isOpen: false, count: 4 }))

const c = numberStore.getState()
const d = objectStore.getState()

console.log(a)
console.log(b)
console.log(c)
console.log(d)
