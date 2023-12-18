function splitNumberAt(index: number, number: number): [number, number] | null {
    if (index >= 0) {
        const divisor = Math.pow(10, index);
        const part1 = Math.floor(number / divisor);
        const part2 = number % divisor;
        return [part1, part2];
    } else {
        // 处理索引小于零的情况
        console.error('索引不能小于零');
        return null;
    }
}

const number = 1234567;
const index = 3;
const result = splitNumberAt(index, number);
if (result !== null) {
    console.log(result); // 输出 [123, 4567]
}
