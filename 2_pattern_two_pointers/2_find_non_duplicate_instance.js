//array is sorted so we'll use 2 pointer technique

const removeDuplicates = (nums) => {
    if (nums.length === 0) {
        return 0
    }

    let nextNonDuplicate = 1;

    for (let i=1; i<nums.length; i++) {
        if (nums[i] !== nums[nextNonDuplicate-1]) {
            nums[nextNonDuplicate] = nums[i];
            nextNonDuplicate++;
        }
    }

    return nextNonDuplicate;
}

const length = removeDuplicates([2, 3, 3, 3, 6, 9, 9])
console.log([2, 3, 3, 3, 6, 9, 9].slice(0, length))

//first one is already counted as unique so for loop started from 1
