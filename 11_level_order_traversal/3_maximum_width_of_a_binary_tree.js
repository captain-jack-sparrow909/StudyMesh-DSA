// Maximum Width of Binary Tree: Given the root of a binary tree, find the maximum width of the tree.

// The maximum width is the widest level in the tree.

// The width of a level is the number of nodes between the leftmost and rightmost non-null nodes, 
// where the null nodes between the end-nodes that would be present in a complete binary tree extending 
// down to that level are also counted into the length calculation.

// You can assume that the result will fit within a 32-bit signed integer.

// Examples
// Example 1
// Input: root = [1, 2, 3, 4, null, null, 5]
// Output: 4


// solution:
// Use BFS level by level, but store a position index for every node as if the tree were a complete binary tree.

// For a node at position i:

// left child position  = 2 * i
// right child position = 2 * i + 1

// Then the width of a level is:

// rightmost position - leftmost position + 1

function widthOfBinaryTree(root) {
    if (root === null) {
      return 0;
    }
  
    const queue = [[root, 0]];
    let maxWidth = 0;
  
    while (queue.length > 0) {
      const levelSize = queue.length;
  
      const firstPosition = queue[0][1];
      let lastPosition = firstPosition;
  
      for (let i = 0; i < levelSize; i++) {
        const [node, position] = queue.shift();
  
        lastPosition = position;
  
        if (node.left !== null) {
          queue.push([node.left, position * 2]);
        }
  
        if (node.right !== null) {
          queue.push([node.right, position * 2 + 1]);
        }
      }
  
      const width = lastPosition - firstPosition + 1;
      maxWidth = Math.max(maxWidth, width);
    }
  
    return maxWidth;
}


// Step by step

// Initially:

// queue = [[1, 0]]
// Level 1

// Process:

// node 1 at position 0

// Add children:

// 2 gets position 0
// 3 gets position 1

// Width:

// 0 - 0 + 1 = 1
// Level 2

// Queue:

// [[2, 0], [3, 1]]

// Process 2:

// 4 gets position 0

// Process 3:

// 5 gets position 3

// Width:

// 1 - 0 + 1 = 2
// Level 3

// Queue:

// [[4, 0], [5, 3]]

// First position:

// 0

// Last position:

// 3

// Width:

// 3 - 0 + 1 = 4

// So the maximum width is:

// 4

// The key idea is:

// Do not count only actual nodes.
// Count all possible positions between the leftmost and rightmost nodes.






// Tree:

//         1
//       /   \
//      2     3
//     /       \
//    4         5

// Look only at the last row.

// There are four possible places:

// [ 4 ] [ empty ] [ empty ] [ 5 ]

// The width counts everything from the first real node to the last real node, including empty places in between.

// Therefore:

// width = 4

// It is not 2, even though only 4 and 5 exist.

// Why give positions?

// Positions help us remember the empty spaces without actually putting null nodes into the queue.

// Give the last-row places numbers:

// Position:   0        1        2        3
//            [4]    [empty]  [empty]    [5]

// The first real node is at position 0.

// The last real node is at position 3.

// Count positions from 0 through 3:

// 0, 1, 2, 3

// That is four positions.

// The formula is:

// last position - first position + 1

// So:

// 3 - 0 + 1 = 4

// We add 1 because subtracting two indexes gives the distance, not the number of included positions.

// For example:

// Positions 0 through 3

// Their distance is:

// 3 - 0 = 3

// But the actual positions are:

// 0, 1, 2, 3

// There are 4, so we add 1.

// How does node 5 get position 3?

// Start with the root:

// 1 is at position 0

// For every node:

// left child  = parent position × 2
// right child = parent position × 2 + 1

// Node 3 is the right child of node 1:

// 3's position = 0 × 2 + 1 = 1

// Node 5 is the right child of node 3:

// 5's position = 1 × 2 + 1 = 3

// Node 4 is reached through left children:

// 2's position = 0 × 2 = 0
// 4's position = 0 × 2 = 0

// Therefore, the last row has:

// 4 at position 0
// 5 at position 3

// The missing positions 1 and 2 represent the empty spaces between them:

// 0        1        2        3
// 4      empty    empty      5

// So the width is 4.




