// You are given a 2D matrix containing different characters, you need to find if there exists any cycle consisting of the same character in the matrix.
// A cycle is a path in the matrix that starts and ends at the same cell and has four or more cells. From a given cell, you can move to one of the cells 
// adjacent to it - in one of the four directions (up, down, left, or right), if it has the same character value of the current cell.
// Write a function to find if the matrix has a cycle.


// solution:
// Use DFS with a parent cell.
// The key idea is:
// While exploring cells with the same character, if we reach a cell that was already visited and it is not the cell we just came from, then we found a cycle.


// unvisited same character
// → keep going

// visited parent
// → ignore

// visited non-parent
// → cycle

function hasCycle(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
  
    const visited = Array.from(
      { length: rows },
      () => Array(cols).fill(false)
    );
  
    function dfs(row, col, parentRow, parentCol) {
      visited[row][col] = true;
  
      const directions = [
        [-1, 0], // up
        [1, 0],  // down
        [0, -1], // left
        [0, 1]   // right
      ];
  
      for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;
  
        // outside grid
        if (
          newRow < 0 ||
          newRow >= rows ||
          newCol < 0 ||
          newCol >= cols
        ) {
          continue;
        }
  
        // different character
        if (grid[newRow][newCol] !== grid[row][col]) {
          continue;
        }
  
        // not visited → explore it
        if (!visited[newRow][newCol]) {
          if (dfs(newRow, newCol, row, col)) {
            return true;
          }
        }
  
        // visited, but NOT the cell we came from
        else if (
          newRow !== parentRow ||
          newCol !== parentCol
        ) {
          return true;
        }
      }
  
      return false;
    }
  
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (!visited[row][col]) {
          if (dfs(row, col, -1, -1)) {
            return true;
          }
        }
      }
    }
  
    return false;
  }



//   The only new idea here is parent. Everything else is the same DFS you've been using in island problems.

//   Suppose the grid is:
  
//   a a
//   a a
  
//   This has a cycle:
  
//   a → a
//   ↑   ↓
//   a ← a
  
//   We start DFS from the top-left a.
  
//   Why do we need parent?
  
//   Suppose DFS moves from cell A to cell B:
  
//   A → B
  
//   When we're at B, one of its neighbors is A.
  
//   But A is already visited.
  
//   That does not mean there's a cycle, because A is simply the cell we came from.
  
//   So we remember:
  
//   parent of B = A
  
//   Then the rule becomes:
  
//   If I see an already visited same-character cell, and it is not my parent, then I found a cycle.

// Now walk through:

// a a
// a a

// Call the cells:

// A B
// C D

// DFS goes:

// A → B → D → C

// Now from C, one neighbor is A.

// A is already visited.

// And A is not the parent of C — C came from D.

// So:

// A → B
// ↑   ↓
// C ← D

// we have returned to an older visited cell through another route.

// That is a cycle.

// So remember just this:

// unvisited same character
// → keep going

// visited parent
// → ignore

// visited non-parent
// → cycle

// The parent exists only so we don't mistakenly think this simple movement is a cycle:

// A → B
//     ↓
//     A

// Going immediately back to where you came from is not a cycle.

// why do we calculate newRow, newCol ?

// Because row and col are the current cell, while newRow and newCol are the neighbor we want to move to.

// Suppose we're currently at:

// row = 1
// col = 1

// So the current cell is:

// (1,1)

// To move in the four directions, we use:

// const directions = [
//   [-1, 0], // up
//   [1, 0],  // down
//   [0, -1], // left
//   [0, 1]   // right
// ];

// Then:

// const newRow = row + dr;
// const newCol = col + dc;

// calculates the neighboring cell.

// For example, moving up:

// row = 1
// col = 1

// dr = -1
// dc = 0

// So:

// newRow = 1 + (-1) = 0
// newCol = 1 + 0    = 1

// We moved from:

// (1,1)

// to:

// (0,1)

// For all four directions:

// current = (1,1)

// up:
// (1-1, 1) = (0,1)

// down:
// (1+1, 1) = (2,1)

// left:
// (1, 1-1) = (1,0)

// right:
// (1, 1+1) = (1,2)

// Visually:

//         (0,1)
//           ↑
//           |
// (1,0) ← (1,1) → (1,2)
//           |
//           ↓
//         (2,1)

// We then use newRow and newCol to ask questions about that neighboring cell:

// if (grid[newRow][newCol] !== grid[row][col]) {
//   continue;
// }

// Meaning:

// Does the neighbor have the same character as my current cell?

// And:

// if (!visited[newRow][newCol]) {
//   dfs(newRow, newCol, row, col);
// }

// Meaning:

// If that neighbor hasn't been visited, move DFS there.

// So the simple distinction is:

// row, col
// = where I am now

// newRow, newCol
// = where I might move next

// We calculate them because DFS needs to inspect the cells around the current cell.
