import Stack from "./01_栈结构数组的实现";

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.peek());
console.log(stack);
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.peek());
