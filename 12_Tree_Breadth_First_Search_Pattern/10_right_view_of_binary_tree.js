// Right View of a Binary Tree: Given a root of the binary tree, return an array containing nodes in its right view.

// The right view of a binary tree consists of nodes that are visible when the tree is viewed from the right side. 
// For each level of the tree, the last node encountered in that level will be included in the right view.

// Examples
// Example 1
// Input: root = [1, 2, 3, 4, 5, 6, 7]
// Expected Output: [1, 3, 7]


// solution:
// Use BFS level by level.
// For each level, the last node processed is the one visible from the right side.

function rightView(root) {
    if (root === null) {
      return [];
    }
  
    const queue = [root];
    const result = [];
  
    while (queue.length > 0) {
      const levelSize = queue.length;
  
      for (let i = 0; i < levelSize; i++) {
        const currentNode = queue.shift();
  
        // Last node of this level
        if (i === levelSize - 1) {
          result.push(currentNode.val);
        }
  
        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }
  
        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }
    }
  
    return result;
}

// For this tree:

//         1
//       /   \
//      2     3
//     / \   / \
//    4   5 6   7

// Process each level:

// Level 1: [1]          → last node = 1
// Level 2: [2, 3]       → last node = 3
// Level 3: [4, 5, 6, 7] → last node = 7

// Result:

// [1, 3, 7]

// The important condition is:

// if (i === levelSize - 1)

// Since i starts at 0, the last index of a level with levelSize nodes is:

// levelSize - 1

// For example, if a level has four nodes:

// i = 0, 1, 2, 3

// The last node is at:

// 4 - 1 = 3


