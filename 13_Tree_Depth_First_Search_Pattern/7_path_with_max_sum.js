// Path with Maximum Sum: Find the path with the maximum sum in a given binary tree. Write a function that returns the maximum sum.
// A path can be defined as a sequence of nodes between any two nodes and doesn’t necessarily pass through the root. The path must contain at least one node.

// solution:
// This problem is very similar to Tree Diameter, but instead of counting nodes, we add node values.
// At every node, we do two jobs:
// Calculate the maximum path sum passing through the current node.
// Return the maximum one-sided path sum to the parent.

function maximumPathSum(root) {
    let maximumSum = -Infinity;
  
    function findMaximumGain(node) {
      if (node === null) {
        return 0;
      }
  
      const leftGain = Math.max(0, findMaximumGain(node.left));
      const rightGain = Math.max(0, findMaximumGain(node.right));
  
      // Maximum path that uses both sides and passes through this node
      const currentPathSum =
        leftGain + node.val + rightGain;
  
      maximumSum = Math.max(maximumSum, currentPathSum);
  
      // Return only one side to the parent
      return node.val + Math.max(leftGain, rightGain);
    }
  
    findMaximumGain(root);
  
    return maximumSum;
}





// Example

// Consider:

//         1
//        / \
//       2   3

// At node 2:

// leftGain = 0
// rightGain = 0

// currentPathSum = 0 + 2 + 0 = 2
// return 2

// At node 3:

// currentPathSum = 3
// return 3

// At node 1:

// leftGain = 2
// rightGain = 3

// The path passing through 1 is:

// 2 → 1 → 3

// Its sum is:

// 2 + 1 + 3 = 6

// So the answer is:

// 6
// Why do we have two calculations?
// Possible maximum path through the current node
// const currentPathSum =
//   leftGain + node.val + rightGain;

// A complete path can use both sides:

// left branch → current node → right branch

// For example:

// 2 → 1 → 3

// So we add:

// left + current node + right
// Value returned to the parent
// return node.val + Math.max(leftGain, rightGain);

// The parent can continue through only one branch.

// It can use:

// parent → current node → left

// or:

// parent → current node → right

// It cannot use both left and right, because that would create a fork rather than one continuous path.

// Therefore, we return only the better side.

// Why use Math.max(0, ...)?
// const leftGain = Math.max(0, findMaximumGain(node.left));

// A negative branch would make the path sum smaller, so we ignore it.

// Consider:

//       10
//      /  \
//    -20   5

// At node 10, including -20 would give:

// -20 + 10 + 5 = -5

// Ignoring -20 gives:

// 10 + 5 = 15

// So this:

// Math.max(0, negativeValue)

// turns an unhelpful negative branch into 0.

// What if all nodes are negative?

// Consider:

//     -3
//    /  \
//  -4   -2

// The maximum path is the single node:

// -2

// That is why we initialize:

// let maximumSum = -Infinity;

// Not 0, because the correct answer may be negative.

// Main idea
// Complete candidate path:
// left + node + right

// Path returned to parent:
// node + better of left or right
// Complexity
// Time: O(n) because each node is visited once.
// Space: O(h) for recursion, where h is the tree height.

// const leftGain = Math.max(0, findMaximumGain(node.left)); const rightGain = Math.max(0, findMaximumGain(node.right));

// why are we doing Math.max

// We use:

// const leftGain = Math.max(0, findMaximumGain(node.left));
// const rightGain = Math.max(0, findMaximumGain(node.right));

// because a negative branch would reduce the total path sum.

// Math.max(0, branchSum) means:

// Use the branch only when it helps. Otherwise, ignore it by using 0.

// Example
//        10
//       /  \
//     -20   5

// The recursive calls return:

// left branch  = -20
// right branch = 5

// Without Math.max(0, ...):

// currentPathSum = -20 + 10 + 5;
// currentPathSum = -5

// But including -20 makes the path worse. The better path is:

// 10 → 5

// Its sum is:

// 10 + 5 = 15

// So we convert the negative left side to 0:

// leftGain = Math.max(0, -20); // 0
// rightGain = Math.max(0, 5);  // 5

// Now:

// currentPathSum = 0 + 10 + 5;
// currentPathSum = 15
// Why does 0 mean ignore the branch?

// The calculation is:

// leftGain + node.val + rightGain

// When leftGain is 0, it means:

// Take nothing from the left side.

// So:

// 0 + 10 + 5

// represents:

// 10 → 5
// Another example
//        10
//       /  \
//      4   -3

// The right branch is negative, so:

// leftGain = Math.max(0, 4);   // 4
// rightGain = Math.max(0, -3); // 0

// The best path through 10 is:

// 4 → 10

// Sum:

// 4 + 10 = 14

// We do not include -3, because:

// 4 + 10 - 3 = 11

// is smaller than 14.

// What if both branches are negative?
//        5
//       / \
//     -2  -4

// Then:

// leftGain = Math.max(0, -2);  // 0
// rightGain = Math.max(0, -4); // 0

// So:

// currentPathSum = 0 + 5 + 0;

// The best path is simply:

// 5

// A path is allowed to contain only one node.

// Important distinction

// The inner Math.max:

// Math.max(0, findMaximumGain(node.left))

// chooses between:

// Use this branch
// or
// ignore this branch

// The other Math.max:

// return node.val + Math.max(leftGain, rightGain);

// chooses between:

// Return the left branch
// or
// return the right branch

// So, in one sentence:

// Math.max(0, branchSum) removes negative branches because adding them would only decrease the maximum path sum.
