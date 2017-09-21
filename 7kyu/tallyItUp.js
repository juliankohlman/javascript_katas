// I'm creating a scoreboard on my game website, but I want the score to be
// displayed as tally marks instead of Roman numerals. Write a function that
// translates the numeric score into tally marks.

// My tally mark font uses the letters a, b, c, d, e to represent tally marks for
// 1, 2, 3, 4, 5, respectively. I want a space and line break (<br>) after each
// completed tally (5).

// Assume that the score you receive will be an integer. This function should
// return an HTML string that I can insert into my website that represents the
// correct score.

var scoreToTally = function(score) {
  console.log(score);
  let scoreTally = { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e' };
  if ( score < 5 ) return scoreTally[score];
  if ( score % 5 === 0 ) return 'e <br>'.repeat(score / 5);
  let lastTally = scoreTally[score % 5];
  let completeTallys = score - (score % 5);
  return 'e <br>'.repeat(completeTallys / 5) + lastTally;
}