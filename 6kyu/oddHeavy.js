/* Instructions: 
An array is defined to be odd-heavy if it contains at least one odd element
and every element whose value is odd is greater than every even-valued
element.

eg.

Array [11,4,9,2,8] is odd-heavy
because:- its odd elements [11,9] are greater than all the even elements [4,2,8]

Array [11,4,9,2,3,10] is not odd-heavy because:- one of it's even element 10
from [4,2,10] is greater than two of its odd elements [9,3] from [ 11,9,3]

write a function called isOddHeavy that accepts an integer array and returns
true if the array is odd-heavy else return false.
 */

function isOddHeavy(n) {
	const odds = n.filter(i => Math.abs(i) % 2 === 1).sort((a, b) => a < b);
	const evens = n.filter(i => Math.abs(i) % 2 === 0).sort((a, b) => a < b);
	if (odds.length === 0) return false;

	return odds.every(num => evens.every(i => +i < num));
}

// * Check out O(1) solution on codewars

console.log(isOddHeavy([11, 4, 9, 2, 8])); // true
console.log(isOddHeavy([11, 4, 9, 2, 3, 10])); // false
console.log(isOddHeavy([0, 2, 19, 4, 4])); // true
console.log(isOddHeavy([1, -2, -1, 2])); // false
