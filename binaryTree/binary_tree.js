const Tree = require('../include/TreeNode')
const { printTree } = require('../include/PrintUtil')

let n1 = new Tree.TreeNode(1),
    n2 = new Tree.TreeNode(2),
    n3 = new Tree.TreeNode(3),
    n4 = new Tree.TreeNode(4),
    n5 = new Tree.TreeNode(5);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;

console.log("\n初始二叉树\n")
// console.log(n1)
printTree(n1);


// 插入与删除结点
let P = new Tree.TreeNode(0);

n1.left = P;
P.left = n2;
console.log("\n插入结点P后")
printTree(n1)

n1.left = n2;
console.log("\n删除结点P后\n")
printTree(n1)