import { IList } from "./IList";

interface IStack<T> extends IList<T> {
  push(val: T): void;
  pop(): T | undefined;
}

export { IStack };
