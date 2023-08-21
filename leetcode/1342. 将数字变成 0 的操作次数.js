/**
 * @description 1342. 将数字变成 0 的操作次数
 * @link https://leetcode.cn/problems/number-of-steps-to-reduce-a-number-to-zero/
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {

    let flag = 0;

    while (num !== 0) {
        if ((num % 2) === 0) {
            num = num / 2;
        } else {
            num = num - 1;
        }
        flag++;
    }

    return flag

};

console.log(numberOfSteps(0))