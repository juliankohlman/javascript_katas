/* Instructions:
Write simple .camelCase method (camel_case function in PHP or CamelCase in C#)
for strings. All words must have their first letter capitalized without
spaces.

For instance:
"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
*/

String.prototype.camelCase = function() {
	return (
		this.trim()
			// .split(/\W/) // * pass in a regex to handle other chars /[_*#]/ etc..
			.split(' ')
			.map(i => i.slice(0, 1).toUpperCase() + i.slice(1))
			.join('')
	);
};

console.log('hello*case'.camelCase());
console.log('the empire strikes back'.camelCase());
