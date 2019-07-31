//difference between spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. you cannot pick or choose whihc elements you want to assign to variables.

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [b,a] = [a,b]
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
