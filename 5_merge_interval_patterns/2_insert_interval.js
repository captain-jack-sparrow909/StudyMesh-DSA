// Insert Interval: Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct 
// position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

//solution:
// We handle this in three parts:

// Add all intervals that come before the new interval.
// Merge all intervals that overlap with the new interval.
// Add the remaining intervals.

function insertInterval(intervals, newInterval) {
    const result = [];
    let i = 0;
  
    // 1. Add intervals that end before the new interval starts
    while (
      i < intervals.length &&
      intervals[i][1] < newInterval[0]
    ) {
      result.push(intervals[i]);
      i++;
    }
  
    // 2. Merge overlapping intervals
    while (
      i < intervals.length &&
      intervals[i][0] <= newInterval[1]
    ) {
      newInterval[0] = Math.min(
        newInterval[0],
        intervals[i][0]
      );
  
      newInterval[1] = Math.max(
        newInterval[1],
        intervals[i][1]
      );
  
      i++;
    }
  
    result.push(newInterval);
  
    // 3. Add the remaining intervals
    while (i < intervals.length) {
      result.push(intervals[i]);
      i++;
    }
  
    return result;
  }


//   Example
//   insertInterval(
//     [
//       [1, 3],
//       [5, 7],
//       [8, 12]
//     ],
//     [4, 6]
//   );
//   Step 1: Add intervals before [4, 6]
  
//   Compare [1, 3]:
  
//   3 < 4
  
//   It comes completely before the new interval, so add it:
  
//   result = [[1, 3]];
//   Step 2: Merge overlapping intervals
  
//   Compare [5, 7] with [4, 6]:
  
//   5 <= 6
  
//   They overlap:
  
//   [4, 6] and [5, 7]
  
//   Merge them:
  
//   start = min(4, 5) = 4
//   end = max(6, 7) = 7
  
//   The new interval becomes:
  
//   [4, 7]
  
//   Now compare [8, 12]:
  
//   8 > 7
  
//   It does not overlap, so stop merging.
  
//   Step 3: Add everything else
  
//   Final result:
  
//   [
//     [1, 3],
//     [4, 7],
//     [8, 12]
//   ]
//   Important conditions
  
//   An interval comes completely before the new interval when:
  
//   intervals[i][1] < newInterval[0]
  
//   Two intervals overlap when:
  
//   intervals[i][0] <= newInterval[1]
