// Given three strings, str1, str2, str3. str3 is said to be a shuffle of str1 and str2 if it can be
// formed by interleaving the characters of str1 and str2 in such a manner that it maintains left to
// right ordering from each string. Given str1 = 'abc' and str2 = 'def', str3 = 'dabecf' is a valid
// shuffle since it preserves the character ordering of the two strings.  So, given these three
// strings, write a function that detects whether str3 is a valid shuffle of str1 and str2.
let a = 'a';
let b = 'b';
// let c = 'c';

if ((a, b, c)) {
	console.log(a);
} else {
	console.log('nope');
}

function checkString(str1, str2, str3) {
	let combined = (str1 + str2).split('');
	// console.log(str3.length)
	let interleaved = str3.split('');
	if (
		combined.length < str3.length ||
		interleaved.every(i => combined.includes(i))
	)
		return false;
	s1valid = interleaved.filter(i => str1.includes(i)).join('');
	// console.log(s1valid === str1);
	s2valid = interleaved.filter(i => str2.includes(i)).join('');
	// console.log(s2valid === str2);
	return s1valid === str1 && s2valid === str2 && combined.length === str3.length
		? true
		: false;
}
