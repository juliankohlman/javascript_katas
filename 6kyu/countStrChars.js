/**
 *
 * The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }
 *
 * What if the string is empty ? Then the result should be empty object literal {}
 *
 */

function count(string) {
	const counts = {};
	const chrs = string.split('');

	chrs.forEach(c => {
		counts[c] ? counts[c]++ : (counts[c] = 1);
	});

	return counts;
}
