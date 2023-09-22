/**
 * 设计链表
 * LeetCode: https://leetcode.cn/problems/design-linked-list/solutions/\
 */
class LinkedNode {
  val: number;
  next: LinkedNode | null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkedList {
  private head: LinkedNode | null = null;
  private size: number = 0;

  constructor() {}

  get(index: number): number {
    if (index < 0 || index >= this.size) return -1;
    return this.getCurNode(index)!.val;
  }

  addAtHead(val: number): void {
    const newNode = new LinkedNode(val);
    if (this.head === null) this.head = newNode;
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  addAtTail(val: number): void {
    const newNode = new LinkedNode(val);
    if (this.head === null) this.head = newNode;
    else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = newNode;
    }
    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.size) return;
    const newNode = new LinkedNode(val);
    if (index <= 0) this.addAtHead(val);
    else {
      const pre = this.getCurNode(index - 1);
      newNode.next = pre!.next;
      pre!.next = newNode;
    }
    this.size++;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) return;

    if (index === 0) this.head = this.head!.next;
    else {
      const pre = this.getCurNode(index - 1);
      pre!.next = pre!.next?.next ?? null;
    }
    this.size--;
  }

  private getCurNode(position: number): LinkedNode | null {
    let cur = this.head;
    let index: number = 0;
    while (index++ < position) {
      cur = cur!.next;
    }
    return cur;
  }
}
