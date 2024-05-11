/**
 * 给定字符串 s，包含 `{} () []` ，如 `{[()]}`, 请实现一个函数，
 * 判断该字符串是否是正确完整嵌套闭合的。
 * 
 * 1. s 中只会包含上述八种字符；
 * 2. 完整闭合嵌套意思是，每个左括号要对应一个同等位置的右括号，
 *    括号间不考虑层级关系含义
 * 
 * 示例：
 * 有效的字符串：{(([]))}, {{}}
 * 无效的字符串：()(), ([)], (())}
 * 
 */

function isClosedString(s) {
    let stack = [];//创建一个空栈存储左括号
    const pairs = {//定义括号对的匹配规则
        '{': '}',
        '[': ']',
        '(': ')'
    };
    for (let char of s) {
        if (char in pairs) {
            stack.push(char);//入栈左括号
        //如果栈为空或者栈顶的左括号与当前右括号不匹配，则返回 false
        } else if (char === '}' || char === ']' || char === ')') {
            if (stack.length === 0 || pairs[stack.pop()] !== char) {
                return false;
            }
        }
    }
    //// 如果栈为空，则表示字符串中的所有括号都匹配成功，返回 true；否则返回 false
    return stack.length === 0;
}
