// Given a positive integer number, the Collatz conjecture determines the next term in the sequence
// by either

// Halving n if n is even

// Multiplying n by 3 and then adding one if n is odd

// Write a function that will take a number n, and return the Collatz chain. You will stop at one.
// An example chain looks like this: [23, 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1]
// (Bold signifies odd numbers).

function collatzSequence(n) {
  const sequence = (n) => {
    return n === 1 ? [1] : ([n].concat(sequence(n % 2 === 0 ? n / 2 : n * 3 + 1 )));
  };
  return sequence(n);
}

console.log(collatzSequence(23));
