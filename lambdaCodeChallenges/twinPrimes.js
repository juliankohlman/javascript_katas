// A twin prime is a prime number that differs from another prime number by two. Write a function
// called isTwinPrime which takes an integer and returns true if it is a twin prime, or false if it
// is not. Example:

// 5 is a prime, and 5 + 2 = 7, which is also a prime, so returns true. 9 is not a prime, and so
// does not need checking, so it returns false. 7 is a prime, but 7 + 2 = 9, which is not a prime.
// However, 7 - 2 = 5, which is a prime, so it returns true. 23 is a prime, but 23 + 2 is 25, which
// is not a prime.  23 - 2 is 21, which isn't a prime either, so 23 is not a twin prime.

// * Add comments breaking down solution further (including use of helper function)
const isPrime = num => {
	for (let i = 2, sq = Math.sqrt(num); i <= sq; i++)
		if (num % i === 0) return false;
	return num >= 2;
};

function isTwinPrime(n) {
	if (!isPrime(n)) return isPrime(n);
	return isPrime(n - 2) || isPrime(n + 2);
}
