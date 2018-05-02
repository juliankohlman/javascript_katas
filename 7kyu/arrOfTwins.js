// You are given an array of numbers. Check if the array contains of pairs, i.e
// every number occurs exactly two times. If true, return true, otherwise false.
// Your solution should not modify the input array.

function twins(arr) {
  let res = arr.slice().sort((a, b) => a - b);
  let allTwins = true;
  for (let i = 0; i < res.length; i += 2) {
    if (res[i] === res[i + 1] && res[i] !== res[i + 2]) {
      allTwins;
    } else {
      allTwins = false;
      break;
    }
  }
  return allTwins;
}

// CodeWars solution
// function twins(myArray){
//   return myArray.every(x => myArray.filter(y => x == y).length == 2)
// }
