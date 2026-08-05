// Sum of Path Numbers: Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. 
// Find the total sum of all the numbers represented by all paths.


// solution:
// Use DFS and carry the number formed so far.
// When moving to a child, append its digit using:
// newNumber = currentNumber * 10 + node.val;

function sumOfPathNumbers(root) {
    function dfs(node, currentNumber) {
      if (node === null) {
        return 0;
      }
  
      const newNumber = currentNumber * 10 + node.val;
  
      // Leaf node: one complete number has been formed
      if (node.left === null && node.right === null) {
        return newNumber;
      }
  
      return (
        dfs(node.left, newNumber) +
        dfs(node.right, newNumber)
      );
    }
  
    return dfs(root, 0);
}


// Example

// Consider:

//         1
//       /   \
//      7     9
//     /     / \
//    4     2   9

// The root-to-leaf paths form these numbers:

// 1 → 7 → 4 = 174
// 1 → 9 → 2 = 192
// 1 → 9 → 9 = 199

// Total:

// 174 + 192 + 199 = 565

// So:

// sumOfPathNumbers(root);
// // 565
// How is the number built?

// Suppose the path is:

// 1 → 7 → 4

// Start with:

// currentNumber = 0

// At node 1:

// 0 × 10 + 1 = 1

// At node 7:

// 1 × 10 + 7 = 17

// At node 4:

// 17 × 10 + 4 = 174

// Multiplying by 10 shifts the existing digits one place to the left, making room for the new digit.

// For example:

// 17 × 10 = 170
// 170 + 4 = 174
// Why return only at a leaf?

// A root-to-leaf path represents a complete number.

// For this tree:

//     1
//    /
//   7
//  /
// 4

// 1 and 17 are incomplete paths because those nodes still have children. Only 174 reaches a leaf.

// Why add the left and right results?
// return (
//   dfs(node.left, newNumber) +
//   dfs(node.right, newNumber)
// );

// Each subtree can contain multiple complete path numbers. We calculate their sums separately and combine them.
