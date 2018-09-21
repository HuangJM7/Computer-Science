// 移除元素
// 给定一个数组 nums 和一个值 val，你需要原地移
// 除所有数值等于 val 的元素，返回移除后数组的新长度。
// 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1)
// 额外空间的条件下完成。
// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
//84ms
var removeElement = function (nums, val) {

    var j = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[j] = nums[i];
            j++
        }

    }
    return j;
};

//56ms
var removeElement = function (nums, val) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] == val) {
            nums.splice(i, 1);
        }
    }
    return nums.length;
};

//52ms
const removeElement = function (nums, val) {
    const len = nums.length;
    if (!len) return 0;
    for (let i = 0; i < len;) {
        if (val === nums[i]) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
    return nums.length;
}