/** strict mode, almost always in use in production, enables more robust JS code */

"use strict";

// 1
// x = 1; //ReferenceError: x is not defined
// console.log(x);

// 2
var obj = { x: 1 };
Object.defineProperty(obj, "x", {
  writable: false,
  configurable: false,
});
// obj.x = 2; //TypeError: Cannot assign to read only property 'x' of object '#<Object>'
// hasn't been reassigned
// delete obj.x; //TypeError: Cannot delete property 'x' of #<Object>
// hasn't been deleted
console.log(obj.x); //1

// 3
// function square(num, num) {
//   // SyntaxError: Duplicate parameter name not allowed in this context
//   return num * num;
// }
// console.log(square(3)); //NaN with non-strict
// strict: errors on declaration

// 4
var str = "Cad é mar a ta tú";
// str.name = " Alan";//TypeError: Cannot create property 'name' on string 'Cad é mar a ta tú'
// console.log(str.name); //undefined

// OPTIMISATIONS - no error messages
// 5
var data = "my data";
eval('var data = "some other data"'); // weird ES5 function
console.log(data); //some other data - non-strict - my data - strict
