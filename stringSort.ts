let names = ['Ana', 'ana', 'john', 'John']

console.log(names.sort())

const compareString = (a: string, b: string): number => {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    }
    return 0;
}

console.log(names.sort(compareString))

console.log(names.sort((a, b) => a.localeCompare(b)))