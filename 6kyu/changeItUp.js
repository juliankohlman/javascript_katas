/* Instructions:
Create a function that takes a string as a parameter and does the following,
in this order:

replaces every letter with the letter following it in the alphabet (see note
below)

makes any vowels capital
makes any consonants lower case
Note: the alphabet should wrap around, so Z becomes A

So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 -->
dbU30)
*/

function changer(str) {
	const res = str
		.replace(/[a-z]/gi, n => String.fromCharCode(n.charCodeAt(n) + 1))
		.toLowerCase();

	return res.replace(/[aeiou]/gi, n => n.toUpperCase()).replace(/[{[]/gi, 'A');
}

changer('starHustler');
