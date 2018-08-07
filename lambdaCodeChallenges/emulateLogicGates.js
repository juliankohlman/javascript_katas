/*
For your emulation functions, you limited to only using the deep equality operator === and if (conditional) {statements}
Do not use !, &&, or ||.
Do not use the functions you have created to emulate any of the other logic gates, e.g. don't use your NOT() function in the NAND() function.

Your NOT() function only takes one parameter.
Your other functions will take two inputs and return a Boolean value which corresponds to the conditions satisfied by their logical operator.
To illustrate this behavior, refer to the truth tables below.
As an example, your AND() function should implement the following behavior:
console.log(AND(true, true));   // ---> true
console.log(AND(true, false));  // ---> false
console.log(AND(false, true));  // ---> false
console.log(AND(false, false)); // ---> false

TRUTH TABLES
! = NOT
| phi | !phi |
|-----|------|
|  T  |   F  |
|  F  |   T  |

& = AND
| phi | psi | phi & psi |
|-----|-----|-----------|
|  T  |  T  |     T     |
|  T  |  F  |     F     |
|  F  |  T  |     F     |
|  F  |  F  |     F     |

NAND
| phi | psi | !(phi & psi) |
|-----|-----|--------------|
|  T  |  T  |       F      |
|  T  |  F  |       T      |
|  F  |  T  |       T      |
|  F  |  F  |       T      |

^ = inclusive OR
| phi | psi | phi ^ psi |
|-----|-----|-----------|
|  T  |  T  |     T     |
|  T  |  F  |     T     |
|  F  |  T  |     T     |
|  F  |  F  |     F     |

XOR = exclusive OR
| phi | psi | phi XOR psi |
|-----|-----|-------------|
|  T  |  T  |      F      |
|  T  |  F  |      T      |
|  F  |  T  |      T      |
|  F  |  F  |      F      |
*/
// v1.0
// * NOT
function NOT(b) {
	if (b === true) return false;
	return true;
}
console.log('NOT');
console.log(NOT(true)); // ---> false
console.log(NOT(false)); // ---> true

// * AND
function AND(x, y) {
	if (x === true) {
		if (y === true) return true;
	}
	return false;
}
console.log('AND');
console.log(AND(true, true)); // ---> true
console.log(AND(true, false)); // ---> false
console.log(AND(false, true)); // ---> false
console.log(AND(false, false)); // ---> false

// * NAND
function NAND(x, y) {
	if (x === true) {
		if (y === true) return false;
	}
	return true;
}
console.log('NAND');
console.log(NAND(true, true)); // ---> false
console.log(NAND(true, false)); // ---> true
console.log(NAND(false, true)); // ---> true
console.log(NAND(false, false)); // ---> true

// * OR
function OR(x, y) {
	if (x === true) return true;
	if (y === true) return true;
	return false;
}
console.log('OR');
console.log(OR(true, true)); // ---> true
console.log(OR(true, false)); // ---> true
console.log(OR(false, true)); // ---> true
console.log(OR(false, false)); // ---> false

// * XOR
function XOR(x, y) {
	if (x === true) {
		if (y === true) {
			return false;
		}
	}
	if (x === false) {
		if (y === false) {
			return false;
		}
	}
	return true;
}
console.log('XOR');
console.log(XOR(true, true)); // ---> false
console.log(XOR(true, false)); // ---> true
console.log(XOR(false, true)); // ---> true
console.log(XOR(false, false)); // ---> false
