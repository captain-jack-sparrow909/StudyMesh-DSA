
const sumOfTripletsNearTarget = (nums, target) => {
    nums.sort((a, b)=> a-b);

    //closest sum: initial value, is changed below
    let closestSum = nums[0]+nums[1]+nums[2];  //-1

    for (let i=0; i<nums.length-2; i++) {  //this loop with only iterate 2 times with below data for -2 and 0
        let left = i+1;
        let right = nums.length-1;

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];  //-2+0+2=0; //-2+1+2=1  
            const currentDistance = Math.abs(target - currentSum); // 2   // 1
            const closestDistance = Math.abs(target - closestSum);  // 3  // 3

            if (currentDistance < closestDistance || (currentDistance === closestDistance && (currentSum < closestSum))) {
                // here we're replacing if sum is closer 
                // if the distance from both numbers eg: 3 and 1 to 2 is same in that case the 2nd condition will return 1 the smaller one
                closestSum = currentSum  //0  //1
            }

            if (currentSum === target) {
                return currentSum;
            }

            if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closestSum;
}

// nums = [-2, 0, 1, 2];
// target = 2;