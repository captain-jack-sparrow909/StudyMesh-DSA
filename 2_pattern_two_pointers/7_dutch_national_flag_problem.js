const sortColors = (nums) => {
    let low = 0;
    let i = 0;
    let high = nums.length - 1;  //4

    while(i<=high) {
        if (nums[i] === 0){ 
            [nums[low], nums[i]] = [nums[i], nums[low]]  //[] = [0, 1]
            low++; //1
            i++; //2
        } else if (nums[i] === 1){
            i++;  //1
        } else {
            [nums[i], nums[high]] = [nums[high], nums[i]]  //[] = [0, 2]
            high--;
        }
    }

    return nums;
}

sortColors([1, 0, 2, 1, 0]);