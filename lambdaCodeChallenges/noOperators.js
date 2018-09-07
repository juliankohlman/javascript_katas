function negCheck(num1, num2) {
	const arr = [false];
	if (num1 < 0) {
		arr[0] = !arr[0]; // set to true (will return a negative prod/quot/rem)
		arr.push(0 - num1); // 0 - -num1 => num1 becomes positive
	} else {
		arr.push(num1); // just push the positive number
	} // could break this out into helper function (D.R.Y)
	if (num2 < 0) {
		arr[0] = !arr[0];
		arr.push(0 - num2);
	} else {
		arr.push(num2);
	}
	return arr;
}

function multiply(x, y) {
	const arr = negCheck(x, y);
	let answer = 0;
	for (var i = 0; i < arr[2]; i++) {
		answer += arr[1]; // building up product while 0 < arr[2] add arr[i] to answer
	}
	if (arr[0]) answer = 0 - answer; // if we have a negative num make the product negative
	return answer; // otherwise return product
}

function divide(x, y) {
	const arr = negCheck(x, y);
	let remainder = arr[1];
	let answer = 0;
	while (remainder >= arr[2]) {
		answer += 1;
		remainder -= arr[2];
	}
	if (arr[0]) answer = 0 - answer;
	return answer;
}

function modulo(x, y) {
	const arr = negCheck(x, y);
	let remainder = arr[1];
	while (remainder >= arr[2]) {
		remainder -= arr[2];
	}
	if (x < 0) return 0 - remainder;
	return remainder;
}

console.log(negCheck(12, 34)); //   <--- [ false, 12, 34 ]
console.log(negCheck(-12, 34)); //  <--- [ true, 12, 34 ]
console.log(negCheck(12, -34)); //  <--- [ true, 12, 34 ]
console.log(negCheck(-12, -34)); // <--- [ false, 12, 34 ]
console.log(multiply(3, 4)); //     <--- 12
console.log(multiply(-3, 4)); //    <--- -12
console.log(multiply(3, -4)); //    <--- -12
console.log(multiply(-3, -4)); //   <--- 12
console.log(divide(10, 3)); //      <--- 3
console.log(divide(-10, 3)); //     <--- -3
console.log(divide(10, -3)); //     <--- -3
console.log(divide(-10, -3)); //    <--- 3
console.log(modulo(10, 3)); //      <--- 1
console.log(modulo(-10, 3)); //     <--- -1
console.log(modulo(10, -3)); //     <--- 1
console.log(modulo(-10, -3)); //    <--- -1
