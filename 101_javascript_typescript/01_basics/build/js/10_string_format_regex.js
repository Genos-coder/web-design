"use strict";
var str1 = new String("tim");
// console.log(str1.valueOf());
// console.log(str1.substring);
var str2 = "Original";
var str3 = str2.substring(0, str2.length - 2);
// console.log(str3);
//Instance methods
console.log(str2.at(1));
console.log(str2.charAt(1));
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());
//Strings are immutable
//You cannot change/ modify strings
//MEaning each time you reassign the str4 to another string the new memory location is created.
var str4 = "tix";
str4 = "jake";
console.log(str4);
var str5 = "  this is example for testing   ";
var result = str5.trimStart();
console.log(str5.trimEnd());
console.log(str5.trim());
console.log(str5.replace("this", "that"));
console.log(str5.replaceAll("e", "j"));
console.log(str5.padEnd(str5.length + 12, "tim"));
console.log(str5.padStart(str5.length + 12, "tim"));
console.log(str5.endsWith(" "));
console.log(str5.startsWith(" "));
console.log(str5.indexOf("this"));
console.log(str5.lastIndexOf("e"));
console.log(str5.concat(str4));
console.log(str5.includes("is"));
console.log(str4.substring(0, -1)); // we can't give the -1 as a parameter
console.log(str4.substring(0, str4.length));
console.log(str4.slice(0, -1)); // we can give the -1 as a parameter
//Using string literals to put variables and javascript inside string
console.log("This is not a end , ".concat(str4, " we must continue the journey until there is light."));
//Regex in javascript
//Flags in regular expression
var reg1 = /ganesh/g; //here means checking overall string i.e global
var reg2 = /ganesh/i; // This add case insensitiveness in the regular expression
var reg3 = /^ganesh$/m; // allows the multiline approach for the ^ and & means at instead checking at start and end of the entire string it will check at all new line
var reg4 = /ganesh/s; // will allow the . to match the newline character
var reg5 = /ganesh/u; // will allow to match the emojis and symbols
//we can provide the last index for regex
var reg6 = /ganesh/y;
reg6.lastIndex = 5;
var str6 = "test test";
console.log(reg6.exec(str6));
