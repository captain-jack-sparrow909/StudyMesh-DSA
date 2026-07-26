// Find all Missing Numbers: We are given an unsorted array containing numbers taken from the range 1 to ‘n’. The array can have duplicates, 
// which means some numbers will be missing. Find all those missing numbers.

// solution: 
// Use cyclic sort.

// Since numbers are from 1 to n, every number has a correct index:

// number 1 → index 0
// number 2 → index 1
// number 3 → index 2

// So:

// const correctIndex = nums[i] - 1;

function findAllMissingNumbers(nums) {
    let i = 0;
  
    // Put each number at its correct index
    while (i < nums.length) {
      const correctIndex = nums[i] - 1;
  
      if (nums[i] !== nums[correctIndex]) {
        [nums[i], nums[correctIndex]] = [
          nums[correctIndex],
          nums[i]
        ];
      } else {
        i++;
      }
    }
  
    // Find indices that don't contain the correct number
    const missingNumbers = [];
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== i + 1) {
        missingNumbers.push(i + 1);
      }
    }
  
    return missingNumbers;
}


// Example
// findAllMissingNumbers([2, 3, 1, 8, 2, 3, 5, 1]);

// After cyclic sorting, the array may look like:

// [1, 2, 3, 1, 5, 3, 2, 8]

// Now compare each index with the value it should contain:

// index 0 should contain 1 → correct
// index 1 should contain 2 → correct
// index 2 should contain 3 → correct
// index 3 should contain 4 → contains 1, so 4 is missing
// index 4 should contain 5 → correct
// index 5 should contain 6 → contains 3, so 6 is missing
// index 6 should contain 7 → contains 2, so 7 is missing
// index 7 should contain 8 → correct

// Result:

// [4, 6, 7]
// Why check this?
// nums[i] !== nums[correctIndex]

// Suppose the current number is 2, and another 2 is already at its correct index.

// nums[i] = 2
// correctIndex = 1
// nums[1] = 2

// Swapping them would change nothing and cause an infinite loop. So when the same value is already there, we move i forward.

// Why use i + 1?

// Array indices start from 0, but the numbers start from 1.

// index 0 expects number 1
// index 1 expects number 2
// index 2 expects number 3

// Therefore, the expected number at index i is:

// i + 1
