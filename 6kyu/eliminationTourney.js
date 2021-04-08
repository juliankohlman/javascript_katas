/**
 * In this Kata you will be given an array (or another language-appropriate collection) representing contestant ranks. You must eliminate contestant in series of rounds comparing consecutive pairs of ranks and store all initial and intermediate results in an array.

During one round, the lowest rank of a pair is eliminated while the highest proceeds to the next round. This goes on until one contestant only is left. If the number of contestants is odd, the last one of the current array becomes the first of the next round.

At the end of the competition, return the results of all the rounds in the form of array of arrays:

input = [9, 5, 4, 7, 6, 3, 8, 2];

tourney(input) === [
  [9, 5, 4, 7, 6, 3, 8, 2],  // first round is initial input
  [9, 7, 6, 8],              // results of 9 vs 5, 4 vs 7, 6 vs 3, and 8 vs 2 
  [9, 8],                    // results of 9 vs 7 and 6 vs 8
  [9]                        // results of 9 vs 8
];
 */

const tourney = (array) => {
  // return tourney results
  // if array.length % 2 === 1
  // then add last item to beginning of next round
  //* use pointer left right then iterate the pointers
  //* add logic for reaching end when odd number
  let left = 0;
  let right = 1;
  let nextRound = [];
  while (right < array.length - 1) {
    // * conditions
  }
};
