//Comments in js

//This is single line comment

/*
This is multiline comment 
*/

//WHITE SPACE

console.log("This is \t horizontal tab");
console.log("This is \v vertical tab");
console.log("This is \f form feed");

//LINE terminators

console.log("This is \n line terminator");
console.log("This is \r carriage return");

//Identifiers

var a1 = "tim";
const a2 = "jake";
let a3 = "seta";

//Scientific notation
console.log(`${2e-1}`); //here 2e-1 = 2 * 10 ^ -1
console.log(`${2e1}`); //here 2e-1 = 2 * 10 ^ 1

//Numeric separators

console.log(1_00_00_000); // we can represent number lke this which make them more readable

//String literals

console.log("this is normal string ");

console.log(
  `This string is in backticks and we can write javascript in it like this ${
    1 + 2
  }`
);
