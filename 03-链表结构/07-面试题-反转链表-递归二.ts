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
  if (head === null || head.next === null) return head;

  const ans = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return ans;
}

export {};
