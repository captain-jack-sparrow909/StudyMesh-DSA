// Rearrange String: Given a string, find if its letters can be rearranged in such a way that no two same characters come next to each other.

// **Example 1**:

// ```
// Input: "aappp"
// Output: "papap"
// Explanation: In "papap", none of the repeating characters come next to each other.

// ```

// **Example 2**:

// ```
// Input: "Programming"
// Output: "rgmrgmPiano" or "gmringmrPoa" or "gmrPagimnor", etc.
// Explanation: None of the repeating characters come next to each other.

// ```

// solution:
// This is a Max Heap + Greedy problem.

// The key idea is:

// Always place the character that currently has the highest frequency, but don't use the same character that we just placed.

// Why Max Heap?

// We want to use the character with the highest remaining frequency first.

// For:

// "aappp"

// frequencies are:

// a → 2
// p → 3

// Max Heap:

// p → 3
// a → 2


function rearrangeString(str) {
    // 1. Count frequencies
    const frequencyMap = new Map();
  
    for (const char of str) {
      frequencyMap.set(
        char,
        (frequencyMap.get(char) || 0) + 1
      );
    }
  
    // 2. Put [character, frequency] into Max Heap
    const maxHeap = new MaxHeap();
  
    for (const [char, frequency] of frequencyMap) {
      maxHeap.push([char, frequency]);
    }
  
    let result = "";
  
    // Character we used in the previous position
    let previous = null;
  
    while (maxHeap.size() > 0) {
      const [char, frequency] = maxHeap.pop();
  
      // We cannot use the same character twice in a row
      if (char === previous) {
        // There is no other character available
        if (maxHeap.size() === 0) {
          return "";
        }
  
        // Take the next most frequent character
        const [nextChar, nextFrequency] = maxHeap.pop();
  
        result += nextChar;
        previous = nextChar;
  
        // Put it back if it still has copies
        if (nextFrequency > 1) {
          maxHeap.push([nextChar, nextFrequency - 1]);
        }
  
        // Put the blocked character back
        maxHeap.push([char, frequency]);
  
      } else {
        result += char;
        previous = char;
  
        // Put it back with one less occurrence
        if (frequency > 1) {
          maxHeap.push([char, frequency - 1]);
        }
      }
    }
  
    return result;
}
