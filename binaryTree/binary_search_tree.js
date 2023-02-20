const Tree = require('../include/TreeNode')
const { printTree } = require("../include/PrintUtil")


var root;

function BinarySearchTree(nums) {
    nums.sort((a, b) => a - b);
    root = buildTree(nums, 0, nums.length - 1)
}

function getRoot() {
    return root;
}

function buildTree(nums, i, j) {
    if (i > j) return null;
    let mid = Math.floor((i + j) / 2)
    let root = new Tree.TreeNode(nums[mid])

    root.left = buildTree(nums, i, mid - 1);
    root.right = buildTree(nums, mid + 1, j);
    return root;
}

function search(num) {
    let cur = root;
    while (cur !== null) {
        if (cur.val < num) cur = cur.right;
        else if (cur.val > num) cur = cur.left;
        else break;
    }
    return cur;
}

function insert(num) {
    if (root === null) return null;
    let cur = root, pre = null;
    while (cur !== null) {
        if (cur.val === num) return null;
        pre = cur;
        if (cur.val < num) {
            cur = cur.right
        } else {
            cur = cur.left
        }
    }

    let node = new Tree.TreeNode(num);
    if (pre.val < num) {
        pre.right = node;
    } else {
        pre.left = node;
    }
    return node;
}

function remove(num) {
    if (root === null) return null;
    let cur = root; pre = null;
    while (cur !== null) {
        
    }
}

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
BinarySearchTree(nums);
console.log("\n初始化的二叉树为\n");
printTree(getRoot());


let node = search(7);
console.log(`\n查找到的节点对象为${JSON.stringify(node)},结点值 = ${node.val}`)

node = insert(16)
console.log(`插入结点16后，二叉树为\n`);
printTree(getRoot())