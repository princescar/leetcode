/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs[0].length === 0) return '';

    for (let i = 0; i < strs[0].length; i++) {
        let same = true;
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== strs[0][i]) {
                same = false;
                break;
            }
        }
        if (!same) {
            return strs[0].slice(0, i);
        }
    }
    
    return strs[0];
};

const result = longestCommonPrefix(["flower","flow","flight"]);

console.log(result);
