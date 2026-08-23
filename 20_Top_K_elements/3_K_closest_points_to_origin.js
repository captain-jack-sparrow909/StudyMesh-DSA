// 'K' Closest Points to the Origin: Given an array of points in a 2D plane, find ‘K’ closest points to the origin.

// Example 1:

// Input: points = [[1,2],[1,3]], K = 1
// Output: [[1,2]]
// Explanation: The Euclidean distance between (1, 2) and the origin is sqrt(5).
// The Euclidean distance between (1, 3) and the origin is sqrt(10).
// Since sqrt(5) < sqrt(10), therefore (1, 2) is closer to the origin.
// Example 2:

// Input: point = [[1, 3], [3, 4], [2, -1]], K = 2
// Output: [[1, 3], [2, -1]]


// solution:
// This is another Heap problem, and it follows the exact same pattern as Kth Smallest Number.

// The key idea:

// We want the K closest points, so we keep K points in a Max Heap.

// Why Max Heap?

// Because among our K closest points, we want the farthest one to be at the top. If a new point is closer, we can remove that farthest point.

// 1. How do we know which point is closer?

// We calculate its distance from the origin (0, 0).

// For a point:

// (x, y)

// the distance is:

// √(x² + y²)

// But we don't actually need the √.

// Why?

// Because if:

// 5 < 10

// then:

// √5 < √10

// So we can simply compare:

// x * x + y * y

// For example:

// [1, 2]

// 1² + 2²
// = 1 + 4
// = 5

// and:

// [1, 3]

// 1² + 3²
// = 1 + 9
// = 10

// Therefore [1,2] is closer.

// 2. Why Max Heap?

// Suppose:

// K = 2

// and we've found these two points:

// [1,3] → distance² = 10
// [3,4] → distance² = 25

// Our Max Heap is conceptually:

//        25
//       /
//     10

// The point with distance 25 is at the top because it's the farthest of our current K points.

// Now suppose we find:

// [2,-1]

// Its distance:

// 2² + (-1)²
// = 4 + 1
// = 5

// That's closer than 25.

// So:

// Current:

// [1,3]  → 10
// [3,4]  → 25  ← remove this

// Add:

// [2,-1] → 5

// Now our K closest points are:

// [1,3]  → 10
// [2,-1] → 5

// Exactly what we want.


