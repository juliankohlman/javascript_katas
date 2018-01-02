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
  const words = text.split('');
  if (n <= 0 || n > words.filter(i => i === oldValue).length) return text;
  let nth = 0;
  return words.map((l) => {
    if (l === oldValue) {
      nth += 1;
      return nth % n === 0 ? newValue : l;
    }
    return l;
  }).join('');
}

// CodeWars regex solution
// const replaceNth=(s,n,x,y,i=1)=>n<1?s:s.replace(RegExp(x,"g"),_=>i++%n?x:y)

replaceNth('Vader said: No, I am your father!', 2, 'a', 'o'); // 'Vader soid: No, I am your fother!'
replaceNth('Vader said: No, I am your father!', 4, 'a', 'o'); // 'Vader said: No, I am your fother!'
replaceNth('Vader said: No, I am your father!', 6, 'a', 'o'); // 'Vader said: No, I am your father!'
replaceNth('Vader said: No, I am your father!', 0, 'a', 'o'); // 'Vader said: No, I am your father!'
replaceNth('Vader said: No, I am your father!', -2, 'a', 'o'); // 'Vader said: No, I am your father!'
replaceNth('Vader said: No, I am your father!', 1, 'i', 'y'); // 'Vader sayd: No, I am your father!'
