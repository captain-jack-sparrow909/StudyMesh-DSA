// Permutations: Given a set of distinct numbers, find all of its permutations.
// Permutation is defined as the re-arranging of the elements of the set. For example, {1, 2, 3} has the following six permutations:
// {1, 2, 3} {1, 3, 2} {2, 1, 3} {2, 3, 1} {3, 1, 2} {3, 2, 1}
// If a set has  distinct elements it will have  permutations.
// Example 1:
// Input: [1,3,5]
// Output: [1,3,5], [1,5,3], [3,1,5], [3,5,1], [5,1,3], [5,3,1]


// solution:
// For permutations, the idea is:
// Take one number at a time and insert it into every possible position of each existing permutation.
// For:
// [1, 3, 5]


function findPermutations(nums) {
    let permutations = [[]];
  
    for (const num of nums) {
      const newPermutations = [];
  
      for (const permutation of permutations) {
        for (
          let position = 0;
          position <= permutation.length;
          position++
        ) {
          const newPermutation = [...permutation];
  
          newPermutation.splice(position, 0, num);
  
          newPermutations.push(newPermutation);
        }
      }
  
      permutations = newPermutations;
    }
  
    return permutations;
}



// Start with:

// permutations = [[]];

// Why?

// Because before processing any number, we have one empty permutation:

// []

// Now the outer loop starts:

// for (const num of nums)

// First:

// num = 1

// We create:

// newPermutations = [];

// Current:

// permutations = [[]]

// So:

// for (const permutation of permutations)

// gives:

// permutation = []

// Now we try inserting 1 into every possible position.

// The empty array has length 0, so:

// position = 0

// Copy the permutation:

// const newPermutation = [...permutation];

// So:

// newPermutation = []

// Then:

// newPermutation.splice(0, 0, 1);

// This means:

// At index 0, delete 0 items, and insert 1.

// So:

// [] → [1]

// Push it:

// newPermutations.push(newPermutation);

// Now:

// newPermutations = [
//   [1]
// ]

// After finishing number 1:

// permutations = newPermutations;

// So:

// permutations = [
//   [1]
// ]

// Now the outer loop moves to:

// num = 3

// Again:

// newPermutations = [];

// Current permutations:

// [1]

// Now:

// permutation = [1]

// The length is:

// 1

// But there are 2 positions where we can insert 3:

// position 0
// position 1

// At position = 0:

// newPermutation = [1]

// Then:

// newPermutation.splice(0, 0, 3);

// Result:

// [3, 1]

// Push it:

// newPermutations = [
//   [3, 1]
// ]

// Now:

// position = 1

// Again make a fresh copy:

// newPermutation = [1]

// Insert 3 at index 1:

// newPermutation.splice(1, 0, 3);

// Result:

// [1, 3]

// Now:

// newPermutations = [
//   [3, 1],
//   [1, 3]
// ]

// After finishing number 3:

// permutations = newPermutations;

// So:

// permutations = [
//   [3, 1],
//   [1, 3]
// ]

// Now process:

// num = 5

// Again:

// newPermutations = [];

// We currently have two permutations:

// [3, 1]
// [1, 3]

// Take the first one:

// permutation = [3, 1]

// Its length is 2.

// So we try positions:

// 0, 1, 2

// Position 0:

// [3,1]
//  ↓ insert 5

// [5,3,1]

// Position 1:

// [3,1]
//    ↓

// [3,5,1]

// Position 2:

// [3,1]
//      ↓

// [3,1,5]

// So after processing [3,1]:

// newPermutations = [
//   [5,3,1],
//   [3,5,1],
//   [3,1,5]
// ]

// Now take the second existing permutation:

// permutation = [1,3]

// Again try positions 0, 1, 2.

// Position 0:

// [5,1,3]

// Position 1:

// [1,5,3]

// Position 2:

// [1,3,5]

// Now:

// newPermutations = [
//   [5,3,1],
//   [3,5,1],
//   [3,1,5],

//   [5,1,3],
//   [1,5,3],
//   [1,3,5]
// ];

// Finally:

// permutations = newPermutations;

// And return:

// [
//   [5,3,1],
//   [3,5,1],
//   [3,1,5],
//   [5,1,3],
//   [1,5,3],
//   [1,3,5]
// ]

// The main idea is very simple:

// Start:
// []

// Add 1 everywhere:
// [1]

// Add 3 everywhere:
// [3,1]
// [1,3]

// Add 5 everywhere:
// [5,3,1]
// [3,5,1]
// [3,1,5]
// [5,1,3]
// [1,5,3]
// [1,3,5]

// And this line:

// const newPermutation = [...permutation];

// is important because we want a fresh copy before inserting the new number.

// Otherwise we would keep modifying the same array.

// The easiest way to remember the algorithm is:

// Take every existing permutation, and insert the new number at every possible position.
