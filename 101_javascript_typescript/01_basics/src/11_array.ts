//Different ways if declaring arrays in js

const arr1 = [1, 2, 3];
const arr2 = new Array(5); // This is array of length 5

const arr3 = Array(10); //This creates same shit with length 10

//Typescript specific
//You can create tuple using typescript like following
const arr4: [boolean, number, string] = [true, 12, "yep"];

// array instance methods

console.log([1, 2, 3].at(0));
//Array mutating methods

const arr5 = [1, 2, 3, 4, 5, 6];
console.log(arr5.fill(1, 2, arr5.length));
const arr6 = [1, 2, 3, 4, 5, 6];
console.log(arr6.copyWithin(1, 4, 5));
const arr7 = [1, 2, 3, 4, 5, 6];
console.log(arr7.reverse());
const arr8 = [1, 2, 3, 4, 5, 6];
console.log(arr8.splice(2, 3)); //it returns element which where deleted

const arr9 = [100, 30, 60, 88, 1111];
console.log(arr9.sort((a, b) => a - b)); //we need to specify the function which subtract the a as starting element and b as after element if the calculation   results in negative number the number get's swapped.
//we can reverse the array from largest to smallest
console.log(arr9.sort((a, b) => b - a));

const arr10 = [1, 2, 3, 4];
console.log(arr10.push(1)); //push the element at the end of array and returns the total length
const arr11 = [1, 2, 3, 4];
console.log(arr11.pop()); //Removes the last element and returns it

const arr12 = [1, 2, 3, 4];
console.log(arr12.unshift(12)); //put element at start and returns total length
const arr13 = [1, 2, 3, 4];
console.log(arr13.shift()); //removes starting element and returns it

//The alternative non-mutating methods

console.log([1, 2, 3, 4].toSpliced(2, 2));
console.log(arr13.concat([100, 101, 102]));
console.log([12, 333, 432, 21, 2].toSorted((a, b) => a - b));
console.log([1, 2, 3, 4].toReversed());
console.log([1, 2, 3, 4, 5].slice(0, -1)); //this created the shallow copy array not deep copy

//Array instance methods

const arr14 = [1, 2, 3, 4, 6];
console.log([1, 2, 3, 4, 5].indexOf(4));
console.log(arr14.join(""));

console.log([1, 2, 3, 4].map((item) => item * 2));
console.log(arr14.find((item) => item === 2)); //finds

console.log(arr14.findIndex((item) => item === 2));
console.log(arr14.findLast((item) => item === 2));
console.log(arr14.findLastIndex((item) => item === 2));

console.log(arr14.filter((item) => item > 2));
console.log(arr14.every((item) => typeof item === "number"));
console.log(arr14.some((item) => item % 2 === 0));
console.log(arr14.reduce((acc, curr) => acc + curr, 0));

console.log([1, [2, [3, [4]]]].flat(3));
console.log(arr14.flatMap((item) => [item, item * item]));

console.log(arr14.includes(12));
//Array static methods

const arr15 = Array.from({ length: 5 }, (i, _) => _);
console.log(Array.from);
//Leet-code
//Question1:- Create the spiral matrix
/*

*/
