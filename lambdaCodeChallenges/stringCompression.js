// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string  'aabcccccaaa' would become a2b1c5a3. If the "compressed" string would
// not become smaller than the original string, your method should return the original string. You
// can assume the string has only uppercase and lowercase letters (a - z).

function stringCompression(str) {
  const sections = str.match(/(.)\1{0,}/gi);
  let result = '';
  sections.forEach(s => result += s[0] + s.length);
  return result.length >= str.length ? str : result;
}

stringCompression('aabcccccaaa');