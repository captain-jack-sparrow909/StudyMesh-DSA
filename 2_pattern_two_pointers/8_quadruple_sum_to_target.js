// Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.

// We sort the array, fix the first two numbers, then use two pointers to find the remaining two.
const quadrupleSumToTarget = (nums, target) => {
    //sorting first:
    nums.sort((a, b) => a - b);

    const quadrupled = [];

    for (let i=0; i<nums.length-3; i++){
        //removing duplicates:
        if (i>1 && nums[i] === nums[i-1]) {
            continue;
        }

        for (let j=i+1; j<nums.length-2; j++) {  // Because j represents the second number in the quadruplet, it must come after i.
            if (j>i+1 && nums[j] === nums[j-1]) {
                continue;
            }
            
            let left = j+1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    quadrupled.push(
                        nums[i],
                        nums[j],
                        nums[left],
                        nums[right]
                    );

                    left++;
                    right--;

                    while(left < right && nums[left] === nums[left-1]){
                        left++;
                    }
                    while(left < right && nums[right] === nums[right+1]){
                        right--;
                    }
                }

                if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return quadrupled;
}