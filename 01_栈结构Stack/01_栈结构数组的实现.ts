import { IStack } from "./IStack";

class Stack<T> implements IStack<T> {
  private arr: T[] = [];

  isEmpty(): boolean {
    return this.arr.length === 0 ? true : false;
  }

  size(): number {
    return this.arr.length;
  }

  push(value: T): void {
    this.arr.push(value);
  }

  pop(): T | undefined {
    return this.arr.pop();
  }

  peek(): T | undefined {
    return this.arr[this.arr.length - 1];
  }
}

export default Stack;
