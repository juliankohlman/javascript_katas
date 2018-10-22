/*
Find the first item that occurs an even number of times in an array.

Remember to handle multiple even-occurrence items and return the first one.

Return null if there are no even-occurrence items.

Example usage:
const arr = [1, 7, 2, 4, 5, 6, 8, 9, 6, 4];
console.log(evenOccurrence(arr)); // <--- 4
*/
function evenOccurrence(arr) {
	// object to store {item : itemOccurence} key-value pairs
	const occurrences = {};
	// build up object by iterating over input arr
	arr.forEach(element => {
		occurrences[element]
			? (occurrences[element] += 1) // if item key exists increment its value
			: (occurrences[element] = 1); // if item key does not exist initialize w/ value of 1
	});
	// filter array for items that only occur an even number of times by referring to our object of item-occurrence data.
	let evenItem = arr.find(item => occurrences[item] % 2 === 0);
	console.log(evenItem);

	// * NOTE Object.entries uses for...in looping structure which will not maintain arrays index order
	// ternary if evenItem exists or is 'defined' return the item otherwise return null since undefined is a falsy value
	return evenItem ? evenItem : null;
}

const arr1 = [1, 2, 3, 4, 5]; // null
const arr2 = [1, 7, 2, 4, 5, 6, 7, 4, 6, 7, 7]; // 7
const arr3 = [1, 7, 2, 4, 5, 6, 8, 9, 6, 4]; // 4
const arr4 = [1, 7, 2, 4, 5, 6, 8, 9, 6, 4, 4]; // 6
console.log(evenOccurrence(arr1));
console.log(evenOccurrence(arr2));
console.log(evenOccurrence(arr3));
console.log(evenOccurrence(arr4));
