//parseInt() parses a string and returns an integer. it takes a second argument for the radix which specifies the base of the number in the string. the radix can be an integer between 2 and 36

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");
