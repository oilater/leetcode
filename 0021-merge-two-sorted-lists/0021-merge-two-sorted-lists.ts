/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }

 각 헤드가 들어옴
 이걸 합쳐야 함

 풀이
 1. 두 링크드리스트를 합칠 링크드리스트의 시작점인 더미노드를 만든다.

두 리스트가 서로 남아있을 때에는 서로 누가 더 큰지 비교하면서 넣어야 함

하나라도 끝나면? 그냥 나머지 뒤에 이어붙이면 됨

 더미노드.next가 정답
  p
1 2 4
2 3 6

dummy.next에 list1을 넣고, list1과 더미의 포인터를 하나 옮긴다
근데 pointer가 같은 객체 참조하지 않나?

dummy -> 1 -> 
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let dummy = new ListNode();
  let pointer = dummy;

  while(list1 && list2) {
    if (list1.val < list2.val) {
        pointer.next = list1;
        list1 = list1.next;
    } else {
        pointer.next = list2;
        list2 = list2.next;
    }
    pointer = pointer.next;
  }

  if (list1) {
    pointer.next = list1;
  } 
  
  if (list2) {
    pointer.next = list2;
  }

  return dummy.next;  
};