// Find Largest Value in Each Tree Row: Given the root of a binary tree, return an array containing the largest value in each row of the tree (0-indexed).

// Examples
// Example 1
// Input: root = [1, 2, 3, 4, 5, null, 6]
// Expected Output: [1, 3, 6]


// solution:
// Use Breadth-First Search (BFS) level by level.

// For each row:

// Save the number of nodes currently in the queue.
// Process exactly those nodes.
// Track the largest value in that row.

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function largestValues(root) {
    if (root === null) {
      return [];
    }
  
    const queue = [root];
    const result = [];
  
    while (queue.length > 0) {
      const levelSize = queue.length;
      let levelMax = -Infinity;
  
      for (let i = 0; i < levelSize; i++) {
        const currentNode = queue.shift();
  
        levelMax = Math.max(levelMax, currentNode.val);
  
        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }
  
        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }
  
      result.push(levelMax);
    }
  
    return result;
}



// Example tree

// The input:

// [1, 2, 3, 4, 5, null, 6]

// represents:

//         1
//       /   \
//      2     3
//     / \     \
//    4   5     6

// Build and call it like this:

// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const root = new TreeNode(1);

// root.left = new TreeNode(2);
// root.right = new TreeNode(3);

// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);

// root.right.right = new TreeNode(6);

// console.log(largestValues(root));
// // [1, 3, 6]
// Step by step

// Initially:

// queue = [1]
// result = []
// Row 0
// levelSize = 1

// Process node 1:

// levelMax = max(-Infinity, 1) = 1

// Add its children:

// queue = [2, 3]

// After the row:

// result = [1]
// Row 1

// At the start:

// queue = [2, 3]
// levelSize = 2
// levelMax = -Infinity

// Process 2:

// levelMax = 2
// queue = [3, 4, 5]

// Process 3:

// levelMax = 3
// queue = [4, 5, 6]

// After the row:

// result = [1, 3]
// Row 2
// queue = [4, 5, 6]
// levelSize = 3

// Process the values:

// max(4, 5, 6) = 6

// After the row:

// result = [1, 3, 6]
// Why initialize with -Infinity?

// Tree values could be negative.

// For example:

//    -5
//   /  \
// -10  -3

// If we initialized levelMax with 0, the second row would incorrectly return 0.

// Using:

// let levelMax = -Infinity;

// ensures that any real node value will replace it.

