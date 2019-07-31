//the spread operator allows you to expand arrays and other expressions in places where multiple parameters or elements are expected.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2 = arr1;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
