const authors = ["Elliott", "Woolf", "Dickens", "Bronte", "Shelley"];
const iterator = authors.entries();
console.log(iterator);
let entry = iterator.next();
console.log(entry);

function processAuthor() {
  const authors = ["Russell", "Kant", "Wittgenstein", "Cantor", "Descartes"];
  // authors nearest in scope chain will be used - comment out to use authors in next level of scope up
  let iterator = authors.entries(); //lexically-scoped variable
  return function () {
    return `${iterator.next().value[1]}`;
  };
}

console.log(processAuthor()); // fn NOT the closure
const closure = processAuthor();
console.log(closure());
console.log(closure());
console.log(closure());
console.log(closure());
console.log(closure());
// console.log(closure());//sixth time crashes
