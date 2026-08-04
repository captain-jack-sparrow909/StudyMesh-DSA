// Binary Tree Path Sum: Given a root of the binary tree and an integer ‘S’, return true if the tree has a path from 
// root-to-leaf such that the sum of all the node values of that path equals ‘S’. Otherwise, return false.

// Examples
// Example 1:
// Input: root = [1, 2, 3, 4, 5, 6, 7], S = 10
// Expected Output: true


// solution:
// Use Depth-First Search (DFS).
// As we move down the tree, subtract the current node’s value from the remaining target sum.
// When we reach a leaf node, check whether its value completes the required sum.

function hasPathSum(root, targetSum) {
    if (root === null) {
      return false;
    }
  
    // Check only when we reach a leaf node
    if (
      root.left === null &&
      root.right === null
    ) {
      return root.val === targetSum;
    }
  
    const remainingSum = targetSum - root.val;
  
    return (
      hasPathSum(root.left, remainingSum) ||
      hasPathSum(root.right, remainingSum)
    );
}



// Example
//         1
//       /   \
//      2     3
//     / \   / \
//    4   5 6   7

// Target:

// S = 10

// One valid root-to-leaf path is:

// 1 → 3 → 6

// Its sum is:

// 1 + 3 + 6 = 10

// So the function returns:

// true
// Step by step

// Start at node 1:

// targetSum = 10
// remainingSum = 10 - 1 = 9

// Search both subtrees:

// hasPathSum(node2, 9)
// hasPathSum(node3, 9)
// Left subtree

// At node 2:

// remainingSum = 9 - 2 = 7

// Check node 4:

// Node 4 is a leaf.
// Is 4 equal to remaining target 7?

// false

// Check node 5:

// Node 5 is a leaf.
// Is 5 equal to remaining target 7?

// false

// The left subtree has no valid path.

// Right subtree

// At node 3:

// remainingSum = 9 - 3 = 6

// Check node 6:

// Node 6 is a leaf.
// Is 6 equal to remaining target 6?

// true

// Therefore:

// 1 → 3 → 6

// is a valid path.

// Why use ||?
// hasPathSum(root.left, remainingSum) ||
// hasPathSum(root.right, remainingSum)

// We only need one valid path.

// If the left subtree has one, return true.
// Otherwise, check the right subtree.
// Why must the node be a leaf?

// A valid path must go from the root all the way to a leaf.

// Consider:

//     1
//    /
//   2
//  /
// 3

// For target 3, the values 1 + 2 equal 3, but node 2 is not a leaf because it has child 3.

// Therefore, this is not a valid root-to-leaf path.

// That is why we check:

// root.left === null &&
// root.right === null
