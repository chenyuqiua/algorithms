const stack: number[] = [];

function foo(num: number): number[] {
  while (num > 0) {
    stack.push(num % 2);
    num = Math.floor(num / 2);
  }
  return stack.reverse();
}

console.log(foo(35).join(""));
