/**
 * @description Selection sort algorithm
 * @param arr number[]
 * @returns selected number[]
 */
function selectionSort(arr: number[]) {
    let len = arr.length;
    let minIndex;

    for (let i = 0; i < len - 1; i++) {
        minIndex = i;

        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {  // 寻找最小的数
                minIndex = j;               // 将最小数的索引保存
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    return arr;
}

const arr2 = [123, 3, 1, 9, 22, 67, 33, 99]

console.time();
console.log(selectionSort(arr2));
console.timeEnd();
