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

방향을 뒤집어주자
다음 노드의 next를 curNode로
근데 이러면 다다음 노드에 도달하지 못함
 */

function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let cur = head;

  while (cur) {
    const next = cur.next; // 2
    cur.next = prev; // null <- 1
    prev = cur;
    cur = next;
  }
  return prev;
}
