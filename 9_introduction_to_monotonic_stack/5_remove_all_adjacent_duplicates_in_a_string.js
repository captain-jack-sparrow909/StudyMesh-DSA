// Remove All Adjacent Duplicates in String : You are given a string s and an integer k. Your task is to remove groups of identical, 
// consecutive characters from the string such that each group has exactly k characters. The removal of groups should continue until it's no 
// longer possible to make any more removals. The result should be the final version of the string after all possible removals have been made.

// Examples

// Input: s = "abbbaaca", k = 3
// Output: "ca"


// solution:
// Use a stack that stores:
// [character, count]
// When the same character appears consecutively, increase its count. Once the count becomes k, remove that group from the stack.


function removeAdjacentDuplicates(s, k) {
    const stack = [];
  
    for (const char of s) {
      if (
        stack.length > 0 &&
        stack[stack.length - 1][0] === char
      ) {
        stack[stack.length - 1][1]++;
      } else {
        stack.push([char, 1]);
      }
  
      if (stack[stack.length - 1][1] === k) {
        stack.pop();
      }
    }
  
    let result = "";
  
    for (const [char, count] of stack) {
      result += char.repeat(count);
    }
  
    return result;
}


// Example
// removeAdjacentDuplicates("abbbaaca", 3);
// // "ca"
// Step by step

// Input:

// s = "abbbaaca"
// k = 3
// Process a
// stack = [[a, 1]]
// Process first b
// stack = [[a, 1], [b, 1]]
// Process second b

// The top already contains b, so increase its count:

// stack = [[a, 1], [b, 2]]
// Process third b
// stack = [[a, 1], [b, 3]]

// The count has reached k = 3, so remove the group:

// stack = [[a, 1]]

// The remaining string is effectively:

// aaaca
// Process next a

// The top contains a, so:

// stack = [[a, 2]]
// Process next a
// stack = [[a, 3]]

// Again, the count reaches 3, so remove the group:

// stack = []

// The remaining string is now:

// ca
// Process c
// stack = [[c, 1]]
// Process final a
// stack = [[c, 1], [a, 1]]

// Build the final string:

// "ca"
// Why does this handle repeated removals?

// When "bbb" is removed, the a before it becomes adjacent to the following aa:

// a + bbb + aa

// After removing bbb:

// aaa

// The stack already contains the first a, so the following a characters increase the same count until it reaches k.







// when to use if and when to use while: 

// Use if when you need to check something once.

// Use while when the same action may need to repeat multiple times.

// In this code:

// if (
//   stack.length > 0 &&
//   stack[stack.length - 1][0] === char
// ) {
//   stack[stack.length - 1][1]++;
// } else {
//   stack.push([char, 1]);
// }

// we use if because for each character, we only compare it with the current top of the stack once.

// For example, processing "b":

// stack top = ["b", 2]
// current char = "b"

// We increment once:

// ["b", 2] → ["b", 3]

// There is no need to keep repeating the same comparison for that one character.

// When while is needed

// In Next Greater Element:

// while (
//   stack.length > 0 &&
//   stack[stack.length - 1] < num
// ) {
//   stack.pop();
// }

// One new number may remove several elements.

// Example:

// stack = [6, 5, 3]
// num = 7

// 7 is greater than 3, so pop 3.

// It is also greater than 5, so pop 5.

// It is also greater than 6, so pop 6.

// That requires repeated checking, so we use while.

// Simple rule
// if    → check once
// while → keep checking until the condition becomes false

// For adjacent duplicates with count k, each character updates only one group, so if is enough.
