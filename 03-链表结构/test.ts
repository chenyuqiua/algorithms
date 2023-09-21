import LinkedList from "./01-实现LinkedList";

const linkedList = new LinkedList<string>();
console.log("----test append----");
linkedList.append("aaa");
linkedList.append("bbb");
linkedList.append("ccc");
linkedList.append("ddd");

console.log("----test inster----");
linkedList.inster("abc", 0);
linkedList.traverse();
linkedList.inster("fff", 4);
linkedList.traverse();

console.log("----test remove----");
console.log(linkedList.removeAt(0));
console.log(linkedList.removeAt(0));
linkedList.traverse();
console.log(linkedList.removeAt(1));
console.log(linkedList.removeAt(2));
console.log(linkedList.removeAt(2));
linkedList.traverse();

console.log("----test get----");
console.log(linkedList.get(0));
console.log(linkedList.get(1));

console.log("----test update----");
console.log(linkedList.update("111", 0));
console.log(linkedList.update("999", 1));
console.log(linkedList.update("999", 10));
linkedList.traverse();

console.log("----test indexOf----");
console.log(linkedList.indexOf("111"));
console.log(linkedList.indexOf("999"));
console.log(linkedList.indexOf("abc"));

console.log("----test remove----");
console.log(linkedList.remove("abc"));
console.log(linkedList.remove("111"));
console.log(linkedList.remove("999"));
linkedList.traverse();

console.log("----test isEmpty size----");
console.log(linkedList.isEmpty());
console.log(linkedList.size());
