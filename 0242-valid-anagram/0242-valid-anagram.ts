/**
각 알파벳의 개수 세기

1. 길이 다르다면 false
2. 객체 값 ++

같이 돌면서 검사
s -> ++  t -> --
0이 아닌게 하나라도 있으면 false, 모두 0이면 true 반환
 */


function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const map = {};
    
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1;
        map[t[i]] = (map[t[i]] || 0) - 1;
    }

    for (const key in map) {
        if (map[key] !== 0) {
            return false;
        }
    }
    return true;
};