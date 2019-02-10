function mergeSort(array) {
	// EARLY RETURN IF ARRAY ONLY CONTAINS 1 ELEMENT
	console.log('unsorted', array);

	if (array.length === 1) {
		return array;
	}
	// FIND MIDDLE INDEX OF ARRAY
	const middle = Math.floor(array.length / 2);
	// PARTITION ARRAY FROM START UPTO MIDDLE (LEFT OF MIDDLE) *slice not inclusive*
	const left = array.slice(0, middle);
	// PARTITION ARRAY FROM MIDDLE TO END OF ARRAY
	const right = array.slice(middle);
	// RETURN MERGE FUNCTION WITH TWO ARGS: CALLING MERGESORT WITH PARTITIONS (LEFT : RIGHT)
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	let result = [];
	let leftIndex = 0;
	let rightIndex = 0;
	console.log('left', left);
	console.log('right', right);

	// 0 < 1 && 0 < 1
	while (leftIndex < left.length && rightIndex < right.length) {
		// console.log(left[leftIndex], right[rightIndex]);
		console.log('results array:', result);

		if (left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex]);
			leftIndex++;
			console.log('left value less than right value?', result);
		} else {
			result.push(right[rightIndex]);
			rightIndex++;
			console.log('right value greater than left value?', result);
		}
		// console.log('running result:', result);
	}
	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let nums1 = [1, 6, 3, 2, 4, 7];
let nums2 = [6, 10, 1, 9, 4, 8, 2, 7, 3, 5];
console.log(mergeSort(nums1));
// console.log(mergeSort(nums2));
