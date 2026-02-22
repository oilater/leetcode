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

 높이 어떻게 판단
 왼쪽, 오른쪽 높이 구해와
 그럼 아래에선 자신의 높이를 반환해야함
 비교해서 차이난다면 -1 반환
 1이하라면 true

 이걸 재귀로 반복해야 함
 */

function isBalanced(root: TreeNode | null): boolean {
    return getHeight(root) !== -1;
};

function getHeight(root: TreeNode | null): number {
    if (root === null) return 0;
    
    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);

    // 각 노드에서 좌우 크기 비교
    if (leftHeight === -1 || rightHeight === -1) return -1;
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;

    // 각 재귀가 루트 노드에 알려줄 정보
    return Math.max(leftHeight, rightHeight) + 1;
}