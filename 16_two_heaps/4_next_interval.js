// Next Interval: Given an array of intervals, find the next interval of each interval. In a list of intervals, 
// for an interval ‘i’ its next interval ‘j’ will have the smallest ‘start’ greater than or equal to the ‘end’ of ‘i’.

// Write a function to return an array containing indices of the next interval of each input interval. 
// If there is no next interval of a given interval, return -1. It is given that none of the intervals have the same start point.

// Example 1:

// Input: Intervals [[2,3], [3,4], [5,6]]  
// Output: [1, 2, -1]


// solution:
// Use sorting + binary search.
// For every interval [start, end], we need the interval whose:
// start >= current end
// and among those, choose the smallest start.

function findNextIntervals(intervals) {
    const starts = intervals.map((interval, index) => ({
      start: interval[0],
      index
    }));
  
    starts.sort((a, b) => a.start - b.start);
  
    const result = new Array(intervals.length).fill(-1);
  
    for (let i = 0; i < intervals.length; i++) {
      const end = intervals[i][1];
  
      let left = 0;
      let right = starts.length - 1;
      let nextIndex = -1;
  
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
  
        if (starts[mid].start >= end) {
          nextIndex = starts[mid].index;
  
          // Maybe there is an even smaller valid start
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
  
      result[i] = nextIndex;
    }
  
    return result;
}



// For:

// intervals = [
//   [2, 3],
//   [3, 4],
//   [5, 6]
// ];

// the starts are:

// 2, 3, 5

// For interval:

// [2, 3]

// we need the smallest start that is:

// >= 3

// Available starts:

// 3, 5

// Smallest is 3, which belongs to interval index 1.

// So:

// result[0] = 1

// For:

// [3, 4]

// we need:

// start >= 4

// The smallest valid start is 5, which belongs to index 2.

// So:

// result[1] = 2

// For:

// [5, 6]

// we need:

// start >= 6

// There is no such interval, so:

// result[2] = -1

// Final result:

// [1, 2, -1]

// The most important part is this:

// if (starts[mid].start >= end) {
//   nextIndex = starts[mid].index;
//   right = mid - 1;
// }

// Why move right left?

// Because we already found a valid start, but we want the smallest valid start.

// So we keep searching toward the left for something smaller that still satisfies:

// start >= end

// That is basically a lower bound binary search.
