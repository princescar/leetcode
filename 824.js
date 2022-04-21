/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
  return sentence.split(' ').map((x, i) => {
    let word = x;
    if (!'aeiou'.includes(x[0].toLowerCase()))
      word = x.substring(1) + x[0];
    word += 'ma';
    word += 'a'.repeat(i + 1);
    return word;
  }).join(' ');
};
