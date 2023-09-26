/**
 * 基于链地址法实现HashTable
 */
class HashTable<T = any> {
  data: [string, T][][] = [];
  private length: number = 7;
  private count: number = 0;

  /**
   * @description 向哈希表添加键值对数据
   * @param key 键值对key
   * @param val 键值对value
   * @returns 返回添加的结果
   */
  put(key: string, val: T): boolean {
    // 判断走修改(更新)还是添加
    const [bucket, tuple] = this.getBucketTupleByKey(key);
    if (tuple) tuple[1] = val;
    else {
      bucket.push([key, val]);
      this.count++;

      // 添加后需判断负载因子是否大于0.75, 超过0.75需扩容
      const loadFactor = this.count / this.length;
      if (loadFactor > 0.75) this.resize(this.length * 2);
    }
    return true;
  }

  /**
   * @description 根据key从哈希表中获取对应的value
   * @param key 键值对key
   * @returns key所对应的value
   */
  get(key: string): T | undefined {
    const [_, tuple] = this.getBucketTupleByKey(key);
    return tuple ? tuple[1] : undefined;
  }

  /**
   * @description 根据key删除哈希表中对应的元素
   * @param key 键值对key
   * @returns 删除元素的value
   */
  delete(key: string): T | undefined {
    const index = this.hansFunc(key, this.length);
    const bucket: [string, T][] = this.data[index] ?? [];

    // 删除逻辑
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      if (tuple[0] === key) {
        const res = tuple[1];
        bucket.splice(i, 1);
        this.count--;

        // 删除后需判断负载因子是否小于0.25, 小于0.25需缩容
        const loadFactor = this.count / this.length;
        if (loadFactor < 0.25 && this.length > 7)
          this.resize(Math.floor(this.length / 2));
        return res;
      }
    }

    return undefined;
  }

  /**
   * @description 哈希函数, 根据key转换为对应的索引
   * @param key 键值对key
   * @param max 哈希表的最大长度
   * @returns 返回key转换后的索引
   */
  private hansFunc(key: string, max: number): number {
    // 使用霍纳法则计算hashcode
    const length = key.length;
    let hashcode = 0;
    for (let i = 0; i < length; i++) {
      hashcode = hashcode * 31 + key.charCodeAt(i);
    }

    return hashcode % max;
  }

  /**
   * @description 根据key获取桶(bucket)和符合的元组(tuple)信息
   * @param key 操作的key值
   * @returns 返回一个数组包含桶和元组信息 -> [bucket, tuple]
   */
  private getBucketTupleByKey(key: string): [[string, T][], [string, T]] {
    const index = this.hansFunc(key, this.length);

    // 取出的桶可能为undefined 当undefined时赋值为空数组
    const bucket: [string, T][] = this.data[index] ?? [];
    this.data[index] = bucket;
    return [bucket, bucket.filter((tuple) => tuple[0] === key)[0]];
  }

  /**
   * @description 为哈希表进行扩容
   * @param newLength 扩容的长度
   */
  private resize(newLength: number) {
    const oldData = this.data;

    // 重新设置长度确保长度为一个质数, 数据初始化
    this.length = this.getNextPrime(newLength);
    this.data = [];
    this.count = 0;

    // 将原数据重新放入新数组当中
    oldData.forEach((bucket) => {
      if (!bucket) return;

      bucket.forEach((tuple) => {
        this.put(tuple[0], tuple[1]);
      });
    });
  }

  /**
   * @description 判断传入的数字是否为质数
   * @param num 需要判断的数字
   * @returns 是否为质数的结果
   */
  private isPrime(num: number): boolean {
    const sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) return false;
    }

    return true;
  }

  /**
   * @description 获取传入数字最接近的下一个质数, 传入数字本身就是质数不做处理
   * @param num 传入的数字
   * @returns 返回最接近的下一个质数
   */
  private getNextPrime(num: number): number {
    // 限制最小为7
    if (num < 7) return 7;

    let prime = num;
    while (!this.isPrime(prime)) {
      prime++;
    }
    return prime;
  }
}

export default HashTable;
