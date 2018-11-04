// Write a function called rockPaperScissors that will take a number n, and output all those
// possibilities.

// Example:
// rockPaperScissors(1) outputs [[rock],[paper],[scissors]];
// rockPaperScissors(2) outputs [[rock, rock], [rock, paper], [rock, scissors],
//  [paper, rock], [paper, paper], [paper, scissors], [scissors, rock],
//  [scissors, paper], [scissors, scissors]];

function rockPaperScissors(n) {
	const outputLength = Math.pow(n, 3);
	let rpsSet = new Set([[rock], [paper], [scissors]]);
	let result = [];
	for (let i = 0; i < outputLength; i++) {
		result.push(rpsSet);
	}
	// const rpsArr = [ ['rock'], ['paper'], ['scissors'] ];
	// if (n === 1) return rpsArr;
	// const result = [];
	// for (let i = 0; i <= n; i++) {
	//   for (let j = 0; j <= rpsArr.length; j++) {
	//     result.push([rpsArr[j],rpsArr[i]]);
	//   }
	// }
	// return result;
}
