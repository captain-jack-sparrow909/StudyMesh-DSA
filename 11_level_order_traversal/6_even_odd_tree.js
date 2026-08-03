// Even Odd Tree: Given a binary tree, return true if it is an Even-Odd tree. Otherwise, return false.

// The Even-odd tree must follow below two rules:

// At every even-indexed level (starting from 0), all node values must be odd and arranged in strictly increasing order from left to right.
// At every odd-indexed level, all node values must be even and arranged in strictly decreasing order from left to right.


// solution:
// Use BFS level by level.

// For each level, verify two things:

// Correct parity: odd or even values.
// Correct order: increasing or decreasing.

function isEvenOddTree(root) {
    if (root === null) {
      return true;
    }
  
    const queue = [root];
    let level = 0;
  
    while (queue.length > 0) {
      const levelSize = queue.length;
  
      let previousValue =
        level % 2 === 0 ? -Infinity : Infinity;
  
      for (let i = 0; i < levelSize; i++) {
        const currentNode = queue.shift();
        const value = currentNode.val;
  
        if (level % 2 === 0) {
          // Even-indexed level:
          // values must be odd and strictly increasing
          if (
            value % 2 === 0 ||
            value <= previousValue
          ) {
            return false;
          }
        } else {
          // Odd-indexed level:
          // values must be even and strictly decreasing
          if (
            value % 2 !== 0 ||
            value >= previousValue
          ) {
            return false;
          }
        }
  
        previousValue = value;
  
        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }
  
        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }
  
      level++;
    }
  
    return true;
}


// Example

// Consider:

//         1
//       /   \
//     10     8
//    /  \   / \
//   3    5 7   9
// Level 0
// [1]

// Level 0 is even-indexed, so values must be:

// odd and increasing

// 1 is odd, so this level is valid.

// Level 1
// [10, 8]

// Level 1 is odd-indexed, so values must be:

// even and strictly decreasing

// Checks:

// 10 is even
// 8 is even
// 10 > 8

// Valid.

// Level 2
// [3, 5, 7, 9]

// Values must be odd and strictly increasing:

// 3 < 5 < 7 < 9

// Valid.

// So the function returns:

// true
// Why initialize previousValue differently?

// For an even-indexed level:

// let previousValue = -Infinity;

// The first value only needs to be greater than -Infinity.

// For an odd-indexed level:

// let previousValue = Infinity;

// The first value only needs to be less than Infinity.

// Important conditions

// Even-indexed level:

// value % 2 === 0

// means the value is even, which is invalid because the level requires odd values.

// value <= previousValue

// is invalid because values must be strictly increasing.

// Odd-indexed level:

// value % 2 !== 0

// means the value is odd, which is invalid because the level requires even values.

// value >= previousValue

// is invalid because values must be strictly decreasing.
