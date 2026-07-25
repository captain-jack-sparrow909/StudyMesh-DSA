// We are given an array containing n distinct numbers taken from the range 0 to n. Since the array has only n numbers out of the total n+1 numbers, find the missing number.

// Example 1:

// Input: [4, 0, 3, 1]
// Output: 2
// Example 2:

// Input: [8, 3, 5, 2, 4, 6, 0, 1]
// Output: 7
// Constraints:

// n == nums.length
// 1 <= n <= 
// 0 <= nums[i] <= n
// All the numbers of nums are unique.



// solution: 
// Since the numbers are from 0 to n, every number except n has a matching array index:

// number 0 → index 0
// number 1 → index 1
// number 2 → index 2

// We can use cyclic sort to place each number at its correct index.

function findMissingNumber(nums) {
    let i = 0;
  
    while (i < nums.length) {
      const correctIndex = nums[i];
  
      if (
        nums[i] < nums.length &&
        nums[i] !== nums[correctIndex]
      ) {
        [nums[i], nums[correctIndex]] = [
          nums[correctIndex],
          nums[i]
        ];
      } else {
        i++;
      }
    }
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== i) {
        return i;
      }
    }
  
    return nums.length;
}



// Example 1
// findMissingNumber([4, 0, 3, 1]);

// Here:

// nums.length = 4
// range = 0 to 4

// After cyclic sorting:

// [0, 1, 3, 4]

// Now compare each value with its index:

// index 0 → value 0
// index 1 → value 1
// index 2 → value 3  ❌

// Index 2 does not contain 2, so the missing number is:

// 2
// Why check this?
// nums[i] < nums.length

// The number n has no valid index inside an array of length n.

// For example, if the array length is 4, valid indices are:

// 0, 1, 2, 3

// But the value 4 may exist. We cannot access:

// nums[4]

// as a valid position, so we skip moving it.

// Why return nums.length at the end?

// Consider:

// [0, 1, 2, 3]

// Every number matches its index, so the missing number must be 4, which equals:

// nums.length




// why this is included ? nums[i] < nums.length:

// Because the values can be from 0 to n, but the array indices only go from 0 to n - 1.

// For example:

// nums = [4, 0, 3, 1];

// The array length is:

// 4

// So valid indices are:

// 0, 1, 2, 3

// But the array can contain the value 4.

// In cyclic sort, we use the value as the correct index:

// const correctIndex = nums[i];

// So if:

// nums[i] = 4;

// then:

// correctIndex = 4;

// But index 4 does not exist in an array of length 4.

// That is why we check:

// nums[i] < nums.length

// It means:

// Only try to place the number if it has a valid index inside the array.

// So:

// if (
//   nums[i] < nums.length &&
//   nums[i] !== nums[correctIndex]
// )

// prevents us from trying to swap with an invalid index.

// For this array:

// [4, 0, 3, 1]

// when nums[i] is 4:

// 4 < 4 → false

// So we skip it.

// The value 4 represents n, and n does not need a position inside the array. It is handled later when we scan for the missing index.