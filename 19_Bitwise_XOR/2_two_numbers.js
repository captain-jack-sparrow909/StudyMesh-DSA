// Two Single Numbers: In a non-empty array of numbers, every number appears exactly 
// twice except two numbers that appear only once. Find the two numbers that appear only once.

// Example 1:

// Input: [1, 4, 2, 1, 3, 5, 6, 2, 3, 5]
// Output: [4, 6]

// solution:
// This is very similar to Single Number, but now there are two numbers that appear once.

// [1, 4, 2, 1, 3, 5, 6, 2, 3, 5]

// Only:

// 4 and 6

// appear once.

// The trick is still XOR, but we need one extra step.

// Step 1: XOR everything

// Let's XOR all numbers:

// 1 ^ 4 ^ 2 ^ 1 ^ 3 ^ 5 ^ 6 ^ 2 ^ 3 ^ 5

// All the pairs cancel:

// (1 ^ 1)
// (2 ^ 2)
// (3 ^ 3)
// (5 ^ 5)

// So we're left with:

// 4 ^ 6

// Let's call this:

// const xor = 4 ^ 6;

// xor is not 4 or 6. It's a combination of both.

// Step 2: Find a bit where 4 and 6 are different

// Binary:

// 4 = 100
// 6 = 110

// XOR:

// 4 = 100
// 6 = 110
//      ---
//      010

// So:

// xor = 2

// This tells us:

// There is a bit where 4 and 6 are different.

// That's exactly what we need.

// Step 3: Use that bit to divide the numbers into 2 groups

// We use:

// const mask = xor & -xor;

// Here:

// xor = 2
// mask = 2

// Now we divide every number into two groups:

// Group 1 → numbers where this bit is 0
// Group 2 → numbers where this bit is 1

// The important thing is:

// 4 and 6 go into different groups.

// But every pair goes into the same group, because the two copies have exactly the same bits.

// So the duplicates still cancel inside their own groups.


function findTwoSingleNumbers(nums) {
    // 1. XOR everything
    let xor = 0;
  
    for (let num of nums) {
      xor ^= num;
    }
  
    // 2. Find a bit where the two single numbers are different
    const mask = xor & -xor;
  
    // 3. Divide numbers into two groups
    let num1 = 0;
    let num2 = 0;
  
    for (let num of nums) {
      if ((num & mask) === 0) {
        num1 ^= num;
      } else {
        num2 ^= num;
      }
    }
  
    return [num1, num2];
}



