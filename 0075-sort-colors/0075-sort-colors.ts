/**
 Do not return anything, modify nums in-place instead.
 0: red
 1: white
 2: blue
 각 숫자 개수 세기
 */
function sortColors(nums: number[]) {
    let zero = 0, one = 0, two = 0;
    
    for (const num of nums) {
        if (num === 0) {
            zero++;
        }
        if (num === 1) {
            one++;
        }
        if (num === 2) {
            two++;
        }
    }
    let i = 0;
    while (zero) {
        nums[i] = 0;
        zero--;
        i++;
    }
    while (one) {
        nums[i] = 1;
        one--;
        i++;
    }
    while (two) {
        nums[i] = 2;
        two--;
        i++;
    }
    return nums;
};