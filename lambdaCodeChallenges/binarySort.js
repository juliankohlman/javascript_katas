// Given an array comprised of 0s and 1s, write a function in

// linear time that will sort the array.

// Ex:
// [0, 1, 0, 1, 0, 1, 0, 1] => [0, 0, 0, 0, 1, 1, 1, 1].

function binarySort(arr) {
  for (let i = 0; i < arr.length - 1; i += 1) {
    console.log(arr[i], arr[i + 1], '|', arr[i] << arr[i + 1]);
  }
  // return arr
  return arr.sort()
}

console.log(binarySort([0, 1, 0, 1, 0, 1, 0, 1]))
