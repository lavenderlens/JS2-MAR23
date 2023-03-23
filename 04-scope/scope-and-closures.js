/**
 *a closure is a function with a ref to one or more lexically-scoped variables
 lexically-scoped means both the variable value AND ITS IMMEDIATE ENVIRONMENT

 that is, the variable exists one scope level UP from the returned function
 and crucially, will hodl its value between invocations of that function
 (don't mean hold the same value, but reflect the previous value in the next)

 closures also work because functions are first-order objects in JS
 meaning it is possible to pass functions to other functions
 and return functions from other functions

 since the static keyword was adopted, it provides an alternative for closures
 */

// 3 steps to using closures:
// 1. define a closure function declaration
// this gets loaded into memory at the start

function getNextNumberClosure() {
  var nextNumber = 1; // this is the lexically-scoped variable
  return function () {
    return nextNumber++;
  };
}

// 2. call the closure function as a function expression
const getNext = getNextNumberClosure();

//3. invoke the returned function multiple times
console.log(getNext()); //1
console.log(getNext()); //2
console.log(getNext()); //3

//if I wanted to start with a fresh closure:
const getNext2 = getNextNumberClosure();
console.log(getNext2()); //1
console.log(getNext2()); //2
console.log(getNext2()); //3

function starMaker() {
  var star = "";
  return function () {
    return (star += "*");
  };
}

const makeStars1 = starMaker();
console.log(makeStars1());
console.log(makeStars1());
console.log(makeStars1());
console.log(makeStars1());

const makeStars2 = reverseStarMaker();
console.log(makeStars2());
console.log(makeStars2());
console.log(makeStars2());
console.log(makeStars2());

function reverseStarMaker() {
  //function declaration may be used anywhere in suite of code
  //2 lexically-scoped variables
  var stars = "********"; //stars stays the same
  var counter = 10; //counter decrements
  return () => {
    //can use arrow here
    return stars.substring(0, (counter -= 2));
  };
}

/**
 * closures are exploited in modern React Hooks
 * to give state to a functional component
 * the useState hook in React has two parts:
 *  - its' state
 *  - a function to change that state
 * backwards-engineered to vanilla JS, something like this:
 */

function myUseState(initValue) {
  var state = { value: initValue }; //lexically-scoped state object
  return [
    //array with two parts
    state,
    function (newValue) {
      state.value = newValue;
    },
  ];
}
/**
 * state is the lexically-scoped variable
 * the return value (which can then be destructured) returns
 * current state, and the function to modify that state (the closure)
 * multiple calls to setState update the state based on its previous value
 */

var array = myUseState(1);
var state = array[0];
var setState = array[1];
console.log(state.value); //1
setState(2);
console.log(state.value); //2

// in practice the useState hook is declared with a destucturing assignment

function myUseString(initValue) {
  var state = { value: initValue }; //lexically-scoped state object
  return [
    state,
    function (newValue) {
      state.value += newValue;
    },
  ];
}
const [string, setString] = myUseString("");
setString("I ");
setString("love ");
setString("Python");
console.log(string); //{ value: 'I love Python' }
