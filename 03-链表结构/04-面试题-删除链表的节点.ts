/**
 * 删除链表中节点
 * leetcod: https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/description/
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

function deleteNode(head: ListNode | null, val: number): ListNode | null {
  if (head?.val === val) return head.next;

  let pre: ListNode | null = null;
  let cur = head;
  while (cur?.next) {
    pre = cur;
    cur = cur.next;
    if (cur.val === val) {
      pre.next = cur.next;
      break;
    }
  }

  return head;
}

export {};
