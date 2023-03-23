function Person(name, ...instruments) {
  //cannot use default params to substitute rest params
  this.name = name;
  this.instruments = instruments;
}

const bruce = new Person("Bruce", "guitar", "harmonica", "piano", "vox");
console.log(bruce);
console.log(bruce.instruments);

const bruceLiteral = { name: "Bruce", instrument: "guitar" };
const elon = { name: "Elon", instrument: undefined };

const band = [];
band.push(bruceLiteral);
band.push(elon);

for (let member of band) {
  console.log(member.name);
  console.log(member.instrument); //undefined for Elon
}

for (let member of band) {
  console.log(member.name);
  console.log(member.instrument ?? "no instruments played"); //swap in a default value
  //if value is null or undefined
}

// like a ternary operator:
// (person.instrument) ? person.instrument : "no instruments played"
