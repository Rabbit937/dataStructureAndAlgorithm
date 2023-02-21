
// 双闭区间
function binarySearch(nums, target) {
    let i = 0, j = nums.length - 1;

    while (i <= j) {
        let m = parseInt((i + j) / 2)
        if (nums[m] < target) {
            i = m + 1;
        } else if (nums[m] > target) {
            j = m - 1;
        } else {
            return m;
        }
    }

    return -1;
}


// 左闭右开
function binarySearch1(nums, target) {
    let i = 0, j = nums.length;
    while (i < j) {
        let m = parseInt((i + j) / 2)
        if (nums[m] < target) {
            i = m + 1;
        } else if (nums[m] > target) {
            j = m;
        } else {
            return m;
        }
    }

    return -1;
}



let nums = Array.from(new Set(new Array(100).fill(0).map(() => Math.floor(Math.random() * 100) + 1))).sort((a, b) => a - b)
console.log(nums)
console.log(binarySearch(nums, 17))