/**
중복 X
합쳐서 0이 되는 튜플 리턴

뭘 선택할거냐
3중 포문은 절대 안됨
조합인데 최적화를 어떻게 해야하지

순서 상관 없음 -> 인덱스 빼고 숫자만 출력하면 됨
정렬
-4 -1 -1 0 1 2

첫 자리는 앞에서부터 하나씩
start는 그다음부터 end는 끝에서부터
하나 정해지면 바로 다음껄로
 */

function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    
    const res = [];
    let pivot = 0;

    for (; pivot < nums.length; pivot++) {
        if (pivot > 0 && nums[pivot] === nums[pivot - 1]) continue;
        let start = pivot + 1;
        let end = nums.length - 1;

        while (start < end) {
            const sum = nums[pivot] + nums[start] + nums[end];

            if (sum === 0) {
                res.push([nums[pivot], nums[start], nums[end]]);
                start++;
                end--;
                while (start < end && nums[start] === nums[start - 1]) start++;
                while (start < end && nums[end] === nums[end + 1]) end--;
            } else if (sum < 0) {
                start++;
            } else {
                end--;
            }
        }
    }
    return res;
};