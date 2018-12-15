// Given an array of numbers, find the greatest contiguous sum of numbers.

// example 1: sumArray([1, 2, 3]); // => 6
// example 2: sumArray([4, -1, 5]); // => 8
// example 3: sumArray([10, -11, 11]); // 11
// * Document solutions and refactor
function sumArray(arr) {
	let currentMaxSum = 0;
	let endingMax = 0;

	arr.forEach(i => {
		endingMax += i; // -2, -3 same situation...4 is reached
		if (endingMax < 0) {
			// 4 not less than zero skip to else if condition
			endingMax = 0; // 0
		} else if (currentMaxSum < endingMax) {
			// 0 < 0:  0 < 4 yes
			currentMaxSum = endingMax; // 0 = 0 0 = 4 now ending max and currentMax are equal to 4 with endingMax taking on value of next array item
		}
	});
	return currentMaxSum;
}

// function sumArray(arr) {
//   let ans = 0;
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     ans = Math.max(0, ans + arr[i]);
//     sum = Math.max(sum, ans);
//   }

//   return sum;
// }

// sumArray([-2, -3, 4, -1, -2, 1, 5, -3]);
sumArray([-2, -3, 4, -1, -2, 1, 5, -3]);
