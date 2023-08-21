/**
 * @description 1534. 统计好三元组
 * @link https://leetcode.cn/problems/count-good-triplets/description/?envType=study-plan-v2&envId=primers-list
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
    let n = arr.length, cnt = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
                    ++cnt
                }
            }
        }
    }

    return cnt;
};