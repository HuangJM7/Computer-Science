/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
//1064 ms
var minSubArrayLen = function (s, nums) {
    var sh = nums.length;
    var long = 0;
    var sum = 0;
    var bsum = 0;
    for (let i = 0; i < nums.length; i++) {
        bsum += nums[i];
    }
    if (bsum < s) {
        return 0;
    }
    for (let i = 0; i < nums.length; i++) {
        sum = 0;
        long = 0;
        for (let j = 0; j < nums.length - i; j++) {
            sum += nums[i + j];
            long++;
            if (sum >= s && sh > long) {
                sh = long;
            }
        }
    }
    return sh;
};
//68ms
var minSubArrayLen = function(s, nums) {
    let min = Infinity;
    let sum = nums[0];
    let i = 0, j = 0;
    while(j < nums.length){
        if(sum >= s){
            min = Math.min(min, (j - i + 1));
            sum -= nums[i++];
        }else {
            sum += nums[++j];
        }
    }
    return min === Infinity ? 0 : min;
};

//72ms
let minSubArrayLen = function (s,nums) {
    let res = Infinity;
    let left = 0,right = 0,sum = 0,len = nums.length;
    while (right < len){
        while (right < len && sum < s){
            sum = sum + nums[right];
            right ++;
        }
        while (sum >= s){
            res = Math.min(res,right - left);
            sum = sum - nums[left];
            left ++;
        }
    }
    return res === Infinity ? 0 : res;