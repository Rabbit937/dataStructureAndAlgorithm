/**
 * @description 1672. 最富有客户的资产总量
 * @link https://leetcode.cn/problems/richest-customer-wealth/
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let max = 0;
    accounts.forEach((account) => {
        let curSum = account.reduce((pre, cur) => pre + cur, 0)
        max = curSum > max ? curSum : max
    })

    return max;
};