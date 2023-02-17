// 伪代码
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
    
}