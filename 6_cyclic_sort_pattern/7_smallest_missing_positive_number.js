// Find the Smallest Missing Positive Number: Given an unsorted array containing numbers, find the smallest missing positive number in it.

// Note: Positive numbers start from '1'.

// Example 1:

// Input: [-3, 1, 5, 4, 2]
// Output: 3
// Explanation: The smallest missing positive number is '3'


// solution:
// Use cyclic sort, but only place numbers that belong in the range 1 to n.
// For an array of length n, the smallest missing positive must be between 1 and n + 1.

function findSmallestMissingPositive(nums) {
    let i = 0;
  
    while (i < nums.length) {
      const correctIndex = nums[i] - 1;
  
      if (
        nums[i] > 0 &&
        nums[i] <= nums.length &&
        nums[i] !== nums[correctIndex]
      ) {
        [nums[i], nums[correctIndex]] = [
          nums[correctIndex],
          nums[i]
        ];
      } else {
        i++;
      }
    }
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== i + 1) {
        return i + 1;
      }
    }
  
    return nums.length + 1;
}



// Step-by-step example
// findSmallestMissingPositive([-3, 1, 5, 4, 2]);

// Array length is 5, so we only care about numbers from 1 to 5.

// Initial:

// [-3, 1, 5, 4, 2]
// i = 0
// nums[0] = -3

// Negative numbers do not have a valid position, so skip it.

// i = 1
// nums[1] = 1
// correctIndex = 1 - 1 = 0

// Swap 1 with the value at index 0:

// [1, -3, 5, 4, 2]

// Now index 1 contains -3, so skip it.

// i = 2
// nums[2] = 5
// correctIndex = 5 - 1 = 4

// Swap:

// [1, -3, 2, 4, 5]

// Keep checking index 2.

// nums[2] = 2
// correctIndex = 1

// Swap:

// [1, 2, -3, 4, 5]

// Now -3 is invalid, so move forward.

// The array is now:

// [1, 2, -3, 4, 5]

// Scan it:

// index 0 expects 1 → correct
// index 1 expects 2 → correct
// index 2 expects 3 → contains -3

// So the smallest missing positive number is:

// 3
// Why these conditions?
// nums[i] > 0

// Ignore 0 and negative numbers.

// nums[i] <= nums.length

// Ignore numbers larger than n, because they cannot affect the smallest missing positive within 1 to n.

// nums[i] !== nums[correctIndex]

// Avoid unnecessary swaps and infinite loops when duplicates exist.
