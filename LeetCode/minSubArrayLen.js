/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    var sh = nums.length;
    var long = 0;
    var sum=0;
    for(let i=0;i<nums.length;i++){
        sum=0;
        long=0;
        for(let j=0;j<nums.length;j++){
            sum+=sum[i+j];
            long++;
            if(sum>s&&sh>long){
                sh=long;
            }
        }
    }
    return sh;
};