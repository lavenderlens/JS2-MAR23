/**
 * In JS, Strings, numbers, and booleans are immutable
 */

var x = 1;
/**
 * 1 is an immutable object
 * x is a ref to that object
 */

x = 2;
// the ref of x has changed and now points to the immutable value 2

var y = x;
// copied ref into a new ref
// is x affected? NO
// y now points to same immutable value as x

y += 1;
// y ref updated to point to 2
// x unchanged (still points to 1)

function increment(num) {
  //parameterised variable means pass by copy
  return (num += 1);
}

console.log(increment(x)); //3
console.log(x); //2
