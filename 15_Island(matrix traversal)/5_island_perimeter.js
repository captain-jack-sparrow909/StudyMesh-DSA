// You are given a 2D matrix containing only 1s (land) and 0s (water).
// An island is a connected set of 1s (land) and is surrounded by either an edge or 0s (water). Each cell is considered connected 
// to other cells horizontally or vertically (not diagonally). There are no lakes on the island, so the water inside the island is 
// not connected to the water around it. A cell is a square with a side length of 1.
// The given matrix has only one island, write a function to find the perimeter of that island.



// solution:
// For Island Perimeter, think about each land cell (1) as a square with 4 sides.
// For every land cell:
// start with 4
// subtract 1 for every side touching another land cell
// A very simple solution is:


function islandPerimeter(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
  
    let perimeter = 0;
  
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (grid[row][col] === 1) {
          perimeter += 4;
  
          // If there is land above, they share one side
          if (row > 0 && grid[row - 1][col] === 1) {
            perimeter -= 2;
          }
  
          // If there is land on the left, they share one side
          if (col > 0 && grid[row][col - 1] === 1) {
            perimeter -= 2;
          }
        }
      }
    }
  
    return perimeter;
}



// Why do we subtract 2, not 1?

// Suppose we have:

// 1 1

// If both cells were separate:

// first cell  = 4 sides
// second cell = 4 sides

// total = 8

// But they touch each other:

// ┌─┬─┐
// │1│1│
// └─┴─┘

// The shared border is inside the island, so it should not count.

// That shared border was counted twice:

// right side of first cell
// left side of second cell

// So:

// 8 - 2 = 6

// And the perimeter really is 6.

// For example:

// const grid = [
//   [0, 1, 0],
//   [1, 1, 1],
//   [0, 1, 0]
// ];

// Visually:

// 0 1 0
// 1 1 1
// 0 1 0

// There are 5 land cells.

// Initially:

// 5 × 4 = 20

// But several land cells touch each other.

// Every shared edge removes 2 from the perimeter.

// The final perimeter is:

// 12

// The reason we only check:

// up
// left

// instead of all four directions is to avoid counting the same shared edge twice.

// For example, if:

// 1 1

// the right connection of the first cell is the same as the left connection of the second cell.

// So checking only previously seen neighbors:

// if (row > 0 && grid[row - 1][col] === 1)
// if (col > 0 && grid[row][col - 1] === 1)

// is enough.

// You can remember the algorithm as:

// For every land cell:
//     +4

// If connected to land above:
//     -2

// If connected to land on left:
//     -2
