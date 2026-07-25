// Subarrays with Product Less than a Target: Given an array with positive numbers and a positive target number, 
// find all of its contiguous subarrays whose product is less than the target number.




// solution:
// Use a sliding window to keep the product below target. For every windowEnd, all subarrays ending there and starting between windowStart and windowEnd are valid.
function findSubarrays(nums, target) {
    if (target <= 1) {
      return [];
    }
  
    const result = [];
    let product = 1;
    let windowStart = 0;
  
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
      product *= nums[windowEnd];
  
      while (product >= target) {
        product /= nums[windowStart];
        windowStart++;
      }
  
      // Build all valid subarrays ending at windowEnd
      const currentSubarray = [];
  
      for (let i = windowEnd; i >= windowStart; i--) {
        currentSubarray.unshift(nums[i]);
        result.push([...currentSubarray]);
      }
    }
  
    return result;
  }

// method adds one or more elements to the beginning of an array and returns the new length of that array


// Example
// findSubarrays([2, 5, 3, 10], 30);

// Output:

// [
//   [2],
//   [5],
//   [2, 5],
//   [3],
//   [5, 3],
//   [10]
// ]
// Step by step
// Add 2

// Current window:

// [2]

// Valid subarrays ending at 2:

// [2]
// Add 5

// Current product:

// 2 × 5 = 10

// Valid subarrays ending at 5:

// [5]
// [2, 5]

// We generate them backwards from windowEnd:

// Start at 5     → [5]
// Include 2      → [2, 5]
// Add 3

// Current product:

// 2 × 5 × 3 = 30

// The product must be less than 30, so remove 2:

// 30 / 2 = 15

// Current valid window:

// [5, 3]

// Valid subarrays ending at 3:

// [3]
// [5, 3]
// Add 10

// Current product:

// 15 × 10 = 150

// Remove 5:

// 150 / 5 = 30

// Still too large, so remove 3:

// 30 / 3 = 10

// Current valid window:

// [10]

// Valid subarray:

// [10]
// Understanding the inner loop
// for (let i = windowEnd; i >= windowStart; i--) {
//   currentSubarray.unshift(nums[i]);
//   result.push([...currentSubarray]);
// }

// Suppose the current valid window is:

// [2, 5, 3]

// Starting from the end:

// i = 2 → [3]
// i = 1 → [5, 3]
// i = 0 → [2, 5, 3]

// These are all contiguous subarrays ending at the current windowEnd.

// We use:

// result.push([...currentSubarray]);

// to save a copy. Without [...], every result entry would reference the same array object.

