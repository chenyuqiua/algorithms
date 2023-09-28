import { btPrint } from "../utils/print";

class TreeNode<T> {
  val: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  constructor(val: T, left?: TreeNode<T> | null, right?: TreeNode<T> | null) {
    this.val = val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

enum OrderType {
  PRE = "PRE",
  IN = "IN",
  POST = "POST",
}

/**
 * 二叉搜索树的实现
 */
class BSTree<T> {
  private root: TreeNode<T> | null = null;

  /**
   * @description 向二叉树中插入元素
   * @param val 插入的val
   */
  insert(val: T) {
    const newNode = new TreeNode(val);

    if (!this.root) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  /**
   * @description 二叉树先序遍历
   * @returns 先序遍历结果
   */
  preorderTraversal(): T[] {
    const ans: T[] = [];
    this.orderTraverseNode(this.root, ans, OrderType.PRE);
    return ans;
  }

  /**
   * @description 二叉树中序遍历
   * @returns 中序遍历结果
   */
  inorderTraversal(): T[] {
    const ans: T[] = [];
    this.orderTraverseNode(this.root, ans, OrderType.IN);
    return ans;
  }

  /**
   * @description 二叉树后序遍历
   * @returns 后序遍历结果
   */
  postorderTraversal(): T[] {
    const ans: T[] = [];
    this.orderTraverseNode(this.root, ans, OrderType.POST);
    return ans;
  }

  /**
   * @description 二叉树层序遍历
   * @returns 层序遍历结果
   */
  levelorderTraversal(): T[][] {
    const ans: T[][] = [];
    if (!this.root) return ans;

    const queue: TreeNode<T>[] = [this.root];
    while (queue.length) {
      const curAns: T[] = [];
      const size: number = queue.length;
      for (let i = 0; i < size; i++) {
        const curNode = queue.shift()!;
        curAns.push(curNode.val);
        if (curNode.left) queue.push(curNode.left);
        if (curNode.right) queue.push(curNode.right);
      }
      ans.push(curAns);
    }
    return ans;
  }

  /**
   * 获取搜索二叉树中最大值
   * @returns 最大值
   */
  getMaxValue(): T | null {
    let curNode = this.root;
    while (curNode && curNode.right) {
      curNode = curNode.right;
    }
    return curNode?.val ?? null;
  }

  /**
   * 获取搜索二叉树中最小值
   * @returns 最小值
   */
  getMinValue(): T | null {
    let curNode = this.root;
    while (curNode && curNode.left) {
      curNode = curNode.left;
    }
    return curNode?.val ?? null;
  }

  /**
   * @description 根据指定val在搜索二叉树中查找是否存在
   * @param val 搜索的值
   * @returns 是否存在val
   */
  search(val: T): boolean {
    let curNode = this.root;
    while (curNode) {
      if (val === curNode.val) return true;
      else if (val < curNode.val) curNode = curNode.left;
      else curNode = curNode.right;
    }
    return false;
  }

  /**
   * @description 根据val删除对应的节点
   * @param val 要删除的val
   */
  remove(val: T) {
    this.removeNode(this.root, val);
  }

  /**
   * @description 借助封装的工具函数在控制台打印树结构
   */
  print() {
    btPrint(this.root);
  }

  /**
   * @description 递归在二叉树合适的位置插入节点
   * @param node 根节点root
   * @param newNode 要插入的节点
   */
  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (node.val > newNode.val)
      node.left === null
        ? (node.left = newNode)
        : this.insertNode(node.left, newNode);
    else
      node.right === null
        ? (node.right = newNode)
        : this.insertNode(node.right, newNode);
  }

  /**
   * @description 先序遍历、中序遍历、后续遍历共用的递归函数
   * @param node 根节点root
   * @param ans 要返回的结果
   * @param type 遍历的类型(枚举 PRE -> 先序, IN -> 中序, POST -> 后序)
   * @returns 返回遍历结果: val数组
   */
  private orderTraverseNode(
    node: TreeNode<T> | null,
    ans: T[],
    type: OrderType
  ) {
    if (!node) return;

    if (type === OrderType.PRE) ans.push(node.val);
    this.orderTraverseNode(node.left, ans, type);
    if (type === OrderType.IN) ans.push(node.val);
    this.orderTraverseNode(node.right, ans, type);
    if (type === OrderType.POST) ans.push(node.val);
  }

  /**
   * @description 根据val删除对应的节点的递归函数
   * @param node 当前的节点
   * @param val 要删除的val
   */
  private removeNode(node: TreeNode<T> | null, val: T): TreeNode<T> | null {
    if (!node) return null;

    // 当前节点的值小于val, 去右子节点删除元素
    if (node.val < val) node.right = this.removeNode(node.right, val);
    // 当前节点的值大于val, 去左子结点删除元素
    else if (node.val > val) node.left = this.removeNode(node.left, val);
    // 当前节点即为待删除节点
    else {
      // 当前节点为叶子节点
      if (!node.left && !node.right) return null;
      // 当前节点右子树存在(包含左右子树都存在的情况)
      else if (node.right) {
        node.val = this.getNextVal(node); // 替换当前节点的val
        node.right = this.removeNode(node.right, node.val); // 去删除被替换val的节点
      }
      // 当前节点左子树存在
      else {
        node.val = this.getPrevVal(node); // 替换当前节点的val
        node.left = this.removeNode(node.left, node.val); // 去删除被替换val的节点
      }
    }

    return node;
  }

  /**
   * @description 后继节点获取传入节点的下一节点的最左节点, 即当前节点的右子树的最左节点
   * @param node 传入的节点
   * @returns 返回后继节点
   */
  private getNextVal(node: TreeNode<T>): T {
    node = node.right!;
    while (node.left) {
      node = node.left;
    }
    return node.val;
  }

  /**
   * @description 前驱节点, 获取传入节点的上一节点的最右节点, 即当前节点的左子树的最右节点
   * @param node 传入的节点
   * @returns 返回前驱节点
   */
  private getPrevVal(node: TreeNode<T>): T {
    node = node.left!;
    while (node.right) {
      node = node.right;
    }
    return node.val;
  }
}

export default BSTree;
