/*
Complete the method/function so that it converts dash/underscore delimited words into camel
casing. The first word within the output should be capitalized only if the original word was
capitalized.

toCamelCase("the-stealth-warrior")
returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior")
returns "TheStealthWarrior"
*/

// function toCamelCase(str) {
// 	return str
// 		.split(/[-_]/)
// 		.map((w, i) => (i !== 0 ? w[0].toUpperCase() + w.substr(1) : w))
// 		.join('');
// }

const toCamelCase = str =>
	str
		.split(/[-_]/)
		.map((w, i) => (i !== 0 ? w[0].toUpperCase() + w.substr(1) : w))
		.join('');

console.log(toCamelCase('the-stealth-warrior'));
console.log(toCamelCase('The_Stealth_Warrior'));
