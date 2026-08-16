/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
nums에서 두 숫자의 합이 target이 되는 인덱스를 리턴
n^2보다 낮은 시간복잡도로 풀어보기

target - arr[i] -> 객체의 키로 등록

객체
키: 남은 값
값: 인덱스 저장
 */
var twoSum = function(nums, target) {
    const obj = {}
    for (let i = 0; i < nums.length; i++) {
        // 합쳐서 target이 된다면
        if (nums[i] in obj) {
            return [i, obj[nums[i]]];
        }

        const rest = target - nums[i];
        obj[rest] = i;
    }
};