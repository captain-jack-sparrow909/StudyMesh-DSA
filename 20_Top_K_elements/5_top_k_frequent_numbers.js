// Top 'K' Frequent Numbers: Given an unsorted array of numbers, find the top ‘K’ frequently occurring numbers in it.

// **Example 1**:

// ```
// Input: [1, 3, 5, 12, 11, 12, 11], K = 2
// Output: [12, 11]
// Explanation: Both '11' and '12' appeared twice.

// ```

// **Example 2**:

// ```
// Input: [5, 12, 11, 3, 11], K = 2
// Output: [11, 5] or [11, 12] or [11, 3]
// Explanation: Only '11' appeared twice; all other numbers appeared once.
// ```


// solution:
// This is another Top K + Heap problem. The new part is that we first need to count how many times each number appears.

// The easiest approach is:

// Use a HashMap to count frequencies, then use a Min Heap of size K.

// 1. First count how often each number appears

// Example:

// [1, 3, 5, 12, 11, 12, 11]

// We build a frequency map:

// 1  → 1
// 3  → 1
// 5  → 1
// 12 → 2
// 11 → 2

// In JavaScript:

// const frequencyMap = new Map();

// for (let num of nums) {
//   frequencyMap.set(
//     num,
//     (frequencyMap.get(num) || 0) + 1
//   );
// }

// So now we know:

// number    frequency
//   1          1
//   3          1
//   5          1
//  12          2
//  11          2
// 2. Now we want the Top K frequencies

// We want:

// K = 2

// So we want the 2 numbers with the highest frequency.

// This is essentially:

// Find the K largest frequencies.

// Remember our earlier pattern:

// K largest
//    ↓
// Min Heap
//    ↓
// remove smallest

// So we'll use a Min Heap.

// But this time the thing we're comparing is not the number itself.

// We're comparing its frequency.

// 3. What goes into the heap?

// We need both:

// number + frequency

// For example:

// [12, 2]

// means:

// number = 12
// frequency = 2

// Another:

// [5, 1]

// means:

// number = 5
// frequency = 1
// 4. Walk through the example

// Frequency map:

// 1  → 1
// 3  → 1
// 5  → 1
// 12 → 2
// 11 → 2

// K = 2.

// Add 1
// Heap:

// [1, frequency 1]
// Add 3
// Heap:

// [1, frequency 1]
// [3, frequency 1]

// We have K numbers.

// Add 5

// Now we have 3:

// 1 → 1
// 3 → 1
// 5 → 1

// But K = 2.

// Remove the smallest frequency:

// frequency = 1

// One of them gets removed.

// We're left with two numbers having frequency 1.

// Add 12
// 12 → 2

// Now the heap contains something like:

// 1 → 1
// 12 → 2

// We have 2 elements.

// Add 11
// 11 → 2

// Temporarily:

// 1  → 1
// 12 → 2
// 11 → 2

// We have 3, so remove the smallest frequency:

// 1 → 1

// We're left with:

// 12 → 2
// 11 → 2

// Therefore:

// [12, 11]

class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    size() {
      return this.heap.length;
    }
  
    push(item) {
      this.heap.push(item);
      this.heapifyUp();
    }
  
    pop() {
      if (this.heap.length === 0) {
        return null;
      }
  
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
  
      const min = this.heap[0];
  
      this.heap[0] = this.heap.pop();
  
      this.heapifyDown();
  
      return min;
    }
  
    peek() {
      return this.heap[0];
    }
  
    heapifyUp() {
      let index = this.heap.length - 1;
  
      while (index > 0) {
        const parent = Math.floor((index - 1) / 2);
  
        // Compare frequencies
        if (this.heap[parent][1] <= this.heap[index][1]) {
          break;
        }
  
        [this.heap[parent], this.heap[index]] =
          [this.heap[index], this.heap[parent]];
  
        index = parent;
      }
    }
  
    heapifyDown() {
      let index = 0;
  
      while (true) {
        const left = index * 2 + 1;
        const right = index * 2 + 2;
  
        let smallest = index;
  
        if (
          left < this.heap.length &&
          this.heap[left][1] < this.heap[smallest][1]
        ) {
          smallest = left;
        }
  
        if (
          right < this.heap.length &&
          this.heap[right][1] < this.heap[smallest][1]
        ) {
          smallest = right;
        }
  
        if (smallest === index) {
          break;
        }
  
        [this.heap[index], this.heap[smallest]] =
          [this.heap[smallest], this.heap[index]];
  
        index = smallest;
      }
    }
}

function findTopKFrequentNumbers(nums, k) {
    const frequencyMap = new Map();
  
    // 1. Count frequencies
    for (let num of nums) {
      frequencyMap.set(
        num,
        (frequencyMap.get(num) || 0) + 1
      );
    }
  
    // 2. Min Heap
    const minHeap = new MinHeap();
  
    // 3. Process each number + frequency
    for (let [num, frequency] of frequencyMap) {
      minHeap.push([num, frequency]);
  
      if (minHeap.size() > k) {
        minHeap.pop();
      }
    }
  
    // 4. Get the numbers
    return minHeap.heap.map(item => item[0]);
}
