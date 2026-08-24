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

