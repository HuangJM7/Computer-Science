/**
 * @param {number[]} nums
 * @return {number}
 */
//68 ms
var dominantIndex = function (nums) {
    var fbi = 0;
    var sbi = 0;
    var fb = 0;
    var sb = 0;
    if (nums.length == 1) {
        return 0;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > fb) {
            fb = nums[i];
            fbi = i;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (i == fbi) {
            continue;
        }
        if (fb < nums[i] * 2) {
            return -1;
        }
    }
    return fbi;
};


// 56 ms
var dominantIndex = function(nums) {
    if (nums.length < 2) {
        return 0;
    }
    let index = 0;
    let maxNum = 0;
    let secondNum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxNum) {
            index = i;
            secondNum = maxNum;
            maxNum = nums[i];
        }
        else if (nums[i] > secondNum) {
            secondNum = nums[i];
        }
    }
    if (secondNum == 0 || maxNum / secondNum >= 2) {
        return index;
    }
    return -1;
};