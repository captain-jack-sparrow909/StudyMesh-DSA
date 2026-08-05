// Tree Diameter: Given a binary tree, find the length of its diameter. The diameter of a tree is the number of nodes on 
// the longest path between any two leaf nodes. The diameter of a tree may or may not pass through the root.

// Note: You can always assume that there are at least two leaf nodes in the given tree.


// solution:
// Use DFS.
// For every node:
// Find the height of its left subtree.
// Find the height of its right subtree.
// The longest leaf-to-leaf path passing through that node is:
// left height + right height + 1

// The +1 counts the current node.


function treeDiameter(root) {
    let diameter = 0;
  
    function height(node) {
      if (node === null) {
        return 0;
      }
  
      const leftHeight = height(node.left);
      const rightHeight = height(node.right);
  
      // Longest path passing through this node
      const pathLength = leftHeight + rightHeight + 1;
  
      diameter = Math.max(diameter, pathLength);
  
      // Return the longest downward path to the parent
      return Math.max(leftHeight, rightHeight) + 1;
    }
  
    height(root);
  
    return diameter;
}


// Let’s first understand what diameter means.

// For this tree:

//         1
//       /   \
//      2     3
//     / \
//    4   5
//       / \
//      6   7

// A longest path between two leaf nodes is:

// 6 → 5 → 2 → 1 → 3

// Count the nodes:

// 6, 5, 2, 1, 3

// So the diameter is:

// 5

// The path does not have to pass through the root. We must check the longest path through every node.


// What does height mean?

// Height means:

// How many nodes are in the longest downward path from this node?

// For a leaf node such as 6:

// 6

// Its height is 1.

// For node 5:

//     5
//    / \
//   6   7

// The longest downward path is:

// 5 → 6

// or:

// 5 → 7

// So its height is 2.

// That is calculated by:

// return Math.max(leftHeight, rightHeight) + 1;

// The +1 counts the current node.

// Why add left height and right height?

// At node 5:

//     5
//    / \
//   6   7

// We have:

// leftHeight = 1
// rightHeight = 1

// The path through node 5 is:

// 6 → 5 → 7

// Its length is:

// left side + current node + right side
// 1 + 1 + 1 = 3

// That is why:

// const pathLength = leftHeight + rightHeight + 1;
// Step by step
// Leaf node 6
// leftHeight = 0
// rightHeight = 0

// Path through 6:

// 0 + 0 + 1 = 1

// Height returned:

// max(0, 0) + 1 = 1

// The same happens for node 7.

// Node 5
// leftHeight = 1
// rightHeight = 1

// Path through 5:

// 1 + 1 + 1 = 3
// 6 → 5 → 7

// Height returned to node 2:

// max(1, 1) + 1 = 2
// Node 2

// Its left child 4 has height 1.

// Its right child 5 has height 2.

// leftHeight = 1
// rightHeight = 2

// Path through 2:

// 1 + 2 + 1 = 4

// For example:

// 4 → 2 → 5 → 6

// Height returned to node 1:

// max(1, 2) + 1 = 3
// Node 1

// The left subtree has height 3.

// The right child 3 has height 1.

// leftHeight = 3
// rightHeight = 1

// Path through 1:

// 3 + 1 + 1 = 5

// That path is:

// 6 → 5 → 2 → 1 → 3

// So:

// diameter = 5;
// The main distinction

// This line calculates a path passing through the current node:

// leftHeight + rightHeight + 1

// This line returns only one downward side to the parent:

// Math.max(leftHeight, rightHeight) + 1

// A node’s parent cannot use both branches from that node. It can continue downward through only the longer branch.

// why we've these 2 
//     const pathLength = leftHeight + rightHeight + 1;
// and
//     return Math.max(leftHeight, rightHeight) + 1;

// and why are we calculating heights when we're talking about diameter ?

// Because these two lines answer two different questions.

// const pathLength = leftHeight + rightHeight + 1;

// asks:

// What is the diameter passing through this node?

// While:

// return Math.max(leftHeight, rightHeight) + 1;

// asks:

// What height should I give to my parent?

// Consider:

//         1
//        / \
//       2   3
//      / \
//     4   5
//        / \
//       6   7

// At node 2:

//       2
//      / \
//     4   5
//        / \
//       6   7

// The left subtree height is 1:

// 2 → 4

// The right subtree height is 2:

// 2 → 5 → 6
// 1. Calculating the path through node 2

// To create a path between two leaves through node 2, we use:

// The left branch
// Node 2
// The right branch
// 4 → 2 → 5 → 6

// Therefore:

// const pathLength = leftHeight + rightHeight + 1;
// 1 + 2 + 1 = 4

// The last +1 counts node 2.

// This is a possible diameter.

// 2. Returning height to the parent

// Now node 2 needs to return information to its parent, node 1.

// Node 1 wants to build one continuous path through node 2.

// Node 2 cannot give both branches to node 1.

// It must give either:

// 2 → 4

// or:

// 2 → 5 → 6

// It cannot give this:

// 4 → 2 → 5 → 6

// because that path already uses two directions from node 2. It cannot then continue upward to node 1 without branching.

// So node 2 returns only its longer downward branch:

// return Math.max(leftHeight, rightHeight) + 1;
// max(1, 2) + 1 = 3

// The returned height represents:

// 2 → 5 → 6
// Why calculate heights when the problem asks for diameter?

// Because the diameter through a node depends on how deep its left and right sides are.

// For example:

// left deepest leaf
//        ↑
//        |
//        2
//        |
//        ↓
// right deepest leaf

// To calculate the longest path through node 2, we need:

// distance down the left side
// +
// node 2
// +
// distance down the right side

// Those downward distances are exactly the subtree heights.

// So:

// height helps us calculate diameter

// At each node:

// const leftHeight = height(node.left);
// const rightHeight = height(node.right);

// Then:

// const pathLength = leftHeight + rightHeight + 1;

// checks the diameter through that node.

// And:

// return Math.max(leftHeight, rightHeight) + 1;

// sends the height upward so the parent can calculate its own possible diameter.

// Think of it like this

// Each node does two jobs:

// Job 1: Check whether I am the center of the longest path.
// Job 2: Tell my parent how far downward it can go through me.

// In code:

// function height(node) {
//   if (node === null) {
//     return 0;
//   }

//   const leftHeight = height(node.left);
//   const rightHeight = height(node.right);

//   // Job 1: Possible diameter through this node
//   const pathLength = leftHeight + rightHeight + 1;
//   diameter = Math.max(diameter, pathLength);

//   // Job 2: Height available to the parent
//   return Math.max(leftHeight, rightHeight) + 1;
// }

// The main distinction is:

// Diameter can use both left and right sides.
// Height can use only one side.