/**
기본적으로는 한칸씩 돌면서 검사해야 함
dfs 돌면서 찾기 - 진입 시 count++
visited 2차원 배열 둬서 true라면 건너 뛰기
count 출력
 */

const dr = [1, 0, -1, 0];
const dc = [0, 1, 0, -1];

function isOutOfRange(grid, r, c) {
    return r < 0 || c < 0 || r >= grid.length || c >= grid[0].length;
}

function numIslands(grid: string[][]): number {
    const visited = Array.from({length: grid.length}, () => new Array(grid[0].length).fill(false));
    let count = 0;

    function dfs(r, c) {
        if (grid[r][c] === '0' || visited[r][c]) return; // 0이거나 이미 방문했다면 건너뛰기
        visited[r][c] = true; // 방문 체크
        
        for (let d = 0; d < 4; d++) {
            const nextR = r + dr[d];
            const nextC = c + dc[d];
            if (isOutOfRange(grid, nextR, nextC)) continue;
            if (grid[nextR][nextC] === '0') continue;
            dfs(nextR, nextC);
        }
    }

    for(let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === '1' && visited[r][c] === false) {
                count += 1;
                dfs(r, c);
            }
            
        }
    }
    
    dfs(0, 0);
    return count;
};