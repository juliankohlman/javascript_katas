// Get the number n to return the reversed sequence from n to 1.
// Example : n==5 >> [5,4,3,2,1]

const reverseSeq = n => {
  const result = [];
  for (n; n > 0; n--) { result.push(n) }
  return result;
};

// clever solution from codewars
// const reverseSeq = n => new Array(n).fill(null).map(x => n--);