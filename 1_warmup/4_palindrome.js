const isPalindrome = (s) => {
    const chars = s.split('');

    const left = 0;
    const right = chars.length-1;

    while (left < right) {
        if (chars[left] !== chars[right]){
            return false
        }
        left++;
        right--;
    }
    return true;
}