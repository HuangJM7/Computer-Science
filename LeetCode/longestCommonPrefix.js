// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。
// 示例 1:
// 输入: ["flower","flow","flight"]
// 输出: "fl"


/**
 * @param {string[]} strs
 * @return {string}
 */


var longestCommonPrefix = function (strs) {
    if(strs=="") return "";
    if(strs.length==1){
        return strs[0];
    }
    var same=true;
    for(let i=0;i<strs.length;i++){
        if(strs[i]!==strs[0]){
            same=false;
            break;
        }
    }
    if(same){
        return strs[0];
    }
    var li=0;
    var l =0;
    for(let i=0;i<strs.length;i++){
        if(strs[i].length>l){
            l=strs[i].length;
            li=i;
        }
    }

    for(var i=0;i<strs[li].length;i++){
        for(var j=1;j<strs.length;j++){
            if(strs[j][i]!=strs[li][i]){
                return strs[li].substr(0,i);
            }
        }
    }
    return "";
};

