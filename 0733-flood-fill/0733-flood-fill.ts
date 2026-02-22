/**
BFS with queue

시작점을 color로 덮어쓴 후,
시작점의 색깔과 같은 색깔만 color로 덮어쓰기

-> 재귀로 반복
-> 2차원 배열 출력

공통 로직
1. 현재 색 color로 바꾸기, 4방 탐색으로 같은 색인지 검사
dr = [-1, 1, 0, 0]
dc = [0 , 0 , -1 , 1]
// 4번 돌면서 검사

2. 색깔이 같다면 덮어쓰고, 해당 인덱스 노드를 추가 

구현
재귀함수 만들자
파라미터: image, r, c, color는 상위 참조
 */
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const originalColor = image[sr][sc];
    if (originalColor === color) return image;

    function fill(image: number[][], r: number, c: number) {
        image[r][c] = color;
        
        for (let i = 0; i < 4; i++) {
            const nextR = r + dr[i];
            const nextC = c + dc[i];
        
            if (isOutOfBoundary(image, nextR, nextC) || image[nextR][nextC] !== originalColor) {
                continue;
            }

            fill(image, nextR, nextC);
        }
    }
    fill(image, sr, sc);

    return image;
};

function isOutOfBoundary(image: number[][], r: number, c: number) {
    return r < 0 || c < 0 || r >= image.length || c >= image[0].length;
}