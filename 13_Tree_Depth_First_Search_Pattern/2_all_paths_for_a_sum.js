// All Paths for a Sum: Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.

// solution:
// Use DFS with backtracking.

// We keep one array called currentPath representing the path from the root to the current node.

// When we reach a leaf:

// If the path sum equals S, copy the path into the result.
// Then remove the current node before returning to the parent.


function findPaths(root, targetSum) {
    const allPaths = [];
  
    function dfs(node, remainingSum, currentPath) {
      if (node === null) {
        return;
      }
  
      // Add the current node to the path
      currentPath.push(node.val);
  
      // Check whether this is a valid root-to-leaf path
      if (
        node.left === null &&
        node.right === null &&
        node.val === remainingSum
      ) {
        allPaths.push([...currentPath]);
      } else {
        const newRemainingSum = remainingSum - node.val;
  
        dfs(node.left, newRemainingSum, currentPath);
        dfs(node.right, newRemainingSum, currentPath);
      }
  
      // Remove this node before returning to its parent
      currentPath.pop();
    }
  
    dfs(root, targetSum, []);
  
    return allPaths;
}



// Example

// Consider this tree:

//           1
//         /   \
//        7     9
//       / \   / \
//      4   5 2   7

// Target:

// S = 12

// The root-to-leaf paths are:

// 1 → 7 → 4 = 12
// 1 → 7 → 5 = 13
// 1 → 9 → 2 = 12
// 1 → 9 → 7 = 17

// So the result is:

// [
//   [1, 7, 4],
//   [1, 9, 2]
// ]
// Step by step

// Initially:

// currentPath = []
// remainingSum = 12
// Visit node 1
// currentPath.push(1);
// currentPath = [1]
// newRemainingSum = 12 - 1 = 11

// Now search the left subtree.

// Visit node 7
// currentPath = [1, 7]
// newRemainingSum = 11 - 7 = 4

// Search node 4.

// Visit node 4
// currentPath = [1, 7, 4]
// remainingSum = 4

// Node 4 is a leaf, and:

// node.val === remainingSum
// 4 === 4

// So copy the path:

// allPaths.push([...currentPath]);
// allPaths = [[1, 7, 4]]
// Why copy the path?

// We use:

// [...currentPath]

// instead of:

// currentPath

// because currentPath will continue changing during backtracking.

// A copy preserves the valid path exactly as it was when found.

// Backtracking

// After processing node 4:

// currentPath.pop();

// The path changes from:

// [1, 7, 4]

// back to:

// [1, 7]

// Now DFS can explore node 5.

// After finishing the entire left subtree, it removes 7:

// [1, 7] → [1]

// Then it explores the right subtree beginning at 9.

// This is called backtracking:

// Add a node while moving down.
// Remove the node while moving back up.
// Why check only leaf nodes?

// A valid path must end at a leaf.

// Suppose:

//     1
//    /
//   2
//  /
// 3

// For target 3, 1 + 2 = 3, but node 2 is not a leaf. Therefore, [1, 2] is not a valid path.
