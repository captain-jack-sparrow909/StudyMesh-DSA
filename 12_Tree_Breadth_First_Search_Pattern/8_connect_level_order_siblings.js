// Connect Level Order Siblings: Given a root of the binary tree, connect each node with its level order successor. 
// The last node of each level should point to a null node.

// Examples
// Example 1:
// Input: root = [1, 2, 3, 4, 5, 6, 7]
// Output:
// [1 -> null]
// [2 -> 3 -> null]
// [4 -> 5 -> 6 -> 7 -> null]


// solution:
// Use BFS level by level.

// For each level:

// Process exactly levelSize nodes.
// Connect the previous node to the current node.
// Set the final node’s next pointer to null.


function connectLevelOrderSiblings(root) {
    if (root === null) {
      return null;
    }
  
    const queue = [root];
  
    while (queue.length > 0) {
      const levelSize = queue.length;
      let previousNode = null;
  
      for (let i = 0; i < levelSize; i++) {
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
  
      // The final node of this level points to null
      previousNode.next = null;
    }
  
    return root;
}


// The node class needs an additional next property:

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

// After connecting:

// 1 → null

// 2 → 3 → null

// 4 → 5 → 6 → 7 → null
// Step by step

// Initially:

// queue = [1]
// Level 1
// levelSize = 1
// previousNode = null

// Process node 1.

// Because previousNode is null, there is no previous node to connect.

// Then:

// previousNode = currentNode;

// So:

// previousNode = 1

// Add children:

// queue = [2, 3]

// After finishing the level:

// previousNode.next = null;

// Result:

// 1 → null
// Level 2

// At the beginning:

// queue = [2, 3]
// levelSize = 2
// previousNode = null

// Process node 2.

// There is no previous node yet, so no connection is created.

// previousNode = 2
// queue = [3, 4, 5]

// Process node 3.

// Now previousNode is node 2, so:

// previousNode.next = currentNode;

// means:

// 2.next = 3

// Then:

// previousNode = 3

// After finishing this level:

// previousNode.next = null;

// means:

// 3.next = null

// Result:

// 2 → 3 → null
// Level 3

// At the beginning:

// queue = [4, 5, 6, 7]

// Connections happen like this:

// 4.next = 5
// 5.next = 6
// 6.next = 7
// 7.next = null

// Result:

// 4 → 5 → 6 → 7 → null
// Why use previousNode?

// When processing the current node, we need to connect the node before it:

// previousNode.next = currentNode;

// For example, while processing 6:

// previousNode = 5
// currentNode = 6

// So:

// previousNode.next = currentNode;

// creates:

// 5 → 6

// Then we update:

// previousNode = currentNode;

// Now previousNode becomes 6, ready to connect to 7.

// Why reset it for every level?
// let previousNode = null;

// This is inside the outer while loop, so every new level starts fresh.

// Otherwise, the last node of one level could accidentally connect to the first node of the next level:

// 1 → 2

// But we need:

// 1 → null
// 2 → 3 → null