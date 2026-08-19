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


