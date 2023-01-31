const ListNode = require('./include/ListNode')

class LinkedListQueue {
    #front;
    #rear;
    #queSize = 0;

    constructor() {
        this.#front = null;
        this.#rear = null;
    }

    get size() {
        return this.#queSize;
    }

    isEmpty() {
        return this.size === 0;
    }

    // 入队
    offer(num) {
        const node = new ListNode(num);

        if (!this.#front) {
            this.#front = node;
            this.#rear = node;
        } else {
            this.#rear.next = node;
            this.#rear = node;
        }

        this.#queSize++;
    }

    // 出队
    poll() {
        const num = this.peek();

        this.#front = this.#front.next;
        this.#queSize--;
        return num;

    }

    peek() {
        if (this.size === 0) {
            throw new Error("队列为空");
        }

        return this.#front.val;
    }
}