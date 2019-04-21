/**
 *
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
