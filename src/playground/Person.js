class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi I'm ${this.name},`
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}.`
    }
    return greeting;
  }
}

const meTr = new Traveler('Mo', 30, 'Mauritania');
const otTr = new Traveler();

console.log(meTr.getGreeting());
console.log(otTr.getGreeting());
// const me = new Person('Nuradeen', 30);
// const other = new Person();

// console.log(me.getDescription());
// console.log(other.getDescription());