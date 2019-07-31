//in addition to let, you can also declare variables with const. has everything that let has and const is read-only. onlce a variable is assigned with const, it cannot be reassigned.


function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
