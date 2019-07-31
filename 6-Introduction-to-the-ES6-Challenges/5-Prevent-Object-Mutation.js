//Object.freeze prevents data mutation. once the object is frozen you can no longer add, update, or delete properties from it.

function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line

Object.freeze(MATH_CONSTANTS);
  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
