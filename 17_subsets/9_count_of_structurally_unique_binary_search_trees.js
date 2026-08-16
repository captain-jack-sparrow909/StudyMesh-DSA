// Count of Structurally Unique Binary Search Trees: Given a number ‘n’, write a function to return the count of
//  structurally unique Binary Search Trees (BST) that can store values 1 to ‘n’.

// Example 1:

// Input: 2
// Output: 2



// solution:
// This is much easier than the previous problem because we don't need to actually create the trees.

// We only need to count how many trees are possible.

// The main idea

// For every number, we can make that number the root.

// For each root:

// left side  = numbers smaller than root
// right side = numbers bigger than root

// The number of trees for that root is:

// (number of possible left trees)
// ×
// (number of possible right trees)

// Then add the results for every possible root.

// Let's do n = 2

// Numbers:

// 1, 2
// Root = 1
//   1
//    \
//     2

// Left side has 0 numbers:

// 0 numbers → 1 possible tree

// Right side has 1 number:

// 1 number → 1 possible tree

// Therefore:

// 1 × 1 = 1
// Root = 2
//     2
//    /
//   1

// Left side has 1 number:

// 1 number → 1 possible tree

// Right side has 0 numbers:

// 0 numbers → 1 possible tree

// Therefore:

// 1 × 1 = 1
// Add them
// 1 + 1 = 2

// So:

// n = 2
// answer = 2
// Why do we multiply?

// This is the most important part.

// Suppose a particular root has:

// 2 possible left trees
// 3 possible right trees

// For each left tree, we can combine it with each right tree:

// L1 + R1
// L1 + R2
// L1 + R3

// L2 + R1
// L2 + R2
// L2 + R3

// That's:

// 2 × 3 = 6

// possible trees.

// That's why we multiply.


function countTrees(n) {
    const dp = new Array(n + 1).fill(0);
  
    dp[0] = 1;
    dp[1] = 1;
  
    for (let nodes = 2; nodes <= n; nodes++) {
  
      for (let root = 1; root <= nodes; root++) {
  
        const left = root - 1;
        const right = nodes - root;
  
        dp[nodes] += dp[left] * dp[right];
      }
    }
  
    return dp[n];
}



// The only thing you need to understand

// We have numbers:

// 1 2 3

// We want to make a BST.

// Any number can become the root.

// So we try:

// root = 1
// root = 2
// root = 3

// That's it.

// For n = 2

// Numbers:

// 1 2
// Try 1 as root
// 1
//  \
//   2

// There is 1 tree.

// Try 2 as root
//   2
//  /
// 1

// There is 1 tree.

// So:

// 1 + 1 = 2

// Answer:

// 2


// The confusing part is probably dp.

// Think of dp as a notebook.

// We write down:

// How many different BSTs can I make with 0 nodes?
// How many with 1 node?
// How many with 2 nodes?
// How many with 3 nodes?
// ...

// So:

// dp[0] = 1;
// dp[1] = 1;

// means:

// 0 nodes → 1 way
// 1 node  → 1 way

// Why is 0 nodes = 1?

// Because an empty left/right side is one possibility:

// nothing
// Let's calculate dp[2]

// We want to know:

// dp[2] = ?

// There are 2 numbers:

// 1 2

// We try each as root.

// Root = 1
// 1
//  \
//   2

// How many nodes are on the left?

// 0

// How many on the right?

// 1

// So:

// dp[0] × dp[1]

// = 1 × 1

// = 1

// So we have found 1 tree.

// Root = 2
//   2
//  /
// 1

// Left:

// 1 node

// Right:

// 0 nodes

// Therefore:

// dp[1] × dp[0]

// = 1 × 1

// = 1

// So another 1 tree.

// Now add:

// 1 + 1 = 2

// Therefore:

// dp[2] = 2
// Why left = root - 1?

// Suppose:

// 1 2 3 4 5

// and we choose 3 as root:

// 1 2 | 3 | 4 5

// There are:

// 2 numbers on the left
// 2 numbers on the right

// So:

// left = 3 - 1;  // 2
// right = 5 - 3; // 2

// That's all those formulas mean.

// Now n = 3

// Numbers:

// 1 2 3

// We try every root.

// Root = 1
// 1
//  \
//   2
//    \
//     3

// Left:

// 0 nodes → dp[0] = 1

// Right:

// 2 nodes → dp[2] = 2

// Therefore:

// 1 × 2 = 2
// Root = 2
//    2
//   / \
//  1   3

// Left:

// 1 node → dp[1] = 1

// Right:

// 1 node → dp[1] = 1

// Therefore:

// 1 × 1 = 1
// Root = 3
//     3
//    /
//   2
//  /
// 1

// Left:

// 2 nodes → dp[2] = 2

// Right:

// 0 nodes → dp[0] = 1

// Therefore:

// 2 × 1 = 2

// Finally:

// 2 + 1 + 2 = 5

// So:

// n = 3 → 5 trees
// So remember this picture

// For every possible root:

//              choose root
//                  |
//         +--------+--------+
//         |                 |
//       LEFT              RIGHT
//         |                 |
//    count trees        count trees
//         |                 |
//         +------- × -------+
//                  |
//               add it

// That's exactly what this line does:

// dp[nodes] += dp[left] * dp[right];

// Read it in English:

// Add the number of left possibilities × the number of right possibilities.

// And we do that for every possible root.

// The 3 things to remember
// 1. Try every number as the root.

// 2. Count possible left trees × possible right trees.

// 3. Add the result for every possible root.

// For example:

// n = 2 → 2
// n = 3 → 5
// n = 4 → 14

// You don't need to worry about the Catalan-number formula yet. The root → left × right → add pattern is the important part.





// why is array n+1 and not n ?

// Because dp uses the number of nodes as the index.

// We need to store answers for:

// dp[0]
// dp[1]
// dp[2]
// ...
// dp[n]

// That is n + 1 values because we include 0.

// Example: n = 3

// We need:

// dp[0] → trees with 0 nodes
// dp[1] → trees with 1 node
// dp[2] → trees with 2 nodes
// dp[3] → trees with 3 nodes

// That's 4 values.

// So:

// new Array(n + 1)

// becomes:

// new Array(4)

// which gives indexes:

// index:  0   1   2   3
//         ↑   ↑   ↑   ↑
//        dp0 dp1 dp2 dp3

// If we used:

// new Array(n)

// for n = 3:

// index:  0   1   2

// There would be no dp[3].

// But we need:

// return dp[n];

// which is:

// return dp[3];

// So the array must have an index 3.

// And there's another important reason

// We have:

// dp[0] = 1;

// We need this because when a root has no nodes on one side, that empty side counts as one possible arrangement.

// So we need indexes starting from 0 all the way to n.

// Therefore:

// 0, 1, 2, ..., n

// contains n + 1 positions.

// Simple rule:

// If you want an array where the indexes go from 0 to n, you need n + 1 slots.
