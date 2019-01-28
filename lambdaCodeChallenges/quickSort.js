// Implement the quick sort sorting algorithm. Assume the input is an array of integers.

// https://en.wikipedia.org/wiki/Quicksort

// https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort

function quickSort(nums) {
  if (nums.length < 2) return nums;

  const pivotValue = nums[Math.round(nums.length / 2)];
  const pivots = nums.filter(n => n == pivotValue);

  // DRY
  // this can be accomplished with a for loop
  const belowPivot = nums.filter(x => x < pivotValue).sort((a,b) => a - b);
  const abovePivot = nums.filter(x => x > pivotValue).sort((a,b) => a - b);

  return belowPivot.concat(pivots,abovePivot);
}

quickSort([11,3,7,2,5,84,22,1])