const array = [2, 3, 4, 4, 5, 6]
console.log("原数组array为",array)
const map2=array.map((item,index,arr)=>{
           console.log("操作的当前元素",item)
           console.log("当前元素下标",index)
           console.log("被操作的元素",arr)
           //对元素乘以2
           return item*2
})
console.log("处理之后先产生的数组map",map2)
// map() 的返回值是一个新的数组，新数组中的元素为 “原数组调用函数处理过后的值”
//类似于python的map,可以对一个数组内所有元素进行批量操作