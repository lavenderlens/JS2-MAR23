function decorator(fn) {
  console.log("calling function...");
  fn();
  console.log("...done calling function");
}

decorator(() => console.log("executing function"));
