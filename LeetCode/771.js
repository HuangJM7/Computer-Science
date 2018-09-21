// 给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 
// S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
// J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，
// 因此"a"和"A"是不同类型的石头。
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
//116 ms
var numJewelsInStones = function (J, S) {
    var result = 0;
    for (let n = 0; n < J.length; n++) {
        for (let m = 0; m < S.length; m++) {
            if (J[n] == S[m]) result++;
        }
    }
    return result;
};

//68 ms
var numJewelsInStones = function (J, S) {
    var result = 0;
    for (let i = 0; i < S.length; i++) {
        if (J.indexOf(S[i]) >= 0) {
            result++;
        }
    }


    return result;
};