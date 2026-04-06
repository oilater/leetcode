/**
[1, 2, 3]
1 선택 -> [1]
visited 배열 필요 -> 방문했는지 확인
[true, false, false]
*/

function permute(nums: number[]): number[][] {
    const result = [];
    const visited = Array(nums.length).fill(false);

    function recursion(currentPath: number[]) {
        if (currentPath.length === nums.length) {
            result.push([...currentPath]);
            return;
        }

        for (let nextIndex = 0; nextIndex < nums.length; nextIndex++) {   
            if (visited[nextIndex]) {
                continue;
            }
            currentPath.push(nums[nextIndex]);
            visited[nextIndex] = true;
            recursion(currentPath);
            currentPath.pop();
            visited[nextIndex] = false;
        }
    }   
    recursion([]);
    return result;
};