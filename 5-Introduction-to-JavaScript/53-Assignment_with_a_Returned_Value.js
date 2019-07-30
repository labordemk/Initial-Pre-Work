//everything to the right of the equal sign is resolved before the value is assigned. this means we can take the return value of a function and assign it to a variable

// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);
