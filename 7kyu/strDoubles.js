// In this Kata, you will write a function doubles that will remove double string
// characters that are adjacent to each other.

// For example:

// doubles('abbcccdddda') = 'aca', because, from left to right:

// a) There is only one 'a' on the left hand side, so it stays.

// b) The 2 b'sdisapper because we are removing double characters that are
// adjacent.

// c) Of the 3 c's, we remove two. We are only removing doubles.

// d) The 4 d's all disapper, because we first remove the first double, and again
// we remove the second double.

// e) There is only one 'a' at the end, so it stays.

// Two more examples: doubles('abbbzz') = 'ab' and doubles('abba') = "". In the
// second example, when we remove the b's in 'abba', the double a that results is
// then removed.

// The strings will contain lowercase letters only. More examples in the test cases.

function doubles(s) {
  const rmv = s.replace(/(.)\1{1}/g, '');
  const dbl = /(.)\1{1}/g;
  return dbl.test(rmv) ? doubles(rmv) : rmv;
}

// shortened version
// function doubles(s) {
//   let dbl = /(.)\1{1}/g;
//   return dbl.test(s.replace(dbl,'')) ? doubles(s.replace(dbl,'')) : s.replace(dbl,'')
// }

// Codewars solution
// function doubles(s){
//   do {var t=s, s=t.replace(/(.)\1/g,'');} while (t!==s);
//   return s;
// }

doubles('abbbzz'); // 'ab'
doubles('zzzzykkkd'); // 'ykd'
doubles('abbcccdddda'); // 'aca'
doubles('vvvvvoiiiiin'); // 'voin'
doubles('rrrmooomqqqqj'); // 'rmomj'
doubles('xxbnnnnnyaaaaam'); // 'bnyam'
