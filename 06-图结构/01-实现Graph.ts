class Graph<T> {
  private verteces: T[] = [];
  private adjList: Map<T, T[]> = new Map();

  /**
   * @description 添加顶点的方法
   * @param vertex 添加的顶点
   */
  addVertex(vertex: T) {
    this.verteces.push(vertex);
    this.adjList.set(vertex, []);
  }

  /**
   * @description 添加边的方法
   * @param v1 边的顶点1
   * @param v2 边的顶点2
   */
  addEdge(v1: T, v2: T) {
    this.adjList.get(v1)?.push(v2);
    this.adjList.get(v2)?.push(v1);
  }

  /**
   * @description 图的遍历: 广度优先算法
   */
  bfs() {
    if (this.addVertex.length === 0) return;

    // 取出第一个顶点添加到队列中, 并打上被访问的标记
    const firstVertex = this.verteces[0];
    const queue: T[] = [firstVertex];
    const visited = new Set<T>();
    visited.add(firstVertex);

    // 队列非空则循环
    while (queue.length) {
      const vertex: T = queue.shift()!;
      console.log(vertex);

      // 获取当前顶点的全部邻接点, 将没有被访问的邻接点加入到队列中, 并打上被访问的标记
      const neighbors = this.adjList.get(vertex);
      neighbors?.forEach((nei) => {
        if (!visited.has(nei)) {
          queue.push(nei);
          visited.add(nei);
        }
      });
    }
  }

  /**
   * @description 图的遍历: 深度优先算法 (递归实现)
   */
  dfs() {
    if (this.addVertex.length === 0) return;

    // 取出第一个顶点, 并打上被访问的标记
    const firstVertex = this.verteces[0];
    const visited = new Set<T>();
    visited.add(firstVertex);

    // 递归调用
    this.dfsRecur(firstVertex, visited);
  }

  /**
   * @description 深度优先的递归函数
   * @param vertex 被访问的顶点
   * @param visited 被访问过顶点的Set集合
   */
  dfsRecur(vertex: T, visited: Set<T>) {
    console.log(vertex);

    // 获取当前顶点的全部邻接点, 将没有被访问的邻接点打上被访问的标记, 并进行递归调用
    const neighbors = this.adjList.get(vertex);
    neighbors?.forEach((nei) => {
      if (!visited.has(nei)) {
        visited.add(nei);
        this.dfsRecur(nei, visited);
      }
    });
  }

  /**
   * @description 图的遍历: 深度优先算法 (栈实现)
   */
  // dfs() {
  //   if (this.verteces.length === 0) return;

  //   // 取出第一个顶点添加到栈中, 并打上被访问的标记
  //   const firstVertex = this.verteces[0];
  //   const stack: T[] = [firstVertex];
  //   const visited = new Set<T>();
  //   visited.add(firstVertex);

  //   // 栈非空则循环
  //   while (stack.length) {
  //     const vertex = stack.pop()!;
  //     console.log(vertex);

  //     // 获取当前顶点的全部邻接点, 将没有被访问的邻接点加入到栈中, 并打上被访问的标记
  //     const neighbors = this.adjList.get(vertex);
  //     if (!neighbors) continue;
  //     for (let i = neighbors.length - 1; i >= 0; i--) {
  //       const nei = neighbors[i];
  //       if (!visited.has(nei)) {
  //         stack.push(nei);
  //         visited.add(nei);
  //       }
  //     }
  //   }
  // }

  /**
   * @description 打印图结果的方法
   */
  printEdges() {
    this.verteces.forEach((vertex) => {
      const edges = this.adjList.get(vertex);
      console.log(`${vertex} -> ${edges?.join(" ")}`);
    });
  }
}

export default Graph;
