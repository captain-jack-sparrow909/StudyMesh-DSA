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


// Let's simplify the logic

// The important part is this:

// const [char, frequency] = maxHeap.pop();

// We're taking the character with the highest remaining frequency.

// Then:

// if (char === previous)

// We ask:

// "Is this the same character I just placed?"

// If no, use it.

// If yes, we can't use it because that would create:

// aa

// or:

// pp

// So we temporarily use the next most frequent character.

// Example: "aappp"

// Frequency:

// a → 2
// p → 3
// Step 1

// Max Heap gives:

// p → 3

// Use p:

// result = "p"

// Remaining:

// p → 2
// a → 2
// Step 2

// Max Heap gives:

// p → 2

// But:

// previous = "p"

// So we cannot use p.

// Take the next character:

// a → 2

// Use a:

// result = "pa"

// Put a back with frequency 1.

// Put p back with frequency 2.

// Step 3

// Max Heap gives:

// p → 2

// Previous is a, so we're allowed to use p.

// result = "pap"

// Remaining:

// p → 1
// a → 1
// Step 4

// Max Heap gives:

// p → 1

// But previous is p, so we can't use it.

// Take:

// a → 1

// Result:

// "papa"

// Put p back.

// Step 5

// Use p:

// "papap"

// Done.

// Why do we need previous?

// This is the most important variable:

// let previous = null;

// It remembers:

// What character did I put in the result most recently?

// For example:

// result = "pap"
//              ↑
//         previous = "p"

// If the heap gives us another p:

// p

// we know:

// previous === char

// so we can't use it.

// What if it is impossible?

// Consider:

// "aaaab"

// Frequencies:

// a → 4
// b → 1

// Try:

// a b a ?

// Now we still have:

// a a

// There is no other character to separate them.

// So return:

// ""

// The general rule is:

// If the most frequent character occurs more than (length + 1) / 2, rearrangement is impossible.

// For "aaaab":

// length = 5
// (5 + 1) / 2 = 3

// but a occurs 4 times, so it's impossible.

// The pattern to remember

// This is a very useful Max Heap pattern:

// Need highest frequency
//         ↓
//      Max Heap
//         ↓
// Take most frequent
//         ↓
// Can't use previous character
//         ↓
// Take second most frequent
//         ↓
// Put previous character back
//         ↓
// Repeat

// So when you see:

// "Rearrange so no two same characters are adjacent"

// think:

// Frequency Map → Max Heap → Previous Character → Greedy.
