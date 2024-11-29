"use strict";
var obj = {
    name: "ganesh",
    age: 22,
};
var target = {
    a: 1,
    b: 2,
};
var source = {
    b: 10,
    c: 12,
};
var modifiedTarget = Object.assign(target, source);
// console.log(modifiedTarget);
// console.log(modifiedTarget === target);
var person = {
    isHuman: true,
    setItsModelNumber: function (num) {
        return num;
    },
};
var newObj = Object.create(person);
// console.log(newObj.isHuman);
// making array of key and value pair of objects
var obj2 = {
    name: "jorden",
    lastname: "peterson",
};
for (var _i = 0, _a = Object.entries(obj2); _i < _a.length; _i++) {
    var _b = _a[_i], key = _b[0], value = _b[1];
    //   console.log(key, value);
}
console.log(Object.hasOwn(obj2, "name"));
console.log(Object.is(1, 1));
console.log(Object.is(target, modifiedTarget));
console.log(Object.keys(obj2));
console.log(Object.values(obj2));
