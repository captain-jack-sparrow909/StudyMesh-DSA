// Biggest Island: Given a 2D array (i.e., a matrix) containing only 1s (land) and 0s (water), find the biggest island in it. 
// Write a function to return the area of the biggest island. 
// An island is a connected set of 1s (land) and is surrounded by either an edge or 0s (water). 
// Each cell is considered connected to other cells horizontally or vertically (not diagonally).



// solution:
// This is almost the same as Number of Islands, but instead of counting how many islands there are, we count the size of each island and keep the largest one.


function biggestIsland(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
  
    let maxArea = 0;
  
    function dfs(row, col) {
      if (
        row < 0 ||
        row >= rows ||
        col < 0 ||
        col >= cols ||
        grid[row][col] === 0
      ) {
        return 0;
      }
  
      // Mark as visited
      grid[row][col] = 0;
  
      // Count current cell + connected land
      return (
        1 +
        dfs(row - 1, col) +
        dfs(row + 1, col) +
        dfs(row, col - 1) +
        dfs(row, col + 1)
      );
    }
  
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (grid[row][col] === 1) {
          const area = dfs(row, col);
  
          maxArea = Math.max(maxArea, area);
        }
      }
    }
  
    return maxArea;
}



// Suppose:

// const grid = [
//   [1, 1, 0, 0],
//   [1, 0, 0, 1],
//   [0, 0, 1, 1],
//   [0, 0, 1, 0]
// ];

// Visually:

// 1 1 0 0
// 1 0 0 1
// 0 0 1 1
// 0 0 1 0

// There are two islands.

// First island:

// 1 1
// 1

// Area:

// 3

// Second island:

//     1
//   1 1
//   1

// Area:

// 4

// So the answer is:

// 4

// The main difference from the previous problem is this line:

// return (
//   1 +
//   dfs(row - 1, col) +
//   dfs(row + 1, col) +
//   dfs(row, col - 1) +
//   dfs(row, col + 1)
// );

// The 1 means:

// Count the current land cell.

// Then each DFS call returns how much connected land exists in that direction.

// For example:

// 1 1
// 1

// Start at the top-left 1.

// We count:

// current cell = 1

// Then DFS finds the right cell:

// +1

// and the bottom cell:

// +1

// Total:

// 1 + 1 + 1 = 3

// So:

// const area = dfs(row, col);

// returns the size of that whole island.

// Then:

// maxArea = Math.max(maxArea, area);

// keeps the biggest one found so far.

// For example:

// first island area = 3

// maxArea = max(0, 3)
//         = 3

// Then second island:

// area = 4

// maxArea = max(3, 4)
//         = 4

// So the final answer is 4.

// The whole idea is:

// Find a 1
//    ↓
// DFS counts the entire island
//    ↓
// Compare its area with maxArea
//    ↓
// Keep the bigger value