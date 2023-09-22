/**
 * 反转链表
 * leetcode: https://leetcode.cn/problems/UHnkqh/submissions/
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let pre: ListNode | null = null;
  let next: ListNode | null = null;
  while (head) {
    next = head.next!;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
}

export {};
