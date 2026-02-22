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

 루트 노드 기준으로 왼쪽 + 오른쪽 더하기



 */

function diameterOfBinaryTree(root: TreeNode | null): number {
    let maxHeight = 0;

    // 노드 자신의 기준에서 좌, 우 중 더 높은 트리
    function getHeight(node: TreeNode): number {
        if (node === null) return 0;

        const leftHeight = getHeight(node.left);
        const rightHeight = getHeight(node.right);

        maxHeight = Math.max(maxHeight, leftHeight + rightHeight);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    getHeight(root);
    return maxHeight;
};