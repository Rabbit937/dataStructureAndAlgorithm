class ArrayQueue {
    #nums;  // 用于存储队列元素的数组
    #front = 0; // 队首指针，指向队首元素
    #queSize = 0;   // 队列长度

    constructor(capacity) {
        this.#nums = new Array(capacity);
    }

    get capacity() {
        return this.#nums.length;
    }

    get size() {
        return this.#queSize;
    }

    isEmpty() {
        return this.#queSize === 0;
    }

    // 入队
    push(num) {
        if (this.size === this.capacity) {
            console.log("队列已满")
            return;
        }

        const rear = (this.#front + this.size) % this.capacity;
        this.#nums[rear] = num;
        this.#queSize++;
    }

    // 出队
    poll() {
        const num = this.peek();
        this.#front = (this.#front + 1) % this.capacity;
        this.#queSize--;
        return num;
    }

    // 访问首元素
    peek() {
        if (this.isEmpty()) {
            throw new Error("队列为空")
        }

        return this.#nums[this.#front];
    }

    toArray() {
        const arr = new Array(this.size);
        for (let i = 0, j = this.#front; i < this.size; i++, j++) {
            arr[i] = this.#nums[j % this.capacity];
        }
        return arr;
    }
}

const queue = new ArrayQueue(5);
queue.push(1)
queue.push(2)
queue.push(3)
queue.push(4)
queue.push(5)
console.log(queue.poll())

console.log(queue.toArray())