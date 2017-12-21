// Given a number, find the next smallest palindrome number larger than the number. If the number is
// 125. the next palindrome is 131.

function nextPalindrome(n) {
  n++;
  const palindrome = +(n + '').split('').reverse().join('');
  if (n === palindrome) return n;
  return nextPalindrome(n);
}

nextPalindrome(125);
