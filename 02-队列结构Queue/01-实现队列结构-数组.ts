import { IQueue } from "./IQueue";

/**
 * 基于数组实现队列结构
 */
class Queue<T> implements IQueue<T> {
  private dara: T[] = [];

  enqueue(val: T): void {
    this.dara.push(val);
  }

  dequeue(): T | undefined {
    return this.dara.shift();
  }

  isEmpty(): boolean {
    return this.dara.length === 0;
  }
  size(): number {
    return this.dara.length;
  }
  peek(): T | undefined {
    return this.dara[0];
  }
}

export default Queue;
