/**
[2, 3, 5], target: 8
- 일단 배열 정렬하기

더할 때는 res에 푸시하기 위해 배열에 차근차근 저장해놔야 한다

각 인덱스의 숫자를 뽑고나서 할 수 있는 것 (반복해야 할 것)
- 자기 자신을 더하거나
- 다음 인덱스의 숫자를 더하기

-> 더한 총합(reduce로 구하기)이 target보다 크다면 종료
-> 더한 숫자가 target과 같다면 temp에 쌓고니서 push
*/

function combinationSum(candidates: number[], target: number): number[][] {
    const res = [];

    function recursion(temp: number[], curIndex: number) {
        const sum = temp.reduce((acc, cur) => acc + cur, 0);
        if (sum === target) {
            res.push([...temp]);
            return;
        } else if (sum > target) {
            return;
        }
        
        // 다음 숫자 뽑기 (이전에 지난 숫자는 안뽑아도 됨)
        for (let nextIndex = curIndex; nextIndex < candidates.length; nextIndex++) {
            // temp에 숫자 넣어보고
            temp.push(candidates[nextIndex]);
            recursion(temp, nextIndex);
            // 리턴 됐다면 숫자 뺴기
            temp.pop();
        }
    }
    recursion([], 0);
    return res;
};