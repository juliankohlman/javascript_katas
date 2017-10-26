// Generate an array of randomized strings.
// There are three conditions:
// 1. The array must contain size number of unique strings.

// 2.valid_pct is a number from 0.0 to 1.0(0.25 = 25%, 0.4 = 40%). The number of
// valid strings must be size * valid_pct floored. A valid string is
// alphanumerical with underscores allowed. An invalid string contains any other
// character(Ex: \`'"~!@#$%^&*()[]{}:;<>?|\/).

// 3. str_size = [str_min_length, str_max_length]. Each string must be inside
// this range(inclusive).

// Ex:size:4, valid_pct:0.25, str_size:[4 ,6] should return an array with 4
// strings, 1 valid string, 3 invalid strings, and all strings should have
// length: 4 <= string.length <= 6

function randStrings (size, validPct, strSize) {
  let valids = Math.floor(Math.random() * size);
  let result = [];
}
