// Frequency Sort: Given a string, sort it based on the decreasing frequency of its characters.

// **Example 1**:

// ```
// Input: "Programming"
// Output: "rrggmmPiano"
// Explanation: 'r', 'g', and 'm' appeared twice, so they need to appear before any other character.

// ```

// **Example 2**:

// ```
// Input: "abcbab"
// Output: "bbbaac"
// Explanation: 'b' appeared three times, 'a' appeared twice, and 'c' appeared only once.
// ```

// solution:
// This is very similar to Top K Frequent Numbers.

// The difference is:

// Top K Frequent → keep only K characters/numbers.
// Frequency Sort → keep all characters, but arrange them from highest frequency → lowest frequency.

// The easiest way to understand it is in 3 steps.

// Step 1: Count each character

// Take:

// "abcbab"

// Count them:

// a → 2
// b → 3
// c → 1

// In JavaScript:

// const frequencyMap = new Map();

// for (let char of str) {
//   frequencyMap.set(
//     char,
//     (frequencyMap.get(char) || 0) + 1
//   );
// }

// Now:

// a → 2
// b → 3
// c → 1
// Step 2: Put characters into a Max Heap

// We want the highest frequency first.

// So this time we use a Max Heap.

// Why?

// Because:

// Max Heap always gives us the character with the highest frequency.

// We'll store:

// [character, frequency]

// For example:

// ["b", 3]
// ["a", 2]
// ["c", 1]

// The Max Heap will put:

// ["b", 3]

// at the top.

// Step 3: Keep removing the highest frequency

// Start:

// b → 3
// a → 2
// c → 1
// Remove b

// Frequency = 3:

// bbb

// Result:

// "bbb"
// Remove a

// Frequency = 2:

// aa

// Result:

// "bbbaa"
// Remove c

// Frequency = 1:

// c

// Final:

// "bbbaac"

class MaxHeap {
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
  
      const max = this.heap[0];
  
      this.heap[0] = this.heap.pop();
  
      this.heapifyDown();
  
      return max;
    }
  
    heapifyUp() {
      let index = this.heap.length - 1;
  
      while (index > 0) {
        const parent = Math.floor((index - 1) / 2);
  
        // Compare frequencies
        if (this.heap[parent][1] >= this.heap[index][1]) {
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
  
        let largest = index;
  
        if (
          left < this.heap.length &&
          this.heap[left][1] > this.heap[largest][1]
        ) {
          largest = left;
        }
  
        if (
          right < this.heap.length &&
          this.heap[right][1] > this.heap[largest][1]
        ) {
          largest = right;
        }
  
        if (largest === index) {
          break;
        }
  
        [this.heap[index], this.heap[largest]] =
          [this.heap[largest], this.heap[index]];
  
        index = largest;
      }
    }
}


function frequencySort(str) {
    const frequencyMap = new Map();
  
    // Step 1: Count characters
    for (let char of str) {
      frequencyMap.set(
        char,
        (frequencyMap.get(char) || 0) + 1
      );
    }
  
    // Step 2: Put [character, frequency] into Max Heap
    const maxHeap = new MaxHeap();
  
    for (let [char, frequency] of frequencyMap) {
      maxHeap.push([char, frequency]);
    }
  
    // Step 3: Remove highest frequency characters
    let result = "";
  
    while (maxHeap.size() > 0) {
      const [char, frequency] = maxHeap.pop();
  
      result += char.repeat(frequency);
    }
  
    return result;
}
