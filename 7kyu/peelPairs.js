Given a string of numbers and a number n, peel away the pairs of digits that
add up to n (starting from index 0). The numbers in the pair don't have to be
adjacent to each other, but they should be paired with the closest digit to
the right of them that sums to n.

Return the new string with those pairs removed.

peelPairs('14642', 3) => '464'
peelPairs('732374', 6) => '77'
peelPairs('245638363', 10) => '53363'

function peelPairs(str, n) {
  let p = [];
  for (chr of str) {
    console.log(chr);
//     console.log(str.includes(n - chr) && n - chr !== chr)
    if (str.includes(n - chr)) {
      console.log(str.indexOf(chr), str.lastIndexOf(n - chr))
      if (str.indexOf(chr) !== str.lastIndexOf(n - chr)) {
        p.push([str[str.indexOf(chr)],str[str.lastIndexOf(n - chr)]])
      }
    }
  }
//    && str.indexOf(chr) !== str.lastIndexOf(chr)
  console.log(p)
}


