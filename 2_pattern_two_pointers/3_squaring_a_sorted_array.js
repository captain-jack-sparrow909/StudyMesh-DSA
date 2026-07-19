// Given a sorted array that may contain negative numbers, return a new array containing the squares in sorted order.

// A two-pointer approach works because the largest square will come from either the leftmost or rightmost value.

const squaringSortedArray = (nums) => {
    const result = new Array(nums.length);

    const left = 0;
    const right = nums.length - 1;
    const highestIndex = nums.length - 1;

    while (left <= right) {   // because every number must be squared, including the number where left and right meet.
        const squareLeft = nums[left] * nums[left];
        const squareRight = nums[right] * nums[right];

        if (squareLeft > squareRight) {
            result[highestIndex] = squareLeft;
            left++;
        }

        if (squareLeft < squareRight) {
            result[highestIndex] = squareRight;
            right++;
        }

        highestIndex--
    }

    return result;
}