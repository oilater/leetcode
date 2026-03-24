/**
0 1 2 3 4
---------
1 3 7 5 6

가로 right - left
세로 Math.min(height[right], height[left])

방법 1. 다 검사하기 -> 100000000 -> 시간초과
방법 2. 투포인터 -> 양쪽에서 좁혀가며 비교 -> 둘중 작은 쪽을 먼저 좁혀야함 -> 너비 저장
 */

function maxArea(height: number[]): number {
    let left = 0, right = height.length -1;
    let res = 0;
    while (left <= right) {
        const squareWidth = right - left;
        const squareHeight = Math.min(height[right], height[left]);
        res = Math.max(res, squareWidth * squareHeight);

        if (height[left] > height[right]) {
            right--;
        } 
        else {
            left++;
        }
    }
    return res;
};