/**
 * @description 两数之和
 */

const nums = [3, 2, 4];
const target = 6;

function twoSum(nums: number[], target: number): number[] {
    let len = nums.length;
    let hash = new Map();

    for (let i = 0; i < len; i++) {

        if (hash.get(target - nums[i]) !== undefined) {
            return [i, hash.get(target - nums[i])]
        }

        hash.set(nums[i], i);
    }


    return []
}

console.log(twoSum(nums, target))