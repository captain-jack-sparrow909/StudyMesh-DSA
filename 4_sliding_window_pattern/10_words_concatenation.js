// Words Concatenation: You’re given a string s and a list of words words, where all words have the same length. 
// A concatenated substring is formed by joining all the words from any permutation of words — each used exactly once, without any extra characters in between. 
// For example, if words = ["ab", "cd", "ef"], then valid concatenated strings include "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab". 
// A string like "acdbef" is not valid because it doesn't match any complete permutation of the given words. Return all starting indices in s


// We need to find every substring that:

// Has length words.length * wordLength
// Contains every word exactly the required number of times
// Has no extra characters between words






// The question asks us to find every position in `s` where a substring begins that contains **all words exactly once**, in any order.

// All words have the same length, so we can divide each possible substring into equal-sized words.

// ## Understanding the expected result

// Example:

// ```javascript
// s = "catfoxcat";
// words = ["cat", "fox"];
// ```

// Each word has length `3`, and there are `2` words.

// So every valid concatenated substring must have length:

// ```text
// 2 × 3 = 6
// ```

// Valid permutations are:

// ```text
// "catfox"
// "foxcat"
// ```

// Inside `"catfoxcat"`:

// ```text
// Index:  0 1 2 3 4 5 6 7 8
// String: c a t f o x c a t
// ```

// Starting at index `0`:

// ```text
// "catfox"
// ```

// This is valid.

// Starting at index `3`:

// ```text
// "foxcat"
// ```

// This is also valid.

// Therefore, return:

// ```javascript
// [0, 3]
// ```

// We return the **starting indices**, not the substrings themselves.

// ---

// ## Solution


function findWordConcatenation(s, words) {
  if (s.length === 0 || words.length === 0) {
    return [];
  }

  const wordLength = words[0].length;
  const wordsCount = words.length;
  const totalLength = wordLength * wordsCount;

  const requiredWords = {};

  for (const word of words) {
    requiredWords[word] = (requiredWords[word] || 0) + 1;
  }

  const result = [];

  for (let start = 0; start <= s.length - totalLength; start++) {
    const usedWords = {};
    let wordsMatched = 0;

    for (let j = 0; j < wordsCount; j++) {
      const wordStart = start + j * wordLength;

      const currentWord = s.slice(
        wordStart,
        wordStart + wordLength
      );

      if (!(currentWord in requiredWords)) {
        break;
      }

      usedWords[currentWord] =
        (usedWords[currentWord] || 0) + 1;

      if (usedWords[currentWord] > requiredWords[currentWord]) {
        break;
      }

      wordsMatched++;
    }

    if (wordsMatched === wordsCount) {
      result.push(start);
    }
  }

  return result;
}


// ## Step 1: Calculate the required substring length

// ```javascript
// const wordLength = words[0].length;
// const wordsCount = words.length;
// const totalLength = wordLength * wordsCount;
// ```

// For:

// ```javascript
// words = ["cat", "fox"];
// ```

// We get:

// ```text
// wordLength = 3
// wordsCount = 2
// totalLength = 6
// ```

// Therefore, we only need to examine substrings of length `6`.

// ---

// ## Step 2: Count the required words

// ```javascript
// const requiredWords = {};

// for (const word of words) {
//   requiredWords[word] = (requiredWords[word] || 0) + 1;
// }
// ```

// For:

// ```javascript
// ["cat", "fox"]
// ```

// The map becomes:

// ```javascript
// {
//   cat: 1,
//   fox: 1
// }
// ```

// This means a valid substring must contain `"cat"` once and `"fox"` once.

// This also handles duplicate words:

// ```javascript
// words = ["cat", "cat", "fox"];
// ```

// The map would be:

// ```javascript
// {
//   cat: 2,
//   fox: 1
// }
// ```

// ---

// ## Step 3: Try every possible starting index

// ```javascript
// for (let start = 0; start <= s.length - totalLength; start++)
// ```

// Here:

// ```text
// s.length = 9
// totalLength = 6
// ```

// So:

// ```text
// start <= 9 - 6
// start <= 3
// ```

// We check starting indices:

// ```text
// 0, 1, 2, 3
// ```

// We do not check after index `3` because fewer than six characters remain.

// ---

// ## Step 4: Check the substring starting at index `0`

// ```text
// s = "catfoxcat"
// start = 0
// ```

// Create a map for words found in the current substring:

// ```javascript
// const usedWords = {};
// let wordsMatched = 0;
// ```

// ### First word

// ```javascript
// j = 0
// ```

// Calculate its starting position:

// ```javascript
// wordStart = start + j * wordLength;
// ```

// ```text
// wordStart = 0 + 0 × 3 = 0
// ```

// Extract three characters:

// ```javascript
// currentWord = s.slice(0, 3);
// ```

// Result:

// ```text
// "cat"
// ```

// `"cat"` is required, so record it:

// ```javascript
// usedWords = {
//   cat: 1
// }
// ```

// And:

// ```text
// wordsMatched = 1
// ```

// ### Second word

// ```javascript
// j = 1
// ```

// ```text
// wordStart = 0 + 1 × 3 = 3
// ```

// Extract:

// ```javascript
// s.slice(3, 6);
// ```

// Result:

// ```text
// "fox"
// ```

// Record it:

// ```javascript
// usedWords = {
//   cat: 1,
//   fox: 1
// }
// ```

// Now:

// ```text
// wordsMatched = 2
// ```

// Since:

// ```text
// wordsMatched === wordsCount
// 2 === 2
// ```

// index `0` is valid:

// ```javascript
// result.push(0);
// ```

// ---

// ## Step 5: Check index `1`

// Starting at index `1`, the first three-character word is:

// ```text
// "atf"
// ```

// `"atf"` is not in:

// ```javascript
// {
//   cat: 1,
//   fox: 1
// }
// ```

// So this starting position cannot be valid:

// ```javascript
// if (!(currentWord in requiredWords)) {
//   break;
// }
// ```

// The inner loop stops immediately.

// The same happens at index `2`.

// ---

// ## Step 6: Check index `3`

// Starting at index `3`:

// ```text
// "foxcat"
// ```

// Split into equal-sized words:

// ```text
// "fox" | "cat"
// ```

// Both words are required exactly once, so index `3` is added:

// ```javascript
// result.push(3);
// ```

// Final result:

// ```javascript
// [0, 3]
// ```

// ## Why check word counts?

// Suppose:

// ```javascript
// words = ["cat", "fox"];
// ```

// And the current substring is:

// ```text
// "catcat"
// ```

// Both extracted words exist in the required map, but `"cat"` appears twice while only one `"cat"` is allowed.

// That is why we check:

// ```javascript
// if (usedWords[currentWord] > requiredWords[currentWord]) {
//   break;
// }
// ```

// The main idea is:

// ```text
// Choose a starting index
// → divide the substring into full words
// → verify every word exists
// → verify every word appears the correct number of times
// → save the starting index
// ```
