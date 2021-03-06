/*
Given a matrix, find the cross (row and column) with the largest sum of
elements. Return the sum.

[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]]

largest cross is the last column, [3,6,9], with the last row, [7,8,9].

Sum of elements is 3 + 6 + 7 + 8 + 9 = 33

therefore largestCrossSum(matrix) = 33

NOTE: the shared element of the column and row should only be counted once.

The matrix may not be square. All elements will be positive integers.
*/
// ! Work in progress
function largestCrossSum(matrix) {
	let longRow = matrix.sort((a, b) => a.length - b.length)[0].length;
	let columns = [];
	for (let i = 0; i < longRow; i += 1) {
		columns.push(matrix.map(row => row[i]));
	}
	//   console.log(columns);
	const mtxSums = arr => arr.map(i => i.reduce((a, b) => a + b));
	const rowSums = mtxSums(matrix);
	const colSums = mtxSums(columns);
	//   console.log(mtxSums(columns))

	let largestRow = matrix[rowSums.indexOf(Math.max(...rowSums))];
	let largestCol = columns[colSums.indexOf(Math.max(...colSums))];

	if (largestRow.length >= largestCol.length) {
		var cross = largestRow.find(x => largestCol.includes(x));
		// remove from row
		console.log(cross);
	} else {
		cross = largestCol.find(x => largestRow.includes(x));
		console.log(cross);
	}
	matrix.forEach(i => console.log(`${i}`));
	console.log(largestRow, largestCol);
	return (
		largestRow.reduce((a, b) => a + b) +
		largestCol.reduce((a, b) => a + b) -
		cross
	);
}

const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

largestCrossSum(matrix1); // 33

const matrix2 = [[1, 2, 1], [2, 2, 2], [1, 2, 1]];

largestCrossSum(matrix2); // 10

const matrix3 = [[1, 2, 1, 1], [2, 2, 2, 2], [1, 2, 1, 1], [1, 2, 1, 1]];

largestCrossSum(matrix3); // 14

const matrix4 = [
	[1, 1, 1, 4, 1, 1, 1],
	[3, 3, 3, 3, 3, 3, 3],
	[1, 1, 1, 4, 1, 1, 1]
];

largestCrossSum(matrix4); // 29
