/**
 Do not return anything, modify nums in-place instead.
 0: red
 1: white
 2: blue
 각 숫자 개수 세기
 */
function sortColors(nums: number[]) {
    let low = 0, mid = 0, high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[high], nums[mid]] = [nums[mid], nums[high]];
            high--;
        }
    }
    return nums;
};