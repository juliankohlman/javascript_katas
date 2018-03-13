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
  // console.log(b,str);
  do {
    b = a;
    a = a.replace(/\(\)|\[\]|\{\}/g, '');
  } while (a != b);
  return !a;
}

balancedBrackets('()');