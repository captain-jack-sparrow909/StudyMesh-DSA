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




// for (let num of nums) { if ((num & mask) === 0) { num1 ^= num; } else { num2 ^= num; } }

// for this for loop is to the num1, num2 as we loop through the array, do the elements get assigned and num1, num2 become an array or how does this duplicate is resolved: 1 ^ 1 = 0
// 2 ^ 2 = 0
// 3 ^ 3 = 0
// 5 ^ 5 = 0

// Exactly — num1 and num2 do NOT become arrays.

// They remain just single numbers throughout the loop.

// The key is this:

// num1 ^= num;

// is shorthand for:

// num1 = num1 ^ num;

// So we're continuously XORing numbers together.

// Let's trace your example
// nums = [1, 4, 2, 1, 3, 5, 6, 2, 3, 5]

// After the first XOR, we found:

// mask = 2;

// This divides the numbers into two groups.

// Conceptually, they get divided like this:

// Group 1: 1, 4, 1, 5, 5
// Group 2: 2, 3, 6, 2, 3

// But we don't actually create these arrays.

// We just keep two variables:

// let num1 = 0;
// let num2 = 0;
// Go through the array

// First:

// num = 1

// It goes into group 1:

// num1 = 0 ^ 1;

// So:

// num1 = 1
// num2 = 0

// Next:

// num = 4

// Group 1 again:

// num1 = 1 ^ 4;

// So:

// num1 = 5
// num2 = 0

// Next:

// num = 2

// Group 2:

// num1 = 5
// num2 = 0 ^ 2 = 2

// Next:

// num = 1

// Group 1:

// num1 = 5 ^ 1 = 4

// Notice what happened:

// 1 ^ 1

// eventually canceled out.

// Continue
// num = 3

// Group 2:

// num2 = 2 ^ 3 = 1

// Then:

// num = 5

// Group 1:

// num1 = 4 ^ 5 = 1

// Then:

// num = 6

// Group 2:

// num2 = 1 ^ 6 = 7

// Then:

// num = 2

// Group 2:

// num2 = 7 ^ 2 = 5

// Then:

// num = 3

// Group 2:

// num2 = 5 ^ 3 = 6

// Finally:

// num = 5

// Group 1:

// num1 = 1 ^ 5 = 4

// So finally:

// num1 = 4
// num2 = 6
// So where did the duplicates go?

// They didn't get removed from an array.

// Instead, XOR makes them cancel mathematically.

// For Group 1:

// 1 ^ 4 ^ 1 ^ 5 ^ 5

// We can rearrange:

// 1 ^ 1 ^ 5 ^ 5 ^ 4

// Then:

// 0 ^ 0 ^ 4

// Therefore:

// 4

// For Group 2:

// 2 ^ 3 ^ 6 ^ 2 ^ 3

// Rearrange:

// 2 ^ 2 ^ 3 ^ 3 ^ 6

// Then:

// 0 ^ 0 ^ 6

// Therefore:

// 6
// The important distinction

// num1 is not:

// [1, 4, 1, 5, 5]

// It is always just:

// 4

// And num2 is always just:

// 6

// We're using XOR as a way to accumulate the values while automatically canceling duplicates.

// So this:

// num1 ^= num;

// basically means:

// "Take the current answer in num1, XOR it with this number, and store the new result back in num1."

// That's why we can solve it with O(1) extra space — we don't need to create the two groups as arrays.

// Group 1: 1, 4, 1, 5, 5 Group 2: 2, 3, 6, 2, 3

// how come these groups are formed  beforehand ?

// They don't actually get formed beforehand. I showed them as groups only to make the idea easier to visualize.

// The groups are created one number at a time inside the for loop.

// Remember this line:

// const mask = xor & -xor;

// For our example:

// [1, 4, 2, 1, 3, 5, 6, 2, 3, 5]

// After XORing everything:

// xor = 4 ^ 6

// and:

// mask = 2

// Now this code decides which group each number belongs to:

// if ((num & mask) === 0) {
//     num1 ^= num;
// } else {
//     num2 ^= num;
// }
// Let's see it happen

// We start with:

// num1 = 0;
// num2 = 0;

// Then we take each number.

// 1:

// 1 & 2 = 0

// So 1 goes to num1.

// num1 = 0 ^ 1 = 1

// 4:

// 4 & 2 = 0

// So 4 goes to num1.

// num1 = 1 ^ 4

// 2:

// 2 & 2 = 2

// Not zero, so 2 goes to num2.

// num2 = 0 ^ 2 = 2

// And so on.

// Eventually, the numbers would conceptually be:

// Group 1: 1, 4, 1, 5, 5
// Group 2: 2, 3, 6, 2, 3

// But again, we never create these arrays.

// We're simply doing:

// number → check its bit → send it to num1 OR num2
// Why does this separate 4 and 6?

// Because:

// 4 = 100
// 6 = 110

// Look at the 2 bit:

// 4 = 1 0 0
//       ↑
// 6 = 1 1 0
//       ↑

// They are different at that bit.

// So:

// 4 → Group 1
// 6 → Group 2

// And because duplicates are identical, their copies always go into the same group:

// 4's duplicate → Group 1
// 6's duplicate → Group 2

// Then XOR cancels the duplicates.

// So the real process is:

//               array
//                 ↓
//         check each number
//                 ↓
//        ┌────────┴────────┐
//        ↓                 ↓
//    mask bit = 0      mask bit = 1
//        ↓                 ↓
//      num1              num2
//        ↓                 ↓
//     XOR them          XOR them
//        ↓                 ↓
//        4                 6

// So the groups are not prepared beforehand — the if/else creates the groups logically as we loop through the array.
