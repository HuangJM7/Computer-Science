// 给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 例如(a1, b1),
//  (a2, b2), ..., (an, bn)， 使得从1 到 n 的 min(ai, bi) 总和最大。

/**
 * 思路：
 *    1. 数组排序
 * // 2. 最后一项 与 第一项 组合... 倒数第二项 与 第二项 组合（划掉，这个思路求出的是最小值）
 *    2. 相邻两项的组合最小，也就是：取奇数求和 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = nums => {
    var sum = 0
    nums = nums.sort(asc)
    for (var i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            sum += nums[i]
        }
    }
    return sum
}

/**
 * @func 排序
 * @param {number} a 第一个数
 * @param {number} b 第二个数
 */
function asc (a, b) {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    } else {
        return 0
    }
}


//124ms
var arrayPairSum = function(nums) {
    nums.sort(function(a, b) {return a - b;});
    var sum = 0;
    for(var i = 0; i < nums.length; i+=2) {
        sum += nums[i];
    }
    return sum;
};