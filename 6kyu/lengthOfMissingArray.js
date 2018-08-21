/* Instructions
You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3


If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between
the given arrays.
*/

function getLengthOfMissingArray(input) {
	if (+input === 0 || input.some(i => i === null || i.length === 0)) return 0;
	const arrays =
		input
			.sort((a, b) => a.length - b.length)
			.map(i => i.length)
			.find((_, idx, col) => col[idx + 1] - col[idx] !== 1) + 1;

	// return arrays.find((i, idx, col) => col[idx + 1] - col[idx] !== 1) + 1;
	return arrays;
}

console.log(
	getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
);
