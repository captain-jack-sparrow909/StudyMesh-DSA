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

