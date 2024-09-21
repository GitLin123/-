//使用数组模拟栈结构
let a = new Array(1,2,3,4);
a.push(5)//尾部添加元素,入栈操作
console.log(a);
console.log(a[a.length-1])//获取栈顶元素
let tmp = a.pop()//弹出顶部元素，并返回它
console.log(tmp);
console.log(a);

