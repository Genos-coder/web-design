"use strict";
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
console.log(10000000); // we can represent number lke this which make them more readable
//String literals
console.log("this is normal string ");
console.log(`This string is in backticks and we can write javascript in it like this ${1 + 2}`);
// console.log(a4); //cannot do this because variable is has to be declared even though it's a var it get's hoisted  but not get declared
var a4 = "jake";
const a5 = "constant variable";
// a5 = "some stuff" cannot redeclare the constant variable
//PRIMITIVE DATATYPES
let a6 = "string"; //String
let a7 = 12; // Number
let a8 = false; // Boolean
let a9 = undefined;
let a10 = null;
let a11 = Symbol("description");
let a12 = 1234n; // Bigint
//we can check type of variable using typeOf keyword
console.log(typeof a6);
