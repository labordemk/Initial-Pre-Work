//default parameters help create more flexible functions.  they kick in when the argument is not specified/undefined. it will receieve the default value of anonymous.

const increment = (function() {
 "use strict";
 return function increment(number, value = 1) {
   return number + value;
 };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
