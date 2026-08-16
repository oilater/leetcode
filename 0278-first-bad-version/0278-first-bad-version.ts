/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
이분탐색

g g g g b b 6개 start, end 기준으로 가운데

Math.floor((end - start) / 2) + start

g b b b b b

1. mid를 구한다
2. mid가 bad인지 검사
3-1. bad가 아니라면?
  - start를 mid+1로 설정 후 반복
3-2. bad라면?
  - end를 mid-1로 설정
  - res에 일단 할당 (Math.min 비교)
4. 반복 (left < right)

 */

var solution = function(isBadVersion: any) {
    
    return function(n: number): number {
        let res = -1;
        let start = 1;
        let end = n;

        while (start <= end) {
            let mid = Math.floor((end - start) / 2) + start
            
            if (isBadVersion(mid)) {
                res = mid;
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        return res;
    };
};