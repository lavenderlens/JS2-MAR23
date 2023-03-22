var x = 1; //number

var b = true; // boolean

var s = "Hello"; //string
var s2 = new String("Hello"); //object

var xObj = new Number(x);

console.log(typeof x); //number
console.log(typeof xObj); //object

var bObj = new Boolean(b);
var sObj = new String(s);

console.log(typeof bObj); //object
console.log(typeof sObj); //object

console.log("String methods");
console.log(s.replace("Hello", "Goodbye"));
console.log(s2.replace("Hello", "Goodbye"));
console.log(s); //"Hello"
console.log(s2); //String "Hello"

// calling .replace() with re-assignment
s = s.replace("Hello", "Slán");
console.log(s); //re-assigned

// some Object methods
console.log(x.toFixed(2)); //1.00
console.log(s.startsWith("G")); //false
console.log(b.toString()); //true

// !! also is equivalent to passing values to a Boolean constructor function
console.log(Boolean("")); //false
console.log(!!""); //false
