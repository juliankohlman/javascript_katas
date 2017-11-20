// The new "Avengers" movie has just been released! There are a lot of people at
// the cinema box office standing in a huge line. Each of them has a single 100,
// 50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every
// single person in this line.

// Can Vasya sell a ticket to each person and give the change if he initially has
// no money and sells the tickets strictly in the order people follow in the
// line?

// Return YES, if Vasya can sell a ticket to each person and give the change.
// Otherwise return NO.

// Examples:

// === JavaScript ==
// tickets([25, 25, 50]) // => YES
// tickets([25, 100])    // => NO. Vasya will not have enough money to give change to 100 dollars

function tickets(peopleInLine) {
  console.log(peopleInLine)
  if (peopleInLine[0] !== 25) return 'NO'
  if (peopleInLine[1] > peopleInLine[0]) return 'NO'
  let register = peopleInLine[0];
  for (let i = 1; i < peopleInLine.length; i += 1) {
    if (register < peopleInLine[i]) return 'NO'
    register += peopleInLine[i]

  }
  return 'YES'
}
