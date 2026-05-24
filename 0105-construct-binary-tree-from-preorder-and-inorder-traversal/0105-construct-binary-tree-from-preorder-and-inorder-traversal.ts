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
이 문제는 결국 
루트는 preorder에서 찾고, 루트의 index를 기준으로 left, right 트리를 preorder에서 결정
left, right에서도 이 과정을 반복
 */

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length === 0) return null;

    const inorderMap = new Map();
    inorder.map((value, index) => inorderMap.set(value, index));
    
    function build(preStart, preEnd, inStart, inEnd): TreeNode | null {
        if (preStart > preEnd) return null;
        const rootValue = preorder[preStart];
        const rootIndex = inorderMap.get(rootValue) ?? -1;
        const leftSize = rootIndex - inStart;
        
        return new TreeNode(
            rootValue,
            build(preStart + 1, preStart + leftSize, inStart, rootIndex - 1),
            build(preStart + leftSize + 1, preEnd, rootIndex + 1, inEnd),
        );
    }
    return build(0, preorder.length - 1, 0, inorder.length - 1);
};