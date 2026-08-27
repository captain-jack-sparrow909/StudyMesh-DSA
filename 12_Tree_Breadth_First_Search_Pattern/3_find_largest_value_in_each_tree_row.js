// Find Largest Value in Each Tree Row: Given the root of a binary tree, return an array containing the largest value in each row of the tree (0-indexed).

// Examples
// Example 1
// Input: root = [1, 2, 3, 4, 5, null, 6]
// Expected Output: [1, 3, 6]

// solution:
// Use BFS level by level. For each row, keep track of the largest value seen.

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


// For:

//         1
//       /   \
//      2     3
//     / \     \
//    4   5     6

// Process each row:

// Row 0: [1]       → largest = 1
// Row 1: [2, 3]    → largest = 3
// Row 2: [4, 5, 6] → largest = 6

// Result:

// [1, 3, 6]

// levelSize is important because it ensures 
// we process exactly one row at a time.
