// Write a function insertDash(num)/InsertDash(int num) that will insert dashes
// ('-') between each two odd numbers in num. For example: if num is 454793 the
// output should be 4547-9-3. Don't count zero as an odd number.

function insertDash (num) {
  let result = num.toString().split('').map(function (str, i, arr) {
    if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && i < arr.length - 1) {
      return str + '-';
    } else {
      return str;
    }
  }).join('');

  return result;
}

// CW solution
// Using a regexp to find and replace the pattern much better than above
// function insertDash(num) {
//    return num.toString().replace(/[13579](?=[13579])/g, "$&-");
// }

console.log(insertDash(454793))
console.log(insertDash(123456))
console.log(insertDash(1003567))

