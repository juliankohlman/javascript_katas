/*
Write a function called commonElements that has parameters for two arrays.Return an array of all items that are present in both arrays.Do not modify the arrays that are passed in.

Input Example:

[1, 2, 3, 4][3, 4, 5, 6]
['a', 'b', 'c']['x', 'y', 'z', 'a']
[1, 2, 3][4, 5, 6]

Output Example:

[3, 4]
['a']
[]
*/

function commonElements(arr1, arr2) {
	return arr1.filter(item => arr2.includes(item));
}
