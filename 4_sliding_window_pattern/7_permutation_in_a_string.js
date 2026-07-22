// Permutation in a String
// Given a string and a pattern, find out if the string contains any permutation of the pattern.


// solution: 
// Use a sliding window with the same length as the pattern.
// A permutation has the same characters with the same frequencies, only the order changes.

function containsPermutation(str, pattern) {
    const frequency = {};
  
    for (const char of pattern) {
      frequency[char] = (frequency[char] || 0) + 1;
    }
  
    let windowStart = 0;
    let matched = 0;
  
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
  
      if (rightChar in frequency) {
        frequency[rightChar]--;
  
        if (frequency[rightChar] === 0) {
          matched++;
        }
      }
  
      // Every pattern character has the required frequency
      if (matched === Object.keys(frequency).length) {
        return true;
      }
  
      // Keep the window the same size as the pattern
      if (windowEnd >= pattern.length - 1) {
        const leftChar = str[windowStart];
  
        if (leftChar in frequency) {
          if (frequency[leftChar] === 0) {
            matched--;
          }
  
          frequency[leftChar]++;
        }
  
        windowStart++;
      }
    }
  
    return false;
  }


//   Example
//   containsPermutation("oidbcaf", "abc"); // true
  
//   The pattern is:
  
//   "abc"
  
//   Its permutations include:
  
//   abc, acb, bac, bca, cab, cba
  
//   The string contains:
  
//   "bca"
  
//   So the result is true.
  
//   Step-by-step window
  
//   For:
  
//   str = "oidbcaf"
//   pattern = "abc"
  
//   The window size is 3.
  
//   "oid" → not a permutation
//   "idb" → not a permutation
//   "dbc" → not a permutation
//   "bca" → contains a, b, and c
  
//   So we return true.
  
//   Why use matched?
  
//   For pattern "abc":
  
//   frequency = {
//     a: 1,
//     b: 1,
//     c: 1
//   };
  
//   When a character's count becomes 0, it means the current window contains exactly the required number of that character:
  
//   if (frequency[rightChar] === 0) {
//     matched++;
//   }
  
//   When matched equals the number of distinct pattern characters, all required characters are present.


// This part removes the leftmost character once the window reaches the pattern’s length.

// ```javascript
// if (windowEnd >= pattern.length - 1) {
// ```

// For pattern `"abc"`:

// ```text
// pattern.length = 3
// pattern.length - 1 = 2
// ```

// When `windowEnd` reaches index `2`, the first window has 3 characters:

// ```text
// indices 0, 1, 2
// ```

// Now before adding the next character, we remove the leftmost one so the window stays size `3`.

// For example:

// ```text
// str = "oidbcaf"
// ```

// First window:

// ```text
// "oid"
// ```

// To move to the next window:

// ```text
// "oid" → remove "o" → add "b" → "idb"
// ```

// This line gets the character leaving the window:

// ```javascript
// const leftChar = str[windowStart];
// ```

// Then:

// ```javascript
// if (leftChar in frequency)
// ```

// checks whether that character belongs to the pattern.

// Suppose the pattern is `"abc"` and `leftChar` is `"b"`.

// When `"b"` entered the window, we decreased its required count:

// ```javascript
// frequency["b"]--;
// ```

// When `"b"` leaves the window, we must undo that:

// ```javascript
// frequency["b"]++;
// ```

// But before increasing it, we check:

// ```javascript
// if (frequency[leftChar] === 0) {
//   matched--;
// }
// ```

// Why?

// Because `0` means the window currently has the exact required number of that character.

// If that character now leaves, the window no longer has enough of it, so:

// ```javascript
// matched--;
// ```

// Finally:

// ```javascript
// windowStart++;
// ```

// moves the start of the window one step right.

// So the full idea is:

// ```text
// Window reached pattern size
// → remove the leftmost character
// → undo its frequency effect
// → move windowStart right
// ```
