// Kth Smallest Number: Given an unsorted array of numbers, find Kth smallest number in it.

// Please note that it is the Kth smallest number in the sorted order, not the Kth distinct element.
// Input: [1, 5, 12, 2, 11, 5], K = 3 Output: 5

// solution:
// This is another Heap problem, and it's very similar to the previous Top K Numbers problem.

// The easiest approach is:

// Use a Max Heap of size K.

// Why a Max Heap this time?

// Because we want to keep the K smallest numbers, and among those K numbers, we need quick access to the largest one so we can remove it when a smaller number comes along.

// Example
// [1, 5, 12, 2, 11, 5]
// K = 3

// If we sorted the array:

// [1, 2, 5, 5, 11, 12]

// The 3rd smallest is:

// 5

// But we don't want to sort the whole array.

// Step 1: Create a Max Heap
// Max Heap

// We want to keep only 3 numbers.

// Start:

// []
// Add 1
// [1]
// Add 5
// [5, 1]

// The largest is at the top:

//     5
//    /
//   1
// Add 12
// [12, 1, 5]

// We now have K = 3 numbers.

// Our 3 smallest candidates are:

// 1, 5, 12
// Step 2: See 2

// Add 2:

// [12, 5, 1, 2]

// Now we have 4 numbers, but we only want 3.

// The largest is:

// 12

// Remove it:

// [5, 2, 1]

// Now we're keeping:

// 1, 2, 5

// These are currently the 3 smallest numbers we've seen.

// Step 3: See 11

// Add:

// 11

// The heap temporarily has:

// [11, 5, 1, 2]

// Remove the largest:

// 11

// We're back to:

// [5, 2, 1]
// Step 4: See the second 5

// Add:

// 5

// Now:

// [5, 5, 1, 2]

// Remove the largest:

// 5

// We still have:

// [5, 2, 1]

// The important thing is that duplicates count.

// Our sorted order is:

// 1, 2, 5, 5, 11, 12

// The 3rd smallest is 5.

// And our Max Heap's root is:

// 5

// So:

// return maxHeap.peek();

// returns:

// 5

function findKthSmallest(nums, k) {
    const maxHeap = new MaxHeap();
  
    for (let num of nums) {
      maxHeap.push(num);
  
      if (maxHeap.size() > k) {
        maxHeap.pop();
      }
    }
  
    return maxHeap.peek();
}
