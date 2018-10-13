/*
Write a function that generates a list of all prime numbers in a specified range (inclusive).
If you're not quite sure where to start, check out the Sieve of Eratosthenes on Wikipedia.
*/
const isPrime = num => {
	for (let i = 2, s = Math.sqrt(num); i <= s; i++)
		if (num % i === 0) return false;
	return num !== 1 && num !== 0;
};

function primeList(start, end) {
	let list = [];
	let maxRange = end - start;
	for (let index = 0; index <= maxRange; index++) {
		list.push(start + index);
	}
	return list.filter(n => isPrime(n));
}

console.log(primeList(4, 13));
