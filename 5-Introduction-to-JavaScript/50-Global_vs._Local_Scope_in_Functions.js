//if you have both local and global variables with the same name, the local variable takes precedence

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var myOutfit = "sweater";
  return myOutfit;


  // Only change code above this line
  return outerWear;
}

myOutfit();
