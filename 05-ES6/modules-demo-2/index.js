// import hello, {goodbye} from "./module1.js";
// import thankyou, {hello, goodbye} from "./module2.js";
import goodbye, { hello, thankyou } from "./module2.js";

document.querySelector("body").appendChild(hello());
// **as we would expect**, hello updates after 5s
// the function code for the update exports with the whole function

setTimeout(() => {
  console.log(goodbye); //named export updates to Irish
}, 6000);

setTimeout(() => {
  console.log(thankyou); //default doesn't update
}, 6000);

// summary: named exports create and preserve a live binding
// to the file that exported them
// https://jakearchibald.com/2021/export-default-thing-vs-thing-as-default/
