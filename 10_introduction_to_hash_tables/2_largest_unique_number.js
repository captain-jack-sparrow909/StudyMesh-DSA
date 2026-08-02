// Largest Unique Number: Given an array of integers, identify the highest value that appears only once in the array. If no such number exists, return -1.

// Examples:

// Example 1:

// Input: [5, 7, 3, 7, 5, 8]
// Expected Output: 8

// solution:
// Use a frequency map:

// Count how many times each number appears.
// Find the largest number whose count is 1.

function largestUniqueNumber(nums) {
    const frequency = new Map();
  
    for (const num of nums) {
      frequency.set(num, (frequency.get(num) || 0) + 1);
    }
  
    let largestUnique = -1;
  
    for (const num of nums) {
      if (frequency.get(num) === 1) {
        largestUnique = Math.max(largestUnique, num);
      }
    }
  
    return largestUnique;
}


// Example
// largestUniqueNumber([5, 7, 3, 7, 5, 8]);
// // 8

// First, count the numbers:

// 5 → 2 times
// 7 → 2 times
// 3 → 1 time
// 8 → 1 time

// The unique numbers are:

// 3, 8

// The largest is:

// 8

// So the result is:

// 8
// Why initialize with -1?
// let largestUnique = -1;

// The problem says to return -1 when no unique number exists.

// Example:

// largestUniqueNumber([5, 5, 7, 7]);
// // -1

// No number has a frequency of 1, so largestUnique remains -1.
