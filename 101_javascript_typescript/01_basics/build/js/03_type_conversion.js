"use strict";
//We can use unary operator to convert string into number
console.log(+"101"); // 101
console.log(+101); //101
console.log(+false); //0
console.log(-true); //-1
//Using parsInt we can specify the radix of the number
console.log(parseInt("101", 2)); //for binary
console.log(parseInt("101", 10)); // for decimal
//implicit type conversion
//@ts-ignore
if (12 == "12") {
    console.log(true);
}
// In above example we can see that there is implicit type conversion is done the string is converted into number "12" = 12
// for more explicit type checking use ===
// @ts-ignore
if (12 === "12") {
    console.log(true);
}
