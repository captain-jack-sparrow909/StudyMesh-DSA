// Given an array nums, a pair (i, j) is considered good when:
// nums[i] === nums[j]
// and
// i < j
// nums = [1, 2, 3, 1, 1, 3]
// Good pairs are:
// (0, 3) → nums[0] === nums[3]
// (0, 4) → nums[0] === nums[4]
// (3, 4) → nums[3] === nums[4]
// (2, 5) → nums[2] === nums[5]
// Answer:
// 4

// JavaScript solution using a frequency map:

const numIdenticalPairs = (nums) => {
    const frequency = {}
    const goodPairs = 0;

    for (const num in nums) {
        goodPairs += frequency[num] || 0;
        frequency[num] = (frequency[num] || 0) + 1;
    }

    return goodPairs;
}