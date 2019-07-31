//new syntax to create objects is class. class syntax is just a syntax and not a full-fledged class based implementation of object oriented paradigm like you'd see in java, python, etc.



function makeClass() {
  "use strict";
  /* Alter code below this line */
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
