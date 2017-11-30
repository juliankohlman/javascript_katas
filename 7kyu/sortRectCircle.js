// In this kata you will be given an array of the dimensions of rectangles ( array with width and
// length ) and circles ( radius - just a number ). Your task is to sort the objects by their area
// in ascending order and return the sorted array of dimensions.

// For example,

// const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ];
// // [ rectangle, circle, circle,rectangle ]

// sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]

function sortByArea(array) {
  const areas = {};
  const inputCopy = array.slice(0);
  inputCopy.forEach((d) => {
    Array.isArray(d) ? areas[d] = d[0] * d[1] : areas[d] = Math.PI * (d ** 2);
  });

  return inputCopy.sort((a, b) => areas[a] - areas[b]);
}

sortByArea([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]]);// [ [1.342, 3.212], 1.23, [4.23, 6.43], 3.444 ]
sortByArea([[2, 5], 6]);// [ [2, 5], 6 ]
sortByArea([]);// []
