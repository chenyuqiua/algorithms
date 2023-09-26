function hansFunc(key: string, max: number): number {
  // 使用霍纳法则计算hashcode
  const length = key.length;
  let hashcode = 0;
  for (let i = 0; i < length; i++) {
    hashcode = hashcode * 31 + key.charCodeAt(i);
  }

  return hashcode % max;
}

console.log(hansFunc("abc", 7));
console.log(hansFunc("cba", 7));
console.log(hansFunc("nba", 7));
console.log(hansFunc("mba", 7));
console.log(hansFunc("bna", 7));
console.log(hansFunc("aaa", 7));
console.log(hansFunc("zzz", 7));
