/**
 * Given a long number, return all the possible sum of two digits of it.

For example, 12345: all possible sum of two digits from that number are:

[ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
Therefore the result must be:

[ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]
 */

function digits(num, sum = [] || sum) {
	let nums = Array.from(num.toString()).map(n => +n);
	let start = 0;
	let next = 1;
	let stop = nums.length - 1;

	while (next <= stop) {
		sum.push(nums[start] + nums[next]);
		next++;
	}
	nums.shift();

	if (nums.length > 1) {
		return digits(nums.join(''), sum);
	}
	return sum;
}

console.log(digits(156)); // [6, 7, 11]
console.log(digits(81596)); // [9, 13, 17, 14, 6, 10, 7, 14, 11, 15]
console.log(digits(3852)); // [11, 8, 5, 13, 10, 7]
console.log(digits(3264128)); // [5, 9, 7, 4, 5, 11, 8, 6, 3, 4, 10, 10, 7, 8, 14, 5, 6, 12, 3, 9, 10]
console.log(digits(999999)); // [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,18]
