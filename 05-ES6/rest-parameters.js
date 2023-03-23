/**
 * rest operator when used in parameters of a function signature
 * PACKS n args into an array
 * spread syntax, when used in body of function OR COPYING
 * UNPACKS n args from an array
 * rest operator also called rest parameters
 * varargs in Java
 * kwargs in Python
 * useful for where num. of args is unknown
 * must be the last parameter
 */

//Es5
function es5Average(nums) {
  // nums would have to be array type
  var total = 0;
  for (let num of nums) {
    total += num;
  }
  return total / nums.length;
}
console.log(es5Average([4, 8, 3, 6]));

// ES6
function es6Average(...nums) {
  // nums may be passed in individually
  var total = 0;
  for (let num of nums) {
    total += num;
  }
  return total / nums.length;
}

console.log(es6Average(4, 8, 3, 6));
