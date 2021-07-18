/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '') return 0;
  if (needle.length > haystack.length) return -1;

  let index = -1;
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    let match = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack(i + j) !== needle.charCodeAt(j)) {
        match = false;
        break;
      }
    }
    if (match) {
      index = i;
      break;
    }
  }

  return index;
};