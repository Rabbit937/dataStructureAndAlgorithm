class TreeNode {
    val;
    left;
    right;
    height;
    constructor(val, left, right, height) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
        this.height = (height === undefined ? 0 : height)
    }
}


function arrToTree(arr) {
    if (arr.length === 0) return null;

    let root = new TreeNode(arr[0]);

    let queue = [root]
    let i = 0;
    while (queue.length) {
        let node = queue.shift();
        if (++i >= arr.length) break;

        if (arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left)
        }

        if (++i >= arr.length) break;
        if (arr[i] !== null) {
            node.right = new TreeNode(arr[i])
            queue.push(node.right)
        }
    }

    return root;
}


module.exports = {
    TreeNode,
    arrToTree
}