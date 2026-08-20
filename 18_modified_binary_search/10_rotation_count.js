// Rotation Count: Given an array of numbers which is sorted in ascending order and is rotated ‘k’ times around a pivot, find ‘k’.

// You can assume that the array does not have any duplicates.

// Note: You need to solve the problem in  time complexity.

// Example 1:

// Input: [10, 15, 1, 3, 8]
// Output: 2
// Explanation: The array has been rotated 2 times.
// Example 2:

// Input: [4, 5, 7, 9, 10, -1, 2]
// Output: 5
// Explanation: The array has been rotated 5 times.


// solution:
// This is actually very similar to Search in Rotated Array.

// The key idea is:

// The number of rotations = the index of the smallest element.

// Why?

// Start with a sorted array:

// [1, 3, 8, 10, 15]

// Rotate it 2 times:

// [10, 15, 1, 3, 8]

// Notice where the smallest number 1 ended up:

// index:  0   1   2   3   4
//         10  15  1   3   8
//                 ↑
//               minimum

// Its index is 2.

// Therefore:

// rotations = 2

// So our real job is:

// Find the index of the minimum element using Binary Search.

function countRotations(nums) {
    let start = 0;
    let end = nums.length - 1;
  
    while (start < end) {
      const mid = Math.floor((start + end) / 2);
  
      if (nums[mid] > nums[end]) {
        // Minimum is on the RIGHT
        start = mid + 1;
      } else {
        // Minimum is at mid or on the LEFT
        end = mid;
      }
    }
  
    return start;
}
