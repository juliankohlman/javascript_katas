// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and
// returns the same string with all even indexed characters in each word upper
// cased, and all odd indexed characters in each word lower cased. The indexing
// just explained is zero based, so the zero-ith index is even, therefore that
// character should be upper cased.

// The passed in string will only consist of alphabetical characters and spaces('
// '). Spaces will only be present if there are multiple words. Words will be
// separated by a single space(' ').

// Examples:

// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg Ca

function toWeirdCase (string) {
  let splitString = string.split(' ').map(i => i.split(''));
  return splitString.map(arr => arr.map((elem, idx) => idx % 2 === 0 ? elem.toUpperCase() : elem.toLowerCase()).join('')).join(' ');
}

// CodeWars regex solution very cool
// function toWeirdCase(string){
//   return string.replace(/(\w{1,2})/g,(m)=>m[0].toUpperCase()+m.slice(1).toLowerCase())
// }

toWeirdCase('String');
toWeirdCase('lazerhawk');
