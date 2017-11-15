// Implement String#to_integer, which should return Integer if object is in one
// of formats specified below, or nil otherwise:

// Optional - or +
// Base prefix 0b (binary), 0x (hexadecimal), 0o (octal), or in case of no prefix decimal.
// Digits depending on base

// Any extra characters, including whitespace, make number invalid, in which case
// you should return nil.

// Digits are case insensitive, but base prefix must be lower case.


String.prototype.toInteger = function() {
  console.log(this)
  if (this.startsWith('-')) return -+this.slice(1)
  //   if (this.match(/\s|[^oxb0]/)) return null;
  console.log(this.match(/^([+-]*0[xob]\w{3})|^([+-]*\d{3})/) === null)

  //   if (this.match(/\W/)) return null;

  return this.match(/^([+-]*0[xob]\w{3})|^([+-]*\d{3})/) ? +this : null

  //   console.log(this.match(/^([+-]*0[xob]\w{3})|^([+-]*\d{3})/))
}