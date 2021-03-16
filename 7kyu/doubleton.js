/**
 * We will call a natural number a "doubleton number" if it contains exactly two distinct digits. For example, 23, 35, 100, 12121 are doubleton numbers, and 123 and 9980 are not.

For a given natural number n (from 1 to 1 000 000), you need to find the next doubleton number. If n itself is a doubleton, return the next bigger than n.

Examples:
doubleton(120) === 121
doubleton(1234) === 1311
doubleton(10) === 12
 */

const doubleton = (num) => {
  // if num is a doubleton return num += 1
  // otherwise find the next doubleton
  // convert num to string 121 => ['1','2','1']
  // process num array
  //* iterate over nums array checking for unique nums
  //? contains exactly TWO distinct digits
  //* if you reach end of array return joined->then convert to num-> + 1
  //? 2 pointer technique???
};

console.log(doubleton(120)); // === 121
console.log(doubleton(1234)); // === 1311
console.log(doubleton(10)); // === 12
