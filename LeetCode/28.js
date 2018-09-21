// 实现 strStr() 函数。
// 给定一个 haystack 字符串和一个 needle 字符串，
// 在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。
// 如果不存在，则返回  -1。


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//68ms
var strStr = function(haystack, needle) {
    if(needle.length==0){
        return 0;
    }
    return haystack.indexOf(needle);
};


//68 ms
var strStr = function(haystack, needle) {
    if(needle == "") return 0;
    if(haystack.length < needle.length) return -1;
    for(var i=0;i<haystack.length-needle.length+1;i++){
        if(haystack.substr(i,needle.length)==needle)return i;
    }
   return -1;
};


//76 ms
var strStr = function(haystack, needle) {
    if(needle == "") return 0;
    if(haystack.length < needle.length) return -1;
    for(var i=0;i<haystack.length-needle.length+1;i++){
        if(haystack.substring(i,i+needle.length)==needle)return i;
    }
   return -1;
};