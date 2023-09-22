/**
 * leetcode 剑指 Offer 62. 圆圈中最后剩下的数字
 */
function lastRemaining(n: number, m: number): number {
  if (n === 0) return -1;
  const queue = [...new Array(n).keys()];
  let cur = 1;

  while (queue.length > 1) {
    const curNum = queue.shift()!;
    if (cur !== m) {
      queue.push(curNum);
      cur++;
      continue;
    }
    cur = 1;
  }

  return queue.shift()!;
}

console.log(lastRemaining(5, 3));
console.log(lastRemaining(10, 17));
