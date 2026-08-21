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
