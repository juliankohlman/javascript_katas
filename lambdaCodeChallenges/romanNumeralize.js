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

	for (let i = 0; i < Object.keys(data).length; i++) {
		if (number < 1) return '';
		if (number >= Object.values(data)[i]) {
			// M + romanNumeralize(1990 - 1000)
			// MCM + romanNumeralize(990 - 900)...
			return (
				Object.keys(data)[i] + romanNumeralize(number - Object.values(data)[i])
			);
		}
	}
}

console.log(romanNumeralize(1990));
console.log(romanNumeralize(1973));
