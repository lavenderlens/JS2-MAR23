class MyClass {
  constructor(name) {
    this.name = name;
  }
  sayHello1 = () => {
    return `Hello my name is ${this.name}`; // context of this is the class
  };
  sayHello2() {
    return `Hello my name is ${this.name}`; // context of this is the function
  }
}

const class1 = new MyClass("Alan");
console.log(class1.sayHello1());
