function repeatedString(s, n) {
	let letterAs = s.split('').filter(i => i === 'a').length;
	let repeats = parseInt(n / s.length);
	let remainingStr = n % s.length;
	return (
		repeats * letterAs +
		s
			.slice(0, remainingStr)
			.split('')
			.filter(i => i === 'a').length
	);
}

console.log(repeatedString('aba', 10));
