// Write a method, that replaces every nth char oldValue with char newValue.

// Your method has to be case sensitive!

// n:         2 oldValue: 'a' newValue: 'o' "Vader said: No, I am your father!" -> "Vader soid: No,
// I am your fother!"

//   1 234 -> 2nd and 4th occurence are replaced

// As you can see in the example: The first changed is the 2nd 'a'. So the start is always at the
// nth suitable char and not at the first!

// If n is 0 or negative or if it is larger than the count of the oldValue, return the original text
// without a change.

// The text and the chars will never be null.

function replaceNth(text, n, oldValue, newValue) {
  console.log(arguments);
  let words = text.split('');
  let nth = 0;
  let vCount = text.split('').filter(i => i === oldValue).length;
  console.log(vCount);
  if (n <= 0 || n > vCount) return text;
  return words.map((l,idx) => {
    if (l === oldValue) {
      nth += 1
      return nth % n === 0 ? newValue : l
    }
    return l;
  }).join('');
}

