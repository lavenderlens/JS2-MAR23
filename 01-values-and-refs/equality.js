/**
 * eqaulity often referred to as "strict" vs "loose"/"abstract"
 * this is slightly misleading as ALL comparisons with = operator are strict
 * == allows for coercion of one or other of the operands
 * before a === comparison is performed
 */

// "use strict";

var n = 1;
var s = "1";
var escapedString = "I've had enough of JS";
var escapedString2 = 'I\'ve had enough of so-called "JS"';
var escapedString3 = `I've had enough of so-called "JS"`; //copes with both types of escaped quote

console.log(n == s); //true
console.log(n === s); //false
console.log(n === Number(s)); //true, explicit cast

console.log(1 / 1); //1
console.log(1 / "1"); //1 - coercion has occurred
console.log(1 / "1x"); //NaN

console.log(NaN == NaN); //false
console.log(Object.is(NaN, NaN)); //true
//opposite for +0 and -0
console.log(+0 == -0); //true
console.log(Object.is(+0, -0)); //false

//object equality
var objX = { a: 1 };
var objY = { a: 1 };
console.log(objX == objY); //false

// delete operator (object instance if made from class or function constructor)
delete objX.a;
console.log(objX); //{}

// make object prop non-configurable
var objZ = { a: 1 };
Object.defineProperty(objZ, "a", {
  // won't add a prop that isn't there
  value: 2, // may edit a prop that is there
  writable: false, // default is true
  configurable: false, //default true
});
console.table(objZ);
objZ.a = 3; //won't work
delete objZ.a; //won't work
console.table(objZ); //3 TODO should be 2
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
