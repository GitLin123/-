//js队列结构，使用数组模拟
let a = new Array(1,2,3,4);
//在队尾入队
a.push(5);
//在队首出队
let temp = a.shift()//弹出第一个元素，返回它
console.log("弹出的队首元素为",temp);
//在队首入队
a.unshift(6);
console.log("入队后的结果为",a);
//判断队列为空
console.log(a.length===0);
//获取队列大小
console.log(a.length);