/**
1. 현재 Index에서 시작하는 단어들 시도 
- for 문 돌면서 startsWith로 검사
2. dfs로 돌리면서 현재단어 끝까지 가보기 (인덱스 비교하면서)
3. 단어의 length 끝에 도달했다면 true, 다돌려도 안되면 false
 */

function wordBreak(s: string, wordDict: string[]): boolean {
    const dp = new Map<number, boolean>();
    
    function dfs(index: number): boolean {
        const memoized = dp.get(index)
        if (memoized !== undefined) return memoized;
        
        if (index === s.length) {
            dp.set(index, true);
            return true
        }

        for (const word of wordDict) {
            if (!s.startsWith(word, index)) continue;
            if (dfs(index + word.length)) return true;
        }
        dp.set(index, false);
        return false;
    }
    return dfs(0);
};
