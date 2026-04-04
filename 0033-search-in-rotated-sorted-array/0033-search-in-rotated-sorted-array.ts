/**
재귀 -> 이분탐색


*/

function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        }

        if (nums[left] <= nums[mid]) { // 왼쪽이 정렬됨
            if (nums[left] <= target && target < nums[mid]) { // target이 왼쪽에 포함되어 있음
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else { // 오른쪽이 정렬됨
            if (nums[mid] < target && target <= nums[right]) { // target이 오른쪽에 포함되어 있음
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
};