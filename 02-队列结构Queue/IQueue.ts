import { IList } from "../types/list";
export interface IQueue<T> extends IList<T> {
  enqueue(val: T): void; // 入队列
  dequeue(): T | undefined; // 出队列
  isEmpty(): boolean; // 是否为空
  size(): number; // 元素个数
  peek(): T | undefined; // 当前元素
}
