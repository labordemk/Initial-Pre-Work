//when you declare a variable with var it is declared globally, or locally if it declared inside a function. let is similar but when you declare a variable with let inside a block, statement, or expression, its scope is limited to that block, statement, or expression


function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return "function scope";
}
