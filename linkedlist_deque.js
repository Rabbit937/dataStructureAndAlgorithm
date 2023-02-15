class ListNode {
    prev; // 前驱结点引用(指针)
    next; // 后继结点引用(指针)
    val;

    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LinkedListDeque {
    front;
    rear;
    len;

    constructor() {
        this.front = null;
        this.rear = null;
        this.len = 0;
    }

    // 队尾入队
    pushLast(val) {
        const node = new ListNode(val);

        if (this.len === 0) {
            this.front = node;
            this.rear = node;
        } else {
            this.rear.next = node;  // 尾结点的最后一个指向node
            node.prev = this.rear   // node的前指针指向尾结点            
            this.rear = node; // 更新尾结点
        }

        this.len++;
    }

    // 队首入队
    pushFirst(val) {
        const node = new ListNode(val);

        if (this.len === 0) {
            this.front = node;
            this.rear = node;
        } else {
            this.front.prev = node;
            node.next = this.front;
            this.front = node;
        }

        this.len++;
    }

    // 队尾出队
    pollLast() {
        if (this.len === 0) {
            return null;
        }

        const value = this.rear.val;

        let temp = this.rear.prev;
        if (temp !== null) {
            temp.next = null;
            this.rear.prev = null;
        }

        this.rear = temp;
        this.len--;
        return value;
    }

    // 队首出队
    pollFirst() {
        if (this.len === 0) {
            return null;
        }

        const value = this.front.val;

        let temp = this.front.next;

        if (temp !== null) {
            temp.prev = null;
            this.front.next = null;
        }

        this.front = temp;
        this.len--;
        return value;
    }

    peekLast() {
        return this.len === 0 ? null : this.rear.val;
    }

    peekFirst() {
        return this.len === 0 ? null : this.front.value;
    }

    size() {
        return this.len;
    }

    isEmpty() {
        return this.len === 0;
    }

    print() {
        const arr = [];
        let temp = this.front;

        while (temp !== null) {
            arr.push(temp.val)
            temp = temp.next;
        }

        console.log("[" + arr.join(", ") + "]");

    }
}