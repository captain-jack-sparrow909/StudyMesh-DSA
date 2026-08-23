// Kth Largest Number in a Stream: Design a class to efficiently find the Kth largest element in a stream of numbers.

// The class should have the following two things:

// The constructor of the class should accept an integer array containing initial numbers from the stream and an integer ‘K’.
// The class should expose a function add(int num) which will store the given number and return the Kth largest number.
// Example 1:

// Input: [3, 1, 5, 12, 2, 11], K = 4
// 1. Calling add(6) should return '5'.
// 2. Calling add(13) should return '6'.
// 2. Calling add(4) should still return '6'.


// solution:
// This is another Top K + Min Heap problem. The main difference is that numbers keep arriving, so we need to maintain the answer after every add().

// The key idea

// For the Kth largest number:

// Keep the K largest numbers in a Min Heap.

// Why Min Heap?

// Because among those K largest numbers, the smallest one is the Kth largest.

// For example, if:

// K = 4

// and our 4 largest numbers are:

// [5, 6, 11, 12]

// A Min Heap looks conceptually like:

//        5
//       / \
//      6   11
//     /
//    12

// The smallest is at the top:

// 5 ← Kth largest

// So:

// heap.peek()

// gives us the answer.

// Step 1: Process the initial numbers
// [3, 1, 5, 12, 2, 11]
// K = 4

// Sort just to understand:

// [1, 2, 3, 5, 11, 12]

// The 4 largest are:

// [5, 11, 12, 3]

// So the 4th largest = 3.

// Our Min Heap should contain:

// [3, 5, 11, 12]

// and:

// heap.peek() = 3
// Step 2: add(6)

// Add 6:

// [3, 5, 11, 12, 6]

// We only want 4 numbers.

// So remove the smallest:

// 3

// Now:

// [5, 6, 11, 12]

// The top of the Min Heap is:

// 5

// Therefore:

// add(6) // 5
// Step 3: add(13)

// Current heap:

// [5, 6, 11, 12]

// Add 13:

// [5, 6, 11, 12, 13]

// Too many → remove smallest:

// 5

// Now:

// [6, 11, 12, 13]

// The smallest is:

// 6

// Therefore:

// add(13) // 6
// Step 4: add(4)

// Current:

// [6, 11, 12, 13]

// Add 4:

// [4, 6, 11, 12, 13]

// Remove smallest:

// 4

// We're back to:

// [6, 11, 12, 13]

// So:

// add(4) // 6

