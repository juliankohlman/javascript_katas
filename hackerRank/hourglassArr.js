let arr2d = [
	[1, 1, 1, 0, 0, 0],
	[0, 1, 0, 0, 0, 0],
	[1, 1, 1, 0, 0, 0],
	[0, 0, 2, 4, 4, 0],
	[0, 0, 0, 2, 0, 0],
	[0, 0, 1, 2, 4, 0]
];

function hourglassSum(arr) {
	let a, b, c, d, e, f, g;
	let hourglasses = [];
	for (let row = 0; row < 4; row++) {
		for (let col = 0; col < 4; col++) {
			a = arr[row][col];
			b = arr[row][col + 1];
			c = arr[row][col + 2];
			d = arr[row + 1][col + 1];
			e = arr[row + 2][col];
			f = arr[row + 2][col + 1];
			g = arr[row + 2][col + 2];
			hourglasses.push([a, b, c, d, e, f, g]);
		}
	}
	let result = hourglasses.map(nums => {
		return nums.reduce((curr, next) => curr + next);
	});
	return Math.max(...result);
}

console.log(hourglassSum(arr2d));
