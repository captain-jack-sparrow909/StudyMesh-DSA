// Ransom Note: Given two strings, one representing a ransom note and the other representing the available letters from a magazine, 
// determine if it's possible to construct the ransom note using only the letters from the magazine. Each letter from the magazine can be used only once.

// Examples:

// Example 1:

// Input: Ransom Note = "hello", Magazine = "hellworld"
// Expected Output: true


// solution:
// Use a frequency map to count the available letters in the magazine.
// Then go through the ransom note and use one copy of each required letter.

function canConstruct(ransomNote, magazine) {
    const frequency = new Map();
  
    for (const char of magazine) {
      frequency.set(char, (frequency.get(char) || 0) + 1);
    }
  
    for (const char of ransomNote) {
      if (!frequency.has(char) || frequency.get(char) === 0) {
        return false;
      }
  
      frequency.set(char, frequency.get(char) - 1);
    }
  
    return true;
}

// Example
// canConstruct("hello", "hellworld");
// // true

// Count the magazine letters:

// h → 1
// e → 1
// l → 3
// w → 1
// o → 1
// r → 1
// d → 1

// Now process "hello":

// h → available, decrease to 0
// e → available, decrease to 0
// l → available, decrease to 2
// l → available, decrease to 1
// o → available, decrease to 0

// Every required character was available, so return:

// true
// Why decrease the count?

// Each magazine letter can be used only once.

// For example:

// canConstruct("aa", "ab");
// // false

// The magazine has only one a.

// After using it once:

// a → 0

// The second a cannot be constructed, so the function returns false.
