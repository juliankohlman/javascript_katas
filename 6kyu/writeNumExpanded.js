// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For
// example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
	let digits = (num + '').split('').map(i => +i);
	let results = [];
	digits.forEach((digit, idx) => {
		if (digits[idx] !== 0)
			results.push(digits[idx] + '0'.repeat(digits.length - 1 - idx));
	});
	console.log(results.join(' + '));
	return results.join(' + ');
	// return results.filter(i => +i !== 0).join(' + ');
}

console.log(expandedForm(70304));
