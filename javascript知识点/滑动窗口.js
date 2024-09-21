//找一个字符串无重复字符的最长子串
//滑动窗口
function lengthOfLongestSubstring(s) {
    let n = s.length;
    let left = 0; // 左指针
    let right = 0; // 右指针
    let maxLength = 0; // 最长子串长度
    let charSet = new Set(); // 存储当前窗口的字符，

    while (right < n) {
        // 如果字符不在集合中，则加入集合
        if (!charSet.has(s[right])) {
            charSet.add(s[right]);
            maxLength = Math.max(maxLength, right - left + 1); // 更新最长长度
            right++; // 右指针向右移动
        } else {
            // 如果字符在集合中，移动左指针，直到移除重复字符
            charSet.delete(s[left]);
            left++;
        }
    }

    return maxLength;
}
/*
示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
*/
// 示例测试
console.log(lengthOfLongestSubstring("abcabcbb")); // 输出: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // 输出: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // 输出: 3
