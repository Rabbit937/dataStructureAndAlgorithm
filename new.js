function _new(constructor, ...rest) {
    // 基于obj的原型创建一个新的对象
    const obj = Object.create(constructor.prototype);

    // 添加属性到新创建的newObj上, 并获取obj函数执行的结果.
    const instance = constructor.call(obj, ...rest);

    // 如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象
    return typeof instance === 'object' ? instance : obj;
}


// function Student(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Student.prototype.getName = function () {
//     return this.name
// }

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name
    }
}


let s = new Student('小明', 18)
console.log(s)
console.log(s.getName())

let s2 = _new(Student, "小红", 29)
console.log(s2)