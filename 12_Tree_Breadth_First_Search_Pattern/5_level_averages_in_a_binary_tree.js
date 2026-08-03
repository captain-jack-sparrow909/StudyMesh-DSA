// Level Averages in a Binary Tree: Given a binary tree, populate an array to represent the averages of all of its levels.


// solution:
// Use BFS level by level.

// For each level:

// Count how many nodes are in that level.
// Add their values.
// Divide the sum by the number of nodes.


function levelAverages(root) {
    if (root === null) {
      return [];
    }
  
    const queue = [root];
    const averages = [];
  
    while (queue.length > 0) {
      const levelSize = queue.length;
      let levelSum = 0;
  
      for (let i = 0; i < levelSize; i++) {
        const currentNode = queue.shift();
  
        levelSum += currentNode.val;
  
        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }
  
        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }
  
      averages.push(levelSum / levelSize);
    }
  
    return averages;
}


// Example

// For this tree:

//         1
//       /   \
//      2     3
//     / \     \
//    4   5     6

// The levels are:

// Level 0: [1]
// Level 1: [2, 3]
// Level 2: [4, 5, 6]

// Calculate each average:

// Level 0: 1 / 1 = 1

// Level 1:
// (2 + 3) / 2 = 2.5

// Level 2:
// (4 + 5 + 6) / 3 = 5

// Result:

// [1, 2.5, 5]
// Why use levelSize?
// const levelSize = queue.length;

// At the start of each loop, queue contains all nodes of the current level.

// While processing them, their children are added to the queue, but those children belong to the next level.

// So levelSize tells us exactly how many nodes to include in the current sum.

// Step by step

// Initially:

// queue = [1]
// averages = []
// Level 0
// levelSize = 1
// levelSum = 1

// Add children:

// queue = [2, 3]

// Average:

// 1 / 1 = 1
// Level 1
// levelSize = 2
// levelSum = 2 + 3 = 5

// Add children:

// queue = [4, 5, 6]

// Average:

// 5 / 2 = 2.5
// Level 2
// levelSize = 3
// levelSum = 4 + 5 + 6 = 15

// Average:

// 15 / 3 = 5

// Final answer:

// [1, 2.5, 5]

