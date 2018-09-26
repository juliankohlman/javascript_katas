function romanNumeralize(n) {
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

	const symbols = Object.keys(data);
	const values = Object.values(data);

	for (let i = 0; i < symbols.length; i++) {
		if (n < 1) return '';
		if (n >= values[i]) {
			// M + romanNumeralize(1990 - 1000)
			// MCM + romanNumeralize(990 - 900)...
			// MCMXC + romanNumeralize(90 -90)...base case reached return
			return symbols[i] + romanNumeralize(n - values[i]);
		}
	}
}

console.log(romanNumeralize(1990)); // MCMXC
console.log(romanNumeralize(1973)); // MCMLXXIII
