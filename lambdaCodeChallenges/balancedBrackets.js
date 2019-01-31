// Write a function balancedBrackets that accepts a string and returns true ifthe parentheses are
// balanced and false otherwise.

// Example:
//  balancedBrackets('(');  // false
//   balancedBrackets('()'); // true
//   balancedBrackets(')(');  // false
//   balancedBrackets('(())');  // true

// Step 2:  make the solution work for all types of brackets

// Example:
// balancedBrackets('[](){}'); // true
//  balancedBrackets('[({})]');   // true
//  balancedBrackets('[(]{)}'); // false

// Step 3: ignore other characters

// balancedBrackets(' const obj  = { x: someFunction() }'); // true

function balancedBrackets(str) {
	let s = str.replace(/[^\(\)|\[\]|\{\}]/g, ''); // match any chars NOT in this set
	let compareStr = s,
		temp;
	do {
		temp = compareStr; // initialize b to a
		console.log('a', compareStr);
		compareStr = compareStr.replace(/\(\)|\[\]|\{\}/g, ''); // replacing balanced brackets from the inside out
		console.log('a', compareStr); // if str was balanced it becomes ''
		console.log(temp); // if str was not balanced some chars will remain
	} while (compareStr != temp); // this condition will be met b/c we called replace on a
	return !compareStr; // !'' === true !'(' === false
}

balancedBrackets('[({})]'); // true
balancedBrackets('[]({}'); // false

balancedBrackets('[]({}');
