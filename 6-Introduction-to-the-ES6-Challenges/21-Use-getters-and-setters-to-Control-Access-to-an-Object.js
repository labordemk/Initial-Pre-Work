//you can obtain values from an object and set a value of a property within an object. these are called getters and setters. getters are meant to return/get the value of an object's private variable to the user without the user directly accessing the private variable while setters are meant to modify/set the value of an object's private variable based on the value passed into the setter function.

function makeClass() {
  "use strict";
  /* Alter code below this line */
class Thermostat{
  constructor(farenheit) {
  }
  get temperature() {
    this.farenheit = farenheit;
  }
  get temperature() {
    return 5 / 9 * (this.farenheit - 32);
  }
  set temperature(celsius) {
    this.farenheit = celsius * 9.0 / 5 + 32;
  }
}

  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
