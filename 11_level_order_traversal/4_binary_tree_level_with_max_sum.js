// Maximum Level Sum of a Binary Tree: You are given the root of a binary tree. The level of its root node is 1, the level of its children is 2, and so on.

// Return the level x where the sum of the values of all nodes is the highest. If there are multiple levels with the same maximum sum, return the smallest level number x.

// Examples
// Example 1:

// Input: root = [1, 20, 3, 4, 5, null, 8]
// Expected Output: 2


// solution:
// Use Breadth-First Search (BFS) to process the tree one level at a time.
// For each level:

// Add all node values in that level.
// Compare the sum with the largest sum found so far.
// Store the level number when a larger sum is found.


function maxLevelSum(root) {
    if (root === null) {
      return 0;
    }
  
    const queue = [root];
  
    let currentLevel = 1;
    let bestLevel = 1;
    let maximumSum = -Infinity;
  
    while (queue.length > 0) {
      const levelSize = queue.length;
      let currentSum = 0;
  
      for (let i = 0; i < levelSize; i++) {
        const currentNode = queue.shift();
  
        currentSum += currentNode.val;
  
        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }
  
        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }
  
      if (currentSum > maximumSum) {
        maximumSum = currentSum;
        bestLevel = currentLevel;
      }
  
      currentLevel++;
    }
  
    return bestLevel;
}


// Example tree

// The input:

// [1, 20, 3, 4, 5, null, 8]

// represents:

//         1
//       /   \
//     20     3
//    /  \     \
//   4    5     8
// Step by step
// Level 1

// Nodes:

// [1]

// Sum:

// 1

// Update:

// maximumSum = 1
// bestLevel = 1
// Level 2

// Nodes:

// [20, 3]

// Sum:

// 20 + 3 = 23

// Since 23 > 1, update:

// maximumSum = 23
// bestLevel = 2
// Level 3

// Nodes:

// [4, 5, 8]

// Sum:

// 4 + 5 + 8 = 17

// Since 17 is not greater than 23, we do not update anything.

// Therefore:

// return 2;
// Why use > instead of >=?
// if (currentSum > maximumSum)

// The problem says that when multiple levels have the same maximum sum, return the smallest level number.

// Suppose:

// Level 1 sum = 10
// Level 2 sum = 10

// When level 2 is processed:

// 10 > 10 → false

// So bestLevel remains level 1.

// Using >= would replace level 1 with level 2, which would be wrong.

// Why save levelSize?
// const levelSize = queue.length;

// It tells us how many nodes belong to the current level.

// While processing those nodes, their children are added to the queue, but those children belong to the next level and should not be included in the current sum.