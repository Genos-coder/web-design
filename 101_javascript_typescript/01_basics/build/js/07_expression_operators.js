"use strict";
//Arithmetic operators
var _a;
console.log(2 * 2);
console.log(2 / 2);
console.log(2 + 2);
console.log(2 - 2);
console.log(Math.pow(2, 2));
console.log(+2);
console.log(-2);
// console.log("12" - 2);
// console.log("12" * 2);
//Assignment operator
var aeo = 10;
aeo++;
aeo--;
++aeo;
--aeo;
aeo *= 12;
aeo /= 12;
//Comparison operator
console.log(12 == 12);
console.log(12 < 10);
console.log(12 > 10);
console.log(12 <= 10);
console.log(12 >= 10);
//Logical operators
var func1 = function (a, b) {
    if (a === 1 && b === 1) {
        //if both are true then it's a true
    }
};
var func2 = function (a, b) {
    if (a === 1 || b === 1) {
        // when both are false then it's a false
    }
};
//Short-circuiting
console.log(false || "ganesh");
//@ts-ignore
console.log("tim" || false);
console.log(0 || false);
console.log(false && "ganesh");
console.log(true && "ganesh");
//Nullish coalescing operator (it basically check the left hand side if it's null then we can assign right hand side)
var aeo2 = null;
console.log(aeo2 !== null && aeo2 !== void 0 ? aeo2 : "tim");
//ternary operator
var aeo3 = Math.floor(Math.random() * 10) < 5
    ? "its less than 5"
    : "it's greater than 5";
//Unary operators
console.log(+"12"); //convert string into number
console.log(+12 + 10);
//Optional chaining operator
//If there is an object and it's a nested object and we don't want to dig into it without checking there is a undefined data init so for this we can use optional chaining
var aeoObj = {
    ranks: [
        {
            name: "jake",
            playedYears: [2002, 2004],
            friends: [
                {
                    name: "tim",
                    mutualMatches: 12,
                },
            ],
        },
        {
            name: "kate",
            playedYears: [2020, 2022],
        },
    ],
};
console.log((_a = aeoObj.ranks[0].friends) === null || _a === void 0 ? void 0 : _a[0].mutualMatches);
var aeoObj2 = {
    name: "genos",
    type: "cyborg",
    material: "metal",
};
// to delete obj we can use delete
delete aeoObj2.name;
var myFun = new Function("5 + 2");
var shape = "round";
var size = 1;
var fooNew = ["Apple", "Mango", "Orange"];
var today = new Date();
typeof myFun; // returns "function"
typeof shape; // returns "string"
typeof size; // returns "number"
typeof fooNew; // returns "object"
typeof today; // returns "object"
//Relational operators
var Test = /** @class */ (function () {
    function Test(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    return Test;
}());
var aeoInstance1 = new Test("sam", 22);
console.log(aeoInstance1 instanceof Test);
console.log("name" in aeoInstance1);
