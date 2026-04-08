/**
O(N)에 풀자
큰 메모리 띠 만들기 -> 0으로 초기화해놓자
바깥 배열 돌면서 메모리 띠에 1로 체크
1이 시작되고 끊기는 지점 계산해 정답 배열에 push

이러면 안되는게, [[1, 4], [5, 6]]인 경우 판별할 수가 없음

별개의 배열로 푸시하는 판단 기준을 뭘로 할까?

*/

function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]);
    // 이런 경우 첫 값을 넣어놓고 시작하자
    const result = [intervals[0]]; // [[1, 4]]

    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i]; // [5, 6]
        
        const last = result[result.length - 1];
        if (start > last[1]) { // 새로 시작
            result.push(intervals[i]);
        } 
        else { // start가 더 작다면
            last[1] = Math.max(last[1], end);
        }
    }
    return result;
};