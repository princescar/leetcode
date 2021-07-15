/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function (s, p) {
  const cache = [];
  for (let i = 0; i <= s.length; i++) {
    cache[i] = [];
  }

  let DEBUG_PREFIX = '-';

  const result = _isMatch(0, 0);

  console.log(cache);

  return result;

  function _isMatch(si, pi) {
    console.log(`(${si}, ${pi})`);
    console.log(`${DEBUG_PREFIX} ('${s.slice(si)}', '${p.slice(pi)}')`);

    if (si === s.length && pi === p.length) return true;
    if (pi.length >= p.length) return false;

    if (cache[si][pi] != null) {
      console.log('hit');
      return cache[si][pi];
    }

    const r = p[pi];
    const rstar = p[pi + 1] === "*";

    DEBUG_PREFIX += '-';

    let result = false;
    if (rstar && r === ".") {
      result = periodstar();
    } else if (rstar) {
      result = star(r);
    } else if (r === ".") {
      result = period();
    } else {
      result = char(r);
    }
    cache[si][pi] = result;

    DEBUG_PREFIX = DEBUG_PREFIX.split('').slice(1).join('');
    console.log(`${DEBUG_PREFIX} ('${s.slice(si)}', '${p.slice(pi)}') = ${result}`);

    return result;

    function periodstar() {
      if (_isMatch(si, pi + 2)) return true;
      for (let i = si; i < s.length; i++) {
        const match = _isMatch(i + 1, pi + 2);
        if (match) return true;
      }
      return false;
    }

    function star(ch) {
      let i = si
      do {
        const match = _isMatch(i, pi + 2);
        if (match) return true;
      } while(s[i++] === ch)
      return false;
    }

    function period() {
      if (!s[si]) return false;
      return _isMatch(si + 1, pi + 1);
    }

    function char(ch) {
      if (ch !== s[si]) return false;
      return _isMatch(si + 1, pi + 1);
    }
  }
};

console.log(isMatch("mississippi", "mis*is*ip*."));
