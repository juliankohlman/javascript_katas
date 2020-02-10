/* 
Example:

"hel2!lo" --> 6

"wicked .. !" --> 6

"!?..A" --> 1
*/

//* 1st attempt
// function countLettersAndDigits(input) {
//   let count = input.match(/[A-Z]|[\d]/gi);
//   return count ? count.length : 0;
// }

function countLettersAndDigits(input) {
  let count = 0;
  for (let chr of input) {
    if (chr.match(/[A-Z]|[\d]/i)) count++;
  }
  return count;
}

console.log(countLettersAndDigits("hel2!lo"));
