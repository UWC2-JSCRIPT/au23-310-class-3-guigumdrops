// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price
const logReceipt = (...items) => {
  let total = 0
  items.forEach((item)=>{
    total += item.price
    console.log(`${item.descr} - $${item.price}`)
  })
  console.log(`$ ${total}`)
}
const obj1 = {descr: "Candy Corn", price: 15.99}
const obj2 = {descr: "Jelly Bellies", price: 21.21}
const obj3 = {descr: "Snickers Bar", price: 101.01}
const obj4 = {descr: "Peppermint Patty", price: 2.98}

logReceipt(obj1, obj4, obj2)
// Check
logReceipt(
  { descr: 'Skittles', price: 6.99 },
  { descr: 'Twizzlers', price: 7.77 },
  { descr: 'Reeses Peanut Butter Cups', price: 3.99 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
