// Sum of Elements: Given an array, find the sum of all numbers between the K1’th and K2’th smallest elements of that array.

// **Example 1**:

// ```
// Input: [1, 3, 12, 5, 15, 11], and K1=3, K2=6
// Output: 23
// Explanation: The 3rd smallest number is 5 and 6th smallest number 15. The sum of numbers coming
// between 5 and 15 is 23 (11+12).

// ```

// **Example 2**:

// ```
// Input: [3, 5, 8, 7], and K1=1, K2=4
// Output: 12
// Explanation: The sum of the numbers between the 1st smallest number (3) and the 4th smallest 
// number (8) is 12 (5+7).

// ```

// solution:

// For this problem, the easiest approach is:

// Find the K1-th smallest number.
// Find the K2-th smallest number.
// Add the numbers strictly between them.

// Since this problem comes from the Heap patterns you're learning, we can use a Min Heap.

function sumOfElements(nums, k1, k2) {
    const minHeap = new MinHeap();
  
    // Put all numbers into the Min Heap
    for (const num of nums) {
      minHeap.push(num);
    }
  
    let sum = 0;
  
    // Remove numbers one by one in sorted order
    // until we reach K1
    for (let i = 0; i < k1; i++) {
      minHeap.pop();
    }
  
    // Now the heap's smallest element is the
    // K1+1 th smallest number.
    // Add elements until K2.
    for (let i = k1 + 1; i < k2; i++) {
      sum += minHeap.pop();
    }
  
    return sum;
}


// Assuming your MinHeap has the usual:

// push()
// pop()
// peek()
// size()

// methods we've been using.

// Example 1
// nums = [1, 3, 12, 5, 15, 11]
// K1 = 3
// K2 = 6

// If we sort the array just to understand:

// [1, 3, 5, 11, 12, 15]

// Positions:

// 1st → 1
// 2nd → 3
// 3rd → 5
// 4th → 11
// 5th → 12
// 6th → 15

// We want numbers between the 3rd and 6th:

// 5
// ↓
// 11
// 12
// ↓
// 15

// Notice that we don't include 5 or 15.

// Therefore:

// 11 + 12 = 23
// Why this loop?
// for (let i = 0; i < k1; i++) {
//   minHeap.pop();
// }

// For k1 = 3, we remove:

// 1st → 1
// 2nd → 3
// 3rd → 5

// Now the heap starts with:

// 11

// So the next element is the 4th smallest.

// Then:

// for (let i = k1 + 1; i < k2; i++) {
//   sum += minHeap.pop();
// }

// For:

// k1 = 3
// k2 = 6

// the loop becomes:

// i = 4
// i = 5

// So we take:

// 4th → 11
// 5th → 12

// We stop before the 6th:

// 6th → 15

// because the problem says between the K1-th and K2-th elements.

// Therefore:

// 11 + 12 = 23
// Example 2
// nums = [3, 5, 8, 7]
// K1 = 1
// K2 = 4

// Sorted:

// [3, 5, 7, 8]

// Positions:

// 1st → 3
// 2nd → 5
// 3rd → 7
// 4th → 8

// Numbers between 1st and 4th:

// 5 + 7 = 12

// Answer:

// 12
// The important pattern

// Whenever you see:

// K1-th smallest and K2-th smallest

// think:

// Min Heap
//    ↓
// Pop until K1
//    ↓
// Skip K1 itself
//    ↓
// Add K1+1 ... K2-1

// So for:

// K1 = 3
// K2 = 6

// we want:

// 3rd      4th    5th      6th
//  ↓        ↓      ↓        ↓
// [ 5 ]   [ 11 ] [ 12 ]   [ 15 ]
//           ↑      ↑
//          ADD    ADD

// The answer is:

// 11 + 12 = 23

// Time: O(N + K2 log N) with a heap, depending on heap construction.
// Space: O(N) for the heap.
