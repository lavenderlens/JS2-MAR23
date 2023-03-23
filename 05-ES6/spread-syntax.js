/**
 * spread is used to unpack an array OR object
 * it is most commonly used to make copies
 * NOTE: spread makes shallow copies, although at top level they appear to be deep
 * canm be used recursivley to deep copy nested objects and arrays
 * but soon becomes unwieldy
 */

const nums = [1, 2, 3];

//Es5 cop an array:
const es5NumsCopy = Object.assign([], nums);
es5NumsCopy.push(4);
console.log(es5NumsCopy); //[ 1, 2, 3, 4 ]
console.log(nums); //[ 1, 2, 3]

const nums2 = [1, 2, 3, [4, 5]];

//Es5 cop an array:
const es5NumsCopy2 = Object.assign([], nums2);
es5NumsCopy2[3].push(6);
console.log(es5NumsCopy2);
console.log(nums2); //[ 1, 2, 3, [ 4, 5, 6 ] ] //original changed through new ref

//ES6
const es6NumsCopy = [...nums];
es6NumsCopy.push(4);
console.log(es6NumsCopy);
console.log(nums); //[ 1, 2, 3 ] //original unaffected

const es6NumsCopy2 = [...nums2];
es6NumsCopy2[3].push(7);
console.log(nums2); //[ 1, 2, 3, [ 4, 5, 6, 7 ] ] // original changed

const es6NumsCopy3 = [nums2[0], nums2[1], nums2[2], [...nums2[3]]];
// algorithm: copy each element as is, no spread, then spread the nested array element
es6NumsCopy3[3].push(8);
console.log("recursively in an array");
console.log(nums2);
//  tricky!

const objects = [{ a: 1 }, { b: 2 }, { c: 3 }];
const objsCopy = [...objects];
objsCopy[2].c = 4;
console.log(objects);
//reference within a reference
const objsDeepCopy = [{ ...objects[0] }, { ...objects[1] }, { ...objects[2] }];
objsDeepCopy[2].c = 5;
console.log(objects); //original unchanged
