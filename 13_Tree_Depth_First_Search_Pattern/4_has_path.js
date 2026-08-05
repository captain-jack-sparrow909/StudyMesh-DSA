// Path With Given Sequence: Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.

// solution:
// Use DFS and compare each node with the current value in the sequence.
// The sequence must:
// Start at the root.
// Match nodes in order.
// End exactly at a leaf node.

function hasPath(root, sequence) {
    function dfs(node, sequenceIndex) {
      if (node === null) {
        return false;
      }
  
      // Current node must match the current sequence value
      if (node.val !== sequence[sequenceIndex]) {
        return false;
      }
  
      // Valid only if both the tree path and sequence end here
      if (
        node.left === null &&
        node.right === null &&
        sequenceIndex === sequence.length - 1
      ) {
        return true;
      }
  
      // Sequence ended, but the current node is not a leaf
      if (sequenceIndex === sequence.length - 1) {
        return false;
      }
  
      return (
        dfs(node.left, sequenceIndex + 1) ||
        dfs(node.right, sequenceIndex + 1)
      );
    }
  
    if (root === null || sequence.length === 0) {
      return false;
    }
  
    return dfs(root, 0);
}



// Example

// Consider this tree:

//           1
//         /   \
//        7     9
//       / \   / \
//      4   5 2   7

// Sequence:

// [1, 9, 2]

// The matching path is:

// 1 → 9 → 2

// It starts at the root and ends at leaf 2, so the function returns:

// true
// Step by step

// Start at root 1:

// node.val = 1
// sequence[0] = 1

// They match, so search for the next value using:

// sequenceIndex + 1

// Now check the left child 7:

// node.val = 7
// sequence[1] = 9

// They do not match, so the left path returns false.

// Check the right child 9:

// node.val = 9
// sequence[1] = 9

// They match.

// Next, check node 2:

// node.val = 2
// sequence[2] = 2

// They match, and:

// node 2 is a leaf
// sequenceIndex = 2
// sequence.length - 1 = 2

// Both the path and sequence finish together, so return true.

// Why must it end at a leaf?

// Suppose the sequence is:

// [1, 9]

// It matches this partial path:

// 1 → 9

// But node 9 has children, so it is not a root-to-leaf path.

// Therefore, the answer is false.

// That is why we check both:

// node.left === null &&
// node.right === null &&
// sequenceIndex === sequence.length - 1
// Why use ||?
// dfs(node.left, sequenceIndex + 1) ||
// dfs(node.right, sequenceIndex + 1)

// The sequence may exist in either the left path or the right path. We only need one complete matching path.
