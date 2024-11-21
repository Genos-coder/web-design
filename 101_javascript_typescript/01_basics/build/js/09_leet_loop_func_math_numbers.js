"use strict";
//  Question 1: Sum of all natural numbers from 1 to n
function sumOfN(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// console.log(sumOfN(4));
//Question 2: Sum of digits of a number
//Explanation:Consider the number we want the sum of it's digits so we can divide it by 10 so we can get the last digit as remainder and then we divide it using Math.floor function to remove the last digit to get next last digit into consideration
function sumOfDigits(n) {
    var sumOfAllDigits = 0;
    var copy = n;
    for (var i = 0; i < n; i++) {
        var lastDigit = copy % 10;
        sumOfAllDigits += lastDigit;
        copy = Math.floor(copy / 10);
    }
    return sumOfAllDigits;
}
// console.log(sumOfDigits(123));
// Question 3: Count the number of digits of a number
function countTheDigits(n) {
    var count = 0;
    var copy = n;
    while (copy > 0) {
        count++;
        copy = Math.floor(copy / 10);
    }
    return count;
}
var num = 1234;
console.log(countTheDigits(1234));
// Question 4: Check if a number is palindrome
//Algorithm
/*
Step1 : start a for loops so we can iterate over the all digits
*/
function checkPalindrome(n) {
    var copy = n;
    var reversedNum = 0;
    while (copy > 0) {
        var lastNum = copy % 10;
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
function findFibonacci(n) {
    if (n < 2) {
        return n;
    }
    var prev = 0, curr = 1, next;
    for (var i = 2; i <= n; i++) {
        next = prev + curr;
        prev = curr;
        curr = next;
    }
    return prev;
}
console.log(findFibonacci(3));
// Question 6: Missing Number in an Array
function missingNumInArr(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
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
function countOdd(n) {
    var count = 0;
    if (n % 2 !== 0) {
        count++;
    }
    return count;
}
//2-fizzbuzz
function fizzbuzz(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log("fizzbuzz");
        }
        else if (i % 5 === 0) {
            console.log("fizz");
        }
        else if (i % 3 === 0) {
            console.log("buzz");
        }
    }
}
fizzbuzz(50);
//3-Power of two
function checkPowerOfTwo(n) {
    if (n % 2 === 0 || n === 1) {
        return true;
    }
    else {
        return false;
    }
}
// 4- find square root
function findSquareRoot(n) {
    var answer = 0;
    while (answer * answer !== n) {
        answer++;
    }
    return answer;
}
// console.log(findSquareRoot(64));
