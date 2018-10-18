/*
Write a function that generates a list of all prime numbers in a specified range (inclusive).
If you're not quite sure where to start, check out the Sieve of Eratosthenes on Wikipedia.
*/
// prime number: A Prime Number is a whole number that cannot be made by multiplying other whole numbers
const isPrime = num => {
	// * using sqrt(num) decreases time complexity 0(n) ---> 0(sqrt(n))
	for (let i = 2, s = Math.sqrt(num); i <= s; i++)
		// num evenly divisible
		if (num % i === 0) return false;
	return num !== 1 && num !== 0;
};

function primeList(start, end) {
	const list = []; // storage for primes
	for (let index = start; index <= end; index++) {
		// isPrime(index) ? list.push(index) : null;
		// * invoke helper function push index into primes array if func returns true
		if (isPrime(index)) list.push(index);
	}
	return list;
}

console.log(primeList(4, 13));
