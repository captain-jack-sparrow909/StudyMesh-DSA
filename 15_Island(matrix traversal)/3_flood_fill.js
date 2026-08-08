// Flood Fill: Any image can be represented by a 2D integer array (i.e., a matrix) where each cell represents the pixel value of the image.
// Flood fill algorithm takes a starting cell (i.e., a pixel) and a color. The given color is applied to all horizontally and vertically connected 
// cells with the same color as that of the starting cell. Recursively, the algorithm fills cells with the new color until it encounters a cell with 
// a different color than the starting cell.
// Given a matrix, a starting cell, and a color, flood fill the matrix.


// solution:
// Flood Fill is basically the same DFS pattern as Number of Islands, except instead of turning visited cells into 0, we change them to the new color.

function floodFill(image, startRow, startCol, newColor) {
    const rows = image.length;
    const cols = image[0].length;
  
    const oldColor = image[startRow][startCol];
  
    // Prevent infinite recursion if color is already the same
    if (oldColor === newColor) {
      return image;
    }
  
    function dfs(row, col) {
      // Stop if outside the image
      if (
        row < 0 ||
        row >= rows ||
        col < 0 ||
        col >= cols
      ) {
        return;
      }
  
      // Stop if this cell doesn't have the original color
      if (image[row][col] !== oldColor) {
        return;
      }
  
      // Change this pixel
      image[row][col] = newColor;
  
      // Check 4 directions
      dfs(row - 1, col); // up
      dfs(row + 1, col); // down
      dfs(row, col - 1); // left
      dfs(row, col + 1); // right
    }
  
    dfs(startRow, startCol);
  
    return image;
}




// For example:

// const image = [
//   [1, 1, 1],
//   [1, 1, 0],
//   [1, 0, 1]
// ];

// floodFill(image, 1, 1, 2);

// We start at:

// row = 1
// col = 1

// The starting cell contains:

// 1

// So the original color is:

// oldColor = 1;

// The grid starts as:

// 1 1 1
// 1 1 0
// 1 0 1

// Starting from the middle 1, DFS changes every connected 1 into 2.

// Result:

// 2 2 2
// 2 2 0
// 2 0 1

// Notice the bottom-right 1 stays 1:

// 2 2 2
// 2 2 0
// 2 0 1
//     ↑

// Why? Because it is only diagonally connected. Flood Fill only moves:

//        up
//         ↑
// left ← cell → right
//         ↓
//       down

// The most important part is:

// if (image[row][col] !== oldColor) {
//   return;
// }

// Suppose the starting color is 1.

// DFS is allowed to continue only through other 1s.

// If it reaches:

// 0

// it stops because that pixel has a different color.

// And this line:

// image[row][col] = newColor;

// does two jobs:

// Changes the pixel to the requested color.
// Marks it as already visited.

// So we don't need a separate visited array.

// One important special case is:

// if (oldColor === newColor) {
//   return image;
// }

// Without this, imagine:

// oldColor = 1
// newColor = 1

// We change a 1 into 1, so it still looks unvisited. DFS could keep going back and forth between the same cells forever.

// So if both colors are already equal, there is nothing to change.

// The whole algorithm is:

// Remember starting color
//         ↓
// Start DFS
//         ↓
// Wrong color / outside grid → stop
//         ↓
// Same color → change it
//         ↓
// DFS up, down, left, right
