
/**
 * @description 随即返回一个数组元素
 * @param {目标数组} nums 
 */
function randomAccess(nums) {
    // 在区间[0,nums.length)中随机抽取一个数字
    const random_index = Math.floor(Math.random() * nums.length);

    const random_num = nums[random_index]
    return random_num;
}

