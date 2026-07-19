const findTriplets = (nums) => {
    //first sort the array:
    nums.sort((a, b) => a - b) // [-3, -2, -1, 0, 1, 1, 2]

    let triplets = [];

    //now we fix one number and use 2 pointers to find the other 2:
    for (let i=0; i<nums.length-2; i++) { //first -3
        //first skip the duplicates:
        if (i>0 && nums[i] === nums[i-1]) {
            continue;
        }

        //we define the other 2 pointers:
        let left = i+1;  //1
        let right = nums.length - 1;  //7

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]  //-3-2+2 = -3; -3-1+2 = -2;  -3+0+2= -1; -3+1+2=0;
    
            if (sum === 0) {
                triplets.push(nums[i], nums[left], nums[right])
                left++;
                right--;
    
                //again removing any duplicates:
                while(left < right && nums[left] === nums[left-1]) {
                    left++;
                }
    
                while(left < right && nums[right] === nums[right+1]){
                    right--;
                }
            } else if (sum < 0) { 
                left++;
            } else {
                right++;
            }
        }
    }

    return triplets;
}

findTriplets([-3, 0, 1, 2, -1, 1, -2]);
