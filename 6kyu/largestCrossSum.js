// Given a matrix, find the cross (row and column) with the largest sum of
// elements. Return the sum.

// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

// largest cross is the last column, [3,6,9], with the last row, [7,8,9].

// Sum of elements is 3 + 6 + 7 + 8 + 9 = 33

// therefore largestCrossSum(matrix) = 33

// NOTE: the shared element of the column and row should only be counted once.

// The matrix may not be square. All elements will be positive integers.

function largestCrossSum(matrix) {
  // matrix.forEach(i => console.log(`${i}`))
  const getMax = arr => arr.filter(i => i.reduce((a, b) => a + b) === Math.max(...arr.map(j => j.reduce((a, b) => a + b))))[0];
  const longestRow = matrix.sort((a, b) => a.length - b.length)[0].length;
  const cols = [];
  for (let j = 0; j < longestRow; j += 1) {
    cols.push(matrix.map((row) => row[j]));
  }
  let maxRow = getMax(matrix);
  let maxCol = getMax(cols);
  let crossIndex = maxRow.findIndex(i => maxCol.includes(i));
  console.log(maxRow[crossIndex]);
  console.log(maxRow);
  console.log(maxRow,maxCol);
  return maxRow.reduce((a, b) => a + b) + maxCol.reduce((a, b) => a + b) - maxRow[crossIndex];
}

const matrix1 = [[1, 2, 3],
                 [4, 5, 6],
                 [7, 8, 9]];

largestCrossSum(matrix1); // 33

const matrix2 = [[1, 2, 1],
                 [2, 2, 2],
                 [1, 2, 1]];

largestCrossSum(matrix2); // 10

const matrix3 = [[1, 2, 1, 1],
                 [2, 2, 2, 2],
                 [1, 2, 1, 1],
                 [1, 2, 1, 1]];

largestCrossSum(matrix3); // 14

const matrix4 = [[1, 1, 1, 4, 1, 1, 1],
                 [3, 3, 3, 3, 3, 3, 3],
                 [1, 1, 1, 4, 1, 1, 1]];

largestCrossSum(matrix4); // 29
