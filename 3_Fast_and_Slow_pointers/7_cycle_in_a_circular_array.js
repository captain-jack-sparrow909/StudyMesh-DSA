// Cycle in a Circular Array: We are given an array containing positive and negative numbers. Suppose the array contains a number ‘M’ at a particular index. 
// Now, if ‘M’ is positive we will move forward ‘M’ indices and if ‘M’ is negative move backwards ‘M’ indices. 
// You should assume that the array is circular which means two things: If, while moving forward, we reach the end of the array, 
// we will jump to the first element to continue the movement. If, while moving backward, we reach the beginning of the array, 
// we will jump to the last element to continue the movement.



// #### solution ####
// We need to determine whether the array contains a valid cycle.

// A valid cycle must:

// Contain more than one index.
// Move in only one direction: all positive or all negative.
// Eventually return to the same index.

// Use the slow and fast pointer technique for each starting index.

const hasCircularArray = (arr) => {

    for (let i=0; i<arr.length; i++) {
        let slow = i;
        let fast = i;
        let movingForward = arr[i] > 0;

        while(true) {
            slow = getNextIndex(slow, arr, movingForward)
            fast = getNextIndex(fast, arr, movingForward)

            if (fast !== -1) {
                fast = getNextIndex(fast, arr, movingForward)
            }

            if (fast === -1 || slow === -1) {
                break;
            }

            if (slow === fast) {
                return true;
            }
        }
    }

    return false;
}

const getNextIndex = (index, arr, movingForward) => {
    const currentDirection = arr[index] > 0;

    if (currentDirection !== movingForward) {
        return -1;
    }

    let nextIndex = (index + arr[index]) % arr.length

    if (nextIndex < 0) {
        nextIndex += arr.length 
    }

    if (nextIndex === index) {  // 1 element array
        return -1; 
    }

    return nextIndex;
}
