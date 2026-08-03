// Minimum Depth of a Binary Tree: Given a root of the binary tree, find the minimum depth of a binary tree.
// The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.


// solution:
// Use BFS level by level.
// The first leaf node we encounter is guaranteed to be the nearest leaf, so we immediately return its depth.
// A leaf node has no children:
// node.left === null && node.right === null

function minimumDepth(root) {
    if (root === null) {
      return 0;
    }
  
    const queue = [root];
    let depth = 1;
  
    while (queue.length > 0) {
      const levelSize = queue.length;
  
      for (let i = 0; i < levelSize; i++) {
        const currentNode = queue.shift();
  
        // The first leaf found is at the minimum depth
        if (
          currentNode.left === null &&
          currentNode.right === null
        ) {
          return depth;
        }
  
        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }
  
        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }
  
      depth++;
    }
  
    return depth;
}


// Example

// Consider this tree:

//         1
//       /   \
//      2     3
//     /
//    4
//   /
//  5

// There are two root-to-leaf paths:

// 1 → 3         depth = 2
// 1 → 2 → 4 → 5 depth = 4

// The shortest path is:

// 1 → 3

// So the minimum depth is:

// 2
// Step by step

// Initially:

// queue = [1]
// depth = 1
// Level 1

// Process node 1.

// It is not a leaf because it has children.

// Add its children:

// queue = [2, 3]

// Finish the level:

// depth = 2
// Level 2

// Process node 2.

// It is not a leaf because it has child 4.

// Then process node 3.

// Node 3 has no left or right child:

// currentNode.left === null
// currentNode.right === null

// So it is a leaf, and we return:

// return depth; // 2
// Why return immediately?

// BFS checks the tree from top to bottom:

// level 1 → level 2 → level 3 → ...

// Therefore, the first leaf it finds must be on the shallowest possible level. There is no need to inspect deeper levels.

// Important: a missing child does not make a node a leaf

// Consider:

//     1
//    /
//   2

// Node 1 is not a leaf just because its right child is missing. It still has a left child.

// A node is a leaf only when both children are missing:

// node.left === null && node.right === null
