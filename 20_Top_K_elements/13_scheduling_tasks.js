// Scheduling Tasks: You are given a list of tasks that need to be run, in any order, on a server. 
// Each task will take one CPU interval to execute but once a task has finished, it has a cooling period 
// during which it can’t be run again. If the cooling period for all tasks is ‘K’ intervals, find the 
// minimum number of CPU intervals that the server needs to finish all tasks.

// If at any time the server can’t execute any task then it must stay idle.

// **Example 1**:

// ```
// Input: [a, a, a, b, c, c], K=2
// Output: 7
// Explanation: a -> c -> b -> a -> c -> idle -> a
// ```

// solution:
// This is another Max Heap + Queue problem, very similar to the previous one.

// The difference is:

// Rearrange String K Distance Apart: arrange characters.
// Scheduling Tasks: calculate how many CPU intervals are needed, including idle.


function scheduleTasks(tasks, k) {
    // Count frequency of each task
    const frequencyMap = new Map();
  
    for (const task of tasks) {
      frequencyMap.set(
        task,
        (frequencyMap.get(task) || 0) + 1
      );
    }
  
    // Max Heap stores [task, frequency]
    const maxHeap = new MaxHeap();
  
    for (const [task, frequency] of frequencyMap) {
      maxHeap.push([task, frequency]);
    }
  
    // Tasks that are cooling down
    const queue = [];
  
    let intervals = 0;
  
    while (maxHeap.size() > 0 || queue.length > 0) {
      intervals++;
  
      // If a task is available, execute the most frequent one
      if (maxHeap.size() > 0) {
        const [task, frequency] = maxHeap.pop();
  
        // One occurrence has been executed
        const remaining = frequency - 1;
  
        // If it still has occurrences,
        // put it into the cooling queue
        if (remaining > 0) {
          queue.push([task, remaining, intervals + k]);
        }
      }
  
      // Check if the task at the front of the queue
      // has finished cooling
      if (
        queue.length > 0 &&
        queue[0][2] === intervals
      ) {
        const [task, frequency] = queue.shift();
  
        maxHeap.push([task, frequency]);
      }
    }
  
    return intervals;
}


// Example
// scheduleTasks(
//   ["a", "a", "a", "b", "c", "c"],
//   2
// );

// Frequencies:

// a → 3
// c → 2
// b → 1

// Max Heap:

// a → 3
// c → 2
// b → 1
// Let's execute it
// Interval 1

// Take the most frequent task:

// a
// a → cooling

// Result so far:

// a
// Interval 2

// a is cooling, so take:

// c
// a → cooling
// c → cooling

// Result:

// a → c
// Interval 3

// Both a and c are cooling.

// b is available:

// a → c → b
// Interval 4

// a has finished cooling.

// Run:

// a

// Result:

// a → c → b → a
// Interval 5

// c has finished cooling.

// Run:

// c

// Result:

// a → c → b → a → c
// Interval 6

// What's available?

// a → cooling
// c → cooling
// b → finished

// Nothing can run.

// So the CPU must be idle:

// a → c → b → a → c → idle

// That's why we still increase:

// intervals++;

// even though no task was executed.

// Interval 7

// a has finished cooling.

// Run:

// a

// Final schedule:

// a → c → b → a → c → idle → a

// Therefore:

// 7
// The important idea

// There are two things happening:

// Max Heap

// The Max Heap tells us:

// Which available task should I run?

// We choose the task with the highest frequency because it is the most difficult task to schedule.

// Queue

// The Queue tells us:

// Which task is currently cooling down?

// For example:

// a
// ↓
// cooling
// ↓
// wait K intervals
// ↓
// available again
// Why Max Heap?

// Imagine:

// a a a a a
// b
// c

// If we keep running a, we'd get:

// a → idle → idle → idle → idle → a...

// Instead, we want to use other tasks to fill the cooling periods.

// So we prioritize the task with the highest frequency.

// Why Queue?

// Once we run:

// a

// we can't immediately put a back into the heap.

// It must wait.

// So:

// Max Heap
//    ↓
//  take task
//    ↓
//  Cooling Queue
//    ↓
//  wait K intervals
//    ↓
//  Max Heap again
// Remember this pattern

// When you see:

// Tasks + cooling period + minimum CPU intervals + idle

// think:

// Frequency Map → Max Heap → Cooling Queue → Count intervals

// This is essentially the same pattern as Rearrange String K Distance Apart, except here we count the idle intervals too.
