// // In input string word(1 word):

//     replace the vowel with the nearest left consonant. replace the consonant with the nearest
//     right // vowel.

// P.S. To complete this task imagine the alphabet is a circle (connect the first and last element
// of the array in the mind). For example, 'a' replace with 'z', 'y' with 'a', etc.(see below)

// // For example:

// // 'codewars => enedazuu cat => ezu abcdtuvwxyz => zeeeutaaaaa

// // It is preloaded:

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',  'u', 'v', 'w', 'x', 'y', 'z']

const consonants =
['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

const vowels = ['a', 'e','i','o','u'];

function replaceLetters(word) {
  // good luck
  console.log(word);
  console.log(word.split('').map((l,idx,arr) => {
    if (consonants.includes(l)) {
      let replacement = alphabet.slice(alphabet.indexOf(l)).find(i => vowels.includes(i))
      if (replacement) {
        l = replacement;
      } else {
        l = 'a';
      }
    } else {
      l = alphabet.slice(alphabet.indexOf(l)).find(i => consonants.includes(i));
    }
    return l;
  }));
}
