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