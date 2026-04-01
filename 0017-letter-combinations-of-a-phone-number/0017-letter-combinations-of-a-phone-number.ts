/**
객체로 매핑
2: [a, b, c]
3: [d, e, f]

입력 순서에 따라 조합하는 순열

23 -> maps[digit]으로 배열 받아옴
digit.length만큼 뽑기
뽑을 때마다 문자열로 저장하고, 다 뽑으면 res에 push
res 반환

더 자세히 생각
a, b, c 가져왔어

currentIndex는 0에서 시작
const alphas = maps[digit[currentIndex]]

alphs를 for문 돌면서 문자를 하나 뽑고, 다음 digits를 호출해야 함
*/

function letterCombinations(digits: string): string[] {
    const maps = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };

    let res = [];
    if (!digits.length) return res;
    
    function backtracking(index: number, currentStr: string) {
        if (currentStr.length === digits.length) {
            res.push(currentStr);
            return;
        }

        const alphas = maps[digits[index]]; // 인덱스에 해당하는 알파벳 배열
        
        for (const alpha of alphas) {
            backtracking(index + 1, currentStr + alpha);
        }
    }

    backtracking(0, '');
    return res;
};