// Number of Islands: Given a 2D array (i.e., a matrix) containing only 1s (land) and 0s (water), count the number of islands in it.
// An island is a connected set of 1s (land) and is surrounded by either an edge or 0s (water). Each cell is considered connected to other 
// cells horizontally or vertically (not diagonally).

// solution: 
// Use DFS.
// The idea is simple:
// Every time we find a 1 that we haven't visited yet, we found a new island. Then DFS changes that entire connected island so we don't count it again.

function numIslands(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
  
    let islands = 0;
  
    function dfs(row, col) {
      // Stop if outside the grid
      if (
        row < 0 ||
        row >= rows ||
        col < 0 ||
        col >= cols
      ) {
        return;
      }
  
      // Stop if this is water
      if (grid[row][col] === 0) {
        return;
      }
  
      // Mark this land as visited
      grid[row][col] = 0;
  
      // Check all 4 directions
      dfs(row - 1, col); // up
      dfs(row + 1, col); // down
      dfs(row, col - 1); // left
      dfs(row, col + 1); // right
    }
  
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (grid[row][col] === 1) {
          islands++;
  
          dfs(row, col);
        }
      }
    }
  
    return islands;
}



// For example:

// const grid = [
//   [1, 1, 0, 0],
//   [1, 0, 0, 1],
//   [0, 0, 1, 1],
//   [0, 0, 0, 0]
// ];

// Visually:

// 1 1 0 0
// 1 0 0 1
// 0 0 1 1
// 0 0 0 0

// There are two groups of connected 1s:

// Island 1:

// 1 1
// 1

// and:

// Island 2:

//     1
//   1 1

// So the answer is:

// 2

// The most important part is:

// if (grid[row][col] === 1) {
//   islands++;
//   dfs(row, col);
// }

// Read it as:

// "If I find land, this must be a new island. Count it once, then DFS removes all connected land belonging to that island."

// For example, start here:

// 1 1 0
// 1 0 0

// We find the first 1:

// ↑
// 1 1 0
// 1 0 0

// So:

// islands++;

// Now:

// islands = 1

// Then:

// dfs(row, col);

// DFS visits every connected 1:

// 1 → 1
// ↓
// 1

// and changes them to 0:

// 0 0 0
// 0 0 0

// This is how we make sure the same island is not counted three times.

// The DFS checks only four directions:

//         up
//          ↑
// left ← current → right
//          ↓
//        down

// We do not check diagonally.

// So this:

// 1 0
// 0 1

// contains 2 islands, not 1, because the two 1s only touch diagonally.

// One important line is:

// grid[row][col] = 0;

// We're using the grid itself as our visited structure.

// It means:

// 1 = land not visited yet
// 0 = water OR land we've already visited

// So we don't need a separate:

// visited

// array.

// The whole algorithm can be remembered as:

// Scan every cell
//      ↓
// See a 0 → ignore it
//      ↓
// See a 1 → new island +1
//      ↓
// DFS turns the whole connected island into 0s
//      ↓
// Continue scanning
// Complexity
