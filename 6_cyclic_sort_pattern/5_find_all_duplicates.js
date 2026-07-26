// Find all Duplicate Numbers: We are given an unsorted array containing n numbers taken from the range 1 to n. The array has some numbers appearing twice, 
// find all these duplicate numbers using constant space.

// Example 1:

// Input: [3, 4, 4, 5, 5]
// Output: [4, 5]
// Example 2:

// Input: [5, 4, 7, 2, 3, 5, 3]
// Output: [3, 5]
// Constraints:

// nums.length == n
// 1 <= n <= 
// 1 <= nums[i] <= n
// Each element in nums appears once or twice.


//solution:
// Use cyclic sort again.

// Since values are from 1 to n, each value belongs at:

// correctIndex = nums[i] - 1;

// After placing as many numbers as possible in their correct positions, any index containing the wrong value points to a duplicate.

function findAllDuplicates(nums) {
    let i = 0;
  
    while (i < nums.length) {
      const correctIndex = nums[i] - 1;
  
      if (nums[i] !== nums[correctIndex]) {
        [nums[i], nums[correctIndex]] = [
          nums[correctIndex],
          nums[i]
        ];
      } else {
        i++;
      }
    }
  
    const duplicates = [];
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== i + 1) {
        duplicates.push(nums[i]);
      }
    }
  
    return duplicates;
}

// Example 1
// findAllDuplicates([3, 4, 4, 5, 5]);
// // [4, 5]

// After cyclic sorting, the array becomes something like:

// [5, 4, 3, 4, 5]

// Now compare each value with what should be at that index:

// index 0 should contain 1, but contains 5 → duplicate 5
// index 1 should contain 2, but contains 4 → duplicate 4
// index 2 contains 3 → correct
// index 3 contains 4 → correct
// index 4 contains 5 → correct

// So the duplicates are:

// [5, 4]

// The order may differ from the example, but the duplicate values are correct.

// Why does this work?

// Suppose 4 appears twice.

// Only one 4 can occupy its correct index:

// number 4 → index 3

// The second 4 must remain at some incorrect index. When we scan afterward, that misplaced value is a duplicate.

// Why this condition avoids an infinite loop
// if (nums[i] !== nums[correctIndex])

// Suppose:

// nums[i] = 4
// nums[correctIndex] = 4

// Another 4 is already at the correct position. Swapping equal values would change nothing, so we move i forward instead.
