class ArrayStack {
    stack;
    constructor() {
        this.stack = [];
    }

    get size() {
        return this.stack.length;
    }

    empty() {
        return this.stack.length === 0;
    }

    push(num) {
        this.stack.push(num)
    }

    pop() {
        if (this.empty()) {
            throw new Error("栈为空!")
        }

        return this.stack.pop();
    }

    top() {
        if (this.empty()) {
            throw new Error("栈为空!")
        }
        return this.stack[this.stack.length - 1]
    }
}