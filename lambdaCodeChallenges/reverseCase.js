/*
Write a function that takes in a string, reverses the 'casing' of that string.  

reverseCase('HelloWorld') --> 'hELLOwORLD';
*/

function reverseCase(str) {
	return str
		.split('')
		.map(i => (i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase()))
		.join('');
}

/*
function reverseCase(str) {
  return str.replace(/([A-Z])|([a-z])/g, (m, p1) => p1 ? m.toLowerCase() : m.toUpperCase());
}
*/

console.log(reverseCase('HelloWorld'));
