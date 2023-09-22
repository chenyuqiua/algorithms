import { IList } from "./IList";

export interface ILinkedList<T> extends IList<T> {
  append(val: T): void;
  inster(val: T, position: number): boolean;
  remove(val: T): boolean;
  removeAt(position: number): T | null;
  update(val: T, position: number): boolean;
  get(position: number): T | null;
  indexOf(val: T): number;
  isEmpty(): boolean;
  size(): number;
  traverse(): void;
}
