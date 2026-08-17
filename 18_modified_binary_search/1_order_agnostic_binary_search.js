// Order-agnostic Binary Search: Given a sorted array of numbers, find if a given number ‘key’ is present in the array. 
// Though we know that the array is sorted, we don’t know if it’s sorted in ascending or descending order. 
// You should assume that the array can have duplicates.

// Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.

// Example 1:

// Input: [4, 6, 10], key = 10
// Output: 2

// solution:

// Let's simplify this a lot.

// The only new thing compared to normal Binary Search is:

// We don't know whether the array is ascending or descending.

// For example:

// Ascending:
// [2, 4, 6, 8, 10]

// Descending:
// [10, 8, 6, 4, 2]

// We first figure out the order, then do normal binary search.

// Step 1: Find the order

// Look at the first and last elements:

// const isAscending = nums[start] <= nums[end];

// For:

// [4, 6, 10]

// we have:

// 4 <= 10

// so:

// isAscending = true

// For:

// [10, 6, 4]

// we have:

// 10 <= 4  ❌

// so:

// isAscending = false
// Step 2: Normal Binary Search

// Let's use:

// [4, 6, 10]
// key = 10

// Initially:

// start = 0
// end = 2

// Calculate middle:

// const mid = Math.floor((start + end) / 2);

// So:

// mid = 1

// We are looking at:

// [4, 6, 10]
//      ↑
//      6

// We want:

// 10

// Since the array is ascending and:

// 10 > 6

// we know the key must be on the right.

// So:

// start = mid + 1;

// Now:

// start = 2
// end = 2

// Middle:

// mid = 2

// We find:

// nums[2] = 10

// Return: 2


