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

// After cyclic sorting, the array becomes:

// [1, 2, 3, 2, 5]

// Now compare each value with what should be at that index:

// index 0 should contain 1 → correct
// index 1 should contain 2 → correct
// index 2 should contain 3 → correct
// index 3 should contain 4 → contains 2

// So:

// duplicate = nums[3] = 2
// missing = index + 1 = 4

// That is why we return:

// return [nums[i], i + 1];

// The order is:

// [duplicate, missing]
