// Find if Path Exists in Graph: Given an undirected graph, represented as a list of edges. Each edge is illustrated as a pair of integers [u, v], signifying that there's a mutual connection between node u and node v.

// You are also given starting node start, and a destination node end, return true if a path exists between the starting node and the destination node. Otherwise, return false.

// Examples
// Example 1:
// Input: n = 4, edges = [[0,1],[1,2],[2,3]], start = 0, end = 3
// Expected Output: true


// solution:
// Use BFS or DFS. First, convert the edge list into an adjacency list.

// Because the graph is undirected, for every edge [u, v]:

// u connects to v
// v connects to u

function validPath(n, edges, start, end) {
    if (start === end) {
      return true;
    }
  
    const graph = Array.from({ length: n }, () => []);
  
    // Build the undirected graph
    for (const [u, v] of edges) {
      graph[u].push(v);
      graph[v].push(u);
    }
  
    const queue = [start];
    const visited = new Set([start]);
  
    while (queue.length > 0) {
      const currentNode = queue.shift();
  
      for (const neighbor of graph[currentNode]) {
        if (neighbor === end) {
          return true;
        }
  
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  
    return false;
}

// Example
// const n = 4;
// const edges = [
//   [0, 1],
//   [1, 2],
//   [2, 3],
// ];

// console.log(validPath(n, edges, 0, 3)); // true

// The graph looks like:

// 0 — 1 — 2 — 3

// A path exists:

// 0 → 1 → 2 → 3

// Therefore, the answer is:

// true
// Building the adjacency list

// Initially:

// graph = [
//   [], // node 0
//   [], // node 1
//   [], // node 2
//   [], // node 3
// ];

// For the edge:

// [0, 1]

// we do:

// graph[0].push(1);
// graph[1].push(0);

// The second line is necessary because the graph is undirected.

// After processing all edges:

// graph = [
//   [1],    // 0 connects to 1
//   [0, 2], // 1 connects to 0 and 2
//   [1, 3], // 2 connects to 1 and 3
//   [2],    // 3 connects to 2
// ];
// BFS step by step

// Start with:

// queue = [0]
// visited = {0}

// Process 0:

// neighbor = 1
// queue = [1]
// visited = {0, 1}

// Process 1:

// neighbors = 0, 2

// 0 is already visited, so skip it.

// Add 2:

// queue = [2]
// visited = {0, 1, 2}

// Process 2:

// neighbors = 1, 3

// 3 is the destination, so return:

// true
// Why do we need visited?

// Because an undirected graph can send us back to the node we came from:

// 0 → 1 → 0 → 1 → 0 ...

// visited prevents repeatedly processing the same nodes.

// if (!visited.has(neighbor)) {
//   visited.add(neighbor);
//   queue.push(neighbor);
// }
// Why mark a node visited before adding it?

// We do:

// visited.add(neighbor);
// queue.push(neighbor);

// Marking it immediately prevents the same node from being added to the queue multiple times by different neighboring nodes.

// Complexity

// Let:

// V be the number of nodes.
// E be the number of edges.

// Time:

// O(V + E)

// Space:

// O(V + E)
