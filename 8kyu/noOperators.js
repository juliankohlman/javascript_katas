function negCheck(num1, num2) {
	const arr = [false];
	if (num1 < 0) {
		arr[0] = !arr[0];
		arr.push(0 - num1);
	} else {
		arr.push(num1);
	}
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
		answer += arr[1];
	}
	if (arr[0]) answer = 0 - answer;
	return answer;
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
