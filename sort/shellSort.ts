/**
 * @param arr number[]
 * 
 */
function shellSort(arr: number[]) {
    let len = arr.length, temp: number, gap = 1;

    while (gap < len / 3) {
        gap = gap * 3 + 1;
    }


    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
        for (let i = gap; i < len; i++) {
            temp = arr[i];

            for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j];
            }

            arr[j + gap] = temp;
        }

    }

    return arr;

}

const arr2 = [123, 3, 1, 9, 22, 67, 33, 99]

console.time();
console.log(shellSort(arr2));
console.timeEnd();