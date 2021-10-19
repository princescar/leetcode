var WordDictionary = function() {
  this.root = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let node = this.root;
  for (const c of word) {
    if (!node[c])
      node[c] = {};
    node = node[c];
  }
  Object.defineProperty(node, 'isEnd', {
    enumerable: false,
    value: true
  });
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  return search(this.root, 0);

  function search(node, index) {
    for (let i = index; i < word.length; i++) {
      const c = word[i];
      if (c === '.') {
        for (const key of Object.keys(node)) {
          if (search(node[key], i + 1)) return true;
        }
        return false;
      }
      if (!node[c]) return false;
      else node = node[c];
    }
    return !!node.isEnd;
  }
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */