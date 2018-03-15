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
  let s = str.replace(/[^\(\)|\[\]|\{\}]/g,'')
  let a = s, b;
  do {
    b = a; // initialize b to a
    a = a.replace(/\(\)|\[\]|\{\}/g, '');
    console.log('a', a) // if str was balanced it becomes ''
    console.log(b)      // if str was not balanced some chars will remain
  } while (a != b); // this condition will be met b/c we called replace on a
  return !a; // !'' === true !'(' === false
}

balancedBrackets('[]({}');