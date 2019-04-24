// minimum bribes

function minimumBribes(q) {
	// returns integer representing # of bribes that where needed to get queue to its current state.
	//
	// create initial ordered queue
	// [1, 2, 3, 4, 5]
	// [2, 1, 5, 3, 4]
	//Todo refactor and get last test cases passing
	console.time('elapsed');
	let initialQ = q.slice().sort();
	let bribes = 0;
	let tooChaotic = null;
	q.forEach(person => {
		if (initialQ.indexOf(person) - q.indexOf(person) > 2) {
			tooChaotic = true;
		} else if (
			q.indexOf(person) <= initialQ.indexOf(person) &&
			q.indexOf(person) - initialQ.indexOf(person) <= 2
		) {
			bribes += initialQ.indexOf(person) - q.indexOf(person);
		}
	});
	console.timeEnd('elapsed');
	// must use console.log(answer for hackerank)
	return tooChaotic ? 'Too chaotic' : bribes;
	// return bribes;
}

// console.log(minimumBribes([2, 1, 5, 3, 4])); // 3
console.log(minimumBribes([2, 5, 1, 3, 4])); // too chaotic
// console.log(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4])); // too chaotic
// console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])); // 7
