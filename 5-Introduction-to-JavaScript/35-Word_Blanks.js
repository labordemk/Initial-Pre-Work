//making a mad libs-style sentence

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";
   result+= "The " +myAdjective+" "+myNoun+" "+myVerb+" "+myAdverb+".";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
