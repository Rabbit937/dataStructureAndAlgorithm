class ArrayQueue {
    #queue;
    #front = 0;
    #rear = 0;

    constructor(capacity) {
        this.#queue = new Array(capacity);
    }

    get capacity() {
        return this.#queue.length;
    }

    get size() {
        return (this.capacity + this.#rear - this.#front) % this.capacity;
    }

    empty() {
        return this.#rear
    }
}