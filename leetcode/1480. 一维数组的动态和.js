/**
 * @description 1480. 一维数组的动态和
 * @link https://leetcode.cn/problems/running-sum-of-1d-array/description/
 * @param {number[]} nums 
 * @returns {number[]}
 */
var runningSum = function (nums) {
    const len = nums.length;

    for (let i = 1; i < len; i++) {
        // nums[i] = nums[i] + nums[i - 1];    // 从索引为1开始，当前索引的值加上前一个索引的值等于目标值
        // 简写

        nums[i] += nums[i - 1];
    }

    return nums;
}