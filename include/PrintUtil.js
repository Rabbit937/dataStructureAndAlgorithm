const { arrToTree } = require('./TreeNode')

/**
 * Print a linked list 
 * @param head
 */
function printLinkedList(head) {
    let list = []
    while (head !== null) {
        list.push(head.val.toString())
        head = head.next;
    }
    console.log(list.join(' -> '));
}

function Trunk(prev, str) {
    this.prev = prev;
    this.str = str;
}


function printTree(root) {
    printTree(root, null, false);
}

function printTree(root, prev, isLeft) {
    if (root === null) {
        return;
    }

    let prev_str = "   ";
    let trunk = new Trunk(prev, prev_str);

    printTree(root.right, trunk, true);

    if (!prev) {
        trunk.str = "—————";
    } else if (isLeft) {
        trunk.str = "/————";
        prev_str = "    |"
    } else {
        trunk.str = "\\————";
    }

    // console.log(trunk)
    showTrunks(trunk)

    console.log(" " + root.val);

    if (prev) {
        prev.str = prev_str;
    }

    trunk.str = "   |"
    printTree(root.left, trunk, false)
}


function showTrunks(p) {
    if (!p) {
        return;
    }

    showTrunks(p.prev)
    process.stdout.write(p.str)
}

function printHeap(arr) {
    console.log("堆的数组表示:")
    console.log(arr)
    console.log("堆的树状表示:")
    printTree(arrToTree(arr))
}



module.exports = {
    printLinkedList,
    printTree,
    printHeap
}