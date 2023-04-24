// Strict Mode
"use strict";

let hasDriverLicence = false;
const passTest = true;

if (passTest) hasDriverLicence = true
if(hasDriverLicence) console.log("I can Drive"); // Without Stict mode output will be nothing but with strict mode it will throw and error

// use strict helps us to prevent accidental error in code and helps us to fix the bug. Also it shows visible error in developer consol which makes our code more efficient to read and write. Also we can to use reserved keyword as variable which will implement in future while using strict mode. 
// Example : interface, private