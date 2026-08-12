// Subsets With Duplicates: Given a set of numbers that might contain duplicates, find all of its distinct subsets.

// Example 1:

// Input: [1, 3, 3]
// Output: [], [1], [3], [1,3], [3,3], [1,3,3]




// solution:
// For duplicates, the main problem is this:

// With:

// [1, 3, 3]

// if we treat both 3s exactly the same way as normal subset generation, we create duplicate subsets.

// So the trick is:

// Sort the array first.
// If the current number is a duplicate, only extend the subsets that were created in the previous step.


function findSubsets(nums) {
    nums.sort((a, b) => a - b);
  
    const subsets = [[]];
  
    let startIndex = 0;
    let endIndex = 0;
  
    for (let i = 0; i < nums.length; i++) {
      startIndex = 0;
  
      // If current number is same as previous number,
      // only use subsets created in previous iteration
      if (i > 0 && nums[i] === nums[i - 1]) {
        startIndex = endIndex + 1;
      }
  
      endIndex = subsets.length - 1;
  
      for (let j = startIndex; j <= endIndex; j++) {
        const newSubset = [...subsets[j]];
        newSubset.push(nums[i]);
  
        subsets.push(newSubset);
      }
    }
  
    return subsets;
}



// For:

// nums = [1, 3, 3]

// Start with:

// [ ]

// Process 1:

// []

// Add 1:
// [1]

// Now:

// []
// [1]

// Process the first 3.

// It is not a duplicate, so we use all existing subsets:

// []  + 3 → [3]
// [1] + 3 → [1,3]

// Now:

// []
// [1]
// [3]
// [1,3]

// Now process the second 3.

// If we used all subsets again, we'd get:

// [] + 3     → [3]      ❌ duplicate
// [1] + 3    → [1,3]    ❌ duplicate
// [3] + 3    → [3,3]
// [1,3] + 3  → [1,3,3]

// The first two already exist.

// So for a duplicate 3, we only use the subsets created by the previous 3:

// [3]
// [1,3]

// Then:

// [3]   + 3 → [3,3]
// [1,3] + 3 → [1,3,3]

// Final result:

// [
//   [],
//   [1],
//   [3],
//   [1, 3],
//   [3, 3],
//   [1, 3, 3]
// ]

// The important lines are:

// if (i > 0 && nums[i] === nums[i - 1]) {
//   startIndex = endIndex + 1;
// }

// endIndex remembers where the old subsets ended before processing the previous number.

// For example, before the first 3:

// subsets:

// index 0 → []
// index 1 → [1]

// So:

// endIndex = 1;

// The first 3 creates:

// index 2 → [3]
// index 3 → [1,3]

// When the second 3 arrives, we do:

// startIndex = endIndex + 1;

// So:

// startIndex = 1 + 1 = 2

// Therefore we only process:

// index 2 → [3]
// index 3 → [1,3]

// This avoids creating duplicate [3] and [1,3].

// The easiest rule to remember is:

// new number:
// → combine with ALL existing subsets

// duplicate number:
// → combine only with subsets created by the previous copy

// Sorting is important because duplicates must be next to each other:

// nums.sort((a, b) => a - b);

// So something like:

// [3, 1, 3]

// becomes:

// [1, 3, 3]

// and we can easily detect:

// nums[i] === nums[i - 1]

// Time complexity is O(n × 2^n) in the worst case.
