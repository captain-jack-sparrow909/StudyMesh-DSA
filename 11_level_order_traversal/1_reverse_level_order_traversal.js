// Reverse Level Order Traversal: Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. 
// (i.e., the lowest level comes first in left to right order.)

// Examples
// Example 1
// Input: root = [1, 2, 3, 4, 5, 6, 7]
// Expected Output: [[4, 5, 6, 7], [2, 3], [1]]

// solution: 
// Use Breadth-First Search (BFS) with a queue.
// Normal level-order traversal gives:
// [[1], [2, 3], [4, 5, 6, 7]]
// Since we need bottom-up order, add each level to the front of the result.

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
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
  
const root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(reverseLevelOrder(root));
// [[4, 5, 6, 7], [2, 3], [1]]




// root is not the array [1, 2, 3, 4, 5, 6, 7] directly. It is the first node object of the binary tree.

// First, define a tree node:

// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// Then build this tree:

//         1
//       /   \
//      2     3
//     / \   / \
//    4   5 6   7
// const root = new TreeNode(1);

// root.left = new TreeNode(2);
// root.right = new TreeNode(3);

// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);

// root.right.left = new TreeNode(6);
// root.right.right = new TreeNode(7);

// Now call the function:

// const result = reverseLevelOrder(root);

// console.log(result);
// // [[4, 5, 6, 7], [2, 3], [1]]
// What does root contain?

// root points to node 1:

// root = {
//   val: 1,
//   left: {
//     val: 2,
//     left: { val: 4, left: null, right: null },
//     right: { val: 5, left: null, right: null }
//   },
//   right: {
//     val: 3,
//     left: { val: 6, left: null, right: null },
//     right: { val: 7, left: null, right: null }
//   }
// };

// So when the function starts:

// function reverseLevelOrder(root) {

// the value of:

// root.val

// is:

// 1

// And:

// root.left.val   // 2
// root.right.val  // 3

// The queue initially contains the node object:

// const queue = [root];

// Conceptually:

// queue = [node 1]

// It does not contain just the number 1. It contains the whole node, including references to its children.
