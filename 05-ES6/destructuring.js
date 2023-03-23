/**
 * a destructuring assignment is a means of extracting
 * array elements or object props
 * into multiple variables
 */

const nums = [1, 2, 3];
const person = { name: "Bjorn Ulvaeus", age: 81 };

// ES5
var n1 = nums[0];
var n2 = nums[1];
var n3 = nums[2];

// var name = person.name;
// var age = person.age;

// ES6
const [num1, num2, num3] = nums; //JS knows the structure of the RHS expression
// array destructuring using spread
// spread UNPACKS
const [firstNum, ...otherNums] = nums;
console.log(firstNum); //1
console.log(otherNums); //[2,3]

// const { name2, age2 } = person;
// console.log(name2, age2); //undefined undefined - obj props must be same names or aliased
// const { name, age } = person; //actual prop names - works
// console.log(name, age);
const { name: name2, age: age2 } = person; // prop names aliased - also works
console.log(name2, age2);
