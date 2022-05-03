/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  const letterLogs = new Map();
  const digitLogs = [];
  for (const log of logs) {
    const index = log.indexOf(' ');
    const id = log.substring(0, index);
    const content = log.substring(index + 1);
    const isDigit = /[0-9]/.test(content[0]);
    if (isDigit) {
      digitLogs.push(log);
    } else {
      if (letterLogs.has(content)) letterLogs.get(content).push(id);
      else letterLogs.set(content, [id]);
    }
  }
  const ans = [];
  const contents = [...letterLogs.keys()].sort();
  for (const content of contents) {
    const ids = letterLogs.get(content).sort();
    for (const id of ids) ans.push(`${id} ${content}`);
  }
  ans.push(...digitLogs);
  return ans;
};
