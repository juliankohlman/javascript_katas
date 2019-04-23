// rotLeft
// accepts and array (a) and an amount of rotations
/*
5 4
[1,2,3,4,5]
outputs [5,1,2,3,4]

*/
function rotLeft(a, d) {
	while (d > 0) {
		let rt = a.shift();
		d--;
		a.push(rt);
	}
	return a;
}

console.log(rotLeft([1, 2, 3, 4, 5], 4));
console.log(rotLeft([1, 2, 3, 4, 5], 3));
console.log(rotLeft([1, 2, 3, 4, 5], 2));
