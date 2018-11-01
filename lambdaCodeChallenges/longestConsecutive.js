// You are given an array of strings called arr and an integer k. Your task is to return the longest
// string consisting of k consecutive strings from the array.

// Example:

// longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

function longestConsecutive(arr, k) {
	let result = '';
	// control boundarie of loop
	for (let i = 0; k > 0 && i <= arr.length - k; i++) {
		// slice begin to end (non inclusive)
		let currentLong = arr.slice(i, k + i).join('');
		console.log(currentLong);
		if (currentLong.length > result.length) {
			result = currentLong;
		}
	}
	return result;
}

longestConsecutive(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2);
