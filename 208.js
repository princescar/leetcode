var TrieNode = function(val, isEnd = false) {
  this.val = val;
  this.isEnd = isEnd;
  this.links = [];
}

/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.root = new TrieNode();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let i = 0, node = this.root;
  while (i < word.length) {
    const next = node.links[word[i]];
    if (!next) break;
    node = next;
    i++;
  }
  for (let j = i; j < word.length; j++) {
    const next = new TrieNode(word[j]);
    node.links[word[j]] = next;
    node = next;
  }
  node.isEnd = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    const next = node.links[word[i]];
    if (!next) return false;
    node = next;
  }
  return node.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.root;
  for (let i = 0; i < prefix.length; i++) {
    const next = node.links[prefix[i]];
    if (!next) return false;
    node = next;
  }
  return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */