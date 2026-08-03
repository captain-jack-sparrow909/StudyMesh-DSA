// Reverse Level Order Traversal: Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. 
// (i.e., the lowest level comes first in left to right order.)

// Examples
// Example 1
// Input: root = [1, 2, 3, 4, 5, 6, 7]
// Expected Output: [[4, 5, 6, 7], [2, 3], [1]]


// solution:
// This is almost the same as normal level-order traversal.

// First collect levels from top to bottom:

// [[1], [2, 3], [4, 5, 6, 7]]

// Then reverse the levels:

// [[4, 5, 6, 7], [2, 3], [1]]


function reverseLevelOrder(root) {
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
  
    return result.reverse();
  }


//   For this tree:

//         1
//       /   \
//      2     3
//     / \   / \
//    4   5 6   7

// the processing is:

// Level 1 → [1]
// Level 2 → [2, 3]
// Level 3 → [4, 5, 6, 7]

// So before reversing:

// result = [
//   [1],
//   [2, 3],
//   [4, 5, 6, 7]
// ];

// After:

// result.reverse();

// we get:

// [
//   [4, 5, 6, 7],
//   [2, 3],
//   [1]
// ]

// You could also use:

// result.unshift(currentLevel);

// instead of push(), but push() plus one final reverse() is usually cleaner and more efficient in JavaScript.