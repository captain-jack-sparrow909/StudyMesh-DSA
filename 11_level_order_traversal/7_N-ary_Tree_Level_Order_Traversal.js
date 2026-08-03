// N-ary Tree Level Order Traversal: Given an n-ary tree, return a list representing the level order traversal of the nodes' values in this tree.

// The input tree is serialized in an array format using level order traversal, where the children of each node are grouped together and separated by a null value.

// Examples
// Example 1
// Input: root = [1, null, 2, 3, 4, null, 5, 6]
// Expected Output: [[1], [2, 3, 4], [5, 6]]


// solution: 
// Use Breadth-First Search (BFS), just like a binary tree.
// The difference is that an N-ary tree node can have any number of children, stored in an array.


class Node {
    constructor(val, children = []) {
      this.val = val;
      this.children = children;
    }
}
  
  function levelOrder(root) {
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
  
        for (const child of currentNode.children) {
          queue.push(child);
        }
      }
  
      result.push(currentLevel);
    }
  
    return result;
}

const node5 = new Node(5);
const node6 = new Node(6);

const node2 = new Node(2, [node5, node6]);
const node3 = new Node(3);
const node4 = new Node(4);

const root = new Node(1, [node2, node3, node4]);

console.log(levelOrder(root));
// [[1], [2, 3, 4], [5, 6]]




// Understanding the example input
// [1, null, 2, 3, 4, null, 5, 6]

// This serialized array represents:

//           1
//        /  |  \
//       2   3   4
//      / \
//     5   6

// The first null means:

// The children of node 1 begin after this point.

// So node 1 has:

// 2, 3, 4

// The next null separates the next group of children. Node 2 has:

// 5, 6

// Nodes 3 and 4 have no children.



// Step by step

// Initially:

// queue = [1]
// result = []
// Level 1

// At the start:

// levelSize = 1

// Process node 1:

// currentLevel = [1]

// Add all its children:

// queue = [2, 3, 4]

// Result:

// [[1]]
// Level 2

// At the start:

// levelSize = 3

// Process nodes:

// 2, 3, 4

// Current level:

// [2, 3, 4]

// Node 2 adds children 5 and 6:

// queue = [5, 6]

// Nodes 3 and 4 have no children.

// Result:

// [
//   [1],
//   [2, 3, 4]
// ]
// Level 3

// Process:

// 5, 6

// Current level:

// [5, 6]

// Final result:

// [
//   [1],
//   [2, 3, 4],
//   [5, 6]
// ]
// Binary tree versus N-ary tree

// In a binary tree, we add at most two children:

// if (node.left) queue.push(node.left);
// if (node.right) queue.push(node.right);

// In an N-ary tree, we loop through all children:

// for (const child of currentNode.children) {
//   queue.push(child);
// }
