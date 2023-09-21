export interface IList<T> {
  isEmpty(): boolean; // 是否为空
  size(): number; // 元素个数
  peek(): T | undefined; // 当前元素
}
