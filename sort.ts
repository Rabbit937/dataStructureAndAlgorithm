interface iFriend {
    name: string;
    age: number;
}

const friends: iFriend[] = [
    {
        name: 'John',
        age: 30,
    },
    {
        name: 'Ana',
        age: 20
    },
    {
        name: 'Chris',
        age: 25
    }
]

function comparePerson(a: iFriend, b: iFriend) {
    if (a.age < b.age) {
        return -1;
    }

    if (a.age > b.age) {
        return 1;
    }

    return 0;
}

console.log(friends.sort(comparePerson))