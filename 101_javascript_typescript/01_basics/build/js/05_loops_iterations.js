"use strict";
//Do while loops
var al1 = 0;
do {
    //   console.log(al1);
    al1++;
} while (al1 < 10);
//The do while loop runs at least once
//While loop with loop label
var al2 = 0;
var al3 = 0;
labeltobreakloop: while (true) {
    al2 += 1;
    al3 = 1;
    //   console.log("outer loop", al2);
    while (true) {
        al3 += 1;
        // console.log("inner loop", al3);
        if (al2 === 10 && al3 === 10) {
            break labeltobreakloop;
        }
        else if (al3 === 10) {
            break;
        }
    }
}
// we can use continue with labels
var al4 = 0;
testcontinuewithloop: while (al4 < 100) {
    al4++;
    if (al4 % 2 == 0) {
        continue testcontinuewithloop;
    }
    //   console.log(al4);
}
//For iterating over object we can use for in loop
var al5 = {
    name: "ganesh",
    level: 10,
    power: "web designer",
};
for (var i in al5) {
    console.log("".concat(al5[i], " is value and key is ").concat(i));
}
//For of loop for iterating over arrays
var al6 = [1, 2, 3, 4];
for (var _i = 0, al6_1 = al6; _i < al6_1.length; _i++) {
    var i = al6_1[_i];
    console.log(i); // here we are printing values
}
//@ts-ignore
al6.stuff = "shit";
for (var i in al6) {
    console.log(i); // here we are printing index
}
//Destructuring over objects
for (var _a = 0, _b = Object.entries(al5); _a < _b.length; _a++) {
    var _c = _b[_a], key = _c[0], value = _c[1];
    console.log(key, value);
}
// basically using in we can iterate over index
// using of we can iterate over values
