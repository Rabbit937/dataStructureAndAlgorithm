/**
 * @description 231. 2 的幂
 * @link https://leetcode.cn/problems/power-of-two/description/?envType=study-plan-v2&envId=primers-list
 * @param {number} n
 * @return {boolean}
 */

// 位运算
var isPowerOfTwo = function (n) {
    return n > 0 && (n & (n - 1)) === 0;
};


// 暴力
var isPowerOfTwo = function (n) {
    while (n && n % 2 == 0) {
        n /= 2;
    }
    return n == 1;
};