// Longest Substring with Same Letters after Replacement: Given a string with lowercase letters only, 
// if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.



// Use a sliding window.

// The idea is:

// Keep track of the most frequent character in the current window.
// All other characters would need to be replaced.
// If replacements needed are more than k, shrink the window.

const longestSubstringWithSameLettersAfterReplacement = (str, k) => {
    let maxRepeatCount = 0;
    let frequency = {}
    let windowStart = 0;
    let maxLength = 0;

    for (let windowEnd = 0; windowEnd<str.length; windowEnd++) {
        const wordRight = str[windowEnd];
        frequency[wordRight] = (frequency[wordRight] || 0) + 1

        maxRepeatCount = Math.max(frequency[wordRight], maxRepeatCount);

        //windows length:
        let windowLength = windowEnd - windowStart + 1;

        //replacement needed ?
        const replacementNeeded = windowLength - maxRepeatCount;  //why this b.c if we've 5 window's length and k=2, if more words needed to be replaced than k, then we truncate from left

        if (replacementNeeded > k) {
            const wordLeft = str[windowStart]
            frequency[wordLeft]--;
            windowStart++;
        }

        maxLength = Math.max(
            maxLength, 
            windowEnd - windowStart + 1
        )
    }

    return maxLength;
}

// How it is working is below:


// The formula comes from this idea:

// ```javascript
// replacementsNeeded = windowLength - maxRepeatCount;
// ```

// Inside the current window, we keep the character that appears most often and replace all other characters.

// For example:

// ```text
// Window: "bccbb"
// ```

// Character counts:

// ```text
// b = 3
// c = 2
// ```

// The window length is `5`, and the most frequent character appears `3` times.

// To make every character `b`, we only replace the two `c`s:

// ```text
// 5 - 3 = 2 replacements
// ```

// So:

// ```javascript
// replacementsNeeded = windowLength - maxRepeatCount;
// ```

// means:

// ```text
// all characters - characters we keep
// ```







// ---

// ## Step-by-step example

// ```javascript
// longestSubstringAfterReplacement("aabccbb", 2);
// ```

// We can replace at most `2` characters.

// Initial values:

// ```text
// windowStart = 0
// maxLength = 0
// maxRepeatCount = 0
// ```

// ### Step 1: Add `"a"`

// ```text
// Window: "a"
// Frequency: { a: 1 }
// maxRepeatCount = 1
// ```

// ```text
// windowLength = 1
// replacementsNeeded = 1 - 1 = 0
// ```

// The window is valid.

// ```text
// maxLength = 1
// ```

// ---

// ### Step 2: Add another `"a"`

// ```text
// Window: "aa"
// Frequency: { a: 2 }
// maxRepeatCount = 2
// ```

// ```text
// windowLength = 2
// replacementsNeeded = 2 - 2 = 0
// ```

// No replacements are needed.

// ```text
// maxLength = 2
// ```

// ---

// ### Step 3: Add `"b"`

// ```text
// Window: "aab"
// Frequency: { a: 2, b: 1 }
// maxRepeatCount = 2
// ```

// We keep the two `a`s and replace `b`:

// ```text
// windowLength = 3
// replacementsNeeded = 3 - 2 = 1
// ```

// Since `1 <= k`, the window is valid.

// ```text
// maxLength = 3
// ```

// ---

// ### Step 4: Add `"c"`

// ```text
// Window: "aabc"
// Frequency: { a: 2, b: 1, c: 1 }
// maxRepeatCount = 2
// ```

// We keep the two `a`s and replace `b` and `c`:

// ```text
// windowLength = 4
// replacementsNeeded = 4 - 2 = 2
// ```

// Since `2 <= k`, the window is valid.

// ```text
// maxLength = 4
// ```

// ---

// ### Step 5: Add another `"c"`

// ```text
// Window: "aabcc"
// Frequency: { a: 2, b: 1, c: 2 }
// maxRepeatCount = 2
// ```

// ```text
// windowLength = 5
// replacementsNeeded = 5 - 2 = 3
// ```

// We would need three replacements, but `k = 2`.

// So the window is invalid. Remove the leftmost character, `"a"`:

// ```text
// New window: "abcc"
// Frequency: { a: 1, b: 1, c: 2 }
// windowStart = 1
// ```

// The current window length is now `4`.

// ```text
// maxLength remains 4
// ```

// ---

// ### Step 6: Add `"b"`

// ```text
// Window: "abccb"
// Frequency: { a: 1, b: 2, c: 2 }
// maxRepeatCount = 2
// ```

// ```text
// windowLength = 5
// replacementsNeeded = 5 - 2 = 3
// ```

// Too many replacements again.

// Remove the leftmost `"a"`:

// ```text
// New window: "bccb"
// Frequency: { a: 0, b: 2, c: 2 }
// windowStart = 2
// ```

// Current length:

// ```text
// 4
// ```

// So:

// ```text
// maxLength remains 4
// ```

// ---

// ### Step 7: Add the final `"b"`

// ```text
// Window: "bccbb"
// Frequency: { b: 3, c: 2 }
// maxRepeatCount = 3
// ```

// ```text
// windowLength = 5
// replacementsNeeded = 5 - 3 = 2
// ```

// This is valid because we can replace both `c`s:

// ```text
// "bccbb"
//    ↓↓
// "bbbbb"
// ```

// So:

// ```text
// maxLength = 5
// ```

// ## Final answer

// ```javascript
// 5
// ```

// The longest valid substring is:

// ```text
// "bccbb"
// ```

// Replace both `c`s with `b`, producing five identical letters.

