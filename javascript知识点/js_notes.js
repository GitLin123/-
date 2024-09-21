//将一个数的所有位拆分存到一个数组中去
let b = 121;
let a = b.toString().split('').map(Number);
console.log(a.join(''));
//a.join()方法将数组转化为字符串（参数为转化后的分隔符）， Number用于将字符串转化为数字
//a.reverse()用于逆向一个数组
console.log(Number(a.reverse().join('')) === b);