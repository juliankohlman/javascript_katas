/**
 * We will call a natural number a "doubleton number" if it contains exactly two distinct digits. For example, 23, 35, 100, 12121 are doubleton numbers, and 123 and 9980 are not.

For a given natural number n (from 1 to 1 000 000), you need to find the next doubleton number. If n itself is a doubleton, return the next bigger than n.

Examples:
doubleton(120) === 121
doubleton(1234) === 1311
doubleton(10) === 12
 */

const doubleton = (num) => {
  let findDoubleton = true;
  while (findDoubleton) {
    num++;
    if (new Set(num.toString().split("")).size === 2) {
      findDoubleton = false;
    }
  }
  return num;
};

console.log(doubleton(120)); // === 121
console.log(doubleton(121)); // === 122
console.log(doubleton(1234)); // === 1311 *exactly 2 distinct digits
console.log(doubleton(10)); // === 12
