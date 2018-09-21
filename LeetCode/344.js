// 编写一个函数，其作用是将输入的字符串反转过来。

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function (s) {
    var sa=s.split('');
    var swap = function (a, b) {
        var stm = a;
        a = b;
        b = stm;
    }
    var n = 0;
    var m = sa.length - 1;
    while (n < m) {
        swap(sa[n], sa[m]);
        n++;
        m--;
    }
    
    return sa.join('');
};
//100ms
var reverseString = function(s) {
    return s.split("").reverse().join("")
};

//76ms
var reverseString = function(s) {
    var strLen = s.length;
    var i = strLen - 1;
    var strArr = [];
    for(;i >= 0; i--) {
        strArr.push(s[i]);
    }
    return strArr.join('');
};

//84ms
var reverseString = function(s) {
    let temp = '';
    for (let i = s.length - 1; i >=0 ; i--) {
      temp += s[i];
    }
  
    return temp;
  };