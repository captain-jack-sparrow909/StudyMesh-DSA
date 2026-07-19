// if array is sorted, then we use 2 pointer technique:
const pairWithTargetSum = (nums, target) => {
    let left = 0;
    let right = target.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];

        if (target === sum) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        }
    }
    return [-1, -1];
}