/*
Insertion sort is a basic sorting algorithm.

Insertion sort iterates over an array, growing a sorted array behind the current location.

It takes each element from the input and finds the spot, up to the current point, where that element belongs.

It does this until it gets to the end of the array.

  https://en.wikipedia.org/wiki/Insertion_sort
*/
// For example:
// insertionSort([12, 44, 10, 2, 35, 1098, 356]); // <--- [2, 44, 10, 35, 356, 12, 1098]

// v2.0
function insertionSort(array) {
	for (let i = 1; i < array.length; ) {
		if (array[i] < array[i - 1]) {
			// are these indexes sorted [currentIndex] < [previousIndex]
			let temp = array[i]; // temp value set to current index
			array[i] = array[i - 1]; // current index set to previous indexes value
			array[i - 1] = temp; // previous index set to temp value (which is holding the value of current index)
			i--; // backtrack to compare newly sorted current index with previous index
		} else {
			// indexes being compared are sorted so we continue iterating through
			i++;
		}
	}
	return array;
}

console.log(insertionSort([12, 44, 10, 2, 35, 1098, 356]));
