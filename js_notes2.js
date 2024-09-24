//[...array] 是 JavaScript 中的扩展运算符（spread operator）的应用，用于将一个可迭代对象（通常是数组）展开成新的数组。以下是一些关于如何使用 [...array] 的具体示例和应用场景。

//示例 1：创建数组的浅拷贝
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // 创建一个新数组，包含 originalArray 的所有元素

console.log(copiedArray); // 输出: [1, 2, 3]
console.log(originalArray === copiedArray); // 输出: false，两个数组不相等（不同的引用）

//示例 2：合并数组
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2]; // 合并两个数组

console.log(combinedArray); // 输出: [1, 2, 3, 4, 5, 6]

//示例 3：将字符串转换为字符数组
const text = 'hello';
const charArray = [...text]; // 将字符串转换为数组，包含其字符

console.log(charArray); // 输出: ['h', 'e', 'l', 'l', 'o']

//示例 4：使用在函数参数中
//当你需要将数组元素作为多个参数传递给函数时，扩展运算符非常有用。

const numbers = [1, 2, 3];

// 使用 Math.max 找出数组中的最大值
const maxNumber = Math.max(...numbers);
console.log(maxNumber); // 输出: 3

//示例 5：合并对象
//在对象合并时，虽然 ... 的语法略有不同，但这里也可以介绍一下类似的用法。

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 }; // 合并对象，后面的属性会覆盖前面的属性

console.log(mergedObj); // 输出: { a: 1, b: 3, c: 4 }




