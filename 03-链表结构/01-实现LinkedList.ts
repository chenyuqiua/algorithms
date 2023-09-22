import { ILinkedList } from "../types/ILinkedList";

class ListNode<T> {
  val: T | null;
  next: ListNode<T> | null;
  constructor(val: T | null) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList<T> implements ILinkedList<T> {
  private head: ListNode<T> | null = null;
  private _size: number = 0;

  /**
   * @description 向链表尾部追加元素
   * @param val 添加到链表中的val
   */
  append(val: T): void {
    const newNode = new ListNode(val);

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

  /**
   * @description 根据传入的val和索引, 向链表指定索引处插入元素
   * @param val 插入链表中的val
   * @param position 传入合法的插入索引
   * @returns 返回插入的结果 true|false
   */
  inster(val: T, position: number): boolean {
    if (position > this._size || position < 0) return false;
    const newNode = new ListNode<T>(val);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      const pre = this.getCurNode(position - 1);

      newNode.next = pre!.next;
      pre!.next = newNode;
    }

    this._size++;
    return true;
  }

  /**
   * @description 从链表中删除指定val的节点
   * @param val 要删除的val
   * @returns 返回删除的结果 true|false
   */
  remove(val: T): boolean {
    const index = this.indexOf(val);
    if (index === -1) return false;
    this.removeAt(index);
    return true;
  }

  /**
   * @description 根据索引删除链表中对应的节点
   * @param position 传入合法的删除索引
   * @returns 返回删除节点val
   */
  removeAt(position: number): T | null {
    if (position >= this._size || position < 0) return null;
    let ans = this.head;

    if (position === 0) {
      this.head = ans!.next;
    } else {
      const pre = this.getCurNode(position - 1);
      ans = pre!.next;
      pre!.next = ans?.next ?? null;
    }

    this._size--;
    return ans?.val ?? null;
  }

  /**
   * @description 根据传入的val和索引, 将链表指定索引处元素的val修改
   * @param val 要更新的val
   * @param position 传入合法的更新索引
   * @returns 返回更新的结果
   */
  update(val: T, position: number): boolean {
    if (position >= this._size || position < 0) return false;
    const cur = this.getCurNode(position);
    cur!.val = val;
    return true;
  }

  /**
   * @description 根据索引获取链表中对应的节点val
   * @param position 传入合法的元素索引
   * @returns 返回链表中符合当前索引的节点val
   */
  get(position: number): T | null {
    if (position >= this._size || position < 0) return null;
    return this.getCurNode(position)?.val ?? null;
  }

  /**
   * @description 根据传入的val返回对应的索引
   * @param val 要查找的val
   * @returns 返回val对应的索引 -1表示不存在
   */
  indexOf(val: T): number {
    let cur: ListNode<T> | null = this.head;
    let index: number = 0;
    while (cur) {
      if (cur.val === val) return index;
      index++;
      cur = cur.next;
    }

    return -1;
  }

  /**
   * @description 返回第一个节点的val
   */
  peek(): T | undefined {
    return this.head?.val ?? undefined;
  }

  /**
   * @description 判断链表是否为空
   */
  isEmpty(): boolean {
    return this._size === 0;
  }

  /**
   * @description 返回链表中元素个数
   */
  size(): number {
    return this._size;
  }

  /**
   * @description 遍历打印链表的方法
   */
  traverse(): void {
    const values: T[] = [];
    let cur = this.head;
    while (cur) {
      values.push(cur.val!);
      cur = cur.next;
    }
    console.log(values.join(" -> "));
  }

  /**
   * @description 根据索引查找链表中对应的节点
   * @param position 传入合法的节点索引
   * @returns 返回链表中符合当前索引的节点
   */
  private getCurNode(position: number): ListNode<T> | null {
    let cur = this.head;
    let index: number = 0;
    while (index++ < position && cur) {
      cur = cur.next;
    }
    return cur;
  }
}

export default LinkedList;
