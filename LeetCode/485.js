// 给定一个二进制数组， 计算其中最大连续1的个数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    var max = 0; 
    var long = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            long++;
        } else {
            max = long;
            long = 0;
        }
    }
    max = Math.max(max, long); //有误差
    return max;
};
//68ms
var findMaxConsecutiveOnes = function(nums) {
    let num = { max:0, other:0 };
    let len = nums.length;
    for(var i = 0; i < len; i++) {
        if(nums[i] === 1) {
            num.other ++
        } else if (nums[i] === 0) {
            num.other = 0
        }
        num.max = Math.max(num.max, num.other)
    }
    return num.max
};
//92ms
var findMaxConsecutiveOnes = function (nums) {
    var max = 0;
    var long = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            long++;
            max = max > long ? max : long;
        } else {
            long = 0;
        }
    }
    return max;
};

//72ms
var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let cur = 0;
    nums.map(function (num) {
        if (num == 1) {
            cur++;
            max = cur > max ? cur : max;
        } else {
            cur = 0;
        }
    });
    return max;
};