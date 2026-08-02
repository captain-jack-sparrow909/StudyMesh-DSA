// First Non-repeating Character: Given a string, identify the position of the first character that appears only once in the string. If no such character exists, return -1.

// Examples

// Example 1:

// Input: "apple"
// Expected Output: 0
// Justification: The first character 'a' appears only once in the string and is the first character.
// Example 2:

// Input: "abcab"
// Expected Output: 2
// Justification: The first character that appears only once is 'c' and its position is 2.


// solution:
// Use a frequency map in two passes:

// Count how many times each character appears.
// Scan the string again and return the first index whose character count is 1.


function firstUniqueCharacter(s) {
    const frequency = new Map();
  
    for (const char of s) {
      frequency.set(char, (frequency.get(char) || 0) + 1);
    }
  
    for (let i = 0; i < s.length; i++) {
      if (frequency.get(s[i]) === 1) {
        return i;
      }
    }
  
    return -1;
}

// Example 1
// firstUniqueCharacter("apple");
// // 0

// Count each character:

// a → 1
// p → 2
// l → 1
// e → 1

// Now scan from the beginning:

// index 0 → a → count is 1

// So return:

// 0
// Example 2
// firstUniqueCharacter("abcab");
// // 2

// Character counts:

// a → 2
// b → 2
// c → 1

// Scan from left to right:

// index 0 → a → appears twice
// index 1 → b → appears twice
// index 2 → c → appears once

// So return:

// 2
// Why do we need two passes?

// The first pass tells us the total frequency of every character.

// The second pass preserves the original order, so we can find the first character that appears once.

// For example:

// "apple"

// Both a, l, and e appear once, but a comes first.
