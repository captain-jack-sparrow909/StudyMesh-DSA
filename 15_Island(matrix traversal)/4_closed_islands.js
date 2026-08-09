// Number of Closed Islands: You are given a 2D matrix containing only 1s (land) and 0s (water).
// An island is a connected set of 1s (land) and is surrounded by either an edge or 0s (water). Each cell is considered connected to other cells horizontally or vertically (not diagonally).
// A closed island is an island that is totally surrounded by 0s (i.e., water). This means all horizontally and vertically connected cells of a closed island are water. This also means that, by definition, a closed island can't touch an edge (as then the edge cells are not connected to any water cell).



// solution:
// Use DFS again.
// The easiest way to think about this problem is:
// Every time we find land, explore the whole island.
// If any part of that island touches the border, it is not closed.


function closedIsland(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
  
    let count = 0;
  
    function dfs(row, col) {
      // If we go outside the grid,
      // this island touches the boundary
      if (
        row < 0 ||
        row >= rows ||
        col < 0 ||
        col >= cols
      ) {
        return false;
      }
  
      // Water does not make the island open
      if (grid[row][col] === 0) {
        return true;
      }
  
      // Mark land as visited
      grid[row][col] = 0;
  
      const up = dfs(row - 1, col);
      const down = dfs(row + 1, col);
      const left = dfs(row, col - 1);
      const right = dfs(row, col + 1);
  
      return up && down && left && right;
    }
  
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (grid[row][col] === 1) {
          if (dfs(row, col)) {
            count++;
          }
        }
      }
    }
  
    return count;
}


// Suppose we have:

// 0 0 0 0 0
// 0 1 1 0 0
// 0 1 0 0 0
// 0 0 0 1 1
// 0 0 0 0 0

// The first island is:

// 1 1
// 1

// It does not touch any edge, so it is closed.

// The second island:

// 1 1

// is also surrounded by 0s here, so it is closed too.

// The most important part is this:

// if (
//   row < 0 ||
//   row >= rows ||
//   col < 0 ||
//   col >= cols
// ) {
//   return false;
// }

// Why false?

// Because reaching outside the matrix means the island reached the edge.

// For example:

// 1 1 0
// 0 1 0
// 0 0 0

// The top-left land touches the border:

// 1 1 0
// ↑
// edge

// During DFS, eventually we try:

// dfs(-1, 0);

// That is outside the grid, so:

// return false;

// Now look at this part:

// const up = dfs(row - 1, col);
// const down = dfs(row + 1, col);
// const left = dfs(row, col - 1);
// const right = dfs(row, col + 1);

// return up && down && left && right;

// This means:

// The island is closed only if every direction stays inside the grid.

// If even one side returns false:

// true && true && false && true

// the result is:

// false

// So that island is not counted.

// Also notice:

// if (grid[row][col] === 0) {
//   return true;
// }

// Water is fine. Reaching water means that side of the island is properly surrounded.

// So the rules are:

// Reach water        → true
// Reach outside grid → false
// Reach land         → keep exploring

// That is the entire idea.

// One subtle but important detail: we store all four DFS results first instead of writing:

// return (
//   dfs(row - 1, col) &&
//   dfs(row + 1, col) &&
//   dfs(row, col - 1) &&
//   dfs(row, col + 1)
// );

// because && short-circuits. If the first direction returns false, JavaScript may skip the remaining DFS calls, leaving parts of the island unvisited.

// By doing:

// const up = ...
// const down = ...
// const left = ...
// const right = ...

// we make sure the entire island is marked visited.
