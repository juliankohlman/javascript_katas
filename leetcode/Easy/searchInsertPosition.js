//* Binary Search Variant
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * Given a sorted array and a target value, return the index if the target is found. If not, return the index        where it would be if it were inserted in order.
   You may assume no duplicates in the array.
 
  Example 1:

  Input: [1,3,5,6], 5
  Output: 2
  Example 2:

  Input: [1,3,5,6], 2
  Output: 1
  Example 3:

  Input: [1,3,5,6], 7
  Output: 4
  Example 4:

  Input: [1,3,5,6], 0
  Output: 0

 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  //! failing on smaller arrays of length 0,1,2
  if (target === 0) return target;
  let low = 0;
  let mid;
  let high = nums.length - 1;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (target == nums[mid]) return mid;

    if (target < nums[mid]) {
      high = mid - 1;
      if (low === high) return low + 1;
    } else if (target > nums[mid]) {
      low = mid + 1;
      if (low === high) return high + 1;
    }
  }
};
//! Failing with [1], 2 // expected 1 (only passing 36/62)
