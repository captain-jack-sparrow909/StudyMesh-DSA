// Find the First K Missing Positive Numbers: Given an unsorted array containing numbers and a number ‘k’, 
// find the first ‘k’ missing positive numbers in the array.

// Example 1:

// Input: [3, -1, 4, 5, 5], k=3
// Output: [1, 2, 6]
// Explanation: The smallest missing positive numbers are 1, 2 and 6.


// solution: 
// Use cyclic sort first to place every valid number from 1 to n at its correct index.

// Then:

// Any incorrect index gives a missing number from 1 to n.
// If we still need more missing numbers, continue from n + 1.
// Skip large numbers that already exist in the array.

function findFirstKMissingPositive(nums, k) {
    let i = 0;
  
    // Step 1: Cyclic sort
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
  
    const missingNumbers = [];
    const extraNumbers = new Set();
  
    // Step 2: Find missing numbers between 1 and n
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== i + 1) {
        missingNumbers.push(i + 1);
        extraNumbers.add(nums[i]);
  
        if (missingNumbers.length === k) {
          return missingNumbers;
        }
      }
    }
  
    // Step 3: Find missing numbers greater than n
    let nextNumber = nums.length + 1;
  
    while (missingNumbers.length < k) {
      if (!extraNumbers.has(nextNumber)) {
        missingNumbers.push(nextNumber);
      }
  
      nextNumber++;
    }
  
    return missingNumbers;
}


// Example
// findFirstKMissingPositive([3, -1, 4, 5, 5], 3);

// Initial array:

// [3, -1, 4, 5, 5]

// After cyclic sort:

// [-1, 5, 3, 4, 5]

// Now check each index:

// index 0 expects 1, but has -1 → 1 is missing
// index 1 expects 2, but has 5  → 2 is missing
// index 2 expects 3             → correct
// index 3 expects 4             → correct
// index 4 expects 5             → correct

// So far:

// [1, 2]

// We still need one more missing number.

// The next positive number after the array range is:

// n + 1 = 6

// 6 does not exist in the array, so add it:

// [1, 2, 6]
// Why use extraNumbers?

// Consider:

// nums = [2, 3, 4];
// k = 3;

// After arranging, the first missing number is 1.

// Now we start checking numbers greater than n = 3:

// 4, 5, 6...

// But 4 already exists in the original array, so it is not missing. The set helps us skip it.



// why are we going beyond n ?
// Because the question asks for the first k missing positive numbers, and there may not be enough missing numbers between 1 and n.

// Example:

// nums = [3, -1, 4, 5, 5];
// k = 3;

// Here:

// n = nums.length = 5

// After arranging, the missing numbers inside 1 to 5 are:

// 1, 2

// But we need 3 missing numbers.

// So we must continue checking after 5:

// 6, 7, 8...

// The first number after n is:

// let nextNumber = nums.length + 1; // 6

// Since 6 is missing, the answer becomes:

// [1, 2, 6]

// Another example:

// nums = [1, 2, 3];
// k = 2;

// There are no missing numbers from 1 to 3.

// So the first two missing positive numbers are:

// 4, 5

// That is why we go beyond n.

// The key idea is:

// First check missing values from 1 to n.
// If we still need more, continue with n + 1, n + 2, ...