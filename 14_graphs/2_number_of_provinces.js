// Number of Provinces: There are n cities. Some of them are connected in a network. If City A is directly connected to City B, 
// and City B is directly connected to City C, city A is indirectly connected to City C.
// If a group of cities are connected directly or indirectly, they form a province.
// Given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, 
// and isConnected[i][j] = 0 otherwise, determine the total number of provinces.


// solution:
// Every time we find a city we haven't visited before, we found a new province. Then DFS visits every city belonging to that province.

const isConnected = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
];

function findCircleNum(isConnected) {
    const n = isConnected.length;
    const visited = new Array(n).fill(false);
  
    let provinces = 0;
  
    function dfs(city) {
      visited[city] = true;
  
      for (let otherCity = 0; otherCity < n; otherCity++) {
        if (
          isConnected[city][otherCity] === 1 &&
          visited[otherCity] === false
        ) {
          dfs(otherCity);
        }
      }
    }
  
    for (let city = 0; city < n; city++) {
      if (visited[city] === false) {
        provinces++;
        dfs(city);
      }
    }
  
    return provinces;
}



// There are 3 cities:

// 0, 1, 2

// The matrix says:

// 0 is connected to 1

// 0 —— 1

// 2 is separate

// So visually:

// Province 1:   0 —— 1

// Province 2:   2

// Answer:

// 2

// Now let's walk through the code.

// Initially:

// visited = [false, false, false];
// provinces = 0;

// Meaning:

// City 0 → not visited
// City 1 → not visited
// City 2 → not visited

// The main loop starts with city 0:

// for (let city = 0; city < n; city++) {

// Since:

// visited[0] === false

// we found a city that doesn't belong to any province we've explored yet.

// So:

// provinces++;

// Now:

// provinces = 1

// Then:

// dfs(0);

// DFS marks city 0:

// visited[0] = true;

// Now:

// visited = [true, false, false]

// Then DFS checks this row:

// [1, 1, 0]

// because this is:

// isConnected[0]

// Think of it as:

// Does city 0 connect to city 0? → 1
// Does city 0 connect to city 1? → 1
// Does city 0 connect to city 2? → 0

// City 0 is already visited, so skip it.

// City 1 has:

// isConnected[0][1] === 1

// and:

// visited[1] === false

// so we call:

// dfs(1);

// Now:

// visited = [true, true, false]

// DFS explores everything connected to city 1, but there are no new cities.

// So the first DFS has discovered this entire province:

// 0 —— 1

// Now we go back to the main loop.

// Next:

// city = 1

// But:

// visited[1] === true

// So we do nothing.

// Why?

// Because city 1 was already discovered as part of province 1.

// Next:

// city = 2

// Now:

// visited[2] === false

// That means city 2 was not reachable from cities 0 or 1.

// Therefore it must belong to another province.

// So:

// provinces++;

// Now:

// provinces = 2

// Then:

// dfs(2);

// which marks city 2 visited:

// visited = [true, true, true]

// We're done.

// Final answer:

// 2

// The most important part to understand is this:

// if (visited[city] === false) {
//   provinces++;
//   dfs(city);
// }

// You can read it in English as:

// "If I find an unvisited city,
// I have discovered a new province.

// Count that province,
// then visit every city connected to it."

// And DFS:

// function dfs(city) {
//   visited[city] = true;

//   for (let otherCity = 0; otherCity < n; otherCity++) {
//     if (
//       isConnected[city][otherCity] === 1 &&
//       visited[otherCity] === false
//     ) {
//       dfs(otherCity);
//     }
//   }
// }

// simply means:

// Mark this city visited.

// Check every other city.

// If it is connected
// AND we haven't visited it yet,
// visit that city too.

// So the whole algorithm can be remembered as:

// Find an unvisited city
//         ↓
// New province +1
//         ↓
// DFS marks its whole group visited
//         ↓
// Continue looking for another unvisited city

// For example:

// 0 — 1 — 2      3 — 4       5

// The main loop would discover:

// city 0 unvisited → province 1
// DFS visits 0, 1, 2

// city 1 visited → skip
// city 2 visited → skip

// city 3 unvisited → province 2
// DFS visits 3, 4

// city 4 visited → skip

// city 5 unvisited → province 3
// DFS visits 5

// Answer:

// 3 provinces

// The key idea is not really the matrix. The key idea is:

// One DFS call discovers one complete province.

// const isConnected = [ [1, 1, 0], [1, 1, 0], [0, 0, 1] ];

// if isConnected is of this form, why don't we have visited of the same form ?

// Because isConnected and visited store different kinds of information.

// isConnected stores relationships between pairs of cities, so it needs 2 dimensions:

// const isConnected = [
//   [1, 1, 0],
//   [1, 1, 0],
//   [0, 0, 1]
// ];

// You ask it questions like:

// isConnected[0][1]

// Meaning:

// Is city 0 connected to city 1?

// So we need two indexes:

//           other city
//               ↓
// isConnected[0][1]
//             ↑
//           city

// That's why it's a 2D array.

// But visited only answers:

// Have I already visited this city?

// We only need one index:

// visited[0] // have we visited city 0?
// visited[1] // have we visited city 1?
// visited[2] // have we visited city 2?

// So:

// const visited = [false, false, false];

// is enough.

// Think of them side-by-side:

// isConnected                           visited

//        0  1  2
//      ┌─────────┐
// 0    │ 1  1  0 │                    0 → true
// 1    │ 1  1  0 │                    1 → true
// 2    │ 0  0  1 │                    2 → false
//      └─────────┘

// isConnected is asking about city pairs:

// 0 with 0
// 0 with 1
// 0 with 2

// 1 with 0
// 1 with 1
// 1 with 2

// 2 with 0
// 2 with 1
// 2 with 2

// That's n × n pieces of information.

// But visited asks only about each individual city:

// city 0?
// city 1?
// city 2?

// That's only n pieces of information.

// For example, suppose DFS has visited cities 0 and 1:

// visited = [true, true, false];

// This tells us everything we need:

// City 0 → already visited
// City 1 → already visited
// City 2 → not visited yet

// We don't need something like:

// visited = [
//   [true, true, false],
//   [true, true, false],
//   [false, false, false]
// ];

// because what would:

// visited[0][1]

// mean?

// "Did we visit city 0 with city 1?"

// That's not what DFS needs. DFS only cares whether city 1 itself has already been visited.

// So the easiest rule to remember is:

// isConnected → relationship between TWO cities → 2D array

// visited     → status of ONE city             → 1D array

// That's why if there are 3 cities:

// isConnected // 3 × 3 matrix

// visited     // array of length 3

