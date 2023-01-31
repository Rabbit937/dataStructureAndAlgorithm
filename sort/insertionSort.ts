/**
 * 
 * @param arr number[]
 * @returns insertion sorted array
 */
function insertionSort(arr: number[]) {
    let len = arr.length;
    let preIndex: number, current: number;

    for (let i = 1; i < len; i++) {
        preIndex = i - 1;           // preIndex = 0;    
        current = arr[i];           // current = 3;
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }

    return arr;
}

const arr = [123, 3, 1, 9, 22, 67, 33, 99]
console.time();
console.log(insertionSort(arr));
console.timeEnd();