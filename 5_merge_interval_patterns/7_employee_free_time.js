// Employee Free Time: For ‘K’ employees, we are given a list of intervals representing each employee’s working hours. 
// Our goal is to determine if there is a free interval which is common to all employees.


// solution: 
// We need to find the gaps between all employees’ combined working intervals.

// A simple approach:

// Put every employee’s working interval into one array.
// Sort all intervals by start time.
// Merge overlapping intervals.
// Any gap between two merged intervals is common free time.

function employeeFreeTime(schedule) {
    const allIntervals = [];
  
    // Put all employees' intervals into one array
    for (const employee of schedule) {
      for (const interval of employee) {
        allIntervals.push(interval);
      }
    }
  
    if (allIntervals.length === 0) {
      return [];
    }
  
    // Sort by start time
    allIntervals.sort((a, b) => a[0] - b[0]);
  
    const freeTimes = [];
    let previousEnd = allIntervals[0][1];
  
    for (let i = 1; i < allIntervals.length; i++) {
      const [currentStart, currentEnd] = allIntervals[i];
  
      // There is a gap between working intervals
      if (currentStart > previousEnd) {
        freeTimes.push([previousEnd, currentStart]);
      }
  
      // Extend the combined working interval if needed
      previousEnd = Math.max(previousEnd, currentEnd);
    }
  
    return freeTimes;
  }



  // Example
// const schedule = [
//     [[1, 3], [5, 6]], // Employee 1
//     [[2, 3], [6, 8]]  // Employee 2
//   ];
  
//   console.log(employeeFreeTime(schedule));
  
//   Output:
  
//   [[3, 5]]
//   Step by step
  
//   All working intervals:
  
//   [1, 3], [5, 6], [2, 3], [6, 8]
  
//   After sorting:
  
//   [1, 3], [2, 3], [5, 6], [6, 8]
  
//   Start with:
  
//   previousEnd = 3
  
//   Compare [2, 3]:
  
//   currentStart = 2
//   2 <= 3
  
//   It overlaps, so there is no free time.
  
//   Compare [5, 6]:
  
//   currentStart = 5
//   5 > 3
  
//   There is a gap:
  
//   [3, 5]
  
//   So everyone is free from time 3 to time 5.
  
//   Then update:
  
//   previousEnd = 6
  
//   Compare [6, 8]:
  
//   6 > 6 // false
  
//   It starts exactly when the previous interval ends, so there is no free interval between them.
  
//   Final result:
  
//   [[3, 5]]
//   Why use Math.max()?
//   previousEnd = Math.max(previousEnd, currentEnd);
  
//   Overlapping intervals can have different ending times.
  
//   For example:
  
//   [1, 10] and [2, 4]
  
//   The combined working period still ends at 10, not 4.

