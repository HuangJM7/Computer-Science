// 寻找数组的中心索引
// 给定一个整数类型的数组 nums，请编写一个能够返回数组“中心索引”的方法。
// 我们是这样定义数组中心索引的：数组中心索引的左侧所有元素
// 相加的和等于右侧所有元素相加的和。
// 如果数组不存在中心索引，那么我们应该返回 -1。
// 如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。

// 示例 1:
// 输入: 
// nums = [1, 7, 3, 6, 5, 6]
// 输出: 3
// 解释: 
// 索引3 (nums[3] = 6) 的左侧数之和(1 + 7 + 3 = 11)，与右侧数之和(5 + 6 = 11)相等。
// 同时, 3 也是第一个符合要求的中心索引。


/**
 * @param {number[]} nums
 * @return {number}
 */


 var pivotIndex = function (nums) {
    if (nums.length == 1) {
        return 0;
    }

    for (var i = 0; i < nums.length; i++) {
        var sumL=0;
        var sumR=0;
        for (var j = 0; j < i; j++) {
            sumL += nums[j];
        }
        for (var j = nums.length - 1; j > i; j--) {
            sumR += nums[j];
        }
        if(sumL==sumR){
           return i;
        }
    }

    return -1;
};

//112 ms
var pivotIndex = function(nums) {
    const len = nums.length;
    if(len < 3){
        return -1;
    }
    let left=0;
    let right=0;
    for(let i=1;i<len;i++){
        right += nums[i];
    }
    for(let i=0;i<len-1;i++){
        if(left == right){
            return i;
        }else{
            left += nums[i];
            
            right -= nums[i+1];
        }
    }
    if(left == right){
        return len-1;
    }
    return -1;
};

// 80 ms 
var pivotIndex = function(nums) {
    let total = 0
    for(let i = 0, len = nums.length; i < len; i++) {
        total += nums[i]
    }
    
    let leftS = 0
    for(let i = 0, len = nums.length; i < len; i++) {
        if(total - leftS - nums[i] === leftS) {
            return i
        }
        leftS += nums[i]
        
    }
    return -1
};