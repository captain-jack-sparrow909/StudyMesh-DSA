// Given a directed acyclic graph with n nodes labeled from 0 to n-1, determine the smallest number of initial nodes such that you can access 
// all the nodes by traversing edges. Return these nodes.

// Examples
// Example 1:
// Input:
// n = 6
// edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]
// Expected Output: [0,3]


// solution:

function findSmallestSetOfVertices(n, edges) {
    const hasIncomingEdge = new Array(n).fill(false);
  
    for (const [from, to] of edges) {
      hasIncomingEdge[to] = true;
    }
  
    const result = [];
  
    for (let node = 0; node < n; node++) {
      if (hasIncomingEdge[node] === false) {
        result.push(node);
      }
    }
  
    return result;
}



// For your example:

// n = 6;

// edges = [
//   [0, 1],
//   [0, 2],
//   [2, 5],
//   [3, 4],
//   [4, 2]
// ];

// Remember, [0, 1] means:

// 0 → 1

// So the graph is:

// 0 → 1
//  \
//   → 2 → 5
//     ↑
//     |
// 3 → 4

// More clearly:

// 0 ───→ 1
// │
// └────→ 2 ───→ 5
//        ↑
//        │
// 3 ───→ 4

// Now check which nodes have something pointing into them.

// For:

// 0 → 1

// node 1 has an incoming edge:

// hasIncomingEdge[1] = true

// For:

// 0 → 2

// node 2 has an incoming edge:

// hasIncomingEdge[2] = true

// For:

// 2 → 5

// node 5 has an incoming edge.

// For:

// 3 → 4

// node 4 has an incoming edge.

// And:

// 4 → 2

// node 2 already has an incoming edge.

// So we get:

// hasIncomingEdge = [
//   false, // 0
//   true,  // 1
//   true,  // 2
//   false, // 3
//   true,  // 4
//   true   // 5
// ];

// Only 0 and 3 are false.

// Therefore:

// [0, 3]
// Why must we start from 0?

// Nobody points to 0.

// There is no:

// ? → 0

// So there is no way to reach 0 unless we choose 0 as a starting node.

// From 0, we can reach:

// 0 → 1
// 0 → 2 → 5

// So starting from 0 covers:

// 0, 1, 2, 5
// Why must we also start from 3?

// Nobody points to 3 either.

// So we must start there.

// From 3:

// 3 → 4 → 2 → 5

// Starting from 3 covers:

// 3, 4, 2, 5

// Together:

// start at 0 → reaches 0, 1, 2, 5
// start at 3 → reaches 3, 4, 2, 5

// All nodes are covered.

// So:

// [0, 3]

// The key line is:

// for (const [from, to] of edges) {
//   hasIncomingEdge[to] = true;
// }

// Notice that we don't actually use from.

// If we have:

// [4, 2]

// we only care that:

// something → 2

// So node 2 can be reached from somewhere else.

// We don't need to start from it.

// The simple rule to remember is:

// Incoming edge exists
//         ↓
// Can potentially be reached from another node
//         ↓
// Don't need to start there


// No incoming edge
//         ↓
// Nobody can reach it
//         ↓
// Must be a starting node
