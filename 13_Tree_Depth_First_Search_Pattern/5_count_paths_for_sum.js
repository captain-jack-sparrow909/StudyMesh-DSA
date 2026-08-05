// Count Paths for a Sum: Given a binary tree and a number ‘S’, find all paths in the tree such that the sum of all the node values of each path equals ‘S’. 
// Please note that the paths can start or end at any node but all paths must follow direction from parent to child (top to bottom).


// solution:
// Use DFS with backtracking.
// At every node:
// Add the node to the current path.
// Check all paths ending at this node by adding values backward.
// Count every backward sum equal to S.
// Explore left and right children.
// Remove the node before returning.


function countPaths(root, targetSum) {
    const currentPath = [];
  
    function dfs(node) {
      if (node === null) {
        return 0;
      }
  
      currentPath.push(node.val);
  
      let pathSum = 0;
      let pathCount = 0;
  
      // Check all downward paths ending at the current node
      for (let i = currentPath.length - 1; i >= 0; i--) {
        pathSum += currentPath[i];
  
        if (pathSum === targetSum) {
          pathCount++;
        }
      }
  
      pathCount += dfs(node.left);
      pathCount += dfs(node.right);
  
      // Backtrack
      currentPath.pop();
  
      return pathCount;
    }
  
    return dfs(root);
}



// Example

// Consider:

//           1
//         /   \
//        7     9
//       / \   / \
//      6   5 2   3

// Suppose:

// targetSum = 12;

// Valid downward paths include:

// 1 → 7 → 4?  // not present in this tree
// 7 → 5       = 12
// 1 → 9 → 2   = 12
// 9 → 3       = 12

// For the shown tree, valid paths are:

// 7 → 5
// 1 → 9 → 2
// 9 → 3

// So the count is:

// 3
// Why check backward from the current node?

// Suppose the current path is:

// [1, 7, 5]

// At node 5, possible paths ending at 5 are:

// [5]
// [7, 5]
// [1, 7, 5]

// The loop checks these by moving backward:

// for (let i = currentPath.length - 1; i >= 0; i--) {
//   pathSum += currentPath[i];
// }

// Step by step:

// Start from 5:
// pathSum = 5

// Add 7:
// pathSum = 5 + 7 = 12  → valid

// Add 1:
// pathSum = 5 + 7 + 1 = 13

// This finds the path:

// 7 → 5

// even though it does not start at the root.

// Why does the path have to end at the current node?

// Every valid path has some final node.

// When DFS visits that final node, the backward loop checks every possible starting point above it.

// Therefore, all downward paths are eventually checked.

// Why use currentPath.pop()?

// After exploring a node and its subtrees, we return to its parent.

// For example:

// currentPath = [1, 7, 5]

// After finishing node 5:

// currentPath.pop();

// The path becomes:

// [1, 7]

// Now DFS can correctly explore another branch without keeping 5.

// Important difference from root-to-leaf path sum

// Here, paths:

// Do not have to start at the root.
// Do not have to end at a leaf.
// Must move downward from parent to child.

// For example, this is valid:

// 7 → 5

// This is not valid:

// 5 → 7

// because it moves upward from child to parent.

