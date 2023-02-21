
/**
 * @description 随即返回一个数组元素
 * @param {目标数组} nums 
 * @creat
 */
function randomAccess(nums) {
    // 在区间[0,nums.length)中随机抽取一个数字
    const random_index = Math.floor(Math.random() * nums.length);

    const random_num = nums[random_index]
    return random_num;
}


/**
 * @description 扩展数组长度，JavaScript的数组会自动扩容
 * @param {目标数组} nums Array
 * @param {扩容参数} enlarge Number
 * @returns 扩容之后的数组
 */
function extend(nums, enlarge) {
    const res = new Array(nums.length + enlarge).fill(0);

    for (let i = 0; i < nums.length; i++) {
        res[i] = nums[i]
    }

    return res;
}

/**
 * 
 * @param {目标数组} nums 
 * @param {被插入的元素} num 
 * @param {插入的位置，及索引} index 
 */
function insert(nums, num, index) {
    for (let i = nums.length; i > index; i--) {
        nums[i] = nums[i - 1];
    }

    nums[index] = num;
}


function remove(nums, index) {
    for (let i = index; i < nums.length; i++) {
        nums[i] = nums[i + 1];
    }
}



let target = [1, 2, 3, 4, 5, 6, 7, 8, 9]
insert(target, 10, 4)
console.log(target)

remove(target, 5);
console.log(target)

