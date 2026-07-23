// Smallest Window containing Substring: Given a string and a pattern, find the smallest substring in the given string which has all the character occurrences of the given pattern.


// Use a sliding window with a frequency map.

// We expand the window until it contains all characters of the pattern, then shrink it from the left to find the smallest valid window.

function smallestWindow(str, pattern) {
    const frequency = {};
  
    for (const char of pattern) {
      frequency[char] = (frequency[char] || 0) + 1;
    }
  
    let windowStart = 0;
    let matched = 0;
  
    let minLength = Infinity;
    let minStart = 0;
  
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
  
      // Include the right character
      if (rightChar in frequency) {
        frequency[rightChar]--;
  
        // Count only required occurrences
        if (frequency[rightChar] >= 0) {
          matched++;
        }
      }
  
      // Window contains all pattern characters
      while (matched === pattern.length) {
        const currentLength = windowEnd - windowStart + 1;
  
        if (currentLength < minLength) {
          minLength = currentLength;
          minStart = windowStart;
        }
  
        // Remove the left character
        const leftChar = str[windowStart];
  
        if (leftChar in frequency) {
          frequency[leftChar]++;
  
          // We removed a required character
          if (frequency[leftChar] > 0) {
            matched--;
          }
        }
  
        windowStart++;
      }
    }
  
    if (minLength === Infinity) {
      return "";
    }
  
    return str.slice(minStart, minStart + minLength);
  }



//   These two checks handle opposite actions:

//   * When a character **enters** the window, decide whether it satisfies a required occurrence.
//   * When a character **leaves** the window, decide whether we just lost a required occurrence.
  
//   Suppose:
  
//   ```javascript
//   str = "aabdec";
//   pattern = "abc";
//   ```
  
//   Initial frequency map:
  
//   ```javascript
//   {
//     a: 1,
//     b: 1,
//     c: 1
//   }
//   ```
  
//   The numbers mean how many more occurrences we still need.
  
//   ## When a character enters
  
//   ```javascript
//   frequency[rightChar]--;
  
//   if (frequency[rightChar] >= 0) {
//     matched++;
//   }
//   ```
  
//   ### First `"a"` enters
  
//   Before:
  
//   ```text
//   a: 1
//   ```
  
//   After decreasing:
  
//   ```text
//   a: 0
//   ```
  
//   Because `0 >= 0`, this `"a"` was required:
  
//   ```javascript
//   matched++;
//   ```
  
//   ### Second `"a"` enters
  
//   Before:
  
//   ```text
//   a: 0
//   ```
  
//   After decreasing:
  
//   ```text
//   a: -1
//   ```
  
//   Because `-1 >= 0` is false, this is an extra `"a"`. We do not increase `matched`.
  
//   So the rule is:
  
//   ```text
//   frequency >= 0 after decreasing
//   → this character was needed
//   ```
  
//   A negative frequency means the window contains extra copies.
  
//   ---
  
//   ## When a character leaves
  
//   ```javascript
//   frequency[leftChar]++;
  
//   if (frequency[leftChar] > 0) {
//     matched--;
//   }
//   ```
  
//   We first increase the frequency because we are removing one occurrence from the window.
  
//   ### Removing an extra `"a"`
  
//   Suppose:
  
//   ```text
//   a: -1
//   ```
  
//   After removing one `"a"`:
  
//   ```text
//   a: 0
//   ```
  
//   Because `0 > 0` is false, we did not lose a required `"a"`. We only removed an extra one.
  
//   So `matched` stays unchanged.
  
//   ### Removing the required `"a"`
  
//   Suppose:
  
//   ```text
//   a: 0
//   ```
  
//   After removing it:
  
//   ```text
//   a: 1
//   ```
  
//   Because `1 > 0` is true, the window now needs one `"a"` again.
  
//   Therefore:
  
//   ```javascript
//   matched--;
//   ```
  
//   ## Simple meaning
  
//   ```javascript
//   if (frequency[rightChar] >= 0) {
//     matched++;
//   }
//   ```
  
//   means:
  
//   > The character entering the window satisfies a requirement.
  
//   And:
  
//   ```javascript
//   if (frequency[leftChar] > 0) {
//     matched--;
//   }
//   ```
  
//   means:
  
//   > The character leaving the window creates a missing requirement.
  
//   The difference between `>= 0` and `> 0` is because the first check happens **after subtracting**, while the second happens **after adding back**.
  