/*
Write a function called reverseNumber that reverses an integer number.
Input Example:

12345
555

Output Example:

54321
555

What is the time complexity of your function?
How could you improve it?
 */

function reverseNumber(n) {
	return +n
		.toString()
		.split('')
		.reverse()
		.join('');
}

const negNum = x => {
	res = x
		.toString()
		.split('')
		.reverse();
	res.pop();

	return -+res.join('');
};

console.log(negNum(-1234));
console.log(negNum(-77893));
