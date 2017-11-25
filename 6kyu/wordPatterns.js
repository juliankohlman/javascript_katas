// Write function wordPattern(pattern, str)

// that given a pattern and a string str, find if str follows the same sequence
// as pattern.

// For example:

// wordPattern('abab', 'truck car truck car') === true
// wordPattern('aaaa', 'dog dog dog dog') === true
// wordPattern('abab', 'apple banana banana apple') === false
// wordPattern('aaaa', 'cat cat dog cat') === false


function wordPattern(pattern, str) {
  //code me
  console.log(pattern, str)
  const patternWord = {};
  const ptn = pattern.split('')
  const words = str.split(' ')
  ptn.forEach((i,idx) => {
    patternWord[i] = words[idx]
  });
  console.log(Object.keys(patternWord))

  let diffStr = pattern.split('').map((i) => i = patternWord[i]);
//   if (words.filter(i => words.every(i => i !== i) && Object.keys(patternWord).length === 0)) return false
  let aSame = words.filter((i,idx,col) => {
    return col.indexOf(i) === idx
  })
  console.log(aSame)
  if (Object.keys(patternWord).length > aSame.length) return false;
  return diffStr.join(' ') === str
}

