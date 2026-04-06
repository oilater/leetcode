/**
length: 100,000
하나씩 돌아보면서 검사? -> 시간초과
최대 O(NlogN)
규칙을 찾아야 함

부분 배열의 시작점을 골라야 함
시작점이 음수일 수도 있음

Sum과 현재 숫자 비교 -> 더 크면 이 숫자가 시작점
maxSum과 Math.max로 비교하기
*/

function maxSubArray(nums: number[]): number {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
};