let map = new Map();
// //向 Map 对象中添加键值对
// map.set(key, value);
map.set(1, 'one');
map.set(2, 'two');
map.set(true, 'true');
// //从 Map 对象中获取值
// let value = map.get(key);
// console.log(map.get(1)); // 输出: one
// //检查 Map 对象中是否存在某个键
// let exists = map.has(key);
// //删除 Map 对象中的键值对
// map.delete(key);
// //例如：
// map.delete(2);
// //获取 Map 对象的大小
let size = map.size;
console.log(map.size); // 输出: 2
//遍历 Map 对象
//使用 for...of 循环：
for (let [key, value] of map) {
    console.log(key, value);
}
//使用 keys() 方法：
for (let key of map.keys()) {
    console.log(key);
}
//使用 values() 方法：
for (let value of map.values()) {
    console.log(value);
}
//使用 entries() 方法：
for (let [key, value] of map.entries()) {
    console.log(key, value);
}