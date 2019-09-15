/* Instructions:
Given three arrays of integers, return the sum of elements of that are common in all three
arrays.

For example:
common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays
Array lengths in random tests run from 5000 to 10000 elements.

More examples in the test cases.
*/

function common(a, b, c) {
	// keys count === number of arrays (in this case 3) its common
	// Todo figure out how to handle duplicate common elements
	let arrayCounts = {};
	let allItems = a.concat(b, c);
	allItems.forEach(element => {
		arrayCounts[element]
			? (arrayCounts[element] += 1)
			: (arrayCounts[element] = 1);
	});
	console.log(arrayCounts);
	console.log(allItems);
}

common([1, 2, 3], [5, 3, 2], [7, 3, 2]); // 5 because 2 & 3 are common in all 3 arrays
common([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]); // 7 because 2,2 & 3 are common in the 3 arrays
