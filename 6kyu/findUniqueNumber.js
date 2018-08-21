/* Instructions
There is an array with some numbers. All numbers are equal except for one.
Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains more than 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

function findUniq(arr) {
	const ascSort = arr.sort((a, b) => a - b);
	return ascSort[0] === ascSort[1] ? ascSort.pop() : ascSort[0];
}

/*  CodeWars solutions
function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}

function findUniq(arr) {
  return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );
}
*/
console.log(findUniq([0, 1, 0])); // 1
console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
console.log(findUniq([3, 10, 3, 3, 3])); // 10
