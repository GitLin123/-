function quickSort(arr,left,right) {
    //特判
    if(arr.length == 1) {
        return;
    }
    //定义轴量
    const flag = arr[left];
    //进入快排
    while(left != right) {
        while(right >= flag) {
            right--;
            if(left==right) return;
        }
        arr[left] = arr[right];
        left++
        if(left==right) return;
        while(left <= flag) {
            left++;
            if(left==right) return;
        }
        arr[right] = arr[left];
        right--
    }
    arr[left] = flag;
    
    //进入递归
    quickSort(arr,0,right - 1);
    quickSort(arr,left + 1,arr.length - 1)
}

//双指针left and right
//轴量 一次排序完成后将其放到left和right相等的下标处
//left初始化为轴量位置，right初始化为元素末尾，刚开始right开始移动，将元素与轴量比较
//小 -> 放到left位置 left移动位置，大 -> 移动到下一元素
//left移动后，开始判断left侧得元素，与right相类似，比较符号相反
//以轴量为界，分治，递归调用快排
let a =  [2,3,1,4,6,2,9]
quickSort(a,0,6)
console.log(a)