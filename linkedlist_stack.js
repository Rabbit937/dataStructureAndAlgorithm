const ListNode = require('./include/ListNode')

class LinkedListStack {
    #stackPeek;
    #stkSize = 0;

    constructor() {
        this.#stackPeek = null;
    }

    get size() {
        return this.#stkSize;
    }

    isEmpty() {
        return this.size == 0;
    }

    push(num) {
        const node = new ListNode(num);
        node.next = this.#stackPeek;
        this.#stackPeek = node;
        this.#stkSize++;
    }

    pop() {
        const num = this.peek();
        if (!this.#stackPeek) {
            throw new Error("栈为空!")
        }

        this.#stackPeek = this.#stackPeek.next;
        this.#stkSize--;
        return num;
    }

    peek() {
        if (!this.#stackPeek) {
            throw new Error("栈为空!");
        }

        return this.#stackPeek.val;
    }

    toArray() {
        let node = this.#stackPeek;
        let res = new Array(this.size);

        for (let i = res.length - 1; i >= 0; i--) {
            res[i] = node.val;
            node = node.next;
        };

        return res;
    }
}