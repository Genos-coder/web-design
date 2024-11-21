// Scientific notation for numbers

const an1 = 123e2; // which is equivalent to 123 * 10 ^ 2

// Static method
console.log(Number("12"));
console.log(typeof Number("12"));
console.log(Number.isFinite(1));
console.log(Number.isFinite(1 / 0));
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// Instance method

const an2 = 1234;
console.log(an2.toExponential(2)); //It will it's power
console.log(an2.toFixed(3)); //This will fix the number after the decimal upto numbers you mention init
console.log(an2.toLocaleString("en-US")); // Will represent the number into the local string indian representation of money
console.log(an2.toString()); // Will convert string into number

//Math function

console.log(Math.round(12.6)); // Will round off the number according to maths rules
console.log(Math.floor(12.4)); // will round the number to nearest small integer
console.log(Math.ceil(12.4)); // Will round the number to nearest big integer
console.log(Math.abs(-12)); // Will
console.log(Math.min(12, 11, 24));
console.log(Math.max(12, 11, 24));
console.log(Math.sqrt(4));

//using math function to generate random numbers

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

console.log(rollDice());

//Date in js

console.log(Date()); //It gives the string
const todayDate = new Date(); // It gives the date object
console.log(todayDate);

console.log(todayDate.getTime());
console.log(todayDate.getMilliseconds());
console.log(todayDate.getTime());
