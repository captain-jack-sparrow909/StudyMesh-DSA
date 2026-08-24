// Rearrange String K Distance Apart: Given a string and a number ‘K’, find if the string can be rearranged such 
// that the same characters are at least ‘K’ distance apart from each other.

// **Example 1**:

// ```
// Input: "mmpp", K=2
// Output: "mpmp" or "pmpm"
// Explanation: All same characters are 2 distance apart.

// ```

// **Example 2**:

// ```
// Input: "Programming", K=3
// Output: "rgmPrgmiano" or "gmringmrPoa" or "gmrPagimnor" and a few more  
// Explanation: All same characters are 3 distance apart.

// ```

// **Example 3**:

// ```
// Input: "aab", K=2
// Output: "aba"
// Explanation: All same characters are 2 distance apart.
// ```

// solution:
// This is very similar to the previous Rearrange String problem, but now instead of saying:

// same characters cannot be next to each other

// we say:

// same characters must have at least K positions between them.

// The pattern is:

// Frequency Map → Max Heap → Queue


function rearrangeStringKDistance(str, k) {
    if (k <= 1) {
      return str;
    }
  
    // Count frequencies
    const frequencyMap = new Map();
  
    for (const char of str) {
      frequencyMap.set(
        char,
        (frequencyMap.get(char) || 0) + 1
      );
    }
  
    // Max Heap: [character, frequency]
    const maxHeap = new MaxHeap();
  
    for (const [char, frequency] of frequencyMap) {
      maxHeap.push([char, frequency]);
    }
  
    // Characters that are temporarily unavailable
    const queue = [];
  
    let result = "";
  
    while (maxHeap.size() > 0) {
      const [char, frequency] = maxHeap.pop();
  
      result += char;
  
      // Put the character into the waiting queue
      queue.push([char, frequency - 1]);
  
      // Once a character has waited K positions,
      // it can be used again.
      if (queue.length >= k) {
        const [releasedChar, releasedFrequency] = queue.shift();
  
        if (releasedFrequency > 0) {
          maxHeap.push([
            releasedChar,
            releasedFrequency
          ]);
        }
      }
    }
  
    // If result doesn't contain every character,
    // rearrangement wasn't possible.
    return result.length === str.length ? result : "";
}

