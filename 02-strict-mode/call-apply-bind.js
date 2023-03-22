// call
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

console.log(new Food("cheese", 5).name);
// Expected output: "cheese"
console.log(new Food("cheese", 5).price);
console.log(new Food("cheese", 5).category);

// apply
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);
const max2 = Math.max(numbers);
console.log(max);
// Expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// Expected output: 2
console.log(max2); //NaN - Math.max expects multiple single values, but not an array
//Math.max without apply
console.log(Math.max(1, 3, 2));
// Expected output: 3

console.log(Math.max(-1, -3, -2));
// Expected output: -1

const array1 = [1, 3, 2];

console.log(Math.max(...array1)); //spread unpacks array into single
// Expected output: 3

// Note: This function is almost identical to call(), except that call() accepts an argument list, while apply() accepts a single array of arguments — for example, func.apply(this, ['eat', 'bananas']) vs. func.call(this, 'eat', 'bananas').

// bind
// const module = {
//   x: 42,
//   getX: function () {
//     return this.x;
//   },
// };

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// Expected output: 42

// often used in classes with functions that have class fields syntax ie functionname(){
//functionbody
//}

// much more usual to see arrow functions inside of classes
// arrow functions DO NOT HAVE their own context of "this"
// so it defaults to the parent scope
// which is usually the class itself, the desired result

// class MyClass {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHello1() {
//     return `Hello my name is ${this.name}`;
//   }
// }

// const class1 = new MyClass("Alan");
// class1.sayHello1();
