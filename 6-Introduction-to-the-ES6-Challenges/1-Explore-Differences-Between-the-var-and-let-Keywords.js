//a problem with declaring varibles with var is that you can overwrite variable declarations without an error. let is a replacement that doesn't overwrite.

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
