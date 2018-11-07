// Write a function called rockPaperScissors that will take a number n, and output all those
// possibilities.

// Example:
// rockPaperScissors(1) outputs [[rock],[paper],[scissors]];
// rockPaperScissors(2) outputs [[rock, rock], [rock, paper], [rock, scissors],
//  [paper, rock], [paper, paper], [paper, scissors], [scissors, rock],
//  [scissors, paper], [scissors, scissors]];

function rockPaperScissors(n) {
	const rounds = n; // our input (n length combinations)
	const results = []; // store all n length possibilities
	const weapons = ['rock', 'paper', 'scissors']; // items

	const recurse = function(roundsLeft, played) {
		// base case no rounds left to play
		// callstack returns and 'played values' get pushed into results and we return.
		if (roundsLeft === 0) {
			results.push(played);
			return;
		}
		// console.log('results: ', results);
		// console.log('played: ', played);

		// recursive case
		for (let i = 0; i < weapons.length; i++) {
			const current = weapons[i];
			// console.log('played inside recurse', played);
			// console.log('roundsLeft', roundsLeft);

			// altering inputs to recurse() otherwise => blown callstack
			recurse(roundsLeft - 1, played.concat(current));
		}
	};

	recurse(rounds, []);

	return results;
}

console.log(rockPaperScissors(2));
