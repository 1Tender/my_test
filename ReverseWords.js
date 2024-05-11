/**
 * 给定字符串 **s**，请翻转字符串中 **单词** 的顺序，
 * 然后依次拼接序号前缀后输出，且只输出字符串长度 ≤ 8 
 * 并且是纯小写字母的单词；
 * 
 * 其中对**单词**的定义是，由连续的纯英文字母组成的字符串；
 *
 * 说明：
 *   1. 字符串 s 中可能包含大小写字母、数字、空格、换行符、特殊符号；
 *   2. 要求实现代码尽可能简洁；
 */

function reverseWords(s) {
    const words = s.toLowerCase().match(/\b[a-z]{1,8}\b/g) || [];//// 将字符串转换为小写，并匹配出单词（长度为1到8的纯小写字母单词）
    if (!words.length) return '';//如果没有匹配到单词，则返回空字符串
    return words.sort().reverse().map((word, i) => `${i + 1}. ${word.padStart(8)}`).join(' ');//// 对单词数组进行排序并翻转顺序，然后将每个单词格式化为序号前缀的形式，并用空格连接起来
}