function exist(board: string[][], word: string): boolean {
    const dr = [0, 0, -1 , 1];
    const dc = [1, -1, 0, 0];
    const visited = Array.from({length: board.length}, () => Array(board[0].length).fill(0));
    
    function backtrack(r: number, c: number, depth: number) {
        if (depth === word.length) return true;
        if (isOut(r, c) || visited[r][c]) return false;
        if (word[depth] !== board[r][c]) return false;
        
        visited[r][c] = true;
        
        for (let d = 0; d < 4; d++) {
            const nextR = r + dr[d];
            const nextC = c + dc[d];
            if (backtrack(nextR, nextC, depth + 1)) return true;
        }
        visited[r][c] = false;
        return false;
    }
    
    function isOut(r: number, c: number) {
        return r < 0 || r >= board.length || c < 0 || c >= board[0].length;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (backtrack(i, j, 0)) return true;
        }
    }
    return false;
};