// Single Number: In a non-empty array of integers, every number appears twice except for one, find that single number.

// Example 1:

// Input: 1, 4, 2, 1, 3, 2, 3
// Output: 4

// solution:
// This one is very simple once you know XOR (^).

// The trick is:

// Every number appears twice, so the pairs can cancel each other out.

// XOR rules

// You only need to remember 2 rules:

// number ^ same number = 0
// number ^ 0 = number

// For example:

// 4 ^ 4 = 0
// 7 ^ 0 = 7

// So if we XOR everything:

// 1 ^ 4 ^ 2 ^ 1 ^ 3 ^ 2 ^ 3

// The pairs cancel:

// (1 ^ 1) ^ (2 ^ 2) ^ (3 ^ 3) ^ 4

// Becomes:

// 0 ^ 0 ^ 0 ^ 4

// And finally:

// 4


function singleNumber(nums) {
    let result = 0;
  
    for (let num of nums) {
      result = result ^ num;
    }
  
    return result;
}


// Step by step

// For:

// [1, 4, 2, 1, 3, 2, 3]

// result starts as:

// 0

// Then:

// 0 ^ 1 = 1
// 1 ^ 4 = 5
// 5 ^ 2 = 7
// 7 ^ 1 = 6
// 6 ^ 3 = 5
// 5 ^ 2 = 7
// 7 ^ 3 = 4

// Answer:

// 4
// Why does XOR cancel pairs?

// XOR compares binary bits. For the same bits:

// 1 ^ 1 = 0
// 0 ^ 0 = 0

// So a number XORed with itself becomes 0.

// And because XOR can be rearranged:

// 1 ^ 4 ^ 2 ^ 1 ^ 3 ^ 2 ^ 3

// is effectively:

// 1 ^ 1 ^ 2 ^ 2 ^ 3 ^ 3 ^ 4

// All pairs become 0, leaving only 4.

// Time: O(n)
// Space: O(1)

// The main thing to remember for this problem:

// If every number appears twice except one, think XOR.
