// Given three strings, str1, str2, str3. str3 is said to be a shuffle of str1 and str2 if it can be
// formed by interleaving the characters of str1 and str2 in such a manner that it maintains left to
// right ordering from each string. Given str1 = 'abc' and str2 = 'def', str3 = 'dabecf' is a valid
// shuffle since it preserves the character ordering of the two strings.  So, given these three
// strings, write a function that detects whether str3 is a valid shuffle of str1 and str2.

function checkString(str1, str2, str3) {
  let combined = (str1 + str2).split('');
  let interleaved = str3.split('');
  console.log(combined);
  console.log(str3.split('').every(i => combined.includes(i)));
  s1valid = interleaved.filter(i => str1.split('').includes(i)).join('') === str1
  s2valid = interleaved.filter(i => str2.split('').includes(i)).join('') === str2
  // console.log(s2valid)
  // if (s1valid === false|| s2valid === false) return false;
  // return s1valid && s2valid ? true : str3.split('').every(i => combined.includes(i));
  // return str3.split('').every(i => combined.includes(i));
  if (str3.split('').every(i => combined.includes(i)) && s1valid && s2valid) return true;
  return false;
 // // console.log(str3.split('').filter(i => str1.split('').includes(i)));
 // let s1Order = str3.split('').filter(i => str1.split('').includes(i));
 // let s2Order = str3.split('').filter(i => str2.split('').includes(i))
 // console.log(s1Order)
 // console.log(s2Order)
 // return s1Order.join('') === str1 && s2Order.join('') === str2 ? true : false
}
