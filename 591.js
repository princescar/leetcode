/**
 * @param {string} code
 * @return {boolean}
 */
var isValid = function(code) {
  const tagStack = [];
  return start(0) && tagStack.length === 0;

  function start(i) {
    if (code[i] !== '<') return false;
    return tagOpen(i + 1);
  }

  function end(i) {
    return i === code.length;
  }

  function tagHub(i) {
    if (isUpperCaseLetter(i)) return tagOpen(i);
    if (code[i] === '/') return tagClose(i + 1);
    const CS = '![CDATA[';
    if (code.substring(i, i + CS.length) === CS) return cdata(i + CS.length);
    return false;
  }

  function tagOpen(i) {
    let j = i;
    while (isUpperCaseLetter(j)) j++;
    if (j < code.length && code[j] !== '>') return false;
    const name = code.substring(i, j);
    if (name.length < 1 || name.length > 9) return false;
    tagStack.push(name);
    return content(j + 1);
  }

  function tagClose(i) {
    if (tagStack.length === 0) return false;
    let j = i;
    while (j < code.length && isUpperCaseLetter(j)) j++;
    if (code[j] !== '>') return false;
    const name = code.substring(i, j);
    if (name !== tagStack.pop()) return false;
    if (tagStack.length === 0) return end(j + 1);
    return content(j + 1);
  }

  function content(i) {
    while (i < code.length && code[i] !== '<') i++;
    if (code[i] === '<') return tagHub(i + 1);
    return true;
  }

  function cdata(i) {
    const CC = ']]>';
    const j = code.indexOf(CC, i);
    if (j < 0) return false;
    return content(j + CC.length);
  }

  function isUpperCaseLetter(i) {
    return /[A-Z]/.test(code[i]);
  }
};
