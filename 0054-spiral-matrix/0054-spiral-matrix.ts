/**
1 2 3 
4 5 6
7 8 9
재귀 및 방문 배열 [][]
방향 델타 설정

재귀 함수가 할 일
- 현재 인덱스에 방문한 적이 없다면 push 및 방문 체크
- 현재 방향에 따른 다음 인덱스 구하기

- 검사해야할 것 -> 경계 넘었는지, 이미 방문했는지 검사
*/
function spiralOrder(matrix: number[][]): number[] {
    // 시계 방향으로 설정
    const dr = [0, 1, 0, -1];
    const dc = [1, 0, -1, 0];
    const result = [];
    const visited = Array.from({length: matrix.length}, () => Array(matrix[0].length).fill(false));

    function dfs(r: number, c: number, currentDir: number) {
        visited[r][c] = true;
        result.push(matrix[r][c]);
        
        if (result.length === matrix.length * matrix[0].length) {
            return;
        }
        let nextR = r + dr[currentDir];
        let nextC = c + dc[currentDir];
        let nextDir = currentDir;
        if (isOutOfRange(nextR, nextC, matrix.length, matrix[0].length) || visited[nextR][nextC]) {
            // 방향을 다시 계산
            nextDir = (currentDir + 1) % 4;
            nextR = r + dr[nextDir];
            nextC = c + dc[nextDir];
        } 
        dfs(nextR, nextC, nextDir);
    }
    
    dfs(0, 0, 0);
    return result;
};

function isOutOfRange(r: number, c: number, rLength: number, cLength: number): boolean {
    return r < 0 || r >= rLength || c < 0 || c >= cLength;
}