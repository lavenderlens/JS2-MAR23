var band = ["Agnetha", "Frida", "Benny", "Bjorn"];

// bogus associative properties
band["name"] = "ABBA";
band.members = 4;

console.log(Object.entries(band));

// conventional for loop
for (let index = 0; index < band.length; index++) {
  console.log(band[index]);
}

// for of
for (let member of band) {
  console.log(member);
}
// console.log(member); //Bjorn -
// memory leakage into surrounding scope when var used!
// ReferenceError: member is not defined

// for in loop
for (let member in band) {
  console.log(member);
}
/**
 * ALL the keys:
0
1
2
3
name
members
 */

// tweak the for in to give values not keys
for (let index in band) {
  console.log(band[index]);
}
/**
 * DOES give values of the associative elements through their key
 * Agnetha
Frida
Benny
Bjorn
ABBA
4
 */

// forEach passes in a function
band.forEach((el) => console.log(el)); //ignores associative elements

band.length = 16; // length is writable
band.forEach((el) => console.log(el)); //ignores empty elements

for (let index = 0; index < band.length; index++) {
  console.log(band[index]);
} // prints empty elements as undefined

for (let member in band) {
  console.log(member);
} // ignores empty elements

for (let member of band) {
  console.log(member);
} // prints empty elements as undefined

// as well as Object.entries() we have
// console.log(Object.keys()); //TypeError: Cannot convert undefined or null to object
// console.log(Object.values()); //TypeError: Cannot convert undefined or null to object
// console.log(Object.entries()); //TypeError: Cannot convert undefined or null to object
// neither of the Object methods works with empty elements

//using forEach with 2 or 3 args
band.forEach((el, idx) => console.log(`${idx + 1}: ${el}`));
band.forEach((el, idx, arr) =>
  console.log(`
ABBA has ${arr.length} members:
${idx + 1}: ${el}`)
);

// you MUST use arguments in this ORDER.
// for instance you can't have idx, arr, el, OR idx, el
