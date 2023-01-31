export default class LinkedListNode {
    value: any;
    next: any;
    constructor(value: any, next: any = null) {
        this.value = value;
        this.next = next;
    }

    toString(callback?: Function) {
        return callback ? callback(this.value) : `${this.value}`
    }
}

 