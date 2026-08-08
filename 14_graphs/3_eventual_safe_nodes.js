// Find Eventual Safe States: You are given a directed graph with n nodes, labeled from 0 to n-1. This graph is described by a 2D integer array graph, 
// where graph[i] is an array of nodes adjacent to node i, indicating there is a directed edge from node i to each of the nodes in graph[i].
// A node is called a terminal node if it has no outgoing edges. A node is considered safe if every path starting from that node leads to 
// a terminal node (or another safe node).
// Return an array of all safe nodes in ascending order.



// solution:
// This one is easiest with DFS + states.
// A node is unsafe if, while exploring from it, we end up in a cycle.
// We can give each node 3 states:

// 0 = not visited
// 1 = currently visiting
// 2 = safe

// If during DFS we reach a node with state 1, we found a cycle.

function eventualSafeNodes(graph) {
    const n = graph.length;
    const state = new Array(n).fill(0);
    const result = [];
  
    function dfs(node) {
      // We came back to a node currently being explored → cycle
      if (state[node] === 1) {
        return false;
      }
  
      // Already confirmed safe
      if (state[node] === 2) {
        return true;
      }
  
      // Mark as currently visiting
      state[node] = 1;
  
      for (const neighbor of graph[node]) {
        if (!dfs(neighbor)) {
          return false;
        }
      }
  
      // All paths from this node are safe
      state[node] = 2;
      return true;
    }
  
    for (let node = 0; node < n; node++) {
      if (dfs(node)) {
        result.push(node);
      }
    }
  
    return result;
}

graph = [
    [1, 2], // 0
    [2, 3], // 1
    [5],    // 2
    [0],    // 3
    [5],    // 4
    [],     // 5
    []      // 6
  ];


//   The graph contains this cycle:

//   0 → 1 → 3
//   ↑       ↓
//   └───────┘
  
//   So 0, 1, and 3 are unsafe.
  
//   But:
  
//   2 → 5
//   4 → 5
//   5
//   6
  
//   all eventually stop at terminal nodes.
  
//   So the result is:
  
//   [2, 4, 5, 6]
  
//   The most important part is understanding state.
  
//   Suppose DFS starts from node 0.
  
//   We do:
  
//   state[0] = 1
  
//   Meaning:
  
//   "I am currently exploring node 0."
  
//   Then maybe:
  
//   0 → 1
  
//   So:
  
//   state[1] = 1
  
//   Then:
  
//   1 → 3
  
//   So:
  
//   state[3] = 1
  
//   Then node 3 points back to 0.
  
//   But:
  
//   state[0] === 1
  
//   That means node 0 is already somewhere in our current path:
  
//   0 → 1 → 3 → 0
  
//   So we found a cycle.
  
//   Return:
  
//   false
  
//   Now consider:
  
//   2 → 5
  
//   Node 5 has no neighbors:
  
//   graph[5] = [];
  
//   So its loop does nothing:
  
//   for (const neighbor of graph[node]) {
//     ...
//   }
  
//   Then we reach:
  
//   state[node] = 2;
//   return true;
  
//   So node 5 is safe.
  
//   Then node 2 sees that its only path leads to safe node 5, so node 2 is also safe.
  
//   The key rule is:
  
//   A node is safe only if every neighbor is safe.
  
//   That's why we do:
  
//   for (const neighbor of graph[node]) {
//     if (!dfs(neighbor)) {
//       return false;
//     }
//   }
  
//   If even one neighbor leads to a cycle, the current node is unsafe.
  
//   For example:
  
//       0
//      / \
//     1   2
//         ↓
//        cycle
  
//   Even if 1 is safe, node 0 is unsafe because one possible path through 2 reaches a cycle.
  
//   One subtle point: in this simple version, nodes that lead to cycles stay as state 1, which effectively makes future DFS calls return false immediately. That works here.



// Remember:

// graph[i]

// means:

// Which nodes can node i go to?

// So:

// graph[0] = [1, 2]  →  0 → 1 and 0 → 2
// graph[1] = [2, 3]  →  1 → 2 and 1 → 3
// graph[2] = [5]     →  2 → 5
// graph[3] = [0]     →  3 → 0

// The actual cycle is:

// 0 → 1 → 3 → 0
// ↑           |
// └───────────┘

// Why?

// Because:

// 0 → 1    because graph[0] contains 1

// 1 → 3    because graph[1] contains 3

// 3 → 0    because graph[3] contains 0

// So we return to where we started:

// 0 → 1 → 3 → 0 → 1 → 3 → 0 ...

// That is the cycle.

// There is no direct edge:

// 3 → 1

// So this would be wrong:

// 1 ↔ 3

// Instead, 1 and 3 are part of a larger cycle involving 0:

// 0 → 1 → 3
// ↑       ↓
// └───────┘

// Also notice node 1 has another path:

// 1 → 2 → 5

// which is safe because 5 is terminal.

// But node 1 is still unsafe, because the definition says every path must eventually terminate.

// From 1, we can choose:

// 1 → 2 → 5       ✅ terminates

// 1 → 3 → 0 → 1  ❌ cycle

// Since one possible path enters a cycle, node 1 is unsafe.

// That's the important part of this problem: a node is safe only when all of its outgoing paths are safe.
