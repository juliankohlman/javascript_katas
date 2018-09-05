function toBinaryString(number) {
	let num = Number(number); // Input remains unaltered
	let result = '';
	if (number === 0) return '0';
	while (num > 0) {
		result = (num % 2) + result;
		num = Math.floor(num / 2);
	}
	console.log(number, num); // Input remains unaltered
	return result;
}

console.log(toBinaryString(0)); // <--- 0
console.log(toBinaryString(1)); // <--- 1
console.log(toBinaryString(2)); // <--- 10
console.log(toBinaryString(3)); // <--- 11
console.log(toBinaryString(4)); // <--- 100
console.log(toBinaryString(5)); // <--- 101
console.log(toBinaryString(6)); // <--- 110
console.log(toBinaryString(7)); // <--- 111
console.log(toBinaryString(8)); // <--- 1000
console.log(toBinaryString(9)); // <--- 1001
console.log(toBinaryString(10)); // <--- 1010
console.log(toBinaryString(11)); // <--- 1011
console.log(toBinaryString(12)); // <--- 1100
console.log(toBinaryString(13)); // <--- 1101
console.log(toBinaryString(14)); // <--- 1110
console.log(toBinaryString(15)); // <--- 1111
console.log(toBinaryString(16)); // <--- 10000
