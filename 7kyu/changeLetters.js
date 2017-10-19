// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

function swap (st) {
  return st.replace(/[aeiou]/g, l => l.toUpperCase());
}

swap('HelloWorld!')
swap('Sunday')
