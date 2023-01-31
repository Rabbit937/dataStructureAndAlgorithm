import LinkedListNode from "./LinkedListNode";

export default class LinkedList {
    head: any;
    tail: any;
    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepend(value: any) {
        const newNode = new LinkedListNode(value, this.head);
        console.log(newNode)
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    append(value: any) {
        const newNode = new LinkedListNode(value);

        console.log(newNode)    // LinkedListNode { value: 1, next: null }

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }



    toArray() {
        const nodes: any[] = [];
        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode)
            currentNode = currentNode.next;
        }

        return nodes;
    }

}

const LinkedList2 = new LinkedList();
LinkedList2.append({ value: 1, key: 'test' });
LinkedList2.append(2);
LinkedList2.append(3);
console.log(LinkedList2.toArray())