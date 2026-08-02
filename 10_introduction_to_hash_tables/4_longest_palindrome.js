// Longest Palindrome: Given a string, determine the length of the longest palindrome that can be constructed using the characters from the string. 
// You don't need to return the palindrome itself, just its maximum possible length.

// Examples:

// Input: "applepie"
// Expected Output: 5
// Justification: The longest palindrome that can be constructed from the string is "pepep", which has a length of 5. 
// There are are other palindromes too but they all will be of length 5.


// solution:
// To build the longest palindrome:

// Every character with an even count can be fully used.
// From an odd count, use the largest even part.
// At most one odd character can be placed in the center.

function longestPalindromeLength(s) {
    const frequency = new Map();
  
    for (const char of s) {
      frequency.set(char, (frequency.get(char) || 0) + 1);
    }
  
    let length = 0;
    let hasOddCount = false;
  
    for (const count of frequency.values()) {
      if (count % 2 === 0) {
        length += count;
      } else {
        length += count - 1;
        hasOddCount = true;
      }
    }
  
    if (hasOddCount) {
      length++;
    }
  
    return length;
}


// Example
// longestPalindromeLength("applepie");
// // 5

// Character frequencies:

// a → 1
// p → 3
// l → 1
// e → 2
// i → 1
// Use the pairs

// From p → 3, we can use two p characters:

// p ... p

// From e → 2, we can use both:

// e ... e

// So far, the palindrome length is:

// 2 + 2 = 4

// We can place one remaining odd-count character in the center:

// p e p e p

// That gives:

// 4 + 1 = 5

// Therefore, the answer is:

// 5
// Why can only one odd character be used fully?

// A palindrome must have matching characters on both sides:

// a b c b a

// Only the middle character does not need a matching pair. Therefore, only one unpaired character can be used.

