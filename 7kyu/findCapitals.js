// Write a function that takes a single string (word) as argument. The function
// must return an ordered list containing the indexes of all capital letters in
// the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

const capitals = (word) => {
  const caps = [];
  word.split('').forEach((l) => {
    if (l === l.toUpperCase()) caps.push(word.indexOf(l));
  });
  return caps;
};

capitals('CodEWaRs');
