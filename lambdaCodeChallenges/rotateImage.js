/**
 * Given an image represented by an NxN matrix, where each pixel in the image is an integer from 0 - 9, write a method to rotate the image by 90 degrees counterclockwise. Can you do this in place?
Ex:

rotateImage([ [1, 2],
              [3, 4]]);
should return

[ [2, 4],
  [1, 3]].

Likewise,
rotateImage([
  [1, 1, 5, 9, 9],
  [2, 2, 6, 0, 0],
  [3, 3, 7, 1, 1],
  [4, 4, 8, 2, 2],
  [5, 5, 9, 3, 3]
  ]);
should return

[ [ 9, 0, 1, 2, 3 ],
  [ 9, 0, 1, 2, 3 ],
  [ 5, 6, 7, 8, 9 ],
  [ 1, 2, 3, 4, 5 ],
  [ 1, 2, 3, 4, 5 ] ]
 */

// es6 version
function rotateImage(a) {
	const len = a.length - 1;
	// clockwise a[len - j][i]
	const rotated = a.map((row, i) => row.map((val, j) => a[j][len - i]));
	// console.log(rotated);
	return rotated;
	// a.length = 0;
	// a.push(...rotated);
	// return a;
}

// function rotateImage(arr) {
// 	const len = arr.length;
// 	for (let i = 0; i < len / 2; i++) {
// 		for (let j = i; j < len - i - 1; j++) {
// 			let bucket = arr[i][j];
// 			arr[i][j] = arr[j][len - i - 1];
// 			arr[j][len - i - 1] = arr[len - i - 1][len - j - 1];
// 			arr[len - i - 1][len - j - 1] = arr[len - j - 1][i];
// 			arr[len - j - 1][i] = bucket;
// 		}
// 	}
// 	return arr;
// }
console.log(
	rotateImage([
		[1, 1, 5, 9, 9],
		[2, 2, 6, 0, 0],
		[3, 3, 7, 1, 1],
		[4, 4, 8, 2, 2],
		[5, 5, 9, 3, 3]
	])
);

console.log(rotateImage([[1, 2], [3, 4]]));
