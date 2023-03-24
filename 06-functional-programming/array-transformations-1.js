/**
 * a transformation is to cretae something new from something existing
 * the spread operator is often used
 * when the original is an array, map, filter, and reduce work very well together
 */

var array = [1, 2, 3];
// non-functionally:
// array.push(4);
// array.push(5);
// array.push(6);

// functionally:
var extendedArray = [...array, 4, 5, 6];

// with objects:
var obj = { a: 1, b: 2 };
var extendedObj = { ...obj, c: 3, d: 4 };

// Array.prototype.map()
var nums = [1, 2, 3, 4, 5];
/**
 * map() is a HOF - accepts a function as an arg
 * calls function for each element in the original
 * returns new array with new values
 */
var numsSquared = nums.map((num) => num * num);
console.log(numsSquared);

// Array.prototype.filter()
/**
 * filter() is a HOF - accepts a function as an arg
 * it iterates over the array and calls the given function for each element
 * the function returns a boolean
 * if true: new element added to new array
 * if false: skipped
 * returns new array
 *
 */
var oddNums = nums.filter((num) => num % 2 != 0);
console.log(oddNums);

// Array.prototype.reduce()
/**
 * reduce() compares previous and current values within an arry
 * it is a HOF
 * it produces a single flattened value
 * it may be passed a second arg of an empty array
 * in which case it is possible to code such that an array is returned
 */

var sum = nums.reduce((current, previous) => current + previous);
console.log(sum);

// these array methods may be chained together
// in which case it is more performant to
// filter first,
// then map
// then reduce
var sumOfSquaredOddNums = nums
  .filter((num) => num % 2 != 0)
  .map((num) => num * num)
  .reduce((current, previous) => current + previous);

console.log(sumOfSquaredOddNums);
