/**
골랐으면 건너뛰어야 함
각 턴에서 할 수 있는 행동
- 뽑거나
- 안 뽑거나
*/
function subsets(nums: number[]): number[][] {
    if (!nums.length) return [[]];
    const result = [];
    
    function comb(depth: number, path: number[]) {
        result.push([...path]);
        if (depth === nums.length) return;
        
        for (let i = depth; i < nums.length; i++) {
            path.push(nums[i]);
            comb(i + 1, path);
            path.pop();
        }
    }
    comb(0, []);
    return result;
};