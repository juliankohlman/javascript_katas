/*
Insertion sort is a basic sorting algorithm.

Insertion sort iterates over an array, growing a sorted array behind the current location.

It takes each element from the input and finds the spot, up to the current point, where that element belongs.

It does this until it gets to the end of the array.

  https://en.wikipedia.org/wiki/Insertion_sort
*/
// For example:
// insertionSort([12, 44, 10, 2, 35, 1098, 356]); // <--- [2, 44, 10, 35, 356, 12, 1098]

function insertionSort(array) {
	for (let i = 1; i < array.length; ) {
		// are these indexes sorted ? [currentIndex] < [previousIndex]
		if (array[i] < array[i - 1]) {
			// temp value set to current index
			let temp = array[i];
			// current index set to previous indexes value
			array[i] = array[i - 1];
			// previous index set to temp value (which is holding the value of current index)
			array[i - 1] = temp;
			// backtrack to compare newly sorted current index with previous index
			i--;
		} else {
			// indexes being compared are sorted so we continue iterating through
			i++;
		}
	}
	return array;
}

console.log(insertionSort([12, 44, 10, 2, 35, 1098, 356]));
