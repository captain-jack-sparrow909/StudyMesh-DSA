// Find the Duplicate Number: We are given an unsorted array containing n+1 numbers taken from the range 1 to n. 
// The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space. 
// You are, however, allowed to modify the input array.


// solution:
// Use cyclic sort.

// Because the numbers are from 1 to n, each number belongs at:

// correctIndex = nums[i] - 1;

function findDuplicate(nums) {
    let i = 0;
  
    while (i < nums.length) {
      // The current number is already in the correct position
      if (nums[i] === i + 1) {
        i++;
        continue;
      }
  
      const correctIndex = nums[i] - 1;
  
      // The same number is already at its correct index
      if (nums[i] === nums[correctIndex]) {
        return nums[i];
      }
  
      // Move the current number to its correct index
      [nums[i], nums[correctIndex]] = [
        nums[correctIndex],
        nums[i]
      ];
    }
  
    return -1;
}


// Example
// findDuplicate([1, 4, 4, 3, 2]); // 4

// Start:

// [1, 4, 4, 3, 2]

// At index 0:

// nums[0] = 1

// 1 belongs at index 0, so move forward.

// At index 1:

// nums[1] = 4
// correctIndex = 4 - 1 = 3

// Index 3 contains 3, so swap:

// [1, 3, 4, 4, 2]

// Still at index 1:

// nums[1] = 3
// correctIndex = 3 - 1 = 2

// Swap:

// [1, 4, 3, 4, 2]

// Now at index 1:

// nums[1] = 4
// correctIndex = 3
// nums[3] = 4

// The correct position already contains another 4, so 4 is the duplicate.

// Why not increase i after swapping?

// The new value placed at index i may also be in the wrong position, so we keep checking the same index.
