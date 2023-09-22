import Queue from "./01-实现队列结构-数组";
import { IQueue } from "../types/IQueue";

function hotPotato(names: string[], num: number) {
  let cur: number = 1;
  const queue: IQueue<string> = new Queue<string>();
  names.forEach((item) => {
    queue.enqueue(item);
  });

  while (queue.size() > 1) {
    const curName = queue.dequeue()!;
    if (cur !== num) {
      queue.enqueue(curName);
      cur++;
      continue;
    }
    cur = 1;
  }
  return queue.peek();
}

console.log(hotPotato(["abc", "cba", "aaa", "ccc", "ddd", "eee", "fff"], 4));
