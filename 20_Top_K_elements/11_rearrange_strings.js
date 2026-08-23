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
