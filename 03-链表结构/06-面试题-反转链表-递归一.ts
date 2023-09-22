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
  return recur(head, null);
}

function recur(cur: ListNode | null, pre: ListNode | null): ListNode | null {
  if (cur === null) return pre;
  const ans = recur(cur.next, cur);
  cur.next = pre;
  return ans;
}
