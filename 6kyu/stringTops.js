// Task

// Write a function that accepts msg string and returns local tops of string from
// the highest to the lowest. The string's tops are from displaying the string in
// the below way:

//                                                       3
//                               p                     2   4
//             g               o   q                 1
//   b       f   h           n       r             z
// a   c   e       i       m          s          y
//       d           j   l             t       x
//                     k                 u   w
//                                         v

// The next top is always 1 character higher than the previous one. For the above
// example, the solution for the abcdefghijklmnopqrstuvwxyz1234 input string is
// 3pgb.

// When the msg string is empty, return an empty string.
// The input strings may be very long. Make sure your solution has good performance.

function tops(msg) {
	console.log(msg[1]);
	if (msg === '') return '';
	if (msg.length === 2) return msg[1];
	// return msg.length === '' ? '' : msg.length === 2 ? msg[1] : null
	//     let res = [];
	//   let len = msg.length
	//   let otherOdds = [];
	//   for (let j = 0 ;j += 1;) {
	//     let oddNum = 4 * j - 3
	//     if (oddNum > (msg.length / 2)) break;
	//     otherOdds.push(oddNum)
	//   }
	//   console.log(otherOdds);
	//   for (let i = 0; i < otherOdds.length; i += 1) {
	//     res.unshift(msg.indexOf(otherOdds[i]))
	//     if (res.length >= 1) {
	//       let lastNum = otherOdds.indexOf(res.length - 1);
	//       res.unshift(msg.indexOf(otherOdds[i] + res.findIndex(lastNum)))
	//     }
	//   }
	//   console.log(res);
	// //   otherOdds.slice(1).forEach(function(i,idx,col) {
	// //     let last = 0;
	// //     res.unshift(msg.indexOf(res[last]) + msg.indexOf(i))
	// //     last += 1;
	// //   });

	// //   return res;
}

console.log(tops(''));
console.log(tops('12'));
console.log(tops('abcdefghijklmnopqrstuvwxyz12345'));
console.log(tops('abcdefghijklmnopqrstuvwxyz1236789ABCDEFGHIJKLMN'));
