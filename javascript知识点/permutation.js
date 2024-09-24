//实现一个数组元素的全排列的函数(不含重复的组合)
function permutation(arr){
        let len = arr.length
        let res = new Array() // 所有排列结果
        let arrange = (tempArr, leftArr) => {
          if (tempArr.length === len) { // 这里就是递归结束的地方
            res.push(tempArr) // 得到全排列的每个元素都是数组
             // 得到全排列的每个元素都是字符串
          } else {
            leftArr.forEach((item, index) => {
              let temp = [].concat(leftArr)
              temp.splice(index, 1)
              // 此时，第一个参数是当前分离出的元素所在数组；第二个参数temp是传入的leftArr去掉第一个后的结果
              arrange(tempArr.concat(item), temp) // 这里使用了递归
            })
          }
        }
        arrange([], arr)
        return res
      }
      console.log('结果：', permutation([1,1,2]))
