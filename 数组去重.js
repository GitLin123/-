//在 JavaScript 中，有多种方法可以实现数组去重（Remove Duplicates）。以下是一些常用的方法，方便你选择适合你需求的方式。

//方法 1：使用 Set
//Set 是 ES6 引入的数据结构，它只能包含唯一值。利用这一特性，可以很方便地去重。

const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(array)];

console.log(uniqueArray); // 输出: [1, 2, 3, 4, 5]

//方法 2：使用 filter 和 indexOf
//可以使用数组的 filter 方法结合 indexOf 来去重。indexOf 返回元素在数组中第一次出现的位置，如果元素的位置与当前索引相同，则该元素应该保留。

const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = array.filter((value, index) => array.indexOf(value) === index);

console.log(uniqueArray); // 输出: [1, 2, 3, 4, 5]

//方法 3：使用 reduce
//reduce 方法能够累计数组元素并生成一个新数组。以下示例利用 reduce 来去重。

const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = array.reduce((accumulator, current) => {
    if (!accumulator.includes(current)) {
        accumulator.push(current);
    }
    return accumulator;
}, []);

console.log(uniqueArray); // 输出: [1, 2, 3, 4, 5]

//方法 4：使用 forEach 和一个临时对象
//可以创建一个临时对象来跟踪已出现的元素，从而进行去重。

const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [];
const seen = {};

array.forEach(item => {
    if (!seen[item]) {
        uniqueArray.push(item);
        seen[item] = true; // 标记为已见
    }
});

console.log(uniqueArray); // 输出: [1, 2, 3, 4, 5]

//方法 5：使用 Map
//如果要保持元素的插入顺序并且去重，可以使用 Map。

const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = Array.from(new Map(array.map(item => [item, item]))).map(([value]) => value);

console.log(uniqueArray); // 输出: [1, 2, 3, 4, 5]