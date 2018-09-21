/**830. 较大分组的位置
 * @param {string} S
 * @return {number[][]}
 */
//92ms
var largeGroupPositions = function (S) {
    var result = [];
    var n = 0,
        m = 0,
        index = 0;
    while (m < S.length) {
        while (m < S.length && S[n] == S[m]) {
            ++m;
        }
        if (m - n >= 3) {
            result[index] = [n, m - 1];
            index++;
        }
        n = m;
    }
    return result;
};