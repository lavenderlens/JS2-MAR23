let inventory = [
  { id: 1, desc: "Bat", cost: 50, price: 199, qty: 15 },
  { id: 2, desc: "Ball", cost: 5, price: 14.99, qty: 100 },
  { id: 3, desc: "Pads", cost: 25, price: 75, qty: 25 },
  { id: 4, desc: "Gloves", cost: 15, price: 49.99, qty: 35 },
  { id: 5, desc: "Helmet", cost: 30, price: 90, qty: 20 },
];

// 1. transform the inventory into an array of high priced items > 50
const highPriceItems = inventory.filter((item) => item.price > 50);
console.log(highPriceItems);
// 2. transform the inventory into an array of costs only
const costs = inventory.map((item) => item.cost);
console.log(costs);
// 3. transform the inventory into an array of objects -
// - with each item's ID, amnd it's MARGIN (price - cost)
const idsAndMargins = inventory.map((item) => ({
  id: item.id,
  margin: item.price - item.cost,
}));
console.log(idsAndMargins);

console.log("using forEach:");
// const idsAndMarginsUsingForEach = inventory.forEach((item) => ({
//   id: item.id,
//   margin: item.price - item.cost,
// }));
// console.log(idsAndMarginsUsingForEach);//undefined - forEach does not return
const idsAndmargins2 = inventory.map(({ id, price, cost }) => ({
  id,
  margin: price - cost,
}));
console.log(idsAndmargins2);
// note grouping () on RHS: arrow functions cant have curlies and no return statement

// 4. transform the inventor to show the highest cost item
// const highestCostitem = inventory.reduce((highest, item) =>
//   item.cost > highest.cost ? item : highest
// );
// const highestCostitem = inventory.reduce((previous, current) =>
//   current.cost > previous.cost ? current : previous
// );
console.log("using if - else");
const highestCostitem = inventory.reduce((previous, current) => {
  if (current.cost > previous.cost) {
    return current;
  } else {
    return previous;
  }
});
console.log(highestCostitem);

console.log("Jeril method");
var arr = [];
var tr1 = inventory.forEach((item) =>
  arr.push({
    id: item.id,
    margin: item.price - item.cost,
  })
);

console.log(arr);
