import { createItem } from "./services/item.js";
import { addItem, deleteItem, calculateTotal, displayCart, removeItem } from "./services/cart.js";

const myCart = []
const myWishList = []

console.log("Welcome to your Shopee Cart!");

const item1 = await createItem("Guitarra", 1500.99, 2)
const item2 = await createItem("Violão", 1050.99, 10)

await addItem(myCart, item1)
await addItem(myCart, item2)

await removeItem(myCart, item2)
await removeItem(myCart, item2)

await displayCart(myCart)