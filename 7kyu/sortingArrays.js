// Given two arrays of strings a1 and a2 return an array consisting of the
// elements of a2 sorted based on the elements in a1.

// Example 1

// var a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
// var a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];

// returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
// Example 2

// var a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
// var a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];

// returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']

// Each element in the array will start with a unique letter and there will only
// be a single match for each element.

function sortArray (a1, a2) {
  var sorted = [];
  for (var word of a1) {
    sorted.push(a2.find(function (item) {
      return word.startsWith(item[0]);
    }));
  }
  return sorted;
}

var a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
var a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];
sortArray(a1, a2) // ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']

var a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
var a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];
sortArray(a1, a2) // ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']

// CW one-liner solution
// const sortArray = (a1, a2) => a1.map( v => a2.find( w => v[0]===w[0] ) );

// variation of solution above
// function sortArray(a1, a2) {
//   a1 = a1.map(e => e[0]).join('');
//   return a2.sort((a,b) => a1.indexOf(a[0]) > a1.indexOf(b[0]));
// }