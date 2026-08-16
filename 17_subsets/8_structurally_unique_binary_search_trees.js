// Structurally Unique Binary Search Trees: Given a number ‘n’, write a function to return all structurally unique Binary Search Trees (BST) that can store values 1 to ‘n’?

// Example 1:

// Input: 2
// Output: List containing root nodes of all structurally unique BSTs.
// Explanation: Here are the 2 structurally unique BSTs storing all numbers from 1 to 2



// solution:
// This problem looks complicated, but the main idea is actually simple:

// Try every number as the root, then recursively build all possible left and right subtrees.

// Let's use n = 2.

// The numbers are:

// 1, 2

// There are only 2 choices for the root.

// 1. Make 1 the root

// If 1 is the root:

//   1
//    \
//     2

// Why?

// Because in a BST:

// numbers smaller than 1 go left → nothing
// numbers bigger than 1 go right → 2

// So that's one tree.

// 2. Make 2 the root

// If 2 is the root:

//     2
//    /
//   1

// Because:

// numbers smaller than 2 go left → 1
// numbers bigger than 2 go right → nothing

// So that's the second tree.

// Therefore:

// Number of trees = 2

class TreeNode {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
}
  
function generateTrees(n) {
    return buildTrees(1, n);
}
  
function buildTrees(start, end) {
    const result = [];
  
    // No numbers available
    if (start > end) {
      return [null];
    }
  
    // Try every number as the root
    for (let rootValue = start; rootValue <= end; rootValue++) {
  
      // Build all possible left subtrees
      const leftTrees = buildTrees(start, rootValue - 1);
  
      // Build all possible right subtrees
      const rightTrees = buildTrees(rootValue + 1, end);
  
      // Combine every left tree with every right tree
      for (const left of leftTrees) {
        for (const right of rightTrees) {
  
          const root = new TreeNode(rootValue);
  
          root.left = left;
          root.right = right;
  
          result.push(root);
        }
      }
    }
  
    return result;
}






// Now let's understand it very slowly.

// Step 1: buildTrees(1, 2)

// We want to create BSTs using:

// 1, 2
// buildTrees(1, 2)

// The loop says:

// for (let rootValue = start; rootValue <= end; rootValue++)

// So:

// rootValue = 1
// rootValue = 2

// We try both.

// Step 2: root = 1

// We have:

// 1

// Everything smaller than 1 goes left:

// buildTrees(1, 0)

// There is nothing there.

// So:

// [start > end]

// returns:

// [null]

// This simply means:

// There is one possible empty tree.

// Then we build the right side:

// buildTrees(2, 2)

// That gives:

// 2

// So we have:

// left  = null
// right = node 2

// Combine them:

//   1
//    \
//     2
// Step 3: root = 2

// Now:

// 2

// Everything smaller than 2 goes left:

// buildTrees(1, 1)

// which gives:

// 1

// Everything greater than 2 goes right:

// buildTrees(3, 2)

// Nothing exists, so:

// right = null

// Combine:

//     2
//    /
//   1
// Why do we have these two recursive calls?

// These are the most important lines:

// const leftTrees = buildTrees(start, rootValue - 1);

// const rightTrees = buildTrees(rootValue + 1, end);

// They come directly from the BST rule.

// If we choose:

// root = 3

// then:

// numbers smaller than 3
//         ↓
//      LEFT

// numbers greater than 3
//         ↓
//      RIGHT

// So:

// buildTrees(start, rootValue - 1)

// creates all possible left subtrees.

// And:

// buildTrees(rootValue + 1, end)

// creates all possible right subtrees.

// Why do we have two for loops?

// This part:

// for (const left of leftTrees) {
//   for (const right of rightTrees) {

// means:

// Try every possible left tree with every possible right tree.

// For example, imagine:

// leftTrees = [L1, L2]

// rightTrees = [R1, R2]

// We need to create:

// L1 + R1
// L1 + R2
// L2 + R1
// L2 + R2

// That's why we need nested loops.

// The most important picture

// Think of the algorithm as:

//                  Choose a root
//                       |
//           +-----------+-----------+
//           |                       |
//        smaller                  bigger
//           |                       |
//       LEFT TREE                RIGHT TREE
//           |                       |
//       recursively               recursively
//       build all                 build all
//       possibilities             possibilities

// For:

// [1, 2]

// we try:

// root = 1

//     1
//      \
//       2

// and:

// root = 2

//     2
//    /
//   1

// So:

// generateTrees(2)

// returns an array containing the two root nodes:

// [
//    1            2
//     \          /
//      2        1
// ]
// Remember this one sentence

// For every possible root, recursively generate every possible left subtree and every possible right subtree, then combine them.

// That's the entire idea behind this problem.