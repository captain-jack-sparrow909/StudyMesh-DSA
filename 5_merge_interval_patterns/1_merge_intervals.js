// Merge Intervals: Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

//solution:
// Sort intervals by their start value, then compare each interval with the last merged interval.

function mergeIntervals(intervals) {
    if (intervals.length < 2) {
      return intervals;
    }
  
    intervals.sort((a, b) => a[0] - b[0]);
  
    const merged = [intervals[0]];
  
    for (let i = 1; i < intervals.length; i++) {
      const current = intervals[i];
      const lastMerged = merged[merged.length - 1];
  
      if (current[0] <= lastMerged[1]) {
        lastMerged[1] = Math.max(lastMerged[1], current[1]);
      } else {
        merged.push(current);
      }
    }
  
    return merged;
}

// mergeIntervals([
//     [1, 4],
//     [2, 5],
//     [7, 9]
//   ]);

// [
//     [1, 5],
//     [7, 9]
//   ]

// Step by step

// After sorting:

// [1, 4], [2, 5], [7, 9]

// Start with:

// merged = [[1, 4]]

// Now compare [2, 5] with [1, 4].

// 2 <= 4

// They overlap, so merge them:

// [1, max(4, 5)] = [1, 5]

// Now compare [7, 9] with [1, 5].

// 7 > 5

// They do not overlap, so add [7, 9] separately.

// Final result:

// [1, 5], [7, 9]

// The important condition is:

// current[0] <= lastMerged[1]

// It means the current interval starts before the previous merged interval ends, so they overlap.
