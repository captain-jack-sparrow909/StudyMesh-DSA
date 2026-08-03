// Maximum Width of Binary Tree: Given the root of a binary tree, find the maximum width of the tree.

// The maximum width is the widest level in the tree.

// The width of a level is the number of nodes between the leftmost and rightmost non-null nodes, 
// where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.

// You can assume that the result will fit within a 32-bit signed integer.

// Examples
// Example 1
// Input: root = [1, 2, 3, 4, null, null, 5]


// solution: 

// For this tree:

//         1
//       /   \
//      2     3
//     /       \
//    4         5

// The last level is treated like this:

// [4, null, null, 5]

// So its width is 4.

// We use BFS, but each node also gets a position number as if the tree were complete.


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
  
      const currentWidth =
        lastPosition - firstPosition + 1;
  
      maxWidth = Math.max(maxWidth, currentWidth);
    }
  
    return maxWidth;
}


// Position numbering

// Start with root at position 0:

//         1(0)
//       /      \
//    2(0)      3(1)
//    /            \
// 4(0)            5(3)

// The position rules are:

// leftPosition = parentPosition * 2;
// rightPosition = parentPosition * 2 + 1;

// For node 3 at position 1, its right child 5 gets:

// 1 * 2 + 1 = 3

// So the final level has:

// Position: 0      1      2      3
// Node:     4     null   null     5

// Width:

// 3 - 0 + 1 = 4

// Therefore the output is:

// 4
