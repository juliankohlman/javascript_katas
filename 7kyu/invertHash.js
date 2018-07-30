/**
 Given a Hash made up of keys and values, invert the hash by swapping them.
 
 Examples
 Given: 
 { a: '1', b: '2', c: '3' }
  
  Return:
  { 1: 'a', 2: 'b', 3: 'c' }

  Notes
  Keys and values may be of any type appropriate for use as a key.
  All hashes provided as input will have unique values, so the inversion is involutive.In other words, do not worry about identical values stored under different keys. 
  */

function invertHash(hash) {
	let keys = Object.keys(hash);
	console.log(keys);
	let vals = Object.values(hash);
	console.log(vals);
	let invertedHash = {};
	for (let i = 0; i < vals.length; i++) {
		invertedHash[vals[i]] = keys[i];
	}
	return invertedHash;
}
