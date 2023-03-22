"use strict";
var basket = {};
Object.defineProperty(basket, "items", {
  value: [],
  writable: false,
  configurable: false,
});
basket.addItem = function (item) {
  this.items.push(item);
};
basket.addItem({ item: "item" }); //no error
console.log(basket.items);
// basket.items = 0;//error
// we can write TO properties OF the non-writable prop items
// because items itself is a nested reference
// similarly, const keyword is much misunderstood
const myObj = { num: 1, nums: [1, 2, 3] };
// myObj = true;//TypeError: Assignment to constant variable.
myObj.nums.push(4);
console.log(myObj);
// this affects deep copying of objects
