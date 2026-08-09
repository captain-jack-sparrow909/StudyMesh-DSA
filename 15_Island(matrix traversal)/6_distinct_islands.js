// You are given a 2D matrix containing only 1s (land) and 0s (water).
// An island is a connected set of 1s (land) and is surrounded by either an edge or 0s (water). Each cell is considered 
// connected to other cells horizontally or vertically (not diagonally).
// Two islands are considered the same if and only if they can be translated (not rotated or reflected) to equal each other.
// Write a function to find the number of distinct islands in the given matrix.


// solution:
// This is similar to Number of Islands, but now we need to distinguish island shapes.
// The key idea is:
// For each island, record the position of every land cell relative to the island's first cell.
// Then store that shape in a Set.


function countDistinctIslands(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
  
    const shapes = new Set();
  
    function dfs(row, col, startRow, startCol, shape) {
      if (
        row < 0 ||
        row >= rows ||
        col < 0 ||
        col >= cols ||
        grid[row][col] === 0
      ) {
        return;
      }
  
      // Mark visited
      grid[row][col] = 0;
  
      // Store position relative to the island's starting cell
      shape.push([row - startRow, col - startCol]);
  
      dfs(row - 1, col, startRow, startCol, shape);
      dfs(row + 1, col, startRow, startCol, shape);
      dfs(row, col - 1, startRow, startCol, shape);
      dfs(row, col + 1, startRow, startCol, shape);
    }
  
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (grid[row][col] === 1) {
          const shape = [];
  
          dfs(row, col, row, col, shape);
  
          shapes.add(JSON.stringify(shape));
        }
      }
    }
  
    return shapes.size;
}




// Suppose we have these two islands:

// 1 1 0 0 0
// 1 0 0 1 1
// 0 0 0 1 0

// The first island is:

// 1 1
// 1

// The second island is also:

// 1 1
// 1

// They are in different positions, but they have the same shape.

// So they count as one distinct island shape.

// The important part is this:

// shape.push([row - startRow, col - startCol]);

// Why don't we just store:

// [row, col]

// Because the same shape can appear at different places.

// For the first island, maybe the cells are:

// (0,0)
// (0,1)
// (1,0)

// If the starting cell is (0,0), their relative positions are:

// (0,0)
// (0,1)
// (1,0)

// Now suppose the exact same shape appears lower down:

// (3,4)
// (3,5)
// (4,4)

// If we stored the actual positions, they look different.

// But use the first cell (3,4) as the starting point:

// (3-3, 4-4) = (0,0)

// (3-3, 5-4) = (0,1)

// (4-3, 4-4) = (1,0)

// So again we get:

// (0,0)
// (0,1)
// (1,0)

// Now we know:

// These two islands have the same shape.

// That's what "translated" means here: the island can move somewhere else without rotating or flipping.

// For example, these are the same:

// 1 1

//       1 1

// because one is just shifted.

// But these are different:

// 1 1
// 1

// and:

// 1
// 1 1

// because you would need to rotate or reflect one to match the other.

// Finally:

// shapes.add(JSON.stringify(shape));

// We convert the shape array into a string because JavaScript Set compares arrays by reference.

// For example:

// [0, 0] === [0, 0] // false

// But:

// JSON.stringify([[0,0], [0,1]])

// produces the same string for identical shapes, so the Set removes duplicates.

// So the whole algorithm is:

// Find a 1
//    ↓
// DFS through the whole island
//    ↓
// Store every cell relative to the first cell
//    ↓
// Convert shape to string
//    ↓
// Put it in a Set
//    ↓
// Set size = number of distinct island shapes
// Complexity
// Time: O(rows × cols)
// Space: O(rows × cols) in the worst case.

// The main thing to remember is:

// Actual coordinates tell us WHERE the island is.

// Relative coordinates tell us WHAT SHAPE the island is.




// grid[row][col] = 0 only changes the current cell, not all nearby cells at once.

// That’s why we still need these four DFS calls:

// dfs(row - 1, col, startRow, startCol, shape); // up
// dfs(row + 1, col, startRow, startCol, shape); // down
// dfs(row, col - 1, startRow, startCol, shape); // left
// dfs(row, col + 1, startRow, startCol, shape); // right

// Each recursive call moves to one neighboring cell. Then, inside that new DFS call, that neighbor becomes the new grid[row][col] and gets changed to 0.

// For example:

// 1 1 0
// 1 1 0
// 0 0 0

// Start DFS at (0,0).

// First call:

// dfs(0, 0)

// Inside it:

