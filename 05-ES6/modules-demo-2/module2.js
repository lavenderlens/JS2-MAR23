const hello = () => {
  const header = document.createElement("h1");
  header.innerText = "Hello";
  setTimeout(() => {
    header.innerText = "Cad é mar atá tú";
  }, 5000);
  return header;
};
let goodbye = "Goodbye";
let thankyou = "Thankyou";

setTimeout(() => {
  goodbye = "slán anois";
}, 5000);

setTimeout(() => {
  thankyou = "go raibh maith agat";
}, 5000);

// export default thankyou; //updated reference exported as default
export { hello, thankyou }; //updated reference exported as named
export { goodbye as default }; //here, this happens:
// goodbye as default preserves live binding
// export default does not
