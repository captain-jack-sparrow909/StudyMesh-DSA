// Flip and Invert an Image: Given a square binary matrix representing an image, we want to flip the image horizontally, then invert it.

// To flip an image horizontally means that each row of the image is reversed. For example, flipping [0, 1, 1] horizontally results in [1, 1, 0].

// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [1, 1, 0] results in [0, 0, 1].

// **Example 1**:

// ```
// Input: [
//   [1,0,1],
//   [1,1,1],
//   [0,1,1]
// ]
// Output: [
//   [0,1,0],
//   [0,0,0],
//   [0,0,1]
// ]

// ```

// solution:
// This one is straightforward. We need to do two things to every row:

// Flip → reverse the row.
// Invert → change 0 → 1 and 1 → 0.
// Example

// First row:

// [1, 0, 1]

// Step 1: Flip

// [1, 0, 1]
//      ↓
// [1, 0, 1]

// It's the same because it's symmetric.

// Step 2: Invert

// [1, 0, 1]
//  ↓  ↓  ↓
// [0, 1, 0]

// So the result is:

// [0, 1, 0]

function flipAndInvertImage(image) {
    for (let row of image) {
      row.reverse();
  
      for (let i = 0; i < row.length; i++) {
        row[i] = row[i] === 0 ? 1 : 0;
      }
    }
  
    return image;
}

// Let's walk through the example

// Input:

// [
//   [1,0,1],
//   [1,1,1],
//   [0,1,1]
// ]
// Row 1
// [1,0,1]

// Flip:

// [1,0,1]

// Invert:

// [0,1,0]
// Row 2
// [1,1,1]

// Flip:

// [1,1,1]

// Invert:

// [0,0,0]
// Row 3
// [0,1,1]

// Flip:

// [1,1,0]

// Invert:

// [0,0,1]

// Final:

// [
//   [0,1,0],
//   [0,0,0],
//   [0,0,1]
// ]
// What does row.reverse() do?

// If:

// row = [0, 1, 1];

// then:

// row.reverse();

// changes it to:

// [1, 1, 0]

// It reverses the same array.

// What does this do?
// row[i] = row[i] === 0 ? 1 : 0;

// It's just a short if/else.

// This:

// if (row[i] === 0) {
//   row[i] = 1;
// } else {
//   row[i] = 0;
// }

// is exactly the same.

// So:

// 0 → 1
// 1 → 0
// Easy way to remember
// Each row
//    ↓
// reverse()
//    ↓
// [0,1,1] → [1,1,0]
//    ↓
// invert
//    ↓
// [0,0,1]

// You don't need any complicated algorithm here.

// Time: O(n²) because we visit every cell.
// Space: O(1) extra space because we're modifying the image directly.
