/*
Write a function that accepts an array of strings.

Return the longest string in the array.

example:

longestString(['hello', 'goodbye', 'abc']);

--> 'goodbye'
*/

function longestString(arr) {
	return arr.sort((a, b) => a.length < b.length)[0];
}

console.log(longestString(['this', 'is', 'some', 'text']));
