/**
 * @description 326. 3 的幂
 * @link https://leetcode.cn/problems/power-of-three/description/?envType=study-plan-v2&envId=primers-list
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfThree = function (n) {
    while (n && n % 2 == 0) {
        n /= 2;
    }

    return n == 1;
};