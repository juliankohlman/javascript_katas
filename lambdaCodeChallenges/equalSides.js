/*
// Write a function that returns the index of the given array at which the sums of the numbers on
// either side of it are equal to each other.

// Example:

// equalSides([1, 2, 3, 4, 3, 2, 1]);

// should return 3 because the sums of the numbers on either side of arr[3] are both equal to 6.
// (1+2+3 (4) 3+2+1)

// The length of the sides do not have to be equal, only the sums of their values.
// equalSides([1, 1, 1, 4, 2, 1]);

// should also return 3 (arr[3] = 4), because 1+1+1 is 3, and 2+1 is 3.

// If the array can't be split into equal sides, return -1.
*/
function equalSides(arr) {
	let sideA = [];
	let sideB = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] <= arr[i + 1]) {
			sideA.push(arr[i]);
		} else if (arr[i] > arr[i + 1]) {
			sideB.push(arr[i]);
		}
	}
	sideB.push(arr[arr.length - 1]);
	let root = arr.indexOf(sideB.shift());
	console.log(root);

	let a = sideA.reduce((a, b) => a + b);
	console.log(a);

	let b = sideB.reduce((a, b) => a + b);
	console.log(a === b);

	return a === b ? root : -1;
}

// * Model solution * //
function equalSides(arr) {
	// condense side of array to single value
	function reduceSide(side) {
		return side.reduce((result, currentNum, index, side) => {
			return result + currentNum;
		}, 0);
	}
	// loop over array starting with 2nd index
	// creating (sides a & b) with slicing from 1st index upto current position (right side) and after current position (left side)
	for (let i = 1; i < arr.length; i++) {
		let right = arr.slice(0, i); // right
		// If end is greater than the length of the sequence, slice extracts through to the end of the sequence (arr.length).
		let left = arr.slice(i + 1, arr.length); // left
		// compare sides
		// if equal return number at that position (i)
		if (reduceSide(right) === reduceSide(left)) {
			return i;
		}
	}
	// no equal sides found
	return -1;
}
equalSides([1, 2, 3, 4, 3, 2, 1]);
equalSides([1, 1, 1, 4, 2, 1]);
