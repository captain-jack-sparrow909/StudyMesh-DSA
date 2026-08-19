// Search in a Sorted Infinite Array: Given an infinite sorted array (or an array with unknown size), find if a given number ‘key’ 
// is present in the array. Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.

// Since it is not possible to define an array with infinite (unknown) size, you will be provided with an interface ArrayReader 
// to read elements of the array. ArrayReader.get(index) will return the number at index; if the array’s size is smaller than the 
// index, it will return Integer.MAX_VALUE.


// solution:
// This one looks complicated because of the word "infinite", but the idea is actually very simple.

// The problem is:

// We have a sorted array, but we don't know its length.

// So we cannot do:

// nums.length

// Instead, we first find a range where the key could be, and then use normal binary search.

// The main idea

// Suppose the array is:

// [1, 3, 5, 7, 9, 11, 13, 15, ...]

// and:

// key = 11

// We don't know where the array ends.

// So we check indexes like this:

// 1 → 2 → 4 → 8 → 16 → ...

// We're basically saying:

// "Keep jumping farther until we've gone far enough to find the key."

// Once we have a range containing the key, we use binary search.

// Step 1: Start with a small range
// let start = 0;
// let end = 1;

// So we're initially looking at:

// index:  0   1
//         ↓   ↓
//        [1, 3, 5, 7, 9, 11, ...]
// Step 2: Keep expanding

// We check:

// reader.get(end)

// If:

// reader.get(end) < key

// then the key must be somewhere after end.

// So expand:

// start = end + 1;
// end = end * 2;

// For example, with:

// key = 11

// we might get:

// end = 1
// value = 3

// 3 < 11

// So:

// start = 2
// end = 2

// Check index 2:

// 5 < 11

// Expand again:

// start = 3
// end = 4

// Now:

// index:  3   4
//         7   9

// 9 < 11, so expand:

// start = 5
// end = 8

// Now our range is:

// index: 5 ---------------- 8
//         [11, 13, 15, ...]

// We know the key must be somewhere between 5 and 8.

// Now we can use normal binary search.

// Step 3: Binary Search

// Now we do the usual:

// const mid = Math.floor((start + end) / 2);

// If:

// reader.get(mid) === key

// we found it.

// If:

// reader.get(mid) < key

// go right.

// Otherwise:

// reader.get(mid) > key

// go left.

function searchInfiniteArray(reader, key) {
    // Step 1: Find a range where key could exist
    let start = 0;
    let end = 1;
  
    while (reader.get(end) < key) {
      start = end + 1;
      end = end * 2;
    }
  
    // Step 2: Normal binary search
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      const value = reader.get(mid);
  
      if (value === key) {
        return mid;
      }
  
      if (value < key) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  
    return -1;
}




// But what is reader.get()?

// The problem gives us an object that can access the array:

// reader.get(index)

// For example:

// reader.get(0) → 1
// reader.get(1) → 3
// reader.get(2) → 5
// reader.get(3) → 7

// If we ask for an index outside the actual array:

// reader.get(100)

// it returns:

// Integer.MAX_VALUE

// This is basically telling us:

// "There is no element here."

// So we don't need to know the array's length.

// Why do we double end?

// This is the most important part:

// end = end * 2;

// We do:

// 1
// 2
// 4
// 8
// 16
// 32
// 64
// ...

// Instead of checking:

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// ...

// We're jumping farther and farther.

// This is what makes the algorithm efficient.

// Let's trace a simple example

// Suppose:

// array = [1, 3, 5, 7, 9, 11, 13, 15]
// key = 7

// Initially:

// start = 0
// end = 1

// Check:

// reader.get(1) = 3

// Since:

// 3 < 7

// expand:

// start = 2
// end = 2

// Check:

// reader.get(2) = 5

// Since:

// 5 < 7

// expand:

// start = 3
// end = 4

// Now we have:

// [7, 9]
//  ↑
// possible range

// Binary search:

// start = 3
// end = 4

// mid = 3
// reader.get(3) = 7

// Found!

// return 3;
// What if the key doesn't exist?

// Suppose:

// key = 8

// Eventually we might get:

// start = 3
// end = 4

// Values:

// 7, 9

// Binary search:

// 7 < 8

// go right.

// Then:

// 9 > 8

// go left.

// Eventually:

// start > end

// So:

// return -1;
// Remember the whole problem like this

// There are 2 phases:

// PHASE 1
// Find a range
//     ↓
// 1 → 2 → 4 → 8 → 16...
//     ↓
// key is somewhere inside this range


// PHASE 2
// Normal Binary Search
//     ↓
// find the key

// So the main thing to remember is:

// We don't know the array's size, so first keep doubling the range until the key can fit inside it. Then perform normal binary search.

// And that's why we don't use nums.length in this problem.
