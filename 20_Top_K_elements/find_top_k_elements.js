// Top 'K' Numbers: Given an unsorted array of numbers, find the ‘K’ largest numbers in it.

// **Example 1**:

// ```
// Input: [3, 1, 5, 12, 2, 11], K = 3
// Output: [5, 12, 11]

// ```

// **Example 2**:

// ```
// Input: [5, 12, 11, -1, 12], K = 3
// Output: [12, 11, 12]
// ```


// solution:
class Heap {
    constructor(compare) {
      this.heap = [];
      this.compare = compare;
    }
  
    size() {
      return this.heap.length;
    }
  
    peek() {
      return this.heap[0];
    }
  
    push(num) {
        // the number goes to the end first
        // get the index after addition, and get parent index
        // then we compare child value with parent value:
        // For a max heap, the comparison function is: (a, b) => a > b
        // if the condition fails we break the loop otherwise we swap the parent and the new value

        // summary: item added to the last and moved up according to comparison function by comparing 
        // child value to parent value until parent value is greater than child value then we break the loop
      this.heap.push(num);
  
      let index = this.heap.length - 1;
  
      while (index > 0) {
        const parent = Math.floor((index - 1) / 2);
  
        if (!this.compare(this.heap[index], this.heap[parent])) {  // max heap: (a, b) => a > b; since item pushed to last, for binary tree greater element should be parent
            // this.heap[index] -> 9 & this.heap[parent] -> 8; !(9 > 8) but 9 > 8 so this if condition won't execute
            // for max-heap: this.compare(7, 10) would become true -> !false == true
          break;
        }
  
        [this.heap[index], this.heap[parent]] =
          [this.heap[parent], this.heap[index]];
  
        index = parent;
      }
    }
  
    pop() {
        // get the top value
        // pop and get the last value
        // first push the last value at the 0th index of heap
        // define and initialize index with 0 value as it points to the last value added above
        // then we define best, left and right, all 3 are indexes not values
        // then we make comparison of best with left and right according to comparison function and assign to best, 
        // then we check if best has become equal to index, if yes then break the loop, it means best is already at correct place according to max or min heap
        // if index and best aren't same we swap values and assign best index to the index


        // summary: create a reference to top value and move last value to top index and then move it downward by comparing with left and right child in comparison 
        // function until best-index equals index.
      const top = this.heap[0];
      const last = this.heap.pop();
  
      if (this.heap.length > 0) {
        this.heap[0] = last;
  
        let index = 0;
  
        while (true) {
          let best = index;
          const left = index * 2 + 1;
          const right = index * 2 + 2;
  
          if (
            left < this.heap.length &&
            this.compare(this.heap[left], this.heap[best])
          ) {
            best = left;
          }
  
          if (
            right < this.heap.length &&
            this.compare(this.heap[right], this.heap[best])
          ) {
            best = right;
          }
  
          if (best === index) {
            break;
          }
  
          [this.heap[index], this.heap[best]] =
            [this.heap[best], this.heap[index]];
  
          index = best;
        }
      }
  
      return top;
    }

    toArray() {
        return this.heap;
    }
}


function findKLargestNumbers(nums, k) {
    const minHeap = new MinHeap((a, b)=> a < b);
  
    for (let num of nums) {
      minHeap.push(num);
  
      if (minHeap.size() > k) {
        minHeap.pop();
      }
    }
  
    return minHeap.toArray();
}

