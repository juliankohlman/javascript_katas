// Given a string as input, move all of its vowel to the end of the string.

// Example input: day Example output: dya

// Example input: apple Example output: pplae

// Note: All input string are of small letters, and the order of the vowels at
// the end should be the same as they were before.

function moveVowel (input) {
  const nonVowel = input.split('').filter(i => i.match(/[^aeiou]/));
  const vowels = input.split('').filter(i => i.match(/[aeiou]/));
  return nonVowel.concat(vowels).join('');
}

// CW solution
// function moveVowel(s) {
//   return (k='',s=s.replace(/[aeuoi]/g,m=>(k+=m,'')),s+k)
// }

moveVowel('day') // dya
moveVowel('apple') // pplae
moveVowel('peace') // pceae
moveVowel('maker') // mkrae
