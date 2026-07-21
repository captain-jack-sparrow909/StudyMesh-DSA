// Longest Substring with K Distinct Characters: Given a string, find the length of the longest substring in it with no more than K distinct characters. 
// You can assume that K is less than or equal to the length of the given string.



// Use a sliding window and a frequency map.

// The window can contain at most k different characters. When it contains more than k, shrink it from the left.

function longestSubstringWithKDistinct(str, k) {
    let windowStart = 0;
    let maxLength = 0;
    const frequency = {};
  
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
  
      frequency[rightChar] = (frequency[rightChar] || 0) + 1;
  
      while (Object.keys(frequency).length > k) {
        const leftChar = str[windowStart];
  
        frequency[leftChar]--;
  
        if (frequency[leftChar] === 0) {
          delete frequency[leftChar];
        }
  
        windowStart++;
      }
  
      const currentLength = windowEnd - windowStart + 1;
      maxLength = Math.max(maxLength, currentLength);
    }
  
    return maxLength;
}

longestSubstringWithKDistinct("araaci", 2);
//longest substring: "araa"


// Add from the right.

// More than k distinct characters?
// Remove from the left.

// Valid window?
// Update the maximum length.


//######################################################################################################################################################//

// another approach:
function longestSubstringWithKDistinct(str, k) {
    let windowStart = 0;
    let maxLength = 0;
    let distinctCount = 0;
    const frequency = {};
  
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
  
      if (!frequency[rightChar]) {
        distinctCount++;
      }
  
      frequency[rightChar] =
        (frequency[rightChar] || 0) + 1;
  
      while (distinctCount > k) {
        const leftChar = str[windowStart];
  
        frequency[leftChar]--;
  
        if (frequency[leftChar] === 0) {
          delete frequency[leftChar];
          distinctCount--;
        }
  
        windowStart++;
      }
  
      maxLength = Math.max(
        maxLength,
        windowEnd - windowStart + 1
      );
    }
  
    return maxLength;
}