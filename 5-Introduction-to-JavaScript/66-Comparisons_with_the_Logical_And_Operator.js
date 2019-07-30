//&& returns true if the operands to the left and right of it are true. similar to nesting an if statement inside another if.

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >=25) {
      return "Yes";
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
