// Maximum CPU Load: We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running. 
// Our goal is to find the maximum CPU load at any time if all the jobs are running on the same machine.


// solution:
// We need to find the highest total CPU load of all jobs running at the same time.

// A simple solution is to create events:

// At a job’s start time, add its CPU load.
// At its end time, subtract its CPU load.
// Sort all events by time and track the current load.

// Assume each job is:
// [startTime, endTime, cpuLoad]

function maximumCPULoad(jobs) {
    const events = [];
  
    for (const [start, end, load] of jobs) {
      events.push([start, load]); // Job starts: add load
      events.push([end, -load]);  // Job ends: remove load
    }
  
    // Sort by time.
    // If times are equal, process the negative load first.
    events.sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      }
  
      return a[0] - b[0];
    });
  
    let currentLoad = 0;
    let maxLoad = 0;
  
    for (const [time, loadChange] of events) {
      currentLoad += loadChange;
      maxLoad = Math.max(maxLoad, currentLoad);
    }
  
    return maxLoad;
}

// Example
// maximumCPULoad([
//     [1, 4, 3],
//     [2, 5, 4],
//     [7, 9, 6]
//   ]);
//   // 7
  
//   The jobs are:
  
//   Job 1: time 1–4, load 3
//   Job 2: time 2–5, load 4
//   Job 3: time 7–9, load 6
  
//   Events after sorting:
  
//   Time 1: +3
//   Time 2: +4
//   Time 4: -3
//   Time 5: -4
//   Time 7: +6
//   Time 9: -6
  
//   Step by step:
  
//   Time 1: current load = 3
//   Time 2: current load = 3 + 4 = 7
//   Time 4: current load = 7 - 3 = 4
//   Time 5: current load = 4 - 4 = 0
//   Time 7: current load = 6
//   Time 9: current load = 0
  
//   The maximum load is:
  
//   7





// We sort because CPU load changes over time, and we must process those changes in chronological order.

// Each event looks like:

// [time, loadChange]

// For example:

// [1, 3]   // at time 1, add load 3
// [4, -3]  // at time 4, remove load 3

// The sorting code is:

// events.sort((a, b) => {
//   if (a[0] === b[0]) {
//     return a[1] - b[1];
//   }

//   return a[0] - b[0];
// });
// First rule: sort by time
// return a[0] - b[0];

// Here, a[0] and b[0] are event times.

// Example events before sorting:

// [
//   [4, -3],
//   [1, 3],
//   [5, -4],
//   [2, 4]
// ]

// After sorting by time:

// [
//   [1, 3],
//   [2, 4],
//   [4, -3],
//   [5, -4]
// ]

// Now we can correctly process:

// Time 1 → load becomes 3
// Time 2 → load becomes 7
// Time 4 → load becomes 4
// Time 5 → load becomes 0

// Without sorting, we could subtract a job’s load before that job even starts.

// Second rule: same-time events
// if (a[0] === b[0]) {
//   return a[1] - b[1];
// }

// This handles two events happening at the same time.

// Suppose:

// jobs = [
//   [1, 4, 3],
//   [4, 6, 5]
// ];

// The events include:

// [4, -3] // first job ends
// [4, 5]  // second job starts

// These jobs do not overlap because one ends exactly when the other starts.

// So at time 4, we should:

// Remove load 3
// Add load 5

// The comparator:

// a[1] - b[1]

// puts smaller values first.

// Since:

// -3 < 5

// the ending event comes before the starting event:

// [4, -3]
// [4, 5]
// Step-by-step complete example
// jobs = [
//   [1, 4, 3],
//   [2, 5, 4],
//   [7, 9, 6]
// ];
// Create events

// From [1, 4, 3]:

// [1, 3]
// [4, -3]

// From [2, 5, 4]:

// [2, 4]
// [5, -4]

// From [7, 9, 6]:

// [7, 6]
// [9, -6]

// All events:

// [
//   [1, 3],
//   [4, -3],
//   [2, 4],
//   [5, -4],
//   [7, 6],
//   [9, -6]
// ]
// Sort them
// [
//   [1, 3],
//   [2, 4],
//   [4, -3],
//   [5, -4],
//   [7, 6],
//   [9, -6]
// ]
// Process them

// Start:

// currentLoad = 0
// maxLoad = 0

// At time 1:

// currentLoad = 0 + 3 = 3
// maxLoad = 3

// At time 2:

// currentLoad = 3 + 4 = 7
// maxLoad = 7

// At time 4:

// currentLoad = 7 - 3 = 4
// maxLoad = 7

// At time 5:

// currentLoad = 4 - 4 = 0

// At time 7:

// currentLoad = 0 + 6 = 6

// At time 9:

// currentLoad = 6 - 6 = 0

// Final answer:

// 7

// So the sorting means:

// Different times → earlier event first
// Same time       → ending event before starting event
