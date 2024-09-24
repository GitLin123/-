//数组全排列
// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
var list = []
var tem = new Array()
var flag = new Array(8).fill(0)
function dfs(nums){
    if(list.length==nums.length){
       if(tem.map(x=>{
        return x.toString()
       }).indexOf(list.toString())!=-1)return
        tem.push(Array.from(list))
        return
    }
    for(let i=0;i<nums.length;i++) {
        if(flag[i]==0){
            list.push(nums[i])
            flag[i]=1
            dfs(nums)
            list.pop()
            flag[i]=0
        }
    }
}
var permute = function(nums) {
    dfs(nums)
    let u =Array.from(tem)
    tem=[]
    return u
};
console.log(permute([-1,2,-1,2,1,-1,2,1]))
