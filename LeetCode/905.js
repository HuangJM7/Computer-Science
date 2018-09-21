/**
 * @param {number[]} A
 * @return {number[]}
 */
//100ms
var sortArrayByParity = function (A) {
    var n = 0;
    var tmp = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 == 0) {
            tmp = A[n];
            A[n] = A[i];
            A[i] = tmp;
            n++;
        }
    }
    return A;
};

//80ms
var sortArrayByParity = function (A) {
    let result = [];
    for (let i = 0, len = A.length; i < len; i++) {
        if (A[i] % 2 == 0)
            result.unshift(A[i]);
        else
            result.push(A[i]);
    }
    return result;
};