/**
 * @param {number[]} digits
 * @return {number[]}
 */
//80 ms
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++
            break
        } else {
            digits[i] = 0
        }
    }
    if (digits[0] == 0) {
        digits.unshift(1)
    }
    return digits
};

//68ms
var plusOne = function(digits) {
    let l = digits.length
    
    for(let i = l - 1; i >= 0; i--) {
        if(digits[i] < 9) {
           digits[i]++
           return digits
        }
        digits[i] = 0
    }
    
    return [1, ...digits]
};