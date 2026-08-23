// Maximum Distinct Elements: Given an array of numbers `nums` and an integer `K`, 
// find the maximum number of `distinct` elements after removing exactly `K` elements from the `nums` array.

// **Example 1**:

// - **Input:** nums = [7, 3, 5, 8, 5, 3, 3], K=2
// - **Expected Output:** 3


// solution:

// A number counts as distinct only if we completely remove its duplicate occurrences and leave exactly one copy.

// So for:

// [7, 3, 5, 8, 5, 3, 3]
// K = 2
// 7 → already distinct
// 8 → already distinct
// 3 → appears 3 times; remove 2 copies → now 3 is distinct
// 5 → appears twice; we don't have enough removals to make it distinct, so skip it

// Answer = 3.

function maximumDistinctElements(nums, k) {
    const frequencyMap = new Map();
  
    // Count frequency of every number
    for (const num of nums) {
      frequencyMap.set(
        num,
        (frequencyMap.get(num) || 0) + 1
      );
    }
  
    // Numbers that are already distinct
    let distinctCount = 0;
  
    // How many removals are needed to make duplicates distinct
    const minHeap = [];
  
    for (const frequency of frequencyMap.values()) {
      if (frequency === 1) {
        distinctCount++;
      } else {
        minHeap.push(frequency - 1);
      }
    }
  
    // Sort instead of implementing a heap
    minHeap.sort((a, b) => a - b);
  
    // Use K removals on the cheapest duplicate groups
    for (const removalsNeeded of minHeap) {
      if (removalsNeeded <= k) {
        k -= removalsNeeded;
        distinctCount++;
      } else {
        break;
      }
    }
  
    return distinctCount;
}


// Trace your example

// Frequency:

// 7 → 1
// 3 → 3
// 5 → 2
// 8 → 1

// Already distinct:

// 7, 8

// distinctCount = 2

// For duplicates:

// 3 → needs 3 - 1 = 2 removals
// 5 → needs 2 - 1 = 1 removal

// So:

// [2, 1]

// Sort:

// [1, 2]

// We have:

// K = 2

// First:

// 5 needs 1 removal

// We can do it:

// K = 1
// distinctCount = 3

// Next:

// 3 needs 2 removals

// But we only have 1, so skip it.

// Result:

// 3
// One important clarification

// Under the literal mathematical meaning of "number of distinct elements remaining," this problem/example is actually inconsistent: removing two 3s leaves [7,3,5,8,5], which contains 4 distinct values.

// But since you're following this particular DSA problem's expected output and intended algorithm, use the code above and think of it as:

// How many values can we make unique by completely removing their duplicate copies using K removals?

// That is the interpretation your source is using.
