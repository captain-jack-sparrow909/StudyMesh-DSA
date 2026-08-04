// Connect All Level Order Siblings: Given a root of the binary tree, connect each node with its level order successor. 
// The last node of each level should point to the first node of the next level.

// Examples
// Example 1
// Input: root = [1, 2, 3, 4, 5, 6, 7]
// Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> null


// solution:
// This time, we do not reset the connection at the end of each level.
// We connect every node in normal level-order traversal:
// 1 → 2 → 3 → 4 → 5 → 6 → 7 → null

function connectAllLevelOrderSiblings(root) {
    if (root === null) {
      return null;
    }
  
    const queue = [root];
    let previousNode = null;
  
    while (queue.length > 0) {
      const currentNode = queue.shift();
  
      if (previousNode !== null) {
        previousNode.next = currentNode;
      }
  
      previousNode = currentNode;
  
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
  
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  
    // The final node has no successor
    previousNode.next = null;
  
    return root;
}


// The node class needs a next property:

// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//     this.next = null;
//   }
// }
// Example tree
//         1
//       /   \
//      2     3
//     / \   / \
//    4   5 6   7

// Its level-order traversal is:

// 1, 2, 3, 4, 5, 6, 7

// So the connections become:

// 1 → 2 → 3 → 4 → 5 → 6 → 7 → null
// Step by step

// Initially:

// queue = [1]
// previousNode = null
// Process 1

// There is no previous node, so we cannot connect anything yet.

// previousNode = 1
// queue = [2, 3]
// Process 2

// Now:

// previousNode = 1
// currentNode = 2

// Connect:

// previousNode.next = currentNode;

// So:

// 1 → 2

// Then:

// previousNode = 2

// Add children 4 and 5:

// queue = [3, 4, 5]
// Process 3

// Connect:

// 2 → 3

// Then add children 6 and 7:

// queue = [4, 5, 6, 7]
// Process 4

// Connect:

// 3 → 4

// Notice that 3 is on one level and 4 is on the next level. This is allowed in this problem.

// The process continues:

// 4 → 5
// 5 → 6
// 6 → 7

// Finally:

// previousNode.next = null;

// So:

// 7 → null
// Difference from “Connect Level Order Siblings”

// Previous problem:

// 1 → null
// 2 → 3 → null
// 4 → 5 → 6 → 7 → null

// This problem:

// 1 → 2 → 3 → 4 → 5 → 6 → 7 → null

// The important difference is that here previousNode is declared outside the loop and is never reset for a new level:

// let previousNode = null;

// We also do not need levelSize, because we do not need to separate the levels.
