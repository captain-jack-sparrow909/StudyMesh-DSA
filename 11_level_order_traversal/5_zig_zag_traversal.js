// Zigzag Traversal: Given a binary tree, populate an array to represent its zigzag level order traversal. 
// You should populate the values of all nodes of the first level from left to right, then right to left for the 
// next level and keep alternating in the same manner for the following levels.


// solution:
// Use Breadth-First Search (BFS) level by level, with a boolean that tells us the direction:

// Level 1: left to right
// Level 2: right to left
// Level 3: left to right
// Continue alternating

function zigzagTraversal(root) {
    if (root === null) {
      return [];
    }
  
    const queue = [root];
    const result = [];
  
    let leftToRight = true;
  
    while (queue.length > 0) {
      const levelSize = queue.length;
      const currentLevel = [];
  
      for (let i = 0; i < levelSize; i++) {
        const currentNode = queue.shift();
  
        if (leftToRight) {
          currentLevel.push(currentNode.val);
        } else {
          currentLevel.unshift(currentNode.val);
        }
  
        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }
  
        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }
  
      result.push(currentLevel);
  
      // Reverse the direction for the next level
      leftToRight = !leftToRight;
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

// The result is:

// [
//   [1],
//   [3, 2],
//   [4, 5, 6, 7]
// ]
// Step by step

// Initially:

// queue = [1]
// leftToRight = true
// result = []
// Level 1

// Node:

// 1

// Because leftToRight is true:

// currentLevel.push(1);
// currentLevel = [1]

// Add children 2 and 3 to the queue:

// queue = [2, 3]

// Result:

// [[1]]

// Change direction:

// leftToRight = false;
// Level 2

// Nodes are processed by the queue in normal order:

// 2, 3

// But since leftToRight is false, values are added to the front.

// Process 2:

// currentLevel.unshift(2);
// currentLevel = [2]

// Process 3:

// currentLevel.unshift(3);
// currentLevel = [3, 2]

// Result:

// [
//   [1],
//   [3, 2]
// ]

// Change direction again:

// leftToRight = true;
// Level 3

// Nodes:

// 4, 5, 6, 7

// Since the direction is left to right, use push():

// currentLevel = [4, 5, 6, 7]

// Final result:

// [
//   [1],
//   [3, 2],
//   [4, 5, 6, 7]
// ]
// Why do we still add children left then right?
// queue.push(currentNode.left);
// queue.push(currentNode.right);

// The queue always performs normal BFS from left to right.

// We change only how values are inserted into currentLevel:

// push()    // add at the end
// unshift() // add at the beginning

// So the tree traversal remains simple while the output direction alternates.

// Why toggle this?
// leftToRight = !leftToRight;

// It changes:

// true  → false
// false → true

// Therefore, every new level uses the opposite direction.
