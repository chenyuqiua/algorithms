import { IQueue } from "../types/IQueue";

class ListNode<T> {
  val: T | null;
  next: ListNode<T> | null;
  constructor(val: T | null) {
    this.val = val;
    this.next = null;
  }
}

class Queue<T> implements IQueue<T> {
  private head: ListNode<T> | null = null;
  private _size: number = 0;

  enqueue(val: T): void {
    const newNode = new ListNode<T>(val);
    if (!this.head) this.head = newNode;
    else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = newNode;
    }
    this._size++;
  }
  dequeue(): T | undefined {
    if (!this.head) return;
    const ans = this.head;
    this.head = ans.next;
    this._size--;
    return ans.val ?? undefined;
  }
  isEmpty(): boolean {
    return this._size === 0;
  }
  size(): number {
    return this._size;
  }
  peek(): T | undefined {
    return this.head?.val ?? undefined;
  }
}

export default Queue;
