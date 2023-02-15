const map = new Map();

map.set(12836, '小哈')
map.set(15937, '小啰')
map.set(16750, '小算')
map.set(13276, '小法')
map.set(10583, '小鸭')

const name = map.get(15937)
console.log(name)

for (const [key, val] of map.entries()) {
    console.info(`${key} -> ${val}`)
}

for (const key of map.keys()) {
    console.info(key)
}

