/**
 * Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

Input: "Hello World"
Output: 5
 * @param {string} 
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	words = s.split(' ').filter(s => s !== '');
	// console.log(words, words.length)
	console.log(words.length > 0 ? words[words.length - 1].length : 0);
	return words.length > 0 ? words[words.length - 1].length : 0;
};

lengthOfLastWord('a ');
lengthOfLastWord('');
lengthOfLastWord(' ');
