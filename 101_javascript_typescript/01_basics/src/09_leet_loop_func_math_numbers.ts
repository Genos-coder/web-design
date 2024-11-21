//  Question 1: Sum of all natural numbers from 1 to n

function sumOfN(n: number) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// console.log(sumOfN(4));

//Question 2: Sum of digits of a number

//Explanation:Consider the number we want the sum of it's digits so we can divide it by 10 so we can get the last digit as remainder and then we divide it using Math.floor function to remove the last digit to get next last digit into consideration

function sumOfDigits(n: number) {
  let sumOfAllDigits = 0;
  let copy = n;
  for (let i = 0; i < n; i++) {
    let lastDigit = copy % 10;
    sumOfAllDigits += lastDigit;
    copy = Math.floor(copy / 10);
  }
  return sumOfAllDigits;
}

// console.log(sumOfDigits(123));

// Question 3: Count the number of digits of a number

function countTheDigits(n: number) {
  let count = 0;
  let copy = n;
  while (copy > 0) {
    count++;
    copy = Math.floor(copy / 10);
  }
  return count;
}
const num = 1234;
console.log(countTheDigits(1234));

// Question 4: Check if a number is palindrome

//Algorithm
/*
Step1 : start a for loops so we can iterate over the all digits
*/
function checkPalindrome(n: number) {
  let copy = n;
  let reversedNum = 0;
  while (copy > 0) {
    let lastNum = copy % 10;
    reversedNum = reversedNum * 10 + lastNum;
    copy = Math.floor(copy / 10);
  }
  return reversedNum === n;
}

// console.log(checkPalindrome(121));

// Question 5: Find nth Fibonacci number

/*
1-> Fibonacci numbers are 0,1,1,2,3,5,8,13
*/

function findFibonacci(n: number) {
  if (n < 2) {
    return n;
  }
  let prev = 0,
    curr = 1,
    next;
  for (let i = 2; i <= n; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
  }
  return prev;
}

console.log(findFibonacci(3));

// Question 6: Missing Number in an Array

function missingNumInArr(arr: number[]) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return ((arr.length + 1) * (arr.length + 2)) / 2 - sum;
}

console.log(missingNumInArr([1, 2, 3, 4, 6]));
// ## Practice Questions

// - [Count Odd Numbers in an Interval Range](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/)
// - [Fizz Buzz](https://leetcode.com/problems/fizz-buzz/)
// - [Power of Two](https://leetcode.com/problems/power-of-two/)
// - [Find Square root of a Number](https://leetcode.com/problems/sqrtx/)

//Solutions

// 1 -count odd

function countOdd(n: number) {
  let count = 0;
  if (n % 2 !== 0) {
    count++;
  }
  return count;
}

//2-fizzbuzz

function fizzbuzz(n: number) {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("fizzbuzz");
    } else if (i % 5 === 0) {
      console.log("fizz");
    } else if (i % 3 === 0) {
      console.log("buzz");
    }
  }
}

fizzbuzz(50);

//3-Power of two

function checkPowerOfTwo(n: number) {
  if (n % 2 === 0 || n === 1) {
    return true;
  } else {
    return false;
  }
}

// 4- find square root

function findSquareRoot(n: number) {
  let answer = 0;

  while (answer * answer !== n) {
    answer++;
  }
  return answer;
}

// console.log(findSquareRoot(64));
