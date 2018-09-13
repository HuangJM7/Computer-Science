// 二进制求和
// 给定两个二进制字符串，返回他们的和（用二进制表示）。
// 输入为非空字符串且只包含数字 1 和 0。
// 示例 1:
// 输入: a = "11", b = "1"
// 输出: "100"
// 示例 2:
// 输入: a = "1010", b = "1011"
// 输出: "10101"



/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
};
// 在一般情况下， 即a和b的十进制数在 2 ^ {53}
// 以下， 都不会有问题； 但是一旦超过该范围， 就会产生计算失真。

//96ms
var addBinary = function (a, b) {
    var res = [];
    //是否进位
    var addOne = 0;
    //字符串对齐
    while (a.length < b.length) {
        a = "0" + a;
    }
    while (b.length < a.length) {
        b = "0" + b;
    }
    //从低位到高位，依次相加
    for (var i = a.length - 1; i >= 0; i--) {
        var curA = +a.charAt(i);
        var curB = +b.charAt(i);
        var sum = curA + curB + addOne;
        //逢2进位
        if (sum >= 2) {
            res[i] = sum - 2;
            addOne = 1;
        } else {
            res[i] = sum;
            addOne = 0;
        }
    }
    if (addOne > 0) {
        res.unshift(1);
    }
    //一次性拼接
    return res.join("");
};