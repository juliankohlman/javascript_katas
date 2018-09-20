// Write a function that, given two objects, returns whether or not the two  are deeply equivalent--
// meaning the contents of the two objects are equal for all keys and sub-keys.

// * PRIMITIVE VALUES ARE PASSED BY VALUE
// * OBJECTS ARE PASSED BY REFERENCE
// ? (do you want to compare if one object is literally the same object or if it has all the same key:value pairs?)
// * CONVERT THE OBJECTS TO PRIMITIVES AND MAKE COMPARISON

// * EXAMPLE OBJECTS * //
// * --------------- * //
const jangoFett = {
	occupation: 'Bounty Hunter',
	genetics: 'superb',
	vehicles: {
		main: 'firespray31'
	}
};

const bobaFett = {
	occupation: 'Bounty Hunter',
	genetics: 'superb',
	vehicles: {
		main: 'firespray31'
	}
};

const johnA = {
	name: 'John',
	address: {
		line1: '321 Anytown',
		line2: 'Stoke-on-Trent'
	}
};
const johnB = {
	name: 'John',
	address: {
		line1: '321 Anytown',
		line2: 'Stoke-on-Trent'
	}
};
const johnC = {
	name: 'John Charles',
	address: {
		line11: '321 Anytown',
		line2: 'Stoke-on-Trent'
	}
};

function deepEquals(obj1, obj2) {
	return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function deepEquals(obj1, obj2) {
	let obj1Props = Object.getOwnPropertyNames(obj1);
	console.log(obj1Props);

	let obj2Props = Object.getOwnPropertyNames(obj2);
	console.log(obj2Props);

	if (obj1Props.length !== obj2Props.length) return false;

	for (let i = 0; i < obj1Props.length; i++) {
		let propName = obj1Props[i];
		if (obj1Props[propName] !== obj2Props[propName]) return false;
	}

	return true;
}

console.log(deepEquals(johnA, johnB)); // true
console.log(deepEquals(johnA, johnC)); // false;
console.log(deepEquals(jangoFett, bobaFett)); // true
