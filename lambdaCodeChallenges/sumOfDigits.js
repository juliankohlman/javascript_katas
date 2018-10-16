/*
Write a function called sumOfDigits.When given a positive integer, sumOfDigits returns the sum of its digits.Assume all numbers will be positive.

For Example:
console.log(sumOfDigits(23));  // <--- 5
console.log(sumOfDigits(496)); // <--- 19

sumOfDigits(23) returns 5 because 2 + 3 = 5
sumOfDigits(496) returns 19 because 4 + 9 + 6 = 19
*/

// Version 1 //
// --------- //
function sumOfDigits(num) {
	let numString = num.toString();
	let sum = 0;
	for (let i = 0; i < numString.length; i++) {
		sum += +numString[i];
	}
	return sum;
}

// Version 2 //
// --------- //

// function sumOfDigits(num) {
// 	let sum = num
// 		.toString()
// 		.split('')
// 		.reduce((acc, curr) => {
// 			return +acc + +curr;
// 		});
// 	return sum;
// }

console.log(sumOfDigits(23)); // <--- 5
console.log(sumOfDigits(496)); // <--- 19
