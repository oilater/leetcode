/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }

일단 끝까지 간 뒤 길이 계산
다시 한 번 돌면서 Math.ceil(length / 2)번째 노드
O(N)

 */

function middleNode(head: ListNode | null): ListNode | null {
    let length = 0;
    
    function getLength(node: ListNode | null): number {
        if (!node) return 0;
        return getLength(node.next) + 1;
    }

    function getNode(node: ListNode | null, depth: number, targetIndex: number) {
        if (!node || depth === targetIndex) return node;
        return getNode(node.next, depth + 1, targetIndex);
    }

    length = getLength(head);
    let targetIndex = length % 2 === 0 ? length / 2 : Math.floor(length / 2);

    return getNode(head, 0, targetIndex);
};