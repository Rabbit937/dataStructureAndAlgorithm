// 基于数组的stack
class Stack {
    items: number[];
    constructor() {
        this.items = [];
    }

    // 入栈
    push(element: number) {
        this.items.push(element)
    }

    // 出栈
    pop() {
        return this.items.pop();
    }

    // 返回栈顶元素
    peek() {
        return this.items[this.items.length - 1]
    }

    // 检查栈是否为空
    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }

    toString() {
        return this.items.toString()
    }
}

const stack = new Stack();
console.log(stack.isEmpty())

stack.push(5)
stack.push(8)

console.log(stack)
console.log(stack.peek())

stack.push(11)

console.log(stack.size())
console.log(stack.isEmpty())

console.log(stack.toString())

