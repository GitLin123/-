def generateParenthesis(n: int) -> list[str]:
    if n == 0:# 特判:如果n等于0直接返回结果
        return ['']
    ans = []
    for c in range(n):
        for left in generateParenthesis(c):
            for right in generateParenthesis(n-1-c):
                ans.append('({}){}'.format(left, right))
    return ans
print(generateParenthesis(6))