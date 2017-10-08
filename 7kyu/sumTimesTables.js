// Write a function sumTimesTables which sums the result of the sums of the
// elements specified in tables multiplied by all the numbers in between min and
// max including themselves.

// For example, for sumTimesTables([2,5],1,3) the result should be the same as

// 2*1 + 2*2 + 2*3 +
// 5*1 + 5*2 + 5*3
// i.e. the table of two from 1 to 3 plus the table of five from 1 to 3

// All the numbers are integers but you must take in account:

// tables could be empty.
// min could be negative.
// max could be really big.

function sumTimesTables (tables, min, max) {
  const range = [];
  const products = [];
  for (min; min <= max; min++) {
    range.push(min)
  }
//   let products = tables.map( i => range.map( n => i * n)).map( arr => arr.reduce((a,b) => a + b,0)).reduce((a,b) => a + b,0);
//   return products
  for (let i = 0; i < range.length; i++) {
    for (let j = 0; j < tables.length; j++) {
      products.push(tables[j] * range[i]);
    }
  }

//   return products.reduce( (acc, cur) => acc + cur,0);
}
