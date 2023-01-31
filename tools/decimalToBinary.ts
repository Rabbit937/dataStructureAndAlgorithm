import Stack from "./lib/stack-object";

export const decimalToBinary = (decNumber: number): string => {
    const remStack = new Stack;
    let number = decNumber;
    let rem: number;
    let binaryString = "";

    while (number > 0) {
        rem = Math.floor(number % 2)
        remStack.push(rem)
        number = Math.floor(number / 2)
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}


// test
// console.log(decimalToBinary(2234333))
// console.log(decimalToBinary(111111))
// console.log(decimalToBinary(2234123213333))
// console.log(decimalToBinary(22343213213333))
