// Ceiling of a Number: Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’. 
// The ceiling of the ‘key’ will be the smallest element in the given array greater than or equal to the ‘key’.

// Write a function to return the index of the ceiling of the ‘key’. If there isn’t any ceiling return -1.

// Example 1:

// Input: [4, 6, 10], key = 6
// Output: 1


// solution:
// Let's make Ceiling of a Number very simple.

// What does "ceiling" mean?

// The ceiling is:

// The smallest number in the array that is ≥ key.

// Example:

// [4, 6, 10]

// If:

// key = 6

// 6 itself is allowed because:

// 6 >= 6

// So answer is:

// 6 → index 1
// Another example
// [4, 6, 10]
// key = 7

// Numbers ≥ 7 are:

// 10

// So ceiling is 10, index 2.

// Another example
// [4, 6, 10]
// key = 5

// Numbers ≥ 5 are:

// 6, 10

// The smallest one is 6.

// So answer: index 1


function searchCeilingOfNumber(nums, key) {
    let start = 0;
    let end = nums.length - 1;
  
    // key is bigger than the biggest number
    if (key > nums[end]) {
      return -1;
    }
  
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
  
      if (nums[mid] === key) {
        return mid;
      }
  
      if (nums[mid] < key) {
        // We need something bigger
        start = mid + 1;
      } else {
        // nums[mid] could be the ceiling
        end = mid - 1;
      }
    }
  
    // start is now the ceiling
    return start;
}



// Example: [4, 6, 10], key = 7

// Initially:

// start = 0
// end = 2
// [4, 6, 10]
//  ↑     ↑
// start  end
// Step 1
// mid = 1
// nums[mid] = 6

// We want:

// 7

// But:

// 6 < 7

// So 6 cannot be our ceiling.

// Everything before 6 is also too small.

// Move right:

// start = mid + 1;

// Now:

// start = 2
// end = 2
// Step 2
// mid = 2
// nums[mid] = 10

// Now:

// 10 > 7

// So 10 could be our ceiling.

// But maybe there's a smaller number that is also ≥ 7.

// Therefore we search to the left:

// end = mid - 1;

// Now:

// start = 2
// end = 1

// The loop stops because:

// start > end

// And:

// start = 2

// That's exactly the index of:

// 10

// So:

// return start;

// returns:

// 2
// Why does start become the answer?

// This is the most important part.

// When we're searching for the ceiling:

// If nums[mid] < key

// mid is too small.

// So:

// start = mid + 1;

// We move right.

// If nums[mid] > key

// mid is a possible ceiling.

// But we want the smallest possible ceiling.

// So:

// end = mid - 1;

// We keep looking left.

// Eventually, we reach this situation:

//        end
//         ↓
// [4, 6, 10]
//        ↑
//      start

// end has moved past the possible smaller values, and start is sitting exactly at the smallest number ≥ key.

// That's why:

// return start;
// Compare it with normal Binary Search

// Normal binary search asks:

// "Did I find the key?"

// Ceiling search asks:

// "What is the smallest number that is ≥ key?"

// So when we find something bigger:

// nums[mid] > key

// don't immediately return it.

// Instead:

// end = mid - 1;

// because there might be a smaller valid answer on the left.

// Remember this:
// nums[mid] < key
// → too small → go RIGHT

// nums[mid] > key
// → possible answer → go LEFT

// nums[mid] === key
// → perfect answer → return mid

// That's the whole trick.
