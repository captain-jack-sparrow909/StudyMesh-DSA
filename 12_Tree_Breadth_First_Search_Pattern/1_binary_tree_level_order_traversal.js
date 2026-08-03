// Binary Tree Level Order Traversal: Given a binary tree, populate an array to represent its level-by-level traversal. 
// You should populate the values of all nodes of each level from left to right in separate sub-arrays.


// solution: 
// Use Breadth-First Search (BFS) with a queue.

// For each level:

// Save how many nodes are currently in the queue.
// Process exactly those nodes.
// Put their values into one sub-array.

function levelOrderTraversal(root) {
    if (root === null) {
      return [];
    }
  
    const queue = [root];
    const result = [];
  
    while (queue.length > 0) {
      const levelSize = queue.length;
      const currentLevel = [];
  
      for (let i = 0; i < levelSize; i++) {
        const currentNode = queue.shift();
  
        currentLevel.push(currentNode.val);
  
        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }
  
        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }
  
      result.push(currentLevel);
    }
  
    return result;
}



// Example

// For this tree:

//         1
//       /   \
//      2     3
//     / \   / \
//    4   5 6   7

// The output is:

// [
//   [1],
//   [2, 3],
//   [4, 5, 6, 7]
// ]
// Step by step

// Initially:

// queue = [1]
// result = []
// Level 1

// At the start:

// levelSize = queue.length; // 1

// Process node 1:

// currentLevel = [1]

// Add its children:

// queue = [2, 3]

// Add the completed level:

// result = [[1]]
// Level 2

// At the start:

// queue = [2, 3]
// levelSize = 2

// Process node 2:

// currentLevel = [2]
// queue = [3, 4, 5]

// Process node 3:

// currentLevel = [2, 3]
// queue = [4, 5, 6, 7]

// Now:

// result = [
//   [1],
//   [2, 3]
// ]
// Level 3

// At the start:

// queue = [4, 5, 6, 7]
// levelSize = 4

// Process all four nodes:

// currentLevel = [4, 5, 6, 7]

// Final result:

// [
//   [1],
//   [2, 3],
//   [4, 5, 6, 7]
// ]
// Why save levelSize?
// const levelSize = queue.length;

// While processing the current level, we add its children to the queue.

// Those children belong to the next level, so we must process only the number of nodes that were already in the queue when the level started.
