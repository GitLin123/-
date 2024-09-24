//字母异位分组
//我的思路
//思路，第一个元素第一个字母开始查询每个元素是否有该字母，分组
//对第一个元素第二个字母查询，继续分组。。
//对已经分组的元素记录，知道分组所有元素
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function(strs) {
//     mir=[]
//     for(let str of strs) {
//         str = str.split('').sort().join('')
//         mir.push(str)
//     }
//     let tem=[]
//     let res=[]
//     let flag=0
//     for(let k=0;k<strs.length;k++) {
//         if(mir[k]==-1){continue}
//         else{
//             if(!flag){flag=mir[k];tem.push(strs[k]);mir[k]=-1}
//             for(let i=0;i<strs.length;i++){
//                 if(mir[i]==flag){
//                     tem.push(strs[i]);
//                     mir[i]=-1
//                 }
//             }
//             res.push(tem);tem=[];flag=0
//         }
//     }
//     return res
// };
// console.log(groupAnagrams(["",""]))

//题解
//--------------------------------------
var groupAnagrams = function(strs) {
    const map = new Map();
    for (let str of strs) {
        let array = Array.from(str);//将每个字符串转为字符数组
        array.sort();//按字符的字典序排序
        let key = array.toString();//转换后的array作为map的key
        let list = map.get(key) ? map.get(key) : new Array();//在现有map中找有没有对应的key，有，扩充集合
                                                                //没有，新建集合
        list.push(str);
        map.set(key, list);
    }
    return Array.from(map.values());//最后返回集合结果
};
groupAnagrams(["ezs","edr","dew"])