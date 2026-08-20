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


// Why compare nums[mid] with nums[end]?

// This is the important part.

// Suppose:

// [10, 15, 1, 3, 8]

// We have:

// start = 0
// end = 4
// mid = 2
// nums[mid] = 1
// nums[end] = 8

// Compare:

// 1 > 8 ❌

// So we know the minimum is at mid or somewhere to the left.

// Therefore:

// end = mid;
// What if nums[mid] > nums[end]?

// For example:

// [10, 15, 1, 3, 8]
//  ↑       ↑       ↑
// start   mid     end

// Imagine mid were 15:

// 15 > 8

// This tells us something important:

// [10, 15]   [1, 3, 8]
//  ↑           ↑
//  bigger      smaller

// The minimum must be to the right of mid.

// So:

// start = mid + 1;
// Let's trace the example
// [10, 15, 1, 3, 8]

// Initially:

// start = 0
// end = 4
// Step 1
// mid = 2

// nums[mid] = 1
// nums[end] = 8
// 1 > 8 ❌

// So:

// end = mid;

// Now:

// start = 0
// end = 2
// Step 2
// mid = 1

// nums[mid] = 15
// nums[end] = 1
// 15 > 1 ✅

// Therefore minimum must be right of mid:

// start = mid + 1;

// Now:

// start = 2
// end = 2

// We're done.

// The minimum is at:

// index 2

// Therefore:

// rotations = 2
// Example 2
// [4, 5, 7, 9, 10, -1, 2]

// The minimum is:

// [4, 5, 7, 9, 10, -1, 2]
//                   ↑
//                  -1

// Its index is:

// 5

// Therefore:

// rotations = 5
// Why does minimum index equal rotations?

// Think about rotating the original array:

// Original:

// [1, 3, 8, 10, 15]

// After 1 rotation:

// [15, 1, 3, 8, 10]
//     ↑
//    min at index 1

// After 2:

// [10, 15, 1, 3, 8]
//          ↑
//         min at index 2

// After 3:

// [8, 10, 15, 1, 3]
//              ↑
//             min at index 3

// So:

// 1 rotation → minimum at index 1
// 2 rotations → minimum at index 2
// 3 rotations → minimum at index 3

// That's the key observation.

// The two cases to remember
// if (nums[mid] > nums[end]) {
//     start = mid + 1;
// }

// Means:

// mid is in the bigger/left portion → minimum is right.

// Otherwise:

// else {
//     end = mid;
// }

// Means:

// mid could be the minimum → keep mid and search left.

// We use:

// end = mid;

// and not:

// end = mid - 1;

// because mid itself might be the smallest element.

// Final mental model
// [10, 15 | 1, 3, 8]
//           ↑
//         minimum
//           ↑
//        index = rotations

// So this problem is simply:

// Find the minimum element's index using Binary Search. That index is the rotation count.

// Time complexity: O(log n).
