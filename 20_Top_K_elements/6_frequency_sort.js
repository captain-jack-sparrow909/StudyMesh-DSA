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

