// Complement of Base 10 Number: Every non-negative integer N has a binary representation, 
// for example, 8 can be represented as “1000” in binary and 7 as “0111” in binary.

// The complement of a binary representation is the number in binary that we get when we change 
// every 1 to a 0 and every 0 to a 1. For example, the binary complement of “1010” is “0101”.

// For a given positive number N in base-10, return the complement of its binary representation as a base-10 integer.

// Example 1:

// Input: 8
// Output: 7

// solution:
// his problem is much easier if we think in terms of binary.

// We need to:

// Convert the number to binary.
// Change every 1 → 0 and 0 → 1.
// Convert back to decimal.

// For:

// N = 8

// Binary:

// 8 = 1000

// Complement:

// 1000
//  ↓↓↓↓
// 0111

// And:

// 0111 = 7

// So answer is 7.

// The trick: XOR

// We can use XOR (^).

// Remember:

// 0 ^ 0 = 0
// 1 ^ 0 = 1
// 0 ^ 1 = 1
// 1 ^ 1 = 0

// So if we XOR a number with 1, its bit flips:

// 0 ^ 1 = 1
// 1 ^ 1 = 0

// Therefore, we need a number containing all 1s matching the number of bits.

// For 8:

// 8 = 1000

// We need:

// 1111

// Then:

// 1000
// ^1111
// -----
// 0111

// which is 7.

// How do we create 1111?

// We create a mask.

// let mask = 0;

// Then for every bit in the number, add a 1.

// For 8:

// 8 = 1000

// It has 4 bits.

// So:

// mask:
// 0
// 1
// 11
// 111
// 1111

// Then:

// 1000
// ^1111
// -----
// 0111


function bitwiseComplement(num) {
    let n = num;
    let mask = 0;
  
    while (n > 0) {
      mask = (mask << 1) | 1;
      n = n >> 1;
    }
  
    return num ^ mask;
}



// Let's understand these two lines
// mask = (mask << 1) | 1;

// Suppose:

// mask = 111

// mask << 1 shifts everything left:

// 1110

// Then:

// 1110 | 0001

// gives:

// 1111

// So we're basically doing:

// 1
// 11
// 111
// 1111

// And:

// n = n >> 1;

// moves the bits of n one position to the right.

// For 8:

// 1000
//  ↓
// 0100
//  ↓
// 0010
//  ↓
// 0001
//  ↓
// 0000

// This lets us count how many bits num has.

// Full example: 8

// Initially:

// n = 8       → 1000
// mask = 0
// Loop 1
// mask = 0 << 1 | 1
//      = 1
// n = 1000 >> 1
//   = 0100
// Loop 2
// mask = 1 << 1 | 1
//      = 11
// n = 0100 >> 1
//   = 0010
// Loop 3
// mask = 11 << 1 | 1
//      = 111
// n = 0010 >> 1
//   = 0001
// Loop 4
// mask = 111 << 1 | 1
//      = 1111
// n = 0001 >> 1
//   = 0000

// Loop stops.

// Now:

// num  = 1000
// mask = 1111

// XOR:

//   1000
// ^ 1111
// ------
//   0111

// 0111 = 7.

// The main idea to remember
// Number:
// 1000

// Create mask:
// 1111

// XOR:
// 1000
// ^1111
// =0111

// So:

// Create a mask of all 1s with the same number of bits as N, then XOR N with the mask.

// Time complexity: O(log N)
// Space complexity: O(1).
