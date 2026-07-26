// Find the Corrupt Pair: We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. 
// The array originally contained all the numbers from 1 to ‘n’, but due to a data error, one of the numbers got duplicated which also resulted in one number going missing. 
// Find both these numbers.

// Example 1:

// Input: [3, 1, 2, 5, 2]
// Output: [2, 4]
// Explanation: '2' is duplicated and '4' is missing.

// solution: 

// Use cyclic sort to place every number at its correct index.

// Since numbers are from 1 to n:

// correctIndex = nums[i] - 1;

// After sorting, the incorrect position tells us both:

// the value at that position is the duplicate
// the expected value is the missing number

const findCorrupPair = (nums) => {
    let i = 0;
    while (i<nums.length) {
        const correctIndex = nums[i]-1;
        if (nums[i] !== nums[correctIndex]) {
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]]
        } else {
            i++;
        }
    }

    const corrupted = []

    for(let i=0; i<nums.length; i++) {
        if (nums[i] !== i+1) {
            corrupted.push(nums[i], i+1);
        }
    }

    return corrupted;
}

findCorruptPair([3, 1, 2, 5, 2]);



// Example
// findCorruptPair([3, 1, 2, 5, 2]);
// // [2, 4]

// step by step: 

// Let’s walk through:

// ```javascript
// findCorruptPair([3, 1, 2, 5, 2]);
// ```

// We want each number at its correct index:

// ```text
// 1 → index 0
// 2 → index 1
// 3 → index 2
// 4 → index 3
// 5 → index 4
// ```

// Initial array:

// ```text
// [3, 1, 2, 5, 2]
// ```

// ## Step 1

// ```text
// i = 0
// nums[i] = 3
// ```

// Correct index of `3`:

// ```javascript
// correctIndex = 3 - 1 = 2;
// ```

// Compare:

// ```text
// nums[0] = 3
// nums[2] = 2
// ```

// They are different, so swap them:

// ```text
// [2, 1, 3, 5, 2]
// ```

// We do not increase `i` yet because the new value at index `0` still needs checking.

// ---

// ## Step 2

// ```text
// i = 0
// nums[i] = 2
// ```

// Correct index of `2`:

// ```javascript
// correctIndex = 2 - 1 = 1;
// ```

// Compare:

// ```text
// nums[0] = 2
// nums[1] = 1
// ```

// Swap:

// ```text
// [1, 2, 3, 5, 2]
// ```

// ---

// ## Step 3

// ```text
// i = 0
// nums[i] = 1
// ```

// Correct index:

// ```javascript
// correctIndex = 1 - 1 = 0;
// ```

// Now:

// ```text
// nums[0] === nums[0]
// 1 === 1
// ```

// The number is in its correct position, so:

// ```javascript
// i++;
// ```

// Now `i = 1`.

// ---

// ## Step 4

// At index `1`:

// ```text
// nums[1] = 2
// correctIndex = 1
// ```

// `2` is already in its correct position, so move forward.

// ```text
// i = 2
// ```

// At index `2`:

// ```text
// nums[2] = 3
// correctIndex = 2
// ```

// Correct position again.

// ```text
// i = 3
// ```

// ---

// ## Step 5

// ```text
// i = 3
// nums[3] = 5
// ```

// Correct index of `5`:

// ```javascript
// correctIndex = 5 - 1 = 4;
// ```

// Compare:

// ```text
// nums[3] = 5
// nums[4] = 2
// ```

// Swap:

// ```text
// [1, 2, 3, 2, 5]
// ```

// Keep `i = 3` and check the new value there.

// ---

// ## Step 6

// ```text
// i = 3
// nums[3] = 2
// ```

// Correct index of `2`:

// ```javascript
// correctIndex = 2 - 1 = 1;
// ```

// Compare:

// ```text
// nums[3] = 2
// nums[1] = 2
// ```

// They are equal.

// This means another `2` is already at the correct position, so the current `2` is a duplicate. Swapping would do nothing, so move forward.

// Final arranged array:

// ```text
// [1, 2, 3, 2, 5]
// ```

// ## Find the incorrect position

// Now scan the array:

// ```text
// index 0 expects 1 → correct
// index 1 expects 2 → correct
// index 2 expects 3 → correct
// index 3 expects 4 → contains 2
// ```

// At index `3`:

// ```text
// duplicate = nums[3] = 2
// missing = i + 1 = 4
// ```

// So the result is:

// ```javascript
// [2, 4]
// ```

// Meaning:

// ```text
// 2 is duplicated
// 4 is missing
// ```

