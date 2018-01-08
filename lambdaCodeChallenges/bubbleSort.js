// Bubble sort is the most basic sorting algorithm.
//  It compares the first element of an array with the second element.
//  If the first element is greater than the second element then it swaps them.
//  Then it compares the second and third elements and swaps them if the second is larger.
//  Then it compares the third and fourth elements and does the same.
//  This continues and the the larger elements begin to "bubble" towards the end.
//  The loop then restarts and repeats this process until it makes a clean pass
//  without performing any swaps.

//  Implement a function that takes an array and sorts it using this technique.
//  Don't use JavaScript's built-in sorting function (Array.prototype.sort).

//  What's the time complexity of your algorithm?  Are there ways you can improve it?

function bubbleSort(arr) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] < arr[i]) {
        sorted = false;
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
      }
    }
  }
  return arr;
}