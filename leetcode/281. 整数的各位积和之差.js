/**
 * @description 1281. 整数的各位积和之差
 * @link https://leetcode.cn/problems/subtract-the-product-and-sum-of-digits-of-an-integer/description/?envType=study-plan-v2&envId=primers-list
 * @param {number} n
 * @return {number}
 */

var subtractProductAndSum = function (n) {

    let sum = 0;
    let multiply = 1;


    while (n != 0) {
        sum += n % 10
        multiply *= n % 10;
        n = Math.floor(n / 10)
    }


    return multiply - sum;

};

console.log(subtractProductAndSum(234))