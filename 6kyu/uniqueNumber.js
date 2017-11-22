// Give you a array arr that contains some numebers. Numbers can be
// positive, negative, integer or float. Only one of these numbers is unique. Find
// and return it.

// Some examples:

//  findUnique([1,2,3,5,7]) === 2
//  Because only 2 is an even number, the other numbers are odd.

//  findUnique([2,4,6,8,9]) === 9
//  Because only 9 is an odd number

//  findUnique([2,-4,6,8]) === -4
//  Because only -4 is a negative number

//  findUnique([-2,-4,-6,8]) === 8
//  Because only 8 is a positive number

//  findUnique([2,4.4,6,8]) === 4.4
//  Because only 4.4 is a float number

//  findUnique([2.2,4.4,6.6,8]) === 8
//  Because only 8 is a integer number

//  findUnique([2,2,2,4]) === 4
//  Because only 4 has a diffrent value

// Priority level: float/integer > positive/negative > odd/even > diffrent value

// Some edge case:

//  findUnique([-2,-4,-6.6,8]) === -6.6  //not 8
//  Because Priority level float/integer > positive/negative

//  findUnique([-2,-4,-7, 8]) === 8  //not -7
//  Because Priority level positive/negative > odd/even

// Note: All inputs will be an array. The array contains at least 3 element. Only
// one unique number in it. 0 will not appear, do not worry about it ;-)

function findUnique(arr){
console.log(arr)
  let unqFloat = arr.filter(i => !Number.isInteger(i));
//   console.log(unqFloat)
  let unqInt = arr.filter(i => Number.isInteger(i));
//   console.log(unqInt)
  let unqPos = arr.filter(i => i > 0)
//   console.log(unqPos)
  let unqNeg = arr.filter(i => i < 0)
//   console.log(unqNeg)
  let unqOdd = arr.filter(i => Math.abs(i % 2 === 1))
  let unqEven = arr.filter(i => Math.abs(i % 2 === 0))
  let unqVal = arr.filter(i => i !== arr[0])
  let res = [unqFloat,unqInt,unqPos,unqNeg,unqOdd,unqEven,unqVal].sort((a,b)=> a.length < b.length).find(i => i.length === 1)
  console.log(res[0])
  return res[0]
}

findUnique([1, 2, 3, 5, 7]) // 2)
findUnique([2, 4, 6, 8, 9]) // 9)
findUnique([2, -4, 6, 8]) // -4)
findUnique([-2, -4, -6, 8]) // 8)
findUnique([2, 4.4, 6, 8]) // 4.4)
findUnique([2.2, 4.4, 6.6, 8]) // 8)
findUnique([2, 2, 2, 4]) // 4)
findUnique([-2, -4, -6.6, 8]) // -6.6)
findUnique([-2, -4, -7, 8]) // 8)
