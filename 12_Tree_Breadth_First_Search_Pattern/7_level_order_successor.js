// Level Order Successor: Given a root of the binary tree and an integer key, find the level order successor of the node containing the given key as a value in the tree.

// The level order successor is the node that appears right after the given node in the level order traversal.

// Examples
// Example 1
// Input: root = [1, 2, 3, 4, 5], key = 3
// Output: 4


// solution:
// Use BFS level-order traversal with a queue.
// As soon as we remove the node containing key, the next node currently at the front of the queue is its level-order successor.


function findLevelOrderSuccessor(root, key) {
    if (root === null) {
      return null;
    }
  
    const queue = [root];
  
    while (queue.length > 0) {
      const currentNode = queue.shift();
  
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
  
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
  
      if (currentNode.val === key) {
        return queue.length > 0 ? queue[0] : null;
      }
    }
  
    return null;
}


// Example

// Input:

// root = [1, 2, 3, 4, 5];
// key = 3;

// The tree is:

//         1
//       /   \
//      2     3
//     / \
//    4   5

// Its level-order traversal is:

// 1, 2, 3, 4, 5

// The node immediately after 3 is 4.

// const successor = findLevelOrderSuccessor(root, 3);

// console.log(successor?.val);
// // 4
// Step by step

// Initially:

// queue = [1]

// Process 1, then add its children:

// queue = [2, 3]

// Process 2, then add its children:

// queue = [3, 4, 5]

// Process 3.

// After removing 3, the queue contains:

// queue = [4, 5]

// The first node in the queue is 4, so:

// return queue[0];
// Why add the children before checking the key?

// Consider:

//     1
//    / \
//   2   3
//  /
// 4

// Level order is:

// 1, 2, 3, 4

// For key 2, the successor should be 3.

// Processing 2 adds 4 to the back:

// Before processing 2: [2, 3]
// After removing 2 and adding 4: [3, 4]

// The front is still 3, which is correct.

// For key 3, after adding its children, the next queued node would correctly be the first node of the next level.

// When is the result null?

// If the key is the final node in level-order traversal, it has no successor.

// 1, 2, 3, 4, 5
//             ↑

// For key = 5, return:

// null
