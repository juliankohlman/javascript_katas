// minimum bribes

function minimumBribes(q) {
	// returns integer representing # of bribes that where needed to get queue to its current state.
	//
	// create initial ordered queue
	// [1, 2, 3, 4, 5]
	// [2, 1, 5, 3, 4]
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
	return tooChaotic ? 'Too Chaotic' : bribes;
	// return bribes;
}

console.log(minimumBribes([2, 1, 5, 3, 4]));
console.log(minimumBribes([2, 5, 1, 3, 4]));
