/**
 * JS does NOT support associative arrays
 * eg, where a string index or key is associated with a vlaue
 * it LOOKS LIKE it does...
 */

var nums = [1, 2, 3];

nums["name"] = "Numbers array"; //error
nums.age = 1; //no error

// console.log(name, age); //ReferenceError: name is not defined

for (let index = 0; index < nums.length; index++) {
  console.log(nums[index]);
}

console.table(Object.entries(nums));
console.log(nums[3]); //undefined
console.log(nums[4]); //undefined
nums.push(4);
console.table(Object.entries(nums));

// square bracket notation itself may be useful in OBJECTS
// we can compute object prop names

var full = "full";
var name = "Name";
var person = {};
person[full + name] = "Alan Lavender";
console.table(person);
