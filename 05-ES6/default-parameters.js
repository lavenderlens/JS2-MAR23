function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(2, 2));
console.log(multiply(2)); //NaN

function multiplyDefault(num1, num2 = 1) {
  return num1 * num2;
}

console.log(multiplyDefault(2));

// cannot use default params for rest
