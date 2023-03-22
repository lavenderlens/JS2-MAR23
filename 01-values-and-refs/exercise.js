console.log("-1-");
var x = "Hello";
var y = x;
y = "Hello World";
console.log(x); //Hello

console.log("-2-");
// player1.score = 20

console.log("-3-");
var x = "Hello world";
x.substr(0, 5); //deprecated: use substring()
// substr takes two args, startIndex and endIndex non-exclusive
// substring takes two args, startIndex and endIndex EXCLUSIVE
console.log(x); //Hello world

console.log("-4-");
var obj = { x: 1, y: 2 };
obj.y++;
obj.z = 5; //adds new prop
console.log(obj); //{ x: 1, y: 3, z: 5 }

console.log("-5-");
var num = new Number(123);
console.log(typeof num); //object

console.log("-6-");
var num2 = Number("123"); // note NO NEW keyword
console.log(typeof num2); // number

//7... extended
console.log("-7-");
var x = "Hello World";
var y = x.replace("World", "JavaScript");
console.log(typeof y); //string

var x2 = new String("Hello World");
var y2 = x2.replace("World", "JavaScript");
var y3 = new String(x2.replace("World", "JavaScript"));
console.log(typeof y2); //string
console.log(typeof x2); //object
console.log(typeof y3); //object

console.log("-8-");
console.log(5 == "5"); //t
console.log(5 === "5"); //f
console.log("5" === new String("5")); //f
// additionally,
console.log("5" == new String("5")); //t
var isItAString = "5" == new String("5");
// console.log(typeof isItAString); //boolean, RHS coerced

console.log(new String("5") == new String("5")); //f - no two objects same by default
console.log({ x: 1 } === { x: 1 }); //f - no two objects same by default
console.log(2 == true); //f
console.log("0" == false); //t - string LHS coerced to number

// in addition
console.log("swapped");
console.log(false == "0"); //also true
console.log(false == Boolean("0")); //false

console.log(1 == { x: 1 }); //f
console.log(1 === Number(1)); //still t
console.log(typeof Number(1)); // number
console.log(typeof new Number(1)); // object

console.log("-9-");
var obj2 = {};
console.log(obj2.name); //undefined

console.log("-10-");
var xun; //undefined
var ynu = null;
console.log(xun == ynu); //t (but not ===)
console.log(xun === ynu); //f