// grid[0][0] = 0;

// Now:

// 0 1 0
// 1 1 0
// 0 0 0

// Only (0,0) changed.

// Then we call the right neighbor:

// dfs(0, 1)

// Now inside that DFS call:

// grid[0][1] = 0;

// Grid becomes:

// 0 0 0
// 1 1 0
// 0 0 0

// Then DFS from (0,1) checks its neighbors too.

// Eventually it reaches (1,1):

// dfs(1, 1)

// and changes that cell:

// 0 0 0
// 1 0 0
// 0 0 0

// Then it reaches (1,0) and changes it:

// 0 0 0
// 0 0 0
// 0 0 0

// So the flow is basically:

// visit current cell
//       ↓
// mark current cell as 0
//       ↓
// go to neighboring cells
//       ↓
// each neighbor marks itself as 0
//       ↓
// those neighbors visit their neighbors

// The 0 is acting like:

// "I already visited this land cell, don't process it again."

// Without:

// grid[row][col] = 0;

// DFS could keep going back and forth forever.

// Example:

// A ↔ B

// DFS at A goes to B.

// Then B sees A is still 1, so it goes back to A.

// Then A goes back to B.

// Infinite recursion.

// By changing A to 0 before exploring neighbors:

// A becomes visited

// when B tries to go back to A, it sees:

// grid[row][col] === 0

// and stops.

// So the four DFS calls are for moving through the island, while:

// grid[row][col] = 0;

// is for marking each visited cell one at a time.

// but why do we do this ?

// We do:

// grid[row][col] = 0;

// mainly to mark that cell as already visited.

// Suppose the island is:

// 1 1

// Start DFS at the left cell:

// A → B

// If we do not mark A as visited:

// A goes to B
// B sees A is still 1
// B goes back to A
// A goes back to B
// ...

// That would keep repeating forever.

// So when we visit A, we immediately do:

// grid[row][col] = 0;

// Now:

// 0 1

// Then DFS goes to the right cell.

// The right cell also becomes 0:

// 0 0

// When it tries to go back to the left, it sees:

// grid[row][col] === 0

// and stops.

// So changing 1 → 0 does not mean we're really turning land into water conceptually. We're simply using 0 to mean:

// "This land cell has already been processed."

// Instead of modifying the grid, we could have created a separate visited matrix:

// visited[row][col] = true;

// But modifying the grid is simpler and saves extra space.

// So:

// 1 = land we haven't visited yet
// 0 = water OR already-visited land

// And this is why DFS can safely travel through the entire island without visiting the same cells again.

// dfs(row - 1, col, startRow, startCol, shape); dfs(row + 1, col, startRow, startCol, shape); dfs(row, col - 1, startRow, startCol, shape); dfs(row, col + 1, startRow, startCol, shape);

// why do we make these calls ?

// We make these calls:

// dfs(row - 1, col, startRow, startCol, shape); // up
// dfs(row + 1, col, startRow, startCol, shape); // down
// dfs(row, col - 1, startRow, startCol, shape); // left
// dfs(row, col + 1, startRow, startCol, shape); // right

// because an island is defined as land cells connected horizontally or vertically.

// So from the current land cell, we need to ask:

// Is there connected land above me?
// Is there connected land below me?
// Is there connected land to my left?
// Is there connected land to my right?

// For example:

// 1 1 0
// 1 1 0
// 0 0 0

// Start at the top-left cell (0,0):

// [current]  1
//     1      1

// From (0,0), DFS checks:

// up    → (-1,0)  outside grid
// down  → (1,0)   land ✅
// left  → (0,-1)  outside grid
// right → (0,1)   land ✅

// So the down call discovers one part of the island, and the right call discovers another part.

// Then those cells do the same thing.

// For example, when DFS reaches (0,1):

// 0 [1] 0
// 1  1  0

// it checks its neighbors and can discover (1,1).

// That is how DFS spreads through the entire connected island.

// Think of it like this:

//           check up
//              ↑
//              |
// check left ← current → check right
//              |
//              ↓
//          check down

// And each neighboring land cell repeats the process.

// So these calls are what actually let DFS travel through the island.

// The line:

// grid[row][col] = 0;

// only says:

// "I have visited this particular cell."

// The four DFS calls say:

// "Now go find the rest of the island connected to this cell."

// So the two jobs are different:

// grid[row][col] = 0
// → mark current cell visited

// dfs(up/down/left/right)
// → discover neighboring connected land

// Without those four calls, DFS would visit only the first 1 and never discover the rest of the island.
