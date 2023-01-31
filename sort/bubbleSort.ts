/**
 * 
 * @param number[] 
 * @returns 冒泡排序后的结果
 */
function bubbleSort(arr: number[]): number[] {
    let len = arr.length;

    for (let i = 0; i < len - 1; i++) {     // 控制索引

        for (let j = 0; j < len - 1 - i; j++) {

            if (arr[j] > arr[j + 1]) {       // 判断相邻规则
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]  // 前后交换
            }

        }

    }
    return arr;
}


const arr = [123, 3, 1, 9, 22, 67, 33, 99]

console.time();
console.log(bubbleSort(arr));
console.timeEnd();