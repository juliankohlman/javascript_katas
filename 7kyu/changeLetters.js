// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

function swap (st) {
  return st.replace(/[aeiou]/gi, function (l) { return l.toUpperCase() });
}

swap('HelloWorld!')
swap('Sunday')
