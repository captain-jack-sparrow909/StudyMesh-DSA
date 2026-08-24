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


// This assumes the same MaxHeap class we've been using, where:

// maxHeap.push([char, frequency]);
// maxHeap.pop();
// maxHeap.size();

// and the heap compares the frequency.

// Let's understand the important part

// Take:

// "mmpp"
// K = 2

// Frequencies:

// m → 2
// p → 2

// Max Heap:

// m → 2
// p → 2

// We also have:

// const queue = [];

// The queue's job is:

// Keep recently used characters locked for K positions.

// Step 1

// Take m:

// result = "m"

// Put m into the waiting queue:

// queue = [m]

// m cannot immediately be used again.

// Step 2

// Take p:

// result = "mp"

// Queue:

// [m, p]

// Now m has waited one position.

// Step 3

// We need to release the character that has waited K = 2 positions.

// The queue gives us:

// m

// So m becomes available again.

// Then we can take:

// m

// Result:

// "mpm"

// Queue now contains the recently used characters.

// Step 4

// Release p, then use it:

// "mpmp"

// Final:

// "mpmp"

// The two ms are:

// m p m
// ↑   ↑

// They are 2 positions apart.

// Why do we need the queue?

// This is the main difference from the previous problem.

// Previously, we only needed to remember:

// previous

// because a character couldn't be used immediately again.

// Here, if:

// K = 3

// a character can't be used again for 3 positions.

// So we need to remember several recently used characters.

// That's why we use:

// queue

// Think of it as a waiting room:

// Use character
//      ↓
// Waiting room
//      ↓
// wait K positions
//      ↓
// Character becomes available again
//      ↓
// Put it back into Max Heap
// Example 3: "aab", K = 2

// Frequencies:

// a → 2
// b → 1
// First
// a

// Result:

// "a"

// a goes into the waiting queue.

// Second

// We cannot use a, so use:

// b

// Result:

// "ab"

// Now a has waited enough:

// a → available again
// Third

// Use a:

// "aba"

// Done.

// a b a
// ↑   ↑

// The two as are 2 positions apart.

// The pattern to remember

// For these two problems:

// No adjacent same characters
// Frequency Map
//       ↓
//    Max Heap
//       ↓
// previous character
// K distance apart
// Frequency Map
//       ↓
//    Max Heap
//       ↓
//    Queue
//       ↓
// wait K positions
//       ↓
// put character back into Heap

// The Max Heap answers:

// "Which available character should I use next?"

// The Queue answers:

// "Which previously used character has waited long enough and can become available again?"
