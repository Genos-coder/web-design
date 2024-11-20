"use strict";
//We can declare function as anonymous see below
var factorial = function (n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
};
console.log(factorial(3));
//Making a map function
function mapIt(arr, factor) {
    return arr.map(function (number) { return number * factor; });
}
function mapIt2(callback, arr) {
    var mapArr = new Array(arr.length);
    for (var i = 0; i < arr.length; i++) {
        mapArr[i] = callback(arr[i]);
    }
    return mapArr;
}
console.log(mapIt2(function (arg) { return arg * 2; }, [1, 2, 3, 4]));
//we can call the function before they being made because functions are hoisted
console.log(square(12));
function square(x) {
    return Math.pow(x, 2);
}
//Making the function which can iterate over thr DOM tree
function walkTree(node) {
    if (node === null) {
        return;
    }
    for (var i = 0; i < node.childNodes.length; i++) {
        walkTree(node.childNodes[i]);
    }
}
// making recursive function run below function and observe its output
function reduceNum(i) {
    if (i === 0) {
        return;
    }
    console.log("the i here is ".concat(i));
    reduceNum(i - 1);
    console.log("the i here is ".concat(i));
}
// reduceNum(5);
//Closure : The access of the values of outside variables from function which is nested inside is called closure
function A(x) {
    function B(y) {
        function C(z) {
            console.log(x + y + z);
        }
        C(3);
    }
    B(2);
}
A(1);
//If there is name conflict the innermost function prefer it's own variable
function outer(x) {
    function inner(x) {
        return Math.pow(x, 2);
    }
    return inner;
}
console.log(outer(2)(10));
//Using function to create an object
function createPet(petName) {
    var sex;
    var pet = {
        name: petName,
        getName: function () {
            return this.name;
        },
        setName: function (newName) {
            this.name = newName;
        },
        getSex: function () {
            return sex;
        },
        changeSex: function (newSex) {
            if (newSex.toLocaleLowerCase() === "male" ||
                newSex.toLocaleLowerCase() === "female") {
                sex = newSex;
            }
        },
    };
    return pet;
}
var p1 = createPet("vinnie");
console.log(p1.getName());
console.log(p1.setName("joe"));
console.log(p1.getName());
//Using argument object
// when we pass extra argument inside the function without mentioning them then they get allocated inside argument identifier by default
function concatStr(separator) {
    var str = "";
    for (var i = 0; i < arguments.length; i++) {
        str += arguments[i] + separator;
    }
    return str.slice(0, -separator.length);
}
//@ts-ignore
console.log(concatStr(",", "this", "is", "not", "a", "end"));
