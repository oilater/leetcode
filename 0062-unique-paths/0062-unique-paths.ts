/**
우, 하 방향만 갈 수 있음
unique path 구하기

풀이 전략
현재 위치가 지도 밖이거나, 이미 방문한 곳이라면 return
현재 위치에서 시도할 수 있는 다음 위치를 찾는다(우, 하 중 선택)
도착했다면 +1 더한다
정답 출력

시간초과 -> 메모이제이션으로 풀자
경우의 수의 합으로 생각하기
*/

function uniquePaths(m: number, n: number): number {
    const memo = Array.from({length: m}, () => Array(n).fill(-1));

    function dfs(r: number, c: number ): number {
        if (r === m - 1 && c === n - 1) { // 도달했다면 하나의 경우의 수
            return 1;
        }
        if (r >= m || c >= n) {
            return 0;
        }
        if (memo[r][c] !== -1) {
            return memo[r][c];
        }
        memo[r][c] = dfs(r, c + 1) + dfs(r + 1, c);
        return memo[r][c];
    }
    return dfs(0, 0);
};