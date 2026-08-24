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
