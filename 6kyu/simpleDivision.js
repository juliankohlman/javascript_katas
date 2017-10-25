// In this Kata, you will be given two numbers, a and b, and your task is to
// determine if the first number a is divisible by all the prime factors of the
// second number b. For example: solve(15,12) = False because 15 is not divisible
// by all the prime factors of 12 (which include2).

// See test cases for more examples.

function solve (a, b) {
  if (b % 2 === 0 && a % 2 !== 0) return false;
  let factors = [];
  let divisor = 2;
  while (b > 2) {
    if (b % divisor === 0) {
      factors.push(divisor);
      b /= divisor;
    } else {
      divisor++
    }
  }
  return factors.every(i => a % i === 0);
};