// String Anagrams: Given a string and a pattern, find all anagrams of the pattern in the given string.

// Every anagram is a permutation of a string. As we know, when we are not allowed to repeat characters while finding permutations of a string, we get  permutations (or anagrams) of a string having  characters. For example, here are the six anagrams of the string abc:

// abc
// acb
// bac
// bca
// cab
// cba
// Write a function to return a list of starting indices of the anagrams of the pattern in the given string.




// This is almost the same as Permutation in a String, but instead of returning true, we collect every valid window’s starting index.
function findStringAnagrams(str, pattern) {
    const frequency = {};
  
    for (const char of pattern) {
      frequency[char] = (frequency[char] || 0) + 1;
    }
  
    let windowStart = 0;
    let matched = 0;
    const result = [];
  
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
  
      // Add the right character to the window
      if (rightChar in frequency) {
        frequency[rightChar]--;
  
        if (frequency[rightChar] === 0) {
          matched++;
        }
      }
  
      // An anagram has been found
      if (matched === Object.keys(frequency).length) {
        result.push(windowStart);
      }
  
      // Keep the window equal to pattern length
      if (windowEnd >= pattern.length - 1) {
        const leftChar = str[windowStart];
  
        if (leftChar in frequency) {
          // It was fully matched, but is now leaving
          if (frequency[leftChar] === 0) {
            matched--;
          }
  
          frequency[leftChar]++;
        }
  
        windowStart++;
      }
    }
  
    return result;
  }