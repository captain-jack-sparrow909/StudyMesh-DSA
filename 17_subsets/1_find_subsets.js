// Subsets: Given a set with distinct elements, find all of its distinct subsets.

// Example 1:

// Input: [1, 3]
// Output: [], [1], [3], [1,3]

// solution:

function findSubsets(nums) {
    const subsets = [[]];
  
    for (const num of nums) {
      const currentSize = subsets.length;
  
      for (let i = 0; i < currentSize; i++) {
        const newSubset = [...subsets[i]];
  
        newSubset.push(num);
  
        subsets.push(newSubset);
      }
    }
  
    return subsets;
}




// For:

// nums = [1, 3]

// We start with:

// subsets = [
//   []
// ]

// Now process 1.

// Current subsets:

// []

// Take [] and add 1:

// [] + 1 = [1]

// So now:

// subsets = [
//   [],
//   [1]
// ]

// Next process 3.

// Before adding 3, we have:

// [],
// [1]

// Create a copy of each and add 3:

// []   + 3 = [3]
// [1]  + 3 = [1,3]

// Now:

// subsets = [
//   [],
//   [1],
//   [3],
//   [1,3]
// ]

// So the answer is:

// [
//   [],
//   [1],
//   [3],
//   [1, 3]
// ]

// The important part is:

// const currentSize = subsets.length;

// Why save this?

// Because while we're looping, we're also doing:

// subsets.push(newSubset);

// So subsets.length keeps increasing.

// We only want to copy the subsets that existed before processing the current number.

// For example, before processing 3:

// subsets = [[], [1]]
// currentSize = 2

// So we only loop over indexes:

// 0 and 1

// and create:

// [3]
// [1,3]

// We do not process those newly created subsets again during the same iteration.

// The pattern is:

// Start:
// []

// Add 1:
// []
// [1]

// Add 3:
// []
// [1]
// [3]
// [1,3]

// For every new number, the number of subsets doubles.

// If there are n distinct elements, there are:

// 2^n

// subsets.
