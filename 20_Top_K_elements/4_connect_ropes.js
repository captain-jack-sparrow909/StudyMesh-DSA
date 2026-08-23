// Connect Ropes: Given ‘N’ ropes with different lengths, we need to connect these ropes into one big rope with minimum cost. 
// The cost of connecting two ropes is equal to the sum of their lengths.

// **Example 1**:

// ```
// Input: [1, 3, 11, 5]
// Output: 33
// Explanation: First connect 1+3(=4), then 4+5(=9), and then 9+11(=20). So the total cost is 33 (4+9+20)

// ```

// **Example 2**:

// ```
// Input: [3, 4, 5, 6]
// Output: 36
// Explanation: First connect 3+4(=7), then 5+6(=11), 7+11(=18). Total cost is 36 (7+11+18)
// ```

// solution:
// This is another Heap problem, and there's a very important pattern here:

// Always connect the two shortest ropes first.

// To do that efficiently, we use a Min Heap.

// Why the two smallest?

// Let's use:

// [1, 3, 11, 5]

// If we connect 1 + 3:

// 1 + 3 = 4

// Cost so far:

// 4

// Now we have:

// [4, 11, 5]

// Again connect the two smallest:

// 4 + 5 = 9

// Cost:

// 4 + 9 = 13

// Now:

// [9, 11]

// Connect:

// 9 + 11 = 20

// Total:

// 4 + 9 + 20 = 33
// Why always the smallest?

// Imagine we have:

// [1, 3, 11, 5]

// If instead we connect the two largest:

// 11 + 5 = 16

// Now:

// [1, 3, 16]

// Then:

// 1 + 3 = 4

// Then:

// 4 + 16 = 20

// Total:

// 16 + 4 + 20 = 40

// That's more expensive than 33.

// The reason is that when we create a combined rope, that combined rope gets used again later, so we want the early combined ropes to be as small as possible.

// The algorithm

// We repeatedly:

// 1. Remove the smallest rope
// 2. Remove the second smallest rope
// 3. Connect them
// 4. Add their sum to the total cost
// 5. Put the new rope back into the heap

// We keep doing this until only one rope remains.

// Example step by step
// [1, 3, 11, 5]

// Put everything into a Min Heap:

// [1, 3, 11, 5]
// Step 1

// Remove smallest:

// 1

// Remove next smallest:

// 3

// Connect:

// 1 + 3 = 4

// Cost:

// total = 4

// Put 4 back:

// [4, 11, 5]
// Step 2

// Remove:

// 4
// 5

// Connect:

// 4 + 5 = 9

// Cost:

// total = 4 + 9 = 13

// Put 9 back:

// [9, 11]
// Step 3

// Remove:

// 9
// 11

// Connect:

// 9 + 11 = 20

// Cost:

// total = 13 + 20 = 33

// Done.

