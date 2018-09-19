function romanNumeralize(number) {
	const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	const numerals = [
		'M',
		'CM',
		'D',
		'CD',
		'C',
		'XC',
		'L',
		'XL',
		'X',
		'IX',
		'V',
		'IV',
		'I'
	];

	for (let i = 0; i < decimals.length; i++) {
		if (number < 1) return '';
		if (number >= decimals[i]) {
			// M + romanNumeralize(1990 - 1000)
			// MCM + romanNumeralize(990 - 900)...
			return numerals[i] + romanNumeralize(number - decimals[i]);
		}
	}
}

romanNumeralize(1990);
