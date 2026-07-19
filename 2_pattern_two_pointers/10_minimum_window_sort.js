// We need to find the smallest part of the array that is out of order. Sorting only that part should make the whole array sorted.

const minWindowSort = (arr) => {
    const left = 0;
    const right = arr.length - 1;

    //finding the first misplaced from left:
    while (left <= arr.length-1 && arr[left] <= arr[left+1]) {
        left++;
    }

    //if left has reached the end then it means array is already sorted:
    if (left === arr.length-1) {
        return 0;
    }

  // Find the first out-of-order number from the right
    while (right>0 && arr[right-1] <= arr[right]) {
        right--;
    }

   // Find minimum and maximum inside the unsorted window
    let min = Infinity;
    let max = -Infinity;
    for (let i=left; i<=right; i++) {
        min = Math.min(min, arr[i]);
        max = Math.max(max, arr[i]);
    }

  // Expand left if smaller values belong before it, if a smaller value coming after current left, then values before the current left should also be included in the window
  // they should also be considered misplaced, check eg below:
    while(left>0 && arr[left-1] > min) {
        left--;
    }

      // Expand right if larger values belong after it
    while(right<arr.length-1 && arr[right+1] < max){
        right++;
    }

    return right-left+1;
}


//why we expand ?
arr = [1, 3, 2, 0, 4]

// The first detected unsorted section is:
// [3, 2, 0]

// So initial window:
// left = 1
// right = 3

// Inside this window:
// windowMin = 0
// windowMax = 3

//expanding to the left:
// while (left > 0 && arr[left - 1] > windowMin) {
//     left--;
// }
// arr[left - 1] = arr[0] = 1
// 1 > 0
// This means 0 should come before 1 after sorting.

// So 1 must also be included in the sorting window:
// Before: arr = [1, 3, 2, 0, 4]
// Window:    [3, 2, 0]

// Expanded window:
// [1, 3, 2, 0]



// Expanding the right side:
// while (
//   right < arr.length - 1 &&
//   arr[right + 1] < windowMax
// ) {
//   right++;
// }

// We check the number just after the window.
// If that number is smaller than windowMax, it is also in the wrong position.
// For example:

// arr = [1, 2, 8, 4, 5, 6]

// The detected window may begin as:
// [8, 4]

// Here:
// windowMax = 8

// The next number is 5:
// 5 < 8

// So 5 must also be included, because after sorting, 8 needs to move past it.

// The next number is 6:
// 6 < 8
// So 6 must also be included.

// The final window becomes:
// [8, 4, 5, 6]