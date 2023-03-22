/**
 * objects, including custon user-defined objects, arrays, and functions are mutable by default
 *
 * Think of immutability as "SAVE AS" compared to mutability as "SAVE"
 * The structure of immutable data cannot be changed
 * The values that elements of that data may themeselves reference
 * MAY be changed
 * further reading:
 * https://www.geeksforgeeks.org/why-is-immutability-so-important-in-javascript/
 */

// here, x references a mutable object
var x = { a: 1 };

// copying that ref into another:
var y = x;

y.a == 1;
// is x affected? YES;
// two refs, only one object shared between them

function incrementProperty(obj) {
  return (obj.a += 1);
}

console.log(incrementProperty(x)); //2
console.log(x); //a: 2

// objects are also mutable through shared refs:
console.log(incrementProperty(y)); //3
console.log(x); //a: 3
