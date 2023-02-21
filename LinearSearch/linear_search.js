/**
 * @description 线性查找(数组)
 * @param {目标数组} nums 
 * @param {查找目标} target 
 * @returns 查找目标的索引
 */
function linearSearchArray(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    return -1;
}

let nums = Array.from(new Set(new Array(100).fill(0).map(() => Math.floor(Math.random() * 100) + 1)))
console.log(linearSearchArray(nums, 38))

function linearSearchLinkedList(head, target) {
    while (head) {
        if (head.val === target) {
            return head;
        }
        head = head.next;
    }
    return null;
}

