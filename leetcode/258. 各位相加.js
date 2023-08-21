/**
 * @description 求树根
 * @link https://leetcode.cn/problems/add-digits/description/?envType=study-plan-v2&envId=primers-list
 * @param {number} num
 * @return {number}
 */

const addDigits = function (num) {
    while (num >= 10) {
        let sum = 0;

        while (num != 0) {
            sum += num % 10
            num = Math.floor(num / 10)
        }
        num = sum;
    }

    return num;
};

console.log(addDigits(10))

// 使用数学公式之后的求法
const addDigits2 = function (num) {
    return (num - 1) % 9 + 1
};
