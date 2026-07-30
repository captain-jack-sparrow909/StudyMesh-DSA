// Remove All Adjacent Duplicates In String: You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made.

// Examples

// Input: s = "abccba"
// Output: ""
// Explanation: First, we remove "cc" to get "abba". Then, we remove "bb" to get "aa". Finally, we remove "aa" to get an empty string.


// solution:
// Use a stack.

// For each character:

// If it matches the top of the stack, remove the top.
// Otherwise, push the character.


function removeAdjacentDuplicates(s) {
    const stack = [];
  
    for (const char of s) {
      if (
        stack.length > 0 &&
        stack[stack.length - 1] === char
      ) {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
  
    return stack.join("");
}

// Example
// removeAdjacentDuplicates("abccba");
// // ""

// Step by step:

// Character   Action              Stack
// a           push                [a]
// b           push                [a, b]
// c           push                [a, b, c]
// c           matches top c       [a, b]
// b           matches top b       [a]
// a           matches top a       []

// Final result:

// ""
// Why does this handle repeated removals?

// Consider:

// abccba

// When the second c removes the first c, the new top becomes b.

// Then the next character is also b, so they are removed too. The same happens with a.

// The stack automatically exposes newly adjacent characters after every removal.

