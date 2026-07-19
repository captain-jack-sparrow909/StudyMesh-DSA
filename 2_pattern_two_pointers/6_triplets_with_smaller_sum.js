function countTriplets(arr, target) {
    arr.sort((a, b)=> a-b)

    let count = 0;
    for (let i=0; i<arr.length-2; i++){
        let left = i+1;
        let right = arr.length-1;

        while(left < right) {
            const sum = arr[i] + arr[left] + arr[right];

            if(sum < target) {
                // Because the array is sorted, replacing right value with any smaller number between left and right is also valid:
                count += right - left;
                left++;
            } else {
                right--;
            }
        }
    }
    return count;
}