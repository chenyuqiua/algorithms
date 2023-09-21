import { IList } from "../types/list";

interface IStack<T> extends IList<T> {
  push(val: T): void;
  pop(): T | undefined;
}

export { IStack };
