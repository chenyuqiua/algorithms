import BSTree from "./01-实现BSTree";

const bst = new BSTree<number>();
bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(6);
bst.print();
// 前序: 11 7 5 3 6 9 8 10 15 13 12 14 20 18 25
// 中序: 3 5 6 7 8 9 10 11 12 13 14 15 18 20 25
// 后序: 3 6 5 8 10 9 7 12 14 13 18 25 20 15 11
// 层序: 11 7 15 5 9 13 20 3 6 8 10 12 14 18 25
console.log(bst.preorderTraversal());
console.log(bst.inorderTraversal());
console.log(bst.postorderTraversal());
console.log(bst.levelorderTraversal());
console.log(bst.getMaxValue());
console.log(bst.getMinValue());
console.log(bst.search(100));
console.log(bst.search(2));
console.log(bst.search(12));
console.log(bst.search(15));

bst.remove(3);
bst.print();
bst.remove(10);
bst.print();
bst.remove(7);
bst.print();
bst.remove(11);
bst.print();
