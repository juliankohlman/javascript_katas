function romanNumeralize(number) {
	const data = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	};

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

	// for (let i = 0; i < decimals.length; i++) {
	// 	if (number < 1) return '';
	// 	if (number >= decimals[i]) {
	// 		// M + romanNumeralize(1990 - 1000)
	// 		// MCM + romanNumeralize(990 - 900)...
	// 		return numerals[i] + romanNumeralize(number - decimals[i]);
	// 	}
	// }

	const symbols = Object.keys(data);
	const values = Object.values(data);

	for (let i = 0; i < symbols.length; i++) {
		if (number < 1) return '';
		if (number >= values[i]) {
			// M + romanNumeralize(1990 - 1000)
			// MCM + romanNumeralize(990 - 900)...
			// MCMXC + romanNumeralize(90 -90)...base case reached return
			return symbols[i] + romanNumeralize(number - values[i]);
		}
	}
}

console.log(romanNumeralize(1990)); // MCMXC
console.log(romanNumeralize(1973)); // MCMLXXIII
