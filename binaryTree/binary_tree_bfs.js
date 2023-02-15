function hierOrder(root) {
    let queue = [root]

    let list = [];

    while (queue.length) {
        let node = queue.shift();
        list.push(node.val);

        if (node.left) {
            queue.push(node.left)
        }

        if (node.right) {
            queue.push(node.right)
        }
    }

    return list;
}