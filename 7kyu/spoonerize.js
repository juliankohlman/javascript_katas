/**
 * A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.

In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:

"not picking" --> "pot nicking"

Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example.

NOTE: All input strings will contain only two words. Spoonerisms can be more complex. For example, three-word phrases in which the first letters of the first and last words are swapped: "pack of lies" --> "lack of pies" or more than one letter from a word is swapped: "flat battery --> "bat flattery" You are NOT expected to account for these, or any other nuances involved in spoonerisms.
 */

const spoonerize = (words) => {
  // swap values and return updated string
  let wordArray = words.split(" ");
  let temp = wordArray[0][0];
  let first = wordArray[0].replace(wordArray[0][0], wordArray[1][0]);
  let second = wordArray[1].replace(wordArray[1][0], temp);

  return `${first} ${second}`;
};

console.log(spoonerize("nit picking")); //, "pit nicking"
console.log(spoonerize("wedding bells")); //, "bedding wells"
console.log(spoonerize("jelly beans")); //, "belly jeans"
