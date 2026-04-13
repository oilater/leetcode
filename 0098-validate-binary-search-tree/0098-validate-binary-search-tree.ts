/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 
왼쪽은 루트보다 작아야 함
오른쪽은 루트보다 커야 함
-> 기준이 계속 업데이트됩
매번 left, right 검사해야 함
min, max를 넘김
max 는 왼쪽이 넘지 말아야 할 선
min은 오른쪽이 넘지 말아야 할 선
 */

function isValidBST(root: TreeNode | null): boolean {
    function dfs(node: TreeNode, min: number, max: number) {
        if (node === null) return true;
        if (node.val <= min || node.val >= max) return false;
        
        return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
    }
    return dfs(root, -Infinity, Infinity) ? true : false;
};