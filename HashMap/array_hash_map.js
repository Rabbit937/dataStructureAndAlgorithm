class Entry {
    constructor(key, val) {
        this.key = key;
        this.val = val;
    }
}

// 基于数组简易实现的哈希表
class ArrayHashMap {
    #bucket;
    constructor() {
        this.#bucket = new Array(100).fill(null);
    }

    #hashFunc(key) {
        return key % 100;
    }

    get(key) {
        let index = this.#hashFunc(key);
        let entry = this.#bucket[index];
        if (entry === null) return null;
        return entry.val;
    }

    set(key, val) {
        let index = this.#hashFunc(key)
        this.#bucket[index] = new Entry(key, val)
    }

    delete(key) {
        let index = this.#hashFunc(key)
        this.#bucket[index] = null;
    }

    entries() {
        let arr = []
        for (let i = 0; i < this.#bucket.length; i++) {
            if (this.#bucket[i]) {
                arr.push(this.#bucket[i])
            }
        }

        return arr;
    }

    keys() {
        let arr = []
        for (let i = 0; i < this.#bucket.length; i++) {
            if (this.#bucket[i]) {
                arr.push(this.#bucket[i]?.key)
            }
        }

        return arr;
    }

    values() {
        let arr = []
        for (let i = 0; i < this.#bucket.length; i++) {
            if (this.#bucket[i]) {
                arr.push(this.#bucket[i]?.val)
            }
        }

        return arr;
    }

    print() {
        let entrySet = this.entries();
        for (const entry of entrySet) {
            if (!entry) continue;
            console.log(`${entry.key} -> ${entry.val}`)
        }
    }
}

let map = new ArrayHashMap();
map.set(1202, "你好")
map.set(12533, "你好")
map.set(12321, "你好")
map.set(143122, "你好")
map.set(143124122, "你好")
map.set(14314, "你好")

console.log(map)
console.log(map.entries())
console.log(map.print())