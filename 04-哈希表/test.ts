import HashTable from "./02-实现HashTable";

const hash = new HashTable();
console.log("----测试 put方法----");
console.log(hash.put("abc", 123));
console.log(hash.put("abc", 300));
console.log(hash.put("ccc", 200));
console.log(hash.put("ccc", 400));

console.log("----测试 get方法----");
console.log(hash.get("abc"));
console.log(hash.get("ccc"));
console.log(hash.get("ddd"));

console.log("----测试 delete方法----");
console.log(hash.delete("abc"));
console.log(hash.delete("ddd"));

console.log("----测试 扩容缩容----");
hash.put("cba", 123);
hash.put("acc", 45);
hash.put("fff", 456);
hash.put("ggg", 452);

hash.put("hhh", 324);
hash.put("iii", 556);
hash.put("jjj", 556);
hash.put("kkk", 556);

hash.delete("hhh");
hash.delete("iii");
hash.delete("jjj");
hash.delete("kkk");
hash.delete("ggg");
hash.delete("fff");
hash.delete("cba");
console.log(hash.data);
