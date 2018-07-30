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
	let rev = Object.entries(hash);
	let invertedHash = {};

	for (let i = 0; i < rev.length; i++) {
		invertedHash[rev[i][1]] = rev[i][0];
	}
	return invertedHash;
}
