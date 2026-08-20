// Search in Rotated Array: Given an array of numbers which is sorted in ascending order and also rotated 
// by some arbitrary number, find if a given ‘key’ is present in it.

// Write a function to return the index of the ‘key’ in the rotated array. If the ‘key’ is not present, 
// return -1. You can assume that the given array does not have any duplicates.

// Note: You need to solve the problem in  time complexity.

// Example 1:

// Input: [10, 15, 1, 3, 8], key = 15
// Output: 1

// solution:

// This one looks tricky, but the main idea is very simple:

// In a rotated sorted array, at least one half of the array is always sorted.

// We use that sorted half to decide where the key can be.

// Example
// [10, 15, 1, 3, 8]
//  key = 15

// Normally this would be sorted:

// [1, 3, 8, 10, 15]

// but it was rotated:

// [10, 15 | 1, 3, 8]
// Step 1: Find the middle
// [10, 15, 1, 3, 8]
//  ↑        ↑        ↑
// start    mid       end
//  0        2         4

// So:

// mid = 2
// nums[mid] = 1

// Now look at the two halves:

// Left:   [10, 15, 1]
// Right:  [1, 3, 8]

// The right half is sorted:

// 1 → 3 → 8

// We know this because:

// nums[start] <= nums[mid]

// is:

// 10 <= 1 ❌

// So the left half isn't sorted, meaning the right half must be sorted.

// Step 2: Is 15 in the sorted right half?

// The right half is:

// [1, 3, 8]

// Its range is:

// 1 ... 8

// But:

// 15

// isn't between 1 and 8.

// Therefore:

// 15 must be on the left.

// So:

// end = mid - 1;

// Now:

// start = 0
// end = 1
// Step 3: Search again
// [10, 15, 1, 3, 8]
//  ↑   ↑
// start end
// mid = 0
// nums[mid] = 10

// The left side is sorted:

// 10

// Is 15 between:

// 10 and 10?

// No.

// Therefore move right:

// start = mid + 1;

// Now:

// start = 1
// end = 1

// So:

// nums[1] = 15

// Found!

// return 1
// The important logic

// At every iteration, ask:

// Is the LEFT half sorted?
// if (nums[start] <= nums[mid])

// If yes:

// LEFT is sorted

// Then ask:

// Is the key inside this sorted range?

// if (nums[start] <= key && key < nums[mid])

// If yes → search left:

// end = mid - 1;

// Otherwise → search right:

// start = mid + 1;
// Otherwise, the RIGHT half is sorted
// RIGHT is sorted

// Ask:

// Is the key inside the right sorted range?

// if (nums[mid] < key && key <= nums[end])

// If yes → search right:

// start = mid + 1;

// Otherwise → search left:

// end = mid - 1;


function searchRotatedArray(nums, key) {
    let start = 0;
    let end = nums.length - 1;
  
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
  
      // Found the key
      if (nums[mid] === key) {
        return mid;
      }
  
      // Left half is sorted
      if (nums[start] <= nums[mid]) {
  
        // Is key inside the sorted left half?
        if (nums[start] <= key && key < nums[mid]) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
  
      // Right half is sorted
      } else {
  
        // Is key inside the sorted right half?
        if (nums[mid] < key && key <= nums[end]) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
    }
  
    return -1;
}

